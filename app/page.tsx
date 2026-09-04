import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mwalimu Ease | Modern School Management for Kenyan Schools",
  description:
    "Mwalimu Ease helps Kenyan schools stop report-card panic, avoid lost fee receipts, and find any record in seconds.",
};

const features = [
  {
    title: "No More Report-Card Panic",
    body: "Stop spending weekends compiling marks and broadsheets. Print fully formatted report cards in minutes and walk out while the sun is still up.",
    color: "text-rose-600",
    bg: "bg-rose-50",
    border: "border-rose-100",
  },
  {
    title: "Never Lose a Fee Receipt Again",
    body: "Replace the shoebox of receipts and disputed balances with real-time tracking, instant receipts, and arrears reports in one click.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
  {
    title: "Find Any Record in Seconds",
    body: "Pull up student, academic, or financial records safely from any phone, tablet, or desktop — no more lost files or 'I will check on Monday'.",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
  },
];

const bento = [
  {
    title: "One Place for Every Department",
    body: "See student numbers, staff, fees, and quick actions the moment you log in. Stop jumping between spreadsheets and WhatsApp chats.",
    className: "md:col-span-2",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
      />
    ),
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    title: "Student Registry",
    body: "Enroll, search, promote, and export students in seconds. Bulk uploads keep class lists accurate year after year.",
    className: "",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
      />
    ),
    color: "text-sky-600",
    bg: "bg-sky-50",
  },
  {
    title: "Marks & Reports",
    body: "Enter marks by grade and stream with built-in checks. Generate PDF report cards, broadsheets, and rankings automatically.",
    className: "",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
      />
    ),
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    title: "Fees & Receipts",
    body: "Record payments, track arrears, and send instant receipts. Bursars close the books faster and parents get clear answers.",
    className: "md:col-span-2",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
];

const highlights = [
  "Enter marks once, for one student or the whole class",
  "Get PDF report cards, broadsheets, and rankings automatically",
  "Track fees, arrears, and receipts in real time",
  "Promote classes in bulk and export lists when you need them",
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-white pb-24 pt-12 sm:pb-32 sm:pt-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -right-20 -top-20 h-[600px] w-[600px] rounded-full bg-indigo-100/40 blur-3xl"></div>
          <div className="absolute -left-20 top-40 h-[500px] w-[500px] rounded-full bg-sky-100/40 blur-3xl"></div>
        </div>

        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/80 px-4 py-1.5 text-xs font-semibold text-indigo-700 backdrop-blur-sm">
                <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-600"></span>
                Trusted by 50+ Schools in Kenya
              </div>

              <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
                Reclaim Your Weekends.{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-sky-500 bg-clip-text text-transparent">
                  End Report-Card Panic.
                </span>
              </h1>

              <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
                Mwalimu Ease takes the late-night mark sheets, lost fee
                receipts, and end-of-term report rush off your hands — so you
                can close school on Friday and actually rest.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-indigo-600/20 transition-all hover:bg-indigo-700 hover:shadow-indigo-600/30"
                >
                  See Pricing
                </Link>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3.5 text-base font-semibold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50"
                >
                  Explore Features
                </a>
              </div>

              <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <div className="flex -space-x-3">
                  {["A", "B", "C", "D"].map((l, i) => (
                    <div
                      key={l}
                      className={`flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold text-white ring-2 ring-white ${
                        i === 0
                          ? "bg-indigo-500"
                          : i === 1
                            ? "bg-sky-500"
                            : i === 2
                              ? "bg-emerald-500"
                              : "bg-rose-500"
                      }`}
                    >
                      {l}
                    </div>
                  ))}
                </div>
                <p className="text-sm font-medium text-slate-500">
                  <span className="font-bold text-slate-900">2,000+</span>{" "}
                  teachers already leaving the Friday-night paperwork behind.
                </p>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
              <div className="relative rounded-[2rem] border border-slate-200 bg-white/80 p-5 shadow-2xl shadow-slate-900/10 backdrop-blur sm:p-7">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-rose-400"></div>
                    <div className="h-3 w-3 rounded-full bg-amber-400"></div>
                    <div className="h-3 w-3 rounded-full bg-emerald-400"></div>
                  </div>
                  <span className="text-xs font-semibold text-slate-400">
                    School Dashboard
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-2xl bg-indigo-50 p-4">
                    <div className="text-2xl font-black text-indigo-700">1,248</div>
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-indigo-500">
                      Students
                    </div>
                  </div>
                  <div className="rounded-2xl bg-emerald-50 p-4">
                    <div className="text-2xl font-black text-emerald-700">98%</div>
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-emerald-500">
                      Fees In
                    </div>
                  </div>
                  <div className="rounded-2xl bg-sky-50 p-4">
                    <div className="text-2xl font-black text-sky-700">42</div>
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-sky-500">
                      Teachers
                    </div>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl bg-slate-50 p-4">
                  <div className="mb-3 h-2 w-1/3 rounded bg-slate-200"></div>
                  <div className="space-y-2">
                    <div className="h-2 w-full rounded bg-slate-200"></div>
                    <div className="h-2 w-5/6 rounded bg-slate-200"></div>
                    <div className="h-2 w-4/6 rounded bg-slate-200"></div>
                  </div>
                </div>

                <div className="mt-4 flex gap-3">
                  <div className="h-10 flex-1 rounded-xl bg-indigo-100"></div>
                  <div className="h-10 flex-1 rounded-xl bg-slate-100"></div>
                </div>
              </div>

              <div className="absolute -right-4 top-12 hidden rounded-2xl border border-emerald-100 bg-white p-4 shadow-lg sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">Reports printed</div>
                    <div className="text-xs text-slate-500">in 3 minutes</div>
                  </div>
                </div>
              </div>

              <div className="absolute -left-6 bottom-16 hidden rounded-2xl border border-indigo-100 bg-white p-4 shadow-lg sm:block">
                <div className="text-xs font-semibold text-slate-400">Arrears today</div>
                <div className="text-lg font-black text-indigo-600">Ksh 0</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-slate-50/50 py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 text-center sm:grid-cols-3">
            <div>
              <div className="text-3xl font-black text-indigo-600">50+</div>
              <div className="mt-1 text-sm font-semibold text-slate-600">Kenyan schools onboard</div>
            </div>
            <div>
              <div className="text-3xl font-black text-emerald-600">2,000+</div>
              <div className="mt-1 text-sm font-semibold text-slate-600">Teachers using the platform</div>
            </div>
            <div>
              <div className="text-3xl font-black text-sky-600">40</div>
              <div className="mt-1 text-sm font-semibold text-slate-600">Day free trial</div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Stop Dreading Report Day, Losing Receipts, and Re-Typing Records
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Built from the real frustrations of running a Kenyan school.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className={`group relative overflow-hidden rounded-3xl border ${f.border} bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl`}
              >
                <div
                  className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${f.bg} transition-transform group-hover:scale-110`}
                >
                  <svg className={`h-7 w-7 ${f.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900">{f.title}</h3>
                <p className="leading-relaxed text-slate-600">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50/50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Everything a School Needs in One Calm Dashboard
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              See exactly where Mwalimu Ease fits into your daily workflow.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {bento.map((item) => (
              <div
                key={item.title}
                className={`rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl ${item.className}`}
              >
                <div
                  className={`mb-6 flex h-12 w-12 items-center justify-center rounded-2xl ${item.bg} ${item.color}`}
                >
                  <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="leading-relaxed text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                  From Mark Entry to Report Cards Without the Weekend Rush
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-slate-600">
                  Enter marks by grade, stream, and assessment with built-in
                  checks. Generate PDF report cards, broadsheets, and class
                  rankings automatically.
                </p>
                <ul className="mt-8 space-y-4">
                  {highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="font-medium text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/pricing"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-600"
                >
                  Start Free Setup
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
              <div className="relative rounded-3xl bg-gradient-to-br from-indigo-500 to-sky-500 p-1 shadow-xl">
                <div className="rounded-[1.35rem] bg-white p-6">
                  <div className="mb-4 h-3 w-1/3 rounded bg-slate-100"></div>
                  <div className="space-y-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex items-center gap-4 rounded-xl bg-slate-50 p-4">
                        <div className="h-10 w-10 rounded-full bg-indigo-100"></div>
                        <div className="flex-1 space-y-2">
                          <div className="h-2 w-3/4 rounded bg-slate-200"></div>
                          <div className="h-2 w-1/2 rounded bg-slate-200"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-sky-600/20 blur-3xl"></div>

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Ready to get your weekends back?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            Join the Kenyan schools that have already traded paperwork panic for
            calm, organized records. Start your 40-day free trial today.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-slate-900 transition-colors hover:bg-slate-100"
            >
              View Pricing
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-slate-800"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
