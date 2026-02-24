/**
 * Import vault institutions from your spreadsheets.
 * Run: npm run vault:import
 *
 * Uses every sheet in:
 * - "Copyyyyy of Main Copy of Business Credit Card Banks and Credit Union by State .xlsx"
 *   (all state sheets, Banks with Multiple Locations, List of Banks and Institutions,
 *    CHECK THESE BANKS, RMs By State, and every cell in bureau columns)
 * - "Lender Criteria .xlsx" (all sheets)
 */
import "dotenv/config";
import * as XLSX from "xlsx";
import { prisma } from "../lib/db";

const BUREAU_MAP: Record<string, string> = {
  transunion: "transunion",
  tu: "transunion",
  equifax: "equifax",
  eq: "equifax",
  experian: "experian",
  ex: "experian",
};

// All sheet names that are US states (or common variants) for setting state on rows
const STATE_SHEET_NAMES = new Set(
  [
    "alabama", "alaska", "arizona", "arkansas", "california", "colorado", "connecticut",
    "delaware", "florida", "georgia", "hawaii", "idaho", "illinois", "indiana", "iowa",
    "kansas", "kentucky", "louisiana", "maine", "maryland", "massachusetts", "michigan",
    "minnesota", "mississippi", "missouri", "montana", "nebraska", "nevada", "new hampshire",
    "new jersey", "new mexico", "new york", "north carolina", "north dakota", "ohio",
    "oklahoma", "oregon", "pennsylvania", "pennslyvania", "rhode island", "south carolina",
    "south dakota", "tennessee", "texas", "utah", "vermont", "virginia", "washington",
    "west virginia", "wisconsin", "wyoming", "district of columbia", "dc",
  ].map((s) => s.toLowerCase())
);

function normalizeBureau(val: unknown): string {
  if (val == null || String(val).trim() === "") return "unknown";
  const key = String(val).trim().toLowerCase();
  for (const [k, v] of Object.entries(BUREAU_MAP)) {
    if (key.includes(k)) return v;
  }
  return "unknown";
}

function asString(val: unknown): string {
  if (val == null) return "";
  return String(val).trim();
}

function buildNotes(parts: (string | undefined)[]): string {
  return parts.filter(Boolean).join(" · ");
}

type InstitutionRow = {
  name: string;
  type: string;
  primaryBureau: string;
  bureausPulled: string;
  products: string;
  approvalFactors: string;
  notes: string;
  sourceLinks: string;
  tags: string;
  state: string | null;
};

function defaultInstitution(name: string, overrides: Partial<InstitutionRow> = {}): InstitutionRow {
  return {
    name,
    type: "bank",
    primaryBureau: "unknown",
    bureausPulled: "[]",
    products: "[]",
    approvalFactors: "[]",
    notes: "",
    sourceLinks: "[]",
    tags: JSON.stringify(["bank"]),
    state: null,
    ...overrides,
  };
}

/** Find column key that holds bank/institution name (case-insensitive, trim). */
function findBankNameKey(keys: string[]): string | null {
  const normalized = keys.map((k) => k.trim().toLowerCase());
  const prefer = ["bank name", "name of bank", "name of bank"];
  for (const p of prefer) {
    const i = normalized.findIndex((n) => n === p || n.replace(/\s+/g, " ") === p);
    if (i >= 0) return keys[i]!;
  }
  const withBank = keys.find((k, i) => {
    const n = normalized[i]!;
    return n.includes("bank") && n.includes("name");
  });
  return withBank ?? null;
}

function isStateSheet(sheetName: string): boolean {
  return STATE_SHEET_NAMES.has(sheetName.trim().toLowerCase().replace(/\s+/g, " "));
}

async function main() {
  const fs = await import("fs");
  const path = await import("path");

  const root = path.join(process.cwd());
  const bigFile = path.join(root, "Copyyyyy of Main Copy of Business Credit Card Banks and Credit Union by State .xlsx");
  const lenderFile = path.join(root, "Lender Criteria .xlsx");

  if (!fs.existsSync(bigFile)) {
    console.error("Missing file:", bigFile);
    process.exit(1);
  }

  const byName = new Map<string, InstitutionRow>();
  const wb = XLSX.readFile(bigFile);

  // ---- 1) List of Banks and Institutions: every cell in bureau columns ----
  const listSheet = "List of Banks and Institutions";
  if (wb.SheetNames.includes(listSheet)) {
    const listSh = wb.Sheets[listSheet];
    const listRows = XLSX.utils.sheet_to_json<Record<string, unknown>>(listSh, { defval: "" });
    const bureauCols = ["Experian", "Transunion", "Equifax", "Revenue Based", "Soft Pull"];
    for (const row of listRows) {
      for (const col of bureauCols) {
        const val = asString(row[col]);
        if (!val || val.length < 2) continue;
        const name = val.replace(/:$/, "").replace(/\s*\(See.*\)$/i, "").trim();
        if (name.length < 2) continue;
        const primaryBureau = col === "Experian" ? "experian" : col === "Equifax" ? "equifax" : col === "Transunion" ? "transunion" : "unknown";
        const bureausPulled = primaryBureau !== "unknown" ? JSON.stringify([primaryBureau]) : "[]";
        if (!byName.has(name)) {
          byName.set(name, defaultInstitution(name, {
            primaryBureau,
            bureausPulled,
            notes: `Listed under ${col}.`,
            tags: JSON.stringify(["business card"]),
          }));
        }
      }
    }
  }

  // ---- 2) CHECK THESE BANKS ----
  const checkSheet = "CHECK THESE BANKS";
  if (wb.SheetNames.includes(checkSheet)) {
    const sh = wb.Sheets[checkSheet];
    const checkRows = XLSX.utils.sheet_to_json<Record<string, unknown>>(sh, { defval: "" });
    for (const row of checkRows) {
      const name = asString(row["NAME OF BANK"] ?? row["Bank Name"]);
      if (!name || name.length < 2) continue;
      const state = asString(row["STATE OF BANK"] ?? "");
      const link = asString(row["LINK TO BANK"] ?? "");
      const notes = [state && `State: ${state}`, link && `Link: ${link}`].filter(Boolean).join(" · ");
      const existing = byName.get(name);
      if (existing) {
        existing.notes = [existing.notes, notes].filter(Boolean).join("\n\n").slice(0, 2000);
        if (state) existing.state = state;
      } else {
        byName.set(name, defaultInstitution(name, {
          notes: notes || "Bank (check these).",
          state: state || null,
        }));
      }
    }
  }

  // ---- 3) Banks with Multiple Locations ----
  const multiSheet = "Banks with Multiple Locations";
  if (wb.SheetNames.includes(multiSheet)) {
    const sheet = wb.Sheets[multiSheet];
    const rows = XLSX.utils.sheet_to_json<Record<string, unknown>>(sheet, { defval: "" });
    for (const row of rows) {
      const name = asString(row["Bank Name"] ?? row["NAME OF BANK"]);
      if (!name || name.length < 2) continue;
      const bureauRaw = asString(row["Which Bureau Pull From?"] ?? row["Which Bureau?"] ?? "");
      const primaryBureau = normalizeBureau(bureauRaw);
      const bureausPulled = primaryBureau !== "unknown" ? JSON.stringify([primaryBureau]) : "[]";
      const bizCard = asString(row["Business Credit Card?"] ?? "");
      const underwriter = asString(row["Underwriter?"] ?? "");
      const geoLocked = asString(row["Geo-Locked?"] ?? "");
      const statements = asString(row["Statements Required?"] ?? "");
      const applyOnline = asString(row["Apply Online?"] ?? "");
      const notes = buildNotes([
        bizCard && `Business card: ${bizCard}`,
        underwriter && `Underwriter: ${underwriter}`,
        geoLocked && `Geo-locked: ${geoLocked}`,
        statements && `Statements: ${statements}`,
        applyOnline && `Apply online: ${applyOnline}`,
      ]);
      byName.set(name, defaultInstitution(name, {
        primaryBureau,
        bureausPulled,
        notes: notes || "Business credit / funding.",
        tags: JSON.stringify(["business card", "banks"]),
      }));
    }
  }

  // ---- 4) Every other sheet: find Bank Name / Name of Bank column and ingest each row ----
  const processedSheets = new Set([listSheet, checkSheet, multiSheet]);
  for (const sheetName of wb.SheetNames) {
    if (processedSheets.has(sheetName)) continue;
    const sh = wb.Sheets[sheetName];
    const rows = XLSX.utils.sheet_to_json<Record<string, unknown>>(sh, { defval: "" });
    if (rows.length === 0) continue;
    const keys = Object.keys(rows[0] ?? {});
    const bankNameKey = findBankNameKey(keys);
    if (!bankNameKey) continue;

    const stateFromSheet = isStateSheet(sheetName) ? sheetName.trim() : null;
    for (const row of rows) {
      const name = asString(row[bankNameKey]);
      if (!name || name.length < 2) continue;
      // Skip header-like values
      if (name.toLowerCase() === "bank name" || name.toLowerCase() === "name of bank") continue;

      const bureauRaw = asString(row["Which Bureau Pull From?"] ?? row["Which Bureau?"] ?? "");
      const primaryBureau = normalizeBureau(bureauRaw);
      const bureausPulled = primaryBureau !== "unknown" ? JSON.stringify([primaryBureau]) : "[]";
      const bizCard = asString(row["Business Credit Card?"] ?? "");
      const underwriter = asString(row["Underwriter?"] ?? "");
      const geoLocked = asString(row["Geo-Locked?"] ?? "");
      const statements = asString(row["Statements Required?"] ?? "");
      const applyOnline = asString(row["Apply Online?"] ?? row["Aply Online?"] ?? "");
      const notes = buildNotes([
        bizCard && `Business card: ${bizCard}`,
        underwriter && `Underwriter: ${underwriter}`,
        geoLocked && `Geo-locked: ${geoLocked}`,
        statements && `Statements: ${statements}`,
        applyOnline && `Apply online: ${applyOnline}`,
      ]);

      const stateFromRow = asString(row["STATE OF BANK"] ?? row["State Located"] ?? row["State"] ?? "");
      const state = stateFromRow || stateFromSheet;

      const existing = byName.get(name);
      if (existing) {
        existing.notes = [existing.notes, notes].filter(Boolean).join("\n\n").slice(0, 2000);
        if (state && !existing.state) existing.state = state;
      } else {
        byName.set(name, defaultInstitution(name, {
          primaryBureau,
          bureausPulled,
          notes: notes || "Business credit / funding.",
          tags: JSON.stringify(["business card", "banks"]),
          state: state || null,
        }));
      }
    }
  }

  // ---- 5) Lender Criteria (all sheets) ----
  if (fs.existsSync(lenderFile)) {
    const wb2 = XLSX.readFile(lenderFile);
    for (const sheetName of wb2.SheetNames) {
      const sh = wb2.Sheets[sheetName];
      const lenderRows = XLSX.utils.sheet_to_json<Record<string, unknown>>(sh, { defval: "" });
      for (const row of lenderRows) {
        const name = asString(row["Lender"] ?? row["Lender Name"] ?? row["Bank Name"]);
        if (!name || name.length < 2) continue;
        const notes = asString(row["Notes"] ?? "");
        const paperGrade = asString(row["Paper Grade"] ?? "");
        const riskProfile = asString(row["Risk Profile"] ?? "");
        const approvalFactorsStr = buildNotes([paperGrade && `Grade: ${paperGrade}`, riskProfile && `Risk: ${riskProfile}`]);
        const existing = byName.get(name);
        if (existing) {
          existing.notes = [existing.notes, notes, approvalFactorsStr].filter(Boolean).join("\n\n").slice(0, 2000);
        } else {
          byName.set(name, defaultInstitution(name, {
            approvalFactors: approvalFactorsStr ? JSON.stringify([approvalFactorsStr]) : "[]",
            notes: [notes, approvalFactorsStr].filter(Boolean).join("\n\n") || "Lender.",
            tags: JSON.stringify(["lender", "funding"]),
          }));
        }
      }
    }
  }

  // ---- 6) Scan every sheet for any column that might be institution names (catch-all) ----
  const nameLikeCols = ["Bank Name", "Name of Bank", "NAME OF BANK", "Lender", "Name of RM", "Institution"];
  for (const sheetName of wb.SheetNames) {
    const sh = wb.Sheets[sheetName];
    const rows = XLSX.utils.sheet_to_json<Record<string, unknown>>(sh, { defval: "" });
    if (rows.length === 0) continue;
    const keys = Object.keys(rows[0] ?? {});
    for (const row of rows) {
      for (const col of keys) {
        const trimCol = col.trim().toLowerCase();
        const isNameCol = nameLikeCols.some((c) => trimCol === c.toLowerCase()) ||
          (trimCol.includes("bank") && trimCol.includes("name")) ||
          trimCol === "lender" || trimCol === "institution";
        if (!isNameCol) continue;
        const val = asString(row[col]);
        if (!val || val.length < 2) continue;
        const name = val.replace(/:$/, "").replace(/\s*\(See.*\)$/i, "").trim();
        if (name.length < 2) continue;
        if (name.toLowerCase() === "bank name" || name.toLowerCase() === "name of bank") continue;
        const stateFromSheet = isStateSheet(sheetName) ? sheetName.trim() : null;
        if (!byName.has(name)) {
          byName.set(name, defaultInstitution(name, {
            notes: `From ${sheetName}.`,
            state: stateFromSheet,
          }));
        }
      }
    }
  }

  console.log("Clearing existing institutions...");
  await prisma.institution.deleteMany({});

  const toCreate = Array.from(byName.values()).map((d) => ({
    ...d,
    notes: d.notes || "Institution.",
  }));

  console.log("Importing", toCreate.length, "institutions...");
  for (const data of toCreate) {
    await prisma.institution.create({ data: { ...data, notes: data.notes } });
  }

  console.log("Done. Imported", toCreate.length, "institutions.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
