"use client";

import { useEffect, useMemo, useState } from "react";
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

const palette = {
  emerald: "#10b981",
  sky: "#0ea5e9",
  amber: "#f59e0b",
  indigo: "#6366f1",
  violet: "#8b5cf6",
  rose: "#f43f5e",
};

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
      <span className="greeting-prefix">{prefix},</span>{" "}
      <span className="name-glow">{name}!</span>
    </h1>
  );
}

function WaveDivider({ color = "#ffffff" }: { color?: string }) {
  return (
    <svg
      className="absolute bottom-0 left-0 w-full"
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      style={{ height: "3.5rem" }}
    >
      <path
        d="M0,40 C320,90 420,0 720,40 C1020,80 1120,10 1440,60 L1440,80 L0,80 Z"
        fill={color}
      />
    </svg>
  );
}

const quickActions = [
  { title: "Students", icon: Users, color: "from-emerald-400 to-teal-300", text: "text-emerald-600", href: "#" },
  { title: "Teachers", icon: GraduationCap, color: "from-amber-400 to-orange-300", text: "text-amber-600", href: "#" },
  { title: "Enter Marks", icon: Pencil, color: "from-violet-400 to-purple-300", text: "text-violet-600", href: "#" },
  { title: "Reports", icon: FileText, color: "from-rose-400 to-pink-300", text: "text-rose-600", href: "#" },
  { title: "Timetable", icon: Clock, color: "from-sky-400 to-cyan-300", text: "text-sky-600", href: "#" },
  { title: "Finance", icon: DollarSign, color: "from-indigo-400 to-blue-300", text: "text-indigo-600", href: "#" },
  { title: "Library", icon: BookOpen, color: "from-cyan-400 to-teal-300", text: "text-cyan-600", href: "#" },
  { title: "Alumni", icon: Award, color: "from-fuchsia-400 to-pink-300", text: "text-fuchsia-600", href: "#" },
];

const stats = [
  { label: "Total Students", key: "student_count" as const, icon: Users, color: "from-emerald-400 to-teal-300" },
  { label: "Teaching Staff", key: "teacher_count" as const, icon: GraduationCap, color: "from-sky-400 to-blue-300" },
  { label: "Active Classes", key: "grade_count" as const, icon: School, color: "from-amber-400 to-orange-300" },
];

function DonutChart({ values }: { values: { label: string; value: number; color: string }[] }) {
  const total = values.reduce((sum, v) => sum + v.value, 0);
  let acc = 0;
  const stops = values
    .map(({ color, value }) => {
      const start = acc;
      acc += (value / total) * 360;
      return `${color} ${start}deg, ${color} ${acc}deg`;
    })
    .join(", ");

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative h-48 w-48 rounded-full shadow-2xl" style={{ background: `conic-gradient(from 0deg, ${stops})` }}>
        <div className="absolute inset-0 m-auto flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-inner">
          <div className="text-center">
            <p className="text-2xl font-black text-slate-800">{total}</p>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Total</p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        {values.map((v) => (
          <div key={v.label} className="flex items-center gap-1.5 text-sm font-semibold text-slate-600">
            <span className="h-3 w-3 rounded-full" style={{ background: v.color }}></span>
            {v.label}
          </div>
        ))}
      </div>
    </div>
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

  const donutValues = useMemo(() => {
    if (!data) return [];
    return [
      { label: "Students", value: data.student_count, color: palette.emerald },
      { label: "Staff", value: data.teacher_count, color: palette.sky },
      { label: "Classes", value: data.grade_count, color: palette.amber },
    ];
  }, [data]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 text-slate-500">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-indigo-200 border-t-indigo-600"></div>
          <span className="font-medium">Loading your dashboard...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
        <div className="max-w-md rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-xl">
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
      {/* Soft background blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-sky-200/40 blur-3xl"></div>
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-rose-200/40 blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl"></div>
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-2xl shadow-slate-200/50 sm:p-10">
          <div className="absolute inset-x-0 top-0 h-48 bg-[length:200%_100%] animate-[gradient-x_8s_ease_infinite] bg-gradient-to-r from-indigo-400 via-violet-400 to-rose-400">
            <WaveDivider />
          </div>

          <div className="relative pt-28 md:pt-32">
            <Greeting firstName={data.user.first_name} role={data.user.role} />
            <p className="mt-3 text-lg text-slate-500">
              You are managing{" "}
              <span className="font-semibold text-indigo-600 underline decoration-indigo-200 decoration-2 underline-offset-4">
                {data.school.name}
              </span>
              .
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-slate-500">
                {data.school.code}
              </span>
              <span className="rounded-full border border-amber-200 bg-amber-100 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-amber-700">
                {data.user.role}
              </span>
              {data.school.is_paid ? (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-100 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-emerald-700">
                  <Crown className="h-3.5 w-3.5" />
                  Pro Account
                </span>
              ) : (
                <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-slate-500">
                  Free Account
                </span>
              )}
            </div>
          </div>
        </section>

        {/* Stats with wavy tops */}
        <section className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => {
            const Icon = stat.icon;
            const value = data[stat.key];
            return (
              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white shadow-xl shadow-slate-200/40 transition-all hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className={`relative h-32 bg-[length:200%_200%] animate-[gradient-x_6s_ease_infinite] bg-gradient-to-br ${stat.color}`}>
                  <WaveDivider />
                  <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/30 text-white shadow-lg backdrop-blur">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="relative -mt-1 px-6 pb-6 pt-8">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">
                    {stat.label}
                  </p>
                  <div className="mt-2 text-4xl font-black tabular-nums text-slate-800">
                    <AnimatedCounter target={value} />
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* Bento + chart + table */}
        <section className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            {/* Quick actions */}
            <div className="rounded-[2.5rem] border border-slate-100 bg-white p-6 shadow-xl shadow-slate-200/40 sm:p-8">
              <h3 className="mb-5 flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-slate-400">
                <Zap className="h-4 w-4 text-amber-500" />
                Command Center
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                {quickActions.map((action) => {
                  const Icon = action.icon;
                  return (
                    <Link
                      key={action.title}
                      href={action.href}
                      className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:bg-white hover:shadow-lg"
                    >
                      <div className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${action.color} text-white shadow-md transition-transform group-hover:scale-110`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <p className={`text-sm font-black uppercase tracking-wider ${action.text}`}>
                        {action.title}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Recent students */}
            <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white p-6 shadow-xl shadow-slate-200/40 sm:p-8">
              <div className="absolute inset-x-0 top-0 h-24 bg-[length:200%_100%] animate-[gradient-x_7s_ease_infinite] bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400">
                <WaveDivider color="#ffffff" />
              </div>
              <div className="relative pt-14">
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
                          <tr key={i} className="border-b border-slate-50 last:border-0 transition-colors hover:bg-slate-50/60">
                            <td className="py-3.5 pl-2 font-semibold text-slate-800">
                              {s.first_name} {s.last_name}
                            </td>
                            <td className="py-3.5 text-slate-500">{s.admission_number}</td>
                            <td className="py-3.5">
                              <span
                                className={`rounded-full px-2.5 py-1 text-xs font-black uppercase tracking-wider ${
                                  s.gender === "M"
                                    ? "bg-sky-100 text-sky-600"
                                    : "bg-rose-100 text-rose-600"
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
          </div>

          {/* Right side cards */}
          <div className="space-y-6">
            {/* Donut chart */}
            <div className="rounded-[2.5rem] border border-slate-100 bg-white p-6 shadow-xl shadow-slate-200/40 sm:p-8">
              <h3 className="mb-6 text-center text-lg font-bold text-slate-900">School Distribution</h3>
              <DonutChart values={donutValues} />
            </div>

            {/* Pro Account */}
            <div className="rounded-[2.5rem] border border-slate-100 bg-white p-6 shadow-xl shadow-slate-200/40">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600">
                <Crown className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                {data.school.is_paid ? "Pro Account" : "Free Account"}
              </h3>
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

            {/* Pro tip */}
            <div className="relative overflow-hidden rounded-[2.5rem] bg-[length:200%_200%] animate-[gradient-x_8s_ease_infinite] bg-gradient-to-br from-indigo-500 via-violet-500 to-rose-400 p-6 text-white shadow-xl shadow-indigo-300/40 sm:p-8">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
                <Bell className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold">Pro tip</h3>
              <p className="mt-2 text-sm text-white/80">
                Most schools move from paper to Mwalimu Ease in an afternoon. The longer you wait, the more weekends you lose.
              </p>
              <Link
                href="/"
                className="mt-4 inline-block w-full rounded-2xl bg-white py-3 text-center text-sm font-semibold text-indigo-600 transition-colors hover:bg-slate-100"
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
