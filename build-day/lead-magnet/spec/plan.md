# Lead Magnet — Implementation Plan

## Purpose
Build a conversion-focused landing page that captures email leads and delivers a gated resource via a thank-you page.

## Objectives
- Launch a fast, mobile-friendly landing page with a single email capture flow.
- Store subscriber emails securely in Supabase with soft rate limiting and strong validation.
- Deliver the lead magnet through a thank-you page using an environment-controlled download link.

## What to Build
1. Public landing page with hero, 3 benefit bullets, and email form.
2. Server-side email capture using Next.js server action with Zod validation.
3. Supabase insert to `subscribers` with service_role only and no anonymous reads/writes.
4. Thank-you page that displays a branded download link from an env var.
5. Performance and security guardrails: Lighthouse mobile ≥ 85, 5 submits per IP per minute, no email logging.

## Folder Structure
- `app/page.tsx` — landing page UI
- `app/thank-you/page.tsx` — thank-you page
- `lib/supabase.ts` — Supabase client helper
- `lib/validators.ts` — Zod schemas and regex validation
- `app/actions/subscribe.ts` — server action for email capture
- `spec/plan.md` — this implementation plan
- `PRD.md` — product requirements

## Key Requirements
- No hardcoded secrets; use environment variables.
- Use Zod for request validation on the server.
- Validate email format and guard against invalid submissions.
- Strict RLS: only service_role can write to `subscribers`, no anon reads.
- Soft rate limit: 5 submit attempts per IP per minute.
- Track success rates without logging plain email addresses.

## Environment Variables
- `NEXT_PUBLIC_SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `LEAD_MAGNET_DOWNLOAD_URL`
- `NEXTAUTH_URL` or VERCEL_URL if needed for deployment

## Acceptance Criteria
- [ ] Landing page renders hero, benefits, and email form.
- [ ] Valid submissions are accepted and redirected to `/thank-you`.
- [ ] Supabase receives subscriber rows with `email`, `source`, and `created_at`.
- [ ] Thank-you page renders the download link from `LEAD_MAGNET_DOWNLOAD_URL`.
- [ ] No plain emails are written to logs.
- [ ] Performance target: page load < 1.5s on 4G and submission end-to-end < 500ms.

## Implementation Steps
1. Scaffold Next.js 15 app router project with TypeScript and Tailwind.
2. Build landing page UI and form component.
3. Implement `subscribe` server action with Zod validation.
4. Configure Supabase client and insert subscriber rows.
5. Add thank-you page and environment-driven download link.
6. Add performance optimizations and security checks.
7. Test manually and verify Supabase writes, redirects, and metrics.
