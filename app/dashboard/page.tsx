"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const DJANGO_API = "http://127.0.0.1:8000";

interface RecentStudent {
  first_name: string;
  last_name: string;
  admission_number: string;
  gender: string;
}

interface DashboardData {
  school: {
    name: string;
    code: string;
    is_paid: boolean;
    pro_expiry_date: string | null;
  };
  user: {
    username: string;
    first_name: string;
    role: string;
    is_admin: boolean;
  };
  student_count: number;
  teacher_count: number;
  grade_count: number;
  recent_students: RecentStudent[];
}

function AnimatedCounter({ target, duration = 1500 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = Math.max(1, Math.floor(target / (duration / 16)));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count.toLocaleString()}</span>;
}

function Greeting({ firstName }: { firstName: string }) {
  const hour = new Date().getHours();
  const prefix =
    hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";

  return (
    <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
      <span className="greeting-prefix">{prefix},</span>{" "}
      <span className="name-glow">{firstName || "Admin"}!</span>
    </h1>
  );
}

export default function DashboardPage() {
  const router = useRouter();
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${DJANGO_API}/api/dashboard/`, {
      method: "GET",
      credentials: "include",
      headers: { Accept: "application/json" },
    })
      .then(async (res) => {
        if (res.status === 401) {
          router.push("/login");
          return;
        }
        const payload = await res.json();
        if (!res.ok) {
          setError(payload.error || "Could not load dashboard data.");
          return;
        }
        setData(payload);
      })
      .catch(() => {
        setError("Could not reach the Django server. Is it running on port 8000?");
      })
      .finally(() => setLoading(false));
  }, [router]);

  async function handleLogout() {
    try {
      await fetch(`${DJANGO_API}/api/auth/logout/`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      });
    } finally {
      router.push("/login");
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="flex items-center gap-3 text-slate-500">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-indigo-200 border-t-indigo-600"></div>
          <span className="font-medium">Loading your dashboard...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
        <div className="max-w-md rounded-3xl border border-rose-100 bg-white p-8 text-center shadow-xl">
          <p className="text-rose-600 font-medium">{error}</p>
          <Link
            href="/login"
            className="mt-6 inline-block rounded-2xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white"
          >
            Back to Login
          </Link>
        </div>
      </div>
    );
  }

  if (!data) return null;

  const quickActions = [
    { title: "Enroll Student", color: "bg-emerald-500", href: "#" },
    { title: "Enter Marks", color: "bg-violet-500", href: "#" },
    { title: "Reports Unit", color: "bg-rose-500", href: "#" },
    { title: "Generate Timetable", color: "bg-amber-500", href: "#" },
    { title: "Finance Center", color: "bg-indigo-500", href: "#" },
    { title: "Library Unit", color: "bg-sky-500", href: "#" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-12">
      {/* Top bar */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 px-6 py-4 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-slate-900">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <button
            onClick={handleLogout}
            className="rounded-2xl border border-rose-100 bg-rose-50 px-5 py-2.5 text-sm font-semibold text-rose-600 transition-colors hover:bg-rose-100"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 pt-8">
        {/* Welcome banner */}
        <section className="relative overflow-hidden rounded-[2.5rem] border border-indigo-100 bg-white p-8 shadow-xl sm:p-10">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-indigo-100/40 blur-3xl"></div>
          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <Greeting firstName={data.user.first_name} />
              <p className="mt-2 text-slate-600">
                You are managing{" "}
                <span className="font-bold text-indigo-600">{data.school.name}</span>{" "}
                today.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full border border-indigo-100 bg-white px-3 py-1 text-xs font-black uppercase tracking-widest text-slate-500">
                  {data.school.code}
                </span>
                <span className="rounded-full bg-amber-400 px-3 py-1 text-xs font-black uppercase tracking-widest text-amber-900">
                  {data.user.role}
                </span>
                {data.school.is_paid ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-black uppercase tracking-widest text-emerald-700">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500"></span>
                    Pro Account
                  </span>
                ) : (
                  <span className="rounded-full border border-slate-100 bg-white px-3 py-1 text-xs font-black uppercase tracking-widest text-slate-400">
                    Free Account
                  </span>
                )}
              </div>
            </div>

            {!data.school.is_paid && data.user.is_admin && (
              <Link
                href="/pricing"
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-4 text-center font-black uppercase tracking-widest text-white shadow-xl transition-all hover:shadow-2xl"
              >
                <span className="relative z-10">Unlock Pro</span>
                <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform group-hover:translate-x-0"></div>
              </Link>
            )}
          </div>
        </section>

        {/* Stats */}
        <section className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 to-emerald-700 p-6 text-white shadow-xl shadow-emerald-900/10">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl"></div>
            <div className="relative">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-100">Total Students</p>
              <div className="mt-2 text-5xl font-black tabular-nums">
                <AnimatedCounter target={data.student_count} />
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-500 to-sky-700 p-6 text-white shadow-xl shadow-sky-900/10">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl"></div>
            <div className="relative">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-sky-100">Teaching Staff</p>
              <div className="mt-2 text-5xl font-black tabular-nums">
                <AnimatedCounter target={data.teacher_count} />
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500 to-amber-700 p-6 text-white shadow-xl shadow-amber-900/10 sm:col-span-2 lg:col-span-1">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl"></div>
            <div className="relative">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-100">Active Classes</p>
              <div className="mt-2 text-5xl font-black tabular-nums">
                <AnimatedCounter target={data.grade_count} />
              </div>
            </div>
          </div>
        </section>

        {/* Quick actions */}
        <section className="mt-8">
          <h3 className="mb-5 text-xs font-black uppercase tracking-[0.2em] text-slate-400">
            Management Hub
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {quickActions.map((action) => (
              <Link
                key={action.title}
                href={action.href}
                className="group flex flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`mb-3 flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-lg transition-transform group-hover:scale-110 ${action.color}`}
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p className="text-xs font-black uppercase tracking-wider text-slate-700">{action.title}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Recent students */}
        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h3 className="mb-6 text-xl font-bold text-slate-900">Recently Added Students</h3>
          {data.recent_students.length === 0 ? (
            <p className="text-slate-500">No students yet. Start by enrolling your first student.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-100 text-xs font-black uppercase tracking-widest text-slate-400">
                    <th className="pb-3 pl-2">Name</th>
                    <th className="pb-3">Admission</th>
                    <th className="pb-3">Gender</th>
                  </tr>
                </thead>
                <tbody>
                  {data.recent_students.map((s, i) => (
                    <tr key={i} className="border-b border-slate-50 last:border-0 hover:bg-slate-50">
                      <td className="py-3 pl-2 font-semibold text-slate-900">
                        {s.first_name} {s.last_name}
                      </td>
                      <td className="py-3 text-slate-600">{s.admission_number}</td>
                      <td className="py-3 text-slate-600">{s.gender}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* CTA */}
        <section className="mt-8 rounded-3xl bg-slate-900 p-8 text-center text-white shadow-xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Ready to leave the late nights behind?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-300">
            Most schools move from paper to Mwalimu Ease in an afternoon. The longer you wait,
            the more weekends you lose.
          </p>
          <Link
            href="/"
            className="mt-6 inline-block rounded-2xl bg-white px-8 py-3.5 font-semibold text-slate-900 transition-colors hover:bg-slate-100"
          >
            Explore Public Site
          </Link>
        </section>
      </main>
    </div>
  );
}
