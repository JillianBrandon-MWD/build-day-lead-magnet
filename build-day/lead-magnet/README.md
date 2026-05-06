# Lead Magnet Landing Page

Conversion-optimized landing page scaffold for a lead magnet flow.

## Setup

1. Copy `.env.example` to `.env.local`.
2. Fill in Supabase values and the download URL.
3. Install dependencies:

```bash
pnpm install
```

## Development

```bash
pnpm dev
```

## Build

```bash
pnpm build
```

## Key files

- `app/page.tsx` — landing page with email capture form
- `app/thank-you/page.tsx` — thank-you page with download link
- `app/actions/subscribe.ts` — server action and Supabase insert
- `lib/supabase.ts` — Supabase client helper
- `lib/validators.ts` — Zod validation schema
