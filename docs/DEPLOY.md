# Deploy to your domain

Steps to get the Credit Hub site live on your own domain (e.g. `credithub.com`).

---

## 1. Push your code to GitHub

If you haven’t already:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

---

## 2. Deploy on Vercel (recommended for Next.js)

1. Go to [vercel.com](https://vercel.com) and sign in (GitHub is easiest).
2. **Add New Project** → **Import** your GitHub repo.
3. **Configure:**
   - Framework: Next.js (auto-detected).
   - Root directory: leave as `.`
   - Build command: `npm run build` (or leave default; the project uses `prisma generate && next build`).
   - Output: leave default.

4. **Environment variables** (add before first deploy):

   | Name | Value | Notes |
   |------|--------|--------|
   | `DATABASE_URL` | Your production DB URL | **Required.** See step 3. |
   | `VAULT_UNLOCK_PASSWORD` | Your unlock password | Same as in `.env` locally. |

   Do **not** commit `.env` to the repo. Set these in Vercel: Project → **Settings** → **Environment Variables**.

5. Click **Deploy**. The first deploy will fail if the app uses the DB at build time; that’s often fixed by using a real `DATABASE_URL` and ensuring Prisma can reach it at build (see below).

---

## 3. Production database

The app uses **Prisma**. Locally you use SQLite; on Vercel you need a **hosted database** (SQLite on Vercel is not persistent).

**Option A – Vercel Postgres**

- In the Vercel project: **Storage** → **Create Database** → **Postgres**.
- Connect it to the project; Vercel will add `POSTGRES_URL` (or similar).
- In Prisma you’ll point `DATABASE_URL` to that URL. You need to **switch the Prisma schema** to `provider = "postgresql"` for production (or use one schema and set `DATABASE_URL` to Postgres only in production).

**Option B – Neon / Supabase / Railway**

- Create a Postgres database at [neon.tech](https://neon.tech), [supabase.com](https://supabase.com), or [railway.app](https://railway.app).
- Copy the connection string (e.g. `postgresql://user:pass@host/db?sslmode=require`).
- In Vercel, set `DATABASE_URL` to that value.

**Using Postgres with this repo**

- The repo is currently set up for SQLite. To use Postgres in production:
  1. Change `prisma/schema.prisma`: set `provider = "postgresql"` (or use a separate schema / env for prod).
  2. Set `DATABASE_URL` in Vercel to your Postgres URL.
  3. Run migrations (or `prisma db push`) against that URL once (e.g. from your machine with `DATABASE_URL` set to the prod URL), then run the one-time import:
     ```bash
     DATABASE_URL="postgresql://..." npm run vault:import
     ```
  4. Redeploy on Vercel.

---

## 4. Custom domain

1. In Vercel: open your project → **Settings** → **Domains**.
2. Add your domain (e.g. `credithub.com` or `www.credithub.com`).
3. Vercel will show DNS records. In your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.):
   - Add the **A** and/or **CNAME** records Vercel shows.
   - For root domain (`credithub.com`), Vercel often asks for an A record to `76.76.21.21` or a CNAME to `cname.vercel-dns.com` (follow Vercel’s exact instructions).
4. Wait for DNS to propagate (minutes to 48 hours). Vercel will issue SSL automatically.

---

## 5. After first deploy

- **Vault data:** If you switched to Postgres, run the one-time import against the production DB (see step 3). The site will then show all imported institutions.
- **Unlock:** Paid users use the same flow: purchase → get password (e.g. in Skool) → open **Unlock the full vault here** and enter the password. Set `VAULT_UNLOCK_PASSWORD` in Vercel to the same value you give paid users.

---

## Quick checklist

- [ ] Code in GitHub (or other Git host Vercel supports).
- [ ] Vercel project created and connected to repo.
- [ ] Production database (Postgres) created and `DATABASE_URL` set in Vercel.
- [ ] Prisma schema and migrations updated for Postgres if needed; migrations run once.
- [ ] `VAULT_UNLOCK_PASSWORD` set in Vercel.
- [ ] One-time `npm run vault:import` run against production DB.
- [ ] Custom domain added in Vercel and DNS configured at registrar.
- [ ] Visit your domain and test vault + unlock flow.
