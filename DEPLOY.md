# Deploying The Credit Hub Sales Pages

## Option 1: Vercel (recommended for Next.js)

### 1. Push your code to GitHub

```bash
git add .
git commit -m "Add testimonials and deploy config"
git push origin main
```

### 2. Connect to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (GitHub is easiest).
2. Click **Add New** → **Project**.
3. Import your `Credit-hub-sales-pages` repo.
4. Leave **Framework Preset** as Next.js and **Root Directory** as `.`
5. Click **Deploy** (first deploy may fail until env and DB are set—see below).

### 3. Set environment variables

In the Vercel project: **Settings** → **Environment Variables**. Add:

| Name | Value | Notes |
|------|--------|--------|
| `DATABASE_URL` | Your production DB URL | **Required.** Use a hosted Postgres (see below). |
| `VAULT_UNLOCK_PASSWORD` | (same as your .env) | For vault unlock. |
| `VAULT_ADMIN_PASSWORD` | (same as your .env) | For admin/vault if you use it. |

**Database:** Vercel’s filesystem is read-only, so SQLite (`file:./dev.db`) won’t work in production. Use a hosted Postgres and set `DATABASE_URL` to its connection string:

- [Vercel Postgres](https://vercel.com/storage/postgres) (same dashboard)
- [Neon](https://neon.tech) – free tier, then “Connection string” in dashboard
- [Supabase](https://supabase.com) – Database → Connection string (URI)

After adding Postgres, run migrations once (from your machine or Vercel’s run command):

```bash
# From your machine, with DATABASE_URL pointing at production Postgres:
npx prisma migrate deploy
# Or push schema if you don't use migrations:
npx prisma db push
```

Redeploy after setting env vars: **Deployments** → … on latest → **Redeploy**.

### 4. Your live URLs

- Main site: `https://your-project.vercel.app`
- Testimonials: `https://your-project.vercel.app/testimonials`

You can add a custom domain in **Settings** → **Domains**.

---

## Option 2: Netlify

1. [Netlify](https://netlify.com) → **Add new site** → **Import from Git**.
2. Build command: `prisma generate && next build`
3. Publish directory: `.next` (or use Netlify’s Next.js runtime; they detect it).
4. Set `DATABASE_URL`, `VAULT_UNLOCK_PASSWORD`, and `VAULT_ADMIN_PASSWORD` in **Site settings** → **Environment variables**.
5. Use a hosted Postgres (Neon, Supabase, etc.); SQLite is not suitable on Netlify.

---

## Checklist

- [ ] Code pushed to GitHub (or GitLab/Bitbucket).
- [ ] Production Postgres created; `DATABASE_URL` set in the host.
- [ ] `VAULT_UNLOCK_PASSWORD` and `VAULT_ADMIN_PASSWORD` set in the host.
- [ ] Migrations run against production DB (`prisma migrate deploy` or `prisma db push`).
- [ ] Redeploy after changing env vars.
- [ ] Test `/testimonials` and main pages on the live URL.
