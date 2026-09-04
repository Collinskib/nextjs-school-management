"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const publicLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
];

const dashboardLinks = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "#", label: "Students" },
  { href: "#", label: "Teachers" },
  { href: "#", label: "Enter Marks" },
  { href: "#", label: "Reports" },
  { href: "#", label: "Timetable" },
  { href: "#", label: "Finance" },
  { href: "#", label: "Library" },
];

function Brand({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2 text-xl font-bold tracking-tight ${className}`}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/20">
        <svg
          className="h-5 w-5"
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
      </span>
      Mwalimu Ease
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [publicOpen, setPublicOpen] = useState(false);
  const [host, setHost] = useState("127.0.0.1");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHost(window.location.hostname);
    }
  }, []);

  const isDashboard = pathname?.startsWith("/dashboard");
  const isLogin = pathname === "/login";

  async function handleLogout() {
    try {
      await fetch(`http://${host}:8000/api/auth/logout/`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      });
    } finally {
      setDrawerOpen(false);
      router.push("/login");
    }
  }

  if (isDashboard) {
    return (
      <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 text-slate-800 shadow-sm backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Brand className="text-slate-900" />

          <ul className="hidden items-center gap-1 text-sm font-medium lg:flex">
            {dashboardLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`rounded-xl px-4 py-2.5 transition-colors ${
                    pathname === link.href
                      ? "bg-indigo-100 text-indigo-700"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-4 lg:flex">
            <button
              onClick={handleLogout}
              className="group flex items-center gap-2 rounded-2xl border border-rose-100 bg-rose-50 px-5 py-2.5 text-sm font-semibold text-rose-600 transition-all hover:bg-rose-100"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Logout
            </button>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 lg:hidden"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        <div
          className={`fixed inset-0 z-50 transition-opacity duration-300 ${
            drawerOpen ? "visible opacity-100" : "invisible opacity-0"
          }`}
          aria-hidden={!drawerOpen}
        >
          <div
            className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm"
            onClick={() => setDrawerOpen(false)}
          />
          <aside
            className={`absolute left-0 top-0 h-full w-80 transform bg-white text-slate-800 shadow-2xl transition-transform duration-300 ease-out ${
              drawerOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex h-16 items-center justify-between border-b border-slate-100 px-6">
              <Brand className="text-slate-900" />
              <button
                type="button"
                className="h-10 w-10 rounded-xl bg-slate-100 text-slate-700"
                onClick={() => setDrawerOpen(false)}
                aria-label="Close menu"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-1 p-4">
              <div className="mb-6 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <p className="text-xs font-black uppercase tracking-widest text-slate-400">Signed in as</p>
                <p className="mt-1 font-semibold text-slate-900">Teacher</p>
                <p className="text-xs text-slate-500">Kissawai Comprehensive</p>
              </div>

              {dashboardLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setDrawerOpen(false)}
                  className={`block rounded-2xl px-4 py-3.5 text-sm font-semibold transition-colors ${
                    pathname === link.href
                      ? "bg-indigo-100 text-indigo-700"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="absolute bottom-0 w-full border-t border-slate-100 p-4">
              <button
                onClick={handleLogout}
                className="flex w-full items-center justify-center gap-2 rounded-2xl border border-rose-100 bg-rose-50 py-3.5 text-sm font-semibold text-rose-600 transition-colors hover:bg-rose-100"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
              </button>
            </div>
          </aside>
        </div>
      </header>
    );
  }

  if (isLogin) {
    return (
      <header className="fixed top-0 z-50 w-full border-b border-slate-200/50 bg-white/80 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Brand />
          <Link
            href="/"
            className="rounded-2xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
          >
            Go home
          </Link>
        </nav>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Brand />

        <ul className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
          {publicLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="hover:text-indigo-600 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/login"
              className="rounded-lg border border-slate-200 px-4 py-2 text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 transition-colors"
            >
              Get Started
            </Link>
          </li>
        </ul>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 md:hidden"
          onClick={() => setPublicOpen(!publicOpen)}
          aria-label="Toggle menu"
        >
          {publicOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {publicOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-4 md:hidden">
          <ul className="space-y-3 text-sm font-medium text-slate-700">
            {publicLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                    className="block rounded-lg px-3 py-2 hover:bg-slate-50"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/login"
                className="block rounded-lg border border-slate-200 px-3 py-2 text-center"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="block rounded-lg bg-indigo-600 px-3 py-2 text-center text-white"
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
