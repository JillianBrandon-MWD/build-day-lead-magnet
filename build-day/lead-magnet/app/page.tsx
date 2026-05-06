import { subscribe } from './actions/subscribe';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-16 sm:px-8 lg:px-12">
        <section className="rounded-3xl border border-slate-800 bg-slate-900/80 p-10 shadow-2xl shadow-slate-950/20 backdrop-blur-md">
          <div className="mb-10 max-w-2xl">
            <p className="mb-4 text-sm uppercase tracking-[0.32em] text-cyan-300">Lead magnet</p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Convert visitors into subscribers with a high-impact landing page.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              A simple, fast landing page with a validated email capture flow, secure Supabase storage, and immediate delivery.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
            <div className="space-y-6">
              <ul className="space-y-4">
                {[
                  'Clear hero with one focused offer',
                  'Email capture with server-side validation',
                  'Branded thank-you page and gated download link'
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-slate-200">
                    <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-cyan-500 text-slate-950">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="rounded-3xl bg-slate-950/90 p-6 text-slate-300 ring-1 ring-slate-700">
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Fast facts</p>
                <p className="mt-3 text-sm leading-7">
                  Built for fast loads, with strict validation, Supabase storage, and an env-driven download experience.
                </p>
              </div>
            </div>

            <form action={subscribe} className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/95 p-8 shadow-lg shadow-slate-950/20">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="mt-3 w-full rounded-2xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
                />
              </div>

              <input type="hidden" name="source" value="landing_page" />

              <button type="submit" className="inline-flex w-full items-center justify-center rounded-2xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
                Get the free resource
              </button>

              <p className="text-xs leading-6 text-slate-500">
                No spam. Secure email capture with Supabase and server-side validation.
              </p>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
