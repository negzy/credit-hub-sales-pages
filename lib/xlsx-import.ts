import * as XLSX from "xlsx";
import type { Bureau, InstitutionType } from "./vault-types";

const BUREAU_MAP: Record<string, Bureau> = {
  experian: "experian",
  ex: "experian",
  eq: "equifax",
  equifax: "equifax",
  tu: "transunion",
  transunion: "transunion",
  "trans union": "transunion",
  unknown: "unknown",
};

const TYPE_MAP: Record<string, InstitutionType> = {
  bank: "bank",
  banks: "bank",
  cu: "credit_union",
  "credit union": "credit_union",
  "credit unions": "credit_union",
  fintech: "fintech",
};

function normalizeBureau(val: unknown): Bureau {
  if (typeof val !== "string") return "unknown";
  const key = val.trim().toLowerCase();
  return BUREAU_MAP[key] ?? "unknown";
}

function normalizeType(val: unknown): InstitutionType {
  if (typeof val !== "string") return "bank";
  const key = val.trim().toLowerCase();
  return TYPE_MAP[key] ?? "bank";
}

function asStringArray(val: unknown): string[] {
  if (Array.isArray(val)) return val.map(String).filter(Boolean);
  if (typeof val === "string") {
    const trimmed = val.trim();
    if (!trimmed) return [];
    if (trimmed.startsWith("[")) {
      try {
        const parsed = JSON.parse(trimmed) as unknown;
        return Array.isArray(parsed) ? parsed.map(String) : [trimmed];
      } catch {
        return trimmed.split(/[,;|]/).map((s) => s.trim()).filter(Boolean);
      }
    }
    return trimmed.split(/[,;|]/).map((s) => s.trim()).filter(Boolean);
  }
  return [];
}

function asString(val: unknown): string {
  if (val == null) return "";
  return String(val).trim();
}

export interface ColumnMapping {
  name: string;
  bureau: string;
  type: string;
  notes: string;
  state: string;
  products: string;
  tags: string;
  sourceLinks: string;
  approvalFactors: string;
  [key: string]: string;
}

export const DEFAULT_COLUMN_MAPPING: ColumnMapping = {
  name: "name",
  bureau: "bureau",
  type: "type",
  notes: "notes",
  state: "state",
  products: "products",
  tags: "tags",
  sourceLinks: "sourceLinks",
  approvalFactors: "approvalFactors",
};

export function detectColumnMapping(headers: string[]): ColumnMapping {
  const lower = headers.map((h) => h.toLowerCase());
  const find = (candidates: string[]) =>
    lower.findIndex((h) => candidates.some((c) => h.includes(c) || c.includes(h)));
  return {
    name: headers[find(["name", "institution", "bank", "lender", "company"])] ?? headers[0] ?? "name",
    bureau: headers[find(["bureau", "pull", "cb", "credit bureau"])] ?? "",
    type: headers[find(["type", "institution type", "bank/cu"])] ?? "",
    notes: headers[find(["notes", "note", "comments", "data points"])] ?? "",
    state: headers[find(["state", "st"])] ?? "",
    products: headers[find(["products", "product", "cards"])] ?? "",
    tags: headers[find(["tags", "tag"])] ?? "",
    sourceLinks: headers[find(["source", "link", "url"])] ?? "",
    approvalFactors: headers[find(["factors", "approval", "criteria"])] ?? "",
  };
}

export interface ParsedRow {
  name: string;
  type: InstitutionType;
  primaryBureau: Bureau;
  bureausPulled: string[];
  products: string[];
  approvalFactors: string[];
  notes: string | null;
  sourceLinks: string[];
  tags: string[];
  state: string | null;
}

export function parseSheetWithMapping(
  sheet: XLSX.WorkSheet,
  mapping: ColumnMapping
): ParsedRow[] {
  const data = XLSX.utils.sheet_to_json<Record<string, unknown>>(sheet, { defval: "" });
  const rows: ParsedRow[] = [];
  for (const row of data) {
    const name = asString(row[mapping.name]);
    if (!name) continue;
    const bureau = normalizeBureau(row[mapping.bureau]);
    const type = normalizeType(row[mapping.type]);
    const notesVal = asString(row[mapping.notes]);
    const notes = notesVal || null;
    const stateVal = asString(row[mapping.state]);
    const state = stateVal || null;
    const products = asStringArray(row[mapping.products]);
    const tags = asStringArray(row[mapping.tags]);
    const sourceLinks = asStringArray(row[mapping.sourceLinks]);
    const approvalFactors = asStringArray(row[mapping.approvalFactors]);
    const bureausPulled = bureau !== "unknown" ? [bureau] : [];
    rows.push({
      name,
      type,
      primaryBureau: bureau,
      bureausPulled,
      products,
      approvalFactors,
      notes,
      sourceLinks,
      tags,
      state,
    });
  }
  return rows;
}

export function getSheetPreview(buffer: Buffer, maxRows = 5): { headers: string[]; rows: Record<string, unknown>[] } {
  const wb = XLSX.read(buffer, { type: "buffer" });
  const firstSheet = wb.SheetNames[0];
  if (!firstSheet) return { headers: [], rows: [] };
  const sheet = wb.Sheets[firstSheet];
  const data = XLSX.utils.sheet_to_json<Record<string, unknown>>(sheet, { defval: "" });
  const headers = data.length
    ? (Object.keys(data[0] as object) as string[])
    : (XLSX.utils.sheet_to_json(sheet, { header: 1 }) as string[][])[0] ?? [];
  const rows = data.slice(0, maxRows);
  return { headers, rows };
}

export function parseWorkbookToRows(buffer: Buffer, mapping: ColumnMapping): ParsedRow[] {
  const wb = XLSX.read(buffer, { type: "buffer" });
  const out: ParsedRow[] = [];
  for (const sheetName of wb.SheetNames) {
    const sheet = wb.Sheets[sheetName];
    out.push(...parseSheetWithMapping(sheet, mapping));
  }
  return out;
}
