import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-12 text-slate-400">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <div className="mb-8 flex items-center justify-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600">
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <span className="text-2xl font-bold tracking-tight text-white">
            Mwalimu Ease
          </span>
        </div>
        <p className="mb-8 px-4 opacity-80">
          Empowering Kenyan schools with simple tools for a better future.
        </p>
        <div className="flex flex-col items-center gap-4 border-t border-slate-800 pt-8 md:flex-row md:justify-between">
          <p className="text-sm">&copy; 2026 Mwalimu Ease. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link href="/pricing" className="hover:text-white transition-colors">
              Pricing
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
