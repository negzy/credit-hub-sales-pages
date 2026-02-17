# Push to GitHub & Add Your Domain

Your repo is set up: **https://github.com/negzy/credit-hub-sales-pages**

The remote is already connected. You just need to push (and sign in to GitHub).

---

## Step 1: Push your code

Open **Terminal** (or Cursor’s terminal) and run:

```bash
cd /Users/nel/Desktop/Credit-hub-sales-pages

git push -u origin main
```

When prompted:

- **Username:** your GitHub username (`negzy`)
- **Password:** use a **Personal Access Token**, not your GitHub password  
  - GitHub → Settings → Developer settings → [Personal access tokens](https://github.com/settings/tokens) → Generate new token (classic)  
  - Check the **repo** scope → Generate → copy the token and paste it when Terminal asks for “Password”

After this, your code will be at https://github.com/negzy/credit-hub-sales-pages

---

## Step 2: Connect to Vercel and deploy

1. Go to **https://vercel.com** and click **Sign Up** or **Log In**.
2. Choose **Continue with GitHub** and authorize Vercel to access your GitHub account.
3. After you’re in the Vercel dashboard, click **Add New…** → **Project**.
4. Under **Import Git Repository**, find **negzy/credit-hub-sales-pages** and click **Import** (or **Import** next to it).
5. On the configure screen:
   - **Framework Preset:** Vercel should detect **Next.js**.
   - **Root Directory:** leave as **./** (default).
   - **Build Command:** leave default (`next build`).
   - **Output Directory:** leave default (`.next`).
   - Don’t add env vars unless you need them later.
6. Click **Deploy**.
7. Wait 1–2 minutes. When it’s done, you’ll get a live URL like `credit-hub-sales-pages-xxx.vercel.app`. Click **Visit** to see your site.

---

## Step 3: Add your custom domain

1. In Vercel, open your project (the one you just deployed).
2. Go to the **Settings** tab → **Domains** in the left sidebar.
3. In **Domain**, type your domain (e.g. `credithub.com` or `www.credithub.com`) and click **Add**.
4. Vercel will show the DNS records you need. Keep that tab open.
5. Log in to your **domain registrar** (where you bought the domain: Namecheap, GoDaddy, Cloudflare, Google Domains, etc.).
6. Open the **DNS** or **DNS Management** section for your domain.
7. Add the records Vercel shows, for example:
   - For **root** (`yourdomain.com`): type **A**, name **@** (or leave blank), value **76.76.21.21** (Vercel will show the exact IP).
   - For **www** (`www.yourdomain.com`): type **CNAME**, name **www**, value **cname.vercel-dns.com** (or what Vercel shows).
8. Save the DNS changes. Propagation can take a few minutes up to 48 hours. Vercel will issue a free SSL certificate automatically once DNS is correct.

---

## Summary

| Step | Where | What to do |
|------|--------|------------|
| 1 | github.com | New repo, no README/.gitignore |
| 2 | Terminal | `git remote add origin ...` then `git push -u origin main` |
| 3 | vercel.com | Import repo, deploy, then add domain in Settings → Domains |

After that, your site will be live at your domain.
