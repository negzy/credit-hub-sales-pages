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

## 3. Add Postgres via Vercel (Neon)

Vercel’s own “Vercel Postgres” was retired; you now add Postgres through the **Marketplace** (Neon is the default). Same idea: Vercel injects the URL into your project.

1. In the Vercel dashboard, open your project.
2. Go to **Storage** (or **Integrations** / **Marketplace**).
3. Click **Create Database** or **Add Integration** → search for **Neon** (or **Postgres**).
4. Follow the steps to create a Neon database and **connect it to this project**.
5. Vercel will add env vars like `POSTGRES_PRISMA_URL` or `POSTGRES_URL`. You need `DATABASE_URL` for this app:
   - Go to **Settings** → **Environment Variables**.
   - Add **`DATABASE_URL`** and set its value to the **Prisma connection string** (copy from the Neon integration page — it’s often labeled “Prisma” or use `POSTGRES_PRISMA_URL`’s value). It looks like:  
     `postgresql://user:pass@host/db?sslmode=require`
6. **Run migrations and import data once** (from your machine, with the production URL):
   ```bash
   # Replace with the actual URL from Vercel/Neon (Settings → Env Vars → POSTGRES_PRISMA_URL or from Neon dashboard)
   DATABASE_URL="postgresql://..." npx prisma db push
   DATABASE_URL="postgresql://..." npm run vault:import
   ```
7. Redeploy the project on Vercel (or push a commit) so the app uses the new DB.

**Local dev:** The app now uses Postgres only. In your local `.env`, set `DATABASE_URL` to a Postgres URL — e.g. a **second** Neon project (free tier) for dev, or the same prod URL if you’re careful. Then run `npx prisma db push` and `npm run vault:import` locally if you want local vault data.

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
