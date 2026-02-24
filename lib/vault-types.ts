export type InstitutionType = "bank" | "credit_union" | "fintech";
export type Bureau = "experian" | "equifax" | "transunion" | "unknown";

export interface InstitutionPayload {
  name: string;
  type: InstitutionType;
  primaryBureau: Bureau;
  bureausPulled: string[];
  products: string[];
  approvalFactors: string[];
  notes: string | null;
  sourceLinks: string[];
  tags: string[];
  state?: string | null;
  lastVerifiedAt?: Date | null;
}

export function parseJsonArray(s: string): string[] {
  if (!s || s.trim() === "") return [];
  try {
    const parsed = JSON.parse(s) as unknown;
    return Array.isArray(parsed) ? parsed.map(String) : [];
  } catch {
    return [];
  }
}

export function stringifyArray(arr: string[]): string {
  return JSON.stringify(arr);
}
