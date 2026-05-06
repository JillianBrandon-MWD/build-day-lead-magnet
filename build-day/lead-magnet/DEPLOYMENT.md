# Vercel Deployment

## One-click deployment

1. Go to [vercel.com](https://vercel.com) and log in.
2. Click **Add New...** → **Project**.
3. Select your `build-day-lead-magnet` GitHub repo.
4. Vercel auto-detects it as a Next.js project.
5. Under **Environment Variables**, add:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `LEAD_MAGNET_DOWNLOAD_URL`
6. Click **Deploy**.

## CLI deploy (local)

If you install the Vercel CLI locally:

```bash
npm i -g vercel
vercel login
vercel --prod
```

Fill in the environment variables when prompted.

## After deploy

- Vercel will generate a live URL for the app.
- Auto-deploys on push to `master`.
- Configure a custom domain in Vercel settings if needed.
