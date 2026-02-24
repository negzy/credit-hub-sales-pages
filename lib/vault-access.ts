const VAULT_TOKEN_COOKIE = "vault_access";
const VAULT_PAID_VALUE = "vault_paid_UNLOCKED";

export const FREE_VAULT_LIMIT = 20;

export type VaultTier = "free" | "paid";

function getUnlockPassword(): string | null {
  const p = process.env.VAULT_UNLOCK_PASSWORD?.trim();
  if (p) return p;
  return process.env.VAULT_DEMO_CODE?.trim() || null;
}

export async function validateUnlock(passwordOrCode: string): Promise<{ valid: boolean; tier: VaultTier }> {
  const trimmed = passwordOrCode.trim();
  if (!trimmed) return { valid: false, tier: "free" };
  const envPassword = getUnlockPassword();
  if (envPassword && trimmed === envPassword) return { valid: true, tier: "paid" };
  return { valid: false, tier: "free" };
}

export function getPaidTokenFromCookie(cookieHeader: string | null): string | null {
  if (!cookieHeader) return null;
  const match = cookieHeader.match(new RegExp(`${VAULT_TOKEN_COOKIE}=([^;]+)`));
  if (!match) return null;
  return decodeURIComponent(match[1].trim());
}

export async function tierFromRequest(cookieHeader: string | null): Promise<VaultTier> {
  const value = getPaidTokenFromCookie(cookieHeader);
  return value === VAULT_PAID_VALUE ? "paid" : "free";
}

export function buildSetCookiePaid(): string {
  return `${VAULT_TOKEN_COOKIE}=${encodeURIComponent(VAULT_PAID_VALUE)}; Path=/; Max-Age=31536000; SameSite=Lax; HttpOnly`;
}

export function buildClearCookie(): string {
  return `${VAULT_TOKEN_COOKIE}=; Path=/; Max-Age=0; SameSite=Lax; HttpOnly`;
}
