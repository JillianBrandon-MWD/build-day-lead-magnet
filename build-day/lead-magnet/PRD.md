# Lead Magnet — Product Requirements Document

## Project Overview
Conversion-optimized landing page that captures emails in exchange for a free resource. Built for marketers, agency owners, coaches.

## Core Features (3)
1. Public landing page — hero, 3 benefit bullets, email form
2. Email capture + storage — Zod validate → Supabase insert → redirect
3. Thank-you page + delivery — branded, shows download link (env var)

## Success Metrics
- [ ] Page loads < 1.5s on 4G (Lighthouse mobile ≥ 85)
- [ ] Email form submits < 500ms end-to-end
- [ ] 100% of valid submissions land in Supabase
- [ ] RLS enabled, zero hardcoded secrets

## Tech Stack
Next.js 15 (App Router) · TypeScript · Tailwind · Supabase · Vercel · pnpm

## Secure Coding (Mandatory)
- Zod + regex validate on server action — never trust client validation
- RLS on subscribers: service_role only; no anon reads or writes
- Never log email addresses — log counts and IDs only
- CSRF: built into Next.js server actions
- Soft rate limit: 5 submits per IP per minute

## Database Schema (Quick Reference)
Table: subscribers
- id uuid, PK, default gen_random_uuid()
- email text, unique, not null
- source text, default 'landing_page'
- created_at timestamp, default now()
