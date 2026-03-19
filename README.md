# Dime Solutions

Full-service digital marketing agency website — React + TypeScript + Vite frontend, Express backend, Supabase database, Resend email.

---

## Stack

| Layer      | Technology |
|------------|------------|
| Frontend   | React 18, TypeScript, Vite, Tailwind CSS, shadcn/ui, framer-motion |
| Backend    | Node.js, Express (serves both API and built frontend) |
| Database   | Supabase (PostgreSQL + Auth + RLS) |
| Email      | Resend |
| Deployment | Railway |

---

## Local Development

### 1. Install dependencies
```bash
npm install
```

### 2. Set up environment variables
```bash
cp .env.example .env
```
Fill in your values in `.env` (see below).

### 3. Run in development

In two terminals:
```bash
# Terminal 1 — Vite dev server (frontend, port 8080)
npm run dev

# Terminal 2 — Express server (API, port 3000)
node server.js
```

The Vite config proxies `/api/*` requests to Express automatically during dev.

---

## Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_SUPABASE_URL` | Your Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | Your Supabase anon/public key |
| `RESEND_API_KEY` | Your Resend API key |
| `RESEND_FROM_EMAIL` | Verified sender email (e.g. `Dime Solutions <notifications@dime-solutions.co.ke>`) |
| `CONTACT_EMAIL` | Where form submissions are delivered (e.g. `support@dime-solutions.co.ke`) |
| `NODE_ENV` | Set to `production` in Railway |

---

## Deploying to Railway

1. Push the repo to GitHub.
2. Create a new Railway project → **Deploy from GitHub repo**.
3. Add the environment variables above in Railway → **Variables**.
4. Railway will automatically:
   - Run `npm install`
   - Run `npm run build` (Vite build)
   - Start `node server.js` (serves frontend + API on one port)
5. Set up a custom domain and point it to your Railway service.

> **Note:** The `VITE_*` variables are embedded at build time. If you change them in Railway, trigger a redeploy.

---

## Supabase Setup

1. Create a Supabase project.
2. Go to **SQL Editor** and run the migration file:
   ```
   supabase/migrations/20260227070957_5bfe818d-e67e-49c6-b15c-cd569351b1b1.sql
   ```
3. Copy your **Project URL** and **anon public key** from **Settings → API** into `.env`.

### Tables

| Table | Purpose |
|-------|---------|
| `profiles` | Auto-created on user signup |
| `contact_submissions` | Stores contact form submissions |
| `audit_requests` | Stores free audit requests |
| `career_applications` | Stores job applications |

---

## Email (Resend)

1. Sign up at [resend.com](https://resend.com).
2. Verify your domain (`dime-solutions.co.ke`).
3. Create an API key and add it as `RESEND_API_KEY`.
4. Update `RESEND_FROM_EMAIL` to use your verified domain.

Until your domain is verified, you can use `onboarding@resend.dev` as the sender (Resend sandbox — only sends to the account owner's email).

---

## Form Submission Flow

Each form (Contact, Free Audit, Careers) does two things on submit:
1. **Saves to Supabase** — permanent record in the database.
2. **Sends email notification** — via Express `/api/*` endpoint using Resend.

If the email fails, the Supabase save still succeeds (no data loss).
