"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Users,
  GraduationCap,
  School,
  Pencil,
  FileText,
  Clock,
  DollarSign,
  BookOpen,
  Award,
  Crown,
  Sparkles,
  ArrowUpRight,
  Bell,
} from "lucide-react";

const DJANGO_API =
  typeof window !== "undefined"
    ? `http://${window.location.hostname}:8000`
    : "http://127.0.0.1:8000";

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

function Greeting({ firstName, role }: { firstName: string; role: string }) {
  const hour = new Date().getHours();
  const prefix =
    hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";

  const name = firstName?.trim() || role;

  return (
    <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
      <span className="greeting-prefix">{prefix},</span>{" "}
      <span className="name-glow">{name}!</span>
    </h1>
  );
}

const quickActions = [
  { title: "Students", icon: Users, color: "bg-emerald-500", href: "#" },
  { title: "Teachers", icon: GraduationCap, color: "bg-amber-500", href: "#" },
  { title: "Enter Marks", icon: Pencil, color: "bg-violet-500", href: "#" },
  { title: "Reports", icon: FileText, color: "bg-rose-500", href: "#" },
  { title: "Timetable", icon: Clock, color: "bg-sky-500", href: "#" },
  { title: "Finance", icon: DollarSign, color: "bg-indigo-500", href: "#" },
  { title: "Library", icon: BookOpen, color: "bg-cyan-500", href: "#" },
  { title: "Alumni", icon: Award, color: "bg-fuchsia-500", href: "#" },
];

const stats = [
  {
    label: "Total Students",
    key: "student_count" as const,
    icon: Users,
    border: "border-emerald-500",
    iconBg: "bg-emerald-50 text-emerald-600",
  },
  {
    label: "Teaching Staff",
    key: "teacher_count" as const,
    icon: GraduationCap,
    border: "border-sky-500",
    iconBg: "bg-sky-50 text-sky-600",
  },
  {
    label: "Active Classes",
    key: "grade_count" as const,
    icon: School,
    border: "border-amber-500",
    iconBg: "bg-amber-50 text-amber-600",
  },
];

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
          <p className="font-medium text-rose-600">{error}</p>
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

  const expiry = data.school.pro_expiry_date
    ? new Date(data.school.pro_expiry_date).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : null;

  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      <main className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        {/* Welcome hero */}
        <section className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-indigo-600 via-violet-700 to-slate-900 p-8 text-white shadow-2xl sm:p-10">
          <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-sky-400/20 blur-3xl"></div>

          <div className="relative flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <Greeting firstName={data.user.first_name} role={data.user.role} />
              <p className="mt-3 text-base text-indigo-100/90">
                You are managing{" "}
                <span className="font-bold text-white underline decoration-indigo-300 decoration-2 underline-offset-4">
                  {data.school.name}
                </span>{" "}
                today.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-black uppercase tracking-widest backdrop-blur">
                  {data.school.code}
                </span>
                <span className="rounded-full bg-amber-400 px-3 py-1.5 text-xs font-black uppercase tracking-widest text-amber-900">
                  {data.user.role}
                </span>
                {data.school.is_paid ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/20 px-3 py-1.5 text-xs font-black uppercase tracking-widest text-emerald-100 backdrop-blur">
                    <Crown className="h-3.5 w-3.5" />
                    Pro Account
                  </span>
                ) : (
                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-black uppercase tracking-widest backdrop-blur">
                    Free Account
                  </span>
                )}
              </div>
            </div>

            {!data.school.is_paid && data.user.is_admin && (
              <Link
                href="/pricing"
                className="group relative overflow-hidden rounded-2xl bg-white px-8 py-4 text-center font-black uppercase tracking-widest text-slate-900 shadow-xl transition-all hover:shadow-2xl"
              >
                <span className="relative z-10">Unlock Pro</span>
                <div className="absolute inset-0 -translate-x-full bg-amber-100 transition-transform group-hover:translate-x-0"></div>
              </Link>
            )}
          </div>
        </section>

        {/* Stats */}
        <section className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => {
            const Icon = stat.icon;
            const value = data[stat.key];
            return (
              <div
                key={stat.label}
                className={`relative overflow-hidden rounded-[2rem] border-t-4 bg-white p-6 shadow-lg shadow-slate-200/50 transition-transform hover:-translate-y-1 hover:shadow-xl ${stat.border}`}
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-slate-50"></div>
                <div className="relative">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">
                      {stat.label}
                    </p>
                    <div className={`rounded-2xl p-2.5 ${stat.iconBg}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="text-4xl font-black tabular-nums text-slate-900">
                    <AnimatedCounter target={value} />
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* Bento grid + side cards */}
        <section className="mt-8 grid gap-6 lg:grid-cols-3">
          {/* Quick actions */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 flex items-center gap-2 text-sm font-black uppercase tracking-[0.2em] text-slate-400">
              <Sparkles className="h-4 w-4" />
              Management Hub
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              {quickActions.map((action) => {
                const Icon = action.icon;
                return (
                  <Link
                    key={action.title}
                    href={action.href}
                    className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div
                      className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-lg transition-transform group-hover:scale-110 ${action.color}`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <p className="text-sm font-black uppercase tracking-wider text-slate-700">
                      {action.title}
                    </p>
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 transition-opacity group-hover:opacity-100" style={{ color: "inherit" }}></div>
                  </Link>
                );
              })}
            </div>

            {/* Recent students */}
            <div className="mt-6 rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-xl font-bold text-slate-900">Recently Added Students</h3>
                <Link
                  href="#"
                  className="group flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
                >
                  View all
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>

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
                        <tr key={i} className="border-b border-slate-50 last:border-0 transition-colors hover:bg-slate-50">
                          <td className="py-3.5 pl-2 font-semibold text-slate-900">
                            {s.first_name} {s.last_name}
                          </td>
                          <td className="py-3.5 text-slate-600">{s.admission_number}</td>
                          <td className="py-3.5">
                            <span
                              className={`rounded-full px-2.5 py-1 text-xs font-black uppercase tracking-wider ${
                                s.gender === "M"
                                  ? "bg-sky-50 text-sky-600"
                                  : "bg-rose-50 text-rose-600"
                              }`}
                            >
                              {s.gender === "M" ? "Male" : s.gender === "F" ? "Female" : s.gender}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>

          {/* Side column */}
          <div className="space-y-6">
            {/* Pro status */}
            <div className="rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                <Crown className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">{data.school.is_paid ? "Pro Account" : "Free Account"}</h3>
              <p className="mt-1 text-sm text-slate-500">
                {data.school.is_paid
                  ? `Your school is on Pro. Renewal: ${expiry}`
                  : "Upgrade to unlock official reports, finances, and more."}
              </p>
              {!data.school.is_paid && (
                <Link
                  href="/pricing"
                  className="mt-4 inline-block w-full rounded-2xl bg-indigo-600 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
                >
                  Upgrade to Pro
                </Link>
              )}
            </div>

            {/* Quick tip */}
            <div className="rounded-[2.5rem] bg-slate-900 p-6 text-white shadow-lg">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                <Bell className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold">Pro tip</h3>
              <p className="mt-2 text-sm text-slate-300">
                Most schools move from paper to Mwalimu Ease in an afternoon. The longer you wait, the more weekends you lose.
              </p>
              <Link
                href="/"
                className="mt-4 inline-block w-full rounded-2xl bg-white py-3 text-center text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100"
              >
                Explore Public Site
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
