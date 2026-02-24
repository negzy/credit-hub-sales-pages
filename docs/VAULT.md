# Funding Intelligence Vault

Vault at **/vault** lists banks/credit unions with bureau pulls, approval factors, and notes. Dark theme, orange accents.

## Access

- **Free (lite):** First 20 institutions, pagination with blurred rows for the rest. No login.
- **Paid (full):** One **password** unlocks the full database. Set `VAULT_UNLOCK_PASSWORD` in `.env` and share that password with paid users. They go to **/vault/unlock**, enter it, and get access to **/vault-full**.

No codes, no admin panel — just one password.

## Running locally

1. **Env**  
   Copy `.env.example` to `.env`. Set:
   - `DATABASE_URL="file:./dev.db"`
   - `VAULT_UNLOCK_PASSWORD=your-secret` (share with paid users)

2. **Database**
   ```bash
   npx prisma db push
   npm run db:seed
   ```

3. **Populate from scraped data (optional)**
   ```bash
   npm run vault:scrape
   ```
   This hits Doctor of Credit (and FICO Forums if allowed), then creates/updates Institution rows from links and snippets. Run whenever you want to refresh vault data.

4. **App**
   ```bash
   npm run dev
   ```
   - **/vault** — lite vault (20 visible, rest blurred)
   - **/vault/unlock** — enter password → redirect to /vault-full
   - **/vault-full** — full list (paid only)

## Scraping

- **Script:** `npm run vault:scrape`
- **Behavior:** Fetches Doctor of Credit (and FICO Forums). Respects robots.txt and rate limits. Caches pages in the DB. Creates or updates Institution records from scraped links/snippets.
- **Data:** New institutions get a name derived from the link slug, type `bank`, bureau `unknown`, and notes from snippets. Existing institutions (by name) get notes appended.

## Free vs paid

- **List:** Free = first 20 full, then pagination with blurred rows. Paid = up to 500 per page (all data).
- **Detail:** Free can open only the first 20 by name; others 403. Paid can open any.
- **Cookie:** After a successful unlock, a cookie is set so /vault-full and full list/detail work without entering the password again.

## Tech

- **Next.js** (App Router), **TypeScript**, **Tailwind**, **Prisma**, **SQLite** (dev).
- **API:** `/api/vault`, `/api/vault/[id]`, `/api/vault/unlock` (no admin APIs).
