# spec/plan.md — Lead Magnet Architecture & Implementation Plan

## Architecture

Single Next.js 15 App Router application. Server components handle data
fetching and rendering; one client component manages form state. Deployed
to Vercel. Supabase is the only external service dependency.

## Directory Structure

```
app/
  page.tsx                  # Landing page (hero, benefits, email form)
  thank-you/
    page.tsx                # Thank-you page with download link
  actions/
    subscribe.ts            # Server action: validate → insert → redirect
components/
  SubscribeForm.tsx          # Client component: form state, error display
lib/
  supabase.ts               # Supabase client (service role, server-only)
  validate.ts               # Zod schema + regex for email validation
.env.local                  # SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, DOWNLOAD_URL
.env.example                # Documented keys, no values
```

## API Structure

### app/page.tsx
Public landing page. Server component. Renders hero, 3 benefit bullets,
and `<SubscribeForm />`. No auth required.

### app/thank-you/page.tsx
Server component. Reads `DOWNLOAD_URL` from `process.env` and renders
the download link. No dynamic data fetching — env var only.

### app/actions/subscribe.ts
Server action (`"use server"`). Execution order:
1. Extract IP from `x-forwarded-for` header
2. Rate-limit check — 5 submissions per IP per minute (in-memory Map)
3. Zod + regex validate email
4. Supabase insert into `subscribers`
5. `redirect("/thank-you")` on success
6. Return `{ error: string }` on duplicate or validation failure

### components/SubscribeForm.tsx
Client component (`"use client"`). Uses `useActionState` + `useFormStatus`.
Renders loading spinner during submission. Shows inline error on failure.

### lib/supabase.ts
Creates Supabase client with `SUPABASE_SERVICE_ROLE_KEY`. Import only in
server files (`app/actions/`, `lib/`). Never referenced from client components.

### lib/validate.ts
Exports `emailSchema` (Zod). Pipeline: trim → lowercase →
`z.string().email()` + custom regex `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`.

## 9-Step Implementation Order

1. Scaffold Next.js 15 project with `pnpm create next-app@latest` (TypeScript + Tailwind + App Router)
2. Create Supabase project, run `subscribers` table SQL, enable RLS with service_role policy
3. Configure `.env.local` and document keys in `.env.example`
4. Build `lib/validate.ts` — Zod schema, export `emailSchema`
5. Build `lib/supabase.ts` — service-role client, server-only
6. Build `app/actions/subscribe.ts` — rate limit → validate → insert → redirect
7. Build `components/SubscribeForm.tsx` — form, loading state, error display
8. Build `app/page.tsx` — hero, 3 benefit bullets, embed `<SubscribeForm />`
9. Build `app/thank-you/page.tsx` — branded page, download link from env

## Known Risks

| Risk | Mitigation |
|------|-----------|
| Duplicate email submission | Catch Supabase unique-constraint error; return `"You're already signed up."` |
| Rate limiting bypass | Read IP from `x-forwarded-for`; soft-block at 5/min per IP |
| Download URL exposure | Env var only — never hardcode in source, never render in `<meta>` tags |
| Service role key leak | Import `supabase.ts` in server files only; ESLint rule or code-review gate |

## Done-When Checklist

- [ ] Landing page renders at `/` with no console errors
- [ ] Form validates email format before hitting the server action
- [ ] Server action independently validates email (Zod + regex)
- [ ] Valid submission inserts one row into `subscribers`
- [ ] Duplicate email returns a user-friendly message, no 500
- [ ] Rate limit blocks > 5 submissions/min from the same IP
- [ ] `/thank-you` renders with download link sourced from `DOWNLOAD_URL` env var
- [ ] No email addresses appear in server logs
- [ ] RLS enabled on `subscribers` — anon role cannot read or write
- [ ] Lighthouse mobile performance score ≥ 85
- [ ] All env vars documented in `.env.example` with placeholder values
- [ ] Deployed to Vercel, smoke-tested in production
