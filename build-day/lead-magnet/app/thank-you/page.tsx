import Link from 'next/link';

const downloadUrl = process.env.LEAD_MAGNET_DOWNLOAD_URL ?? '#';

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-16 text-center sm:px-8 lg:px-12">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-12 shadow-2xl shadow-slate-950/20 backdrop-blur-md">
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Thank you</p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Your download is ready.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            The resource is available below. If the link does not work, check your email inbox for the delivery link.
          </p>
          <div className="mt-10 space-y-4">
            <a
              href={downloadUrl}
              className="inline-flex rounded-2xl bg-cyan-500 px-6 py-4 text-base font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Download the free resource
            </a>
            <p className="text-sm text-slate-500">
              Download URL is loaded from `LEAD_MAGNET_DOWNLOAD_URL`.
            </p>
          </div>
          <Link href="/" className="mt-10 inline-flex text-sm text-cyan-300 underline hover:text-cyan-200">
            Return to landing page
          </Link>
        </div>
      </div>
    </main>
  );
}
