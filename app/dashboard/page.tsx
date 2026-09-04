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
  ArrowUpRight,
  Bell,
  Sparkles,
  Zap,
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

function AnimatedCounter({ target, duration = 1200 }: { target: number; duration?: number }) {
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
    <h1 className="text-3xl font-black tracking-tight sm:text-5xl">
      <span className="text-slate-300">{prefix},</span>{" "}
      <span className="name-glow">{name}!</span>
    </h1>
  );
}

const quickActions = [
  { title: "Students", icon: Users, color: "text-emerald-400", glow: "shadow-emerald-500/20", href: "#" },
  { title: "Teachers", icon: GraduationCap, color: "text-amber-400", glow: "shadow-amber-500/20", href: "#" },
  { title: "Enter Marks", icon: Pencil, color: "text-violet-400", glow: "shadow-violet-500/20", href: "#" },
  { title: "Reports", icon: FileText, color: "text-rose-400", glow: "shadow-rose-500/20", href: "#" },
  { title: "Timetable", icon: Clock, color: "text-sky-400", glow: "shadow-sky-500/20", href: "#" },
  { title: "Finance", icon: DollarSign, color: "text-indigo-400", glow: "shadow-indigo-500/20", href: "#" },
  { title: "Library", icon: BookOpen, color: "text-cyan-400", glow: "shadow-cyan-500/20", href: "#" },
  { title: "Alumni", icon: Award, color: "text-fuchsia-400", glow: "shadow-fuchsia-500/20", href: "#" },
];

const stats = [
  { label: "Total Students", key: "student_count" as const, icon: Users, color: "from-emerald-500 to-teal-400" },
  { label: "Teaching Staff", key: "teacher_count" as const, icon: GraduationCap, color: "from-sky-500 to-blue-400" },
  { label: "Active Classes", key: "grade_count" as const, icon: School, color: "from-amber-500 to-orange-400" },
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
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-slate-500">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-indigo-900 border-t-indigo-500"></div>
          <span className="font-medium">Loading your dashboard...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
        <div className="max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center shadow-2xl">
          <p className="font-medium text-rose-400">{error}</p>
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
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      {/* Aurora background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-20 -top-20 h-[50rem] w-[50rem] rounded-full bg-[conic-gradient(from_180deg,indigo,violet,sky,indigo)] opacity-20 blur-[120px] animate-[spin_30s_linear_infinite]"></div>
        <div className="absolute -right-40 top-60 h-[40rem] w-[40rem] rounded-full bg-[conic-gradient(from_0deg,violet,indigo,cyan,violet)] opacity-15 blur-[100px] animate-[spin_25s_linear_infinite_reverse]"></div>
        <div className="absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full bg-[conic-gradient(from_90deg,cyan,indigo,violet,cyan)] opacity-10 blur-[90px] animate-[spin_35s_linear_infinite]"></div>
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-[2.5rem] border border-slate-800/50 bg-slate-900/40 p-8 shadow-2xl shadow-indigo-900/10 backdrop-blur-xl sm:p-10">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-600/20 via-transparent to-violet-600/20"></div>

          <div className="relative flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <Greeting firstName={data.user.first_name} role={data.user.role} />
              <p className="mt-3 text-lg text-slate-400">
                You are managing{" "}
                <span className="font-semibold text-indigo-300 underline decoration-indigo-500 decoration-2 underline-offset-4">
                  {data.school.name}
                </span>
                .
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full border border-slate-700 bg-slate-900/60 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-slate-400 backdrop-blur">
                  {data.school.code}
                </span>
                <span className="rounded-full bg-amber-500/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-amber-300 border border-amber-500/20">
                  {data.user.role}
                </span>
                {data.school.is_paid ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-emerald-300">
                    <Crown className="h-3.5 w-3.5" />
                    Pro Account
                  </span>
                ) : (
                  <span className="rounded-full border border-slate-700 bg-slate-900/60 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-slate-400">
                    Free Account
                  </span>
                )}
              </div>
            </div>

            {!data.school.is_paid && data.user.is_admin && (
              <Link
                href="/pricing"
                className="group relative overflow-hidden rounded-2xl border border-amber-500/30 bg-amber-500/10 px-8 py-4 text-center font-black uppercase tracking-widest text-amber-300 shadow-xl transition-all hover:bg-amber-500/20"
              >
                <span className="relative z-10">Unlock Pro</span>
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
                className="group relative overflow-hidden rounded-[2rem] border border-slate-800/50 bg-slate-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur-xl transition-all hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${stat.color} opacity-20 blur-3xl transition-opacity group-hover:opacity-40`}></div>
                <div className="relative">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                      {stat.label}
                    </p>
                    <div className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 ${stat.color.split(" ")[1].replace("to-", "text-").replace("400", "300")}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="text-5xl font-black tabular-nums text-white">
                    <AnimatedCounter target={value} duration={1200} />
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* Main grid */}
        <section className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {/* Quick actions */}
            <h3 className="mb-4 flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-slate-500">
              <Zap className="h-4 w-4 text-amber-400" />
              Command Center
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              {quickActions.map((action) => {
                const Icon = action.icon;
                return (
                  <Link
                    key={action.title}
                    href={action.href}
                    className={`group relative overflow-hidden rounded-[2rem] border border-slate-800/50 bg-slate-900/40 p-5 text-center shadow-lg shadow-black/20 backdrop-blur-xl transition-all hover:-translate-y-1 hover:shadow-xl ${action.glow}`}
                  >
                    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-800/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                    <div
                      className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-2xl shadow-inner transition-transform group-hover:scale-110 ${action.color}`}
                    >
                      <Icon className="h-7 w-7" />
                    </div>
                    <p className="text-sm font-black uppercase tracking-wider text-slate-300">
                      {action.title}
                    </p>
                  </Link>
                );
              })}
            </div>

            {/* Recent students */}
            <div className="mt-6 rounded-[2.5rem] border border-slate-800/50 bg-slate-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur-xl sm:p-8">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">Recently Added Students</h3>
                <Link
                  href="#"
                  className="group flex items-center gap-1 text-sm font-semibold text-indigo-400 hover:text-indigo-300"
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
                      <tr className="border-b border-slate-800 text-xs font-black uppercase tracking-widest text-slate-500">
                        <th className="pb-3 pl-2">Name</th>
                        <th className="pb-3">Admission</th>
                        <th className="pb-3">Gender</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.recent_students.map((s, i) => (
                        <tr key={i} className="border-b border-slate-800/50 last:border-0 transition-colors hover:bg-slate-800/30">
                          <td className="py-3.5 pl-2 font-semibold text-slate-200">
                            {s.first_name} {s.last_name}
                          </td>
                          <td className="py-3.5 text-slate-400">{s.admission_number}</td>
                          <td className="py-3.5">
                            <span
                              className={`rounded-full px-2.5 py-1 text-xs font-black uppercase tracking-wider ${
                                s.gender === "M"
                                  ? "bg-sky-500/10 text-sky-300"
                                  : "bg-rose-500/10 text-rose-300"
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

          {/* Right side cards */}
          <div className="space-y-6">
            <div className="rounded-[2.5rem] border border-slate-800/50 bg-slate-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur-xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-300">
                <Crown className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white">
                {data.school.is_paid ? "Pro Account" : "Free Account"}
              </h3>
              <p className="mt-1 text-sm text-slate-400">
                {data.school.is_paid
                  ? `Your school is on Pro. Renewal: ${expiry}`
                  : "Upgrade to unlock official reports, finances, and more."}
              </p>
              {!data.school.is_paid && (
                <Link
                  href="/pricing"
                  className="mt-4 inline-block w-full rounded-2xl bg-indigo-600 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
                >
                  Upgrade to Pro
                </Link>
              )}
            </div>

            <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-800/50 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-lg shadow-black/20 backdrop-blur-xl">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-indigo-300">
                <Bell className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Pro tip</h3>
              <p className="mt-2 text-sm text-slate-400">
                Most schools move from paper to Mwalimu Ease in an afternoon. The longer you wait, the more weekends you lose.
              </p>
              <Link
                href="/"
                className="mt-4 inline-block w-full rounded-2xl border border-slate-700 bg-slate-900/60 py-3 text-center text-sm font-semibold text-slate-200 transition-colors hover:bg-slate-800"
              >
                Explore Public Site
              </Link>
            </div>

            <div className="rounded-[2.5rem] border border-slate-800/50 bg-slate-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur-xl">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-300">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Quick insight</h3>
              <p className="mt-2 text-sm text-slate-400">
                You have <span className="font-semibold text-white">{data.student_count}</span> students enrolled across{" "}
                <span className="font-semibold text-white">{data.grade_count}</span> active classes.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
