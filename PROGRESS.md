# Build Progress — Lead Magnet

Tracks the 9-step Implementation Order from `spec/plan.md`.
Check each box when the step is committed and lint/type-check passes.

## Implementation Steps

- [ ] **Step 1** — Scaffold Next.js 15 project (`pnpm create next-app@latest`, TypeScript + Tailwind + App Router)
- [ ] **Step 2** — Create Supabase project, run `subscribers` table SQL, enable RLS with service_role policy
- [ ] **Step 3** — Configure `.env.local` and document keys in `.env.example`
- [ ] **Step 4** — Build `lib/validate.ts` — Zod schema, export `emailSchema`
- [ ] **Step 5** — Build `lib/supabase.ts` — service-role client, server-only
- [ ] **Step 6** — Build `app/actions/subscribe.ts` — rate limit → validate → insert → redirect
- [ ] **Step 7** — Build `components/SubscribeForm.tsx` — form, loading state, error display
- [ ] **Step 8** — Build `app/page.tsx` — hero, 3 benefit bullets, embed `<SubscribeForm />`
- [ ] **Step 9** — Build `app/thank-you/page.tsx` — branded page, download link from env

## Done-When (from PRD)

- [ ] Landing page renders at `/` with no console errors
- [ ] Form validates email client-side and server-side independently
- [ ] Valid submission inserts one row into `subscribers`
- [ ] Duplicate email returns a user-friendly message, no 500
- [ ] Rate limit blocks > 5 submissions/min from the same IP
- [ ] `/thank-you` renders with download link from `DOWNLOAD_URL` env var
- [ ] No email addresses appear in server logs
- [ ] RLS enabled — anon role cannot read or write `subscribers`
- [ ] Lighthouse mobile score ≥ 85
- [ ] All env vars documented in `.env.example`
- [ ] Deployed to Vercel, smoke-tested in production
