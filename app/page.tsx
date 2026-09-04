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
    glow: "group-hover:shadow-rose-500/20",
  },
  {
    title: "Never Lose a Fee Receipt Again",
    body: "Replace the shoebox of receipts and disputed balances with real-time tracking, instant receipts, and arrears reports in one click.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    glow: "group-hover:shadow-emerald-500/20",
  },
  {
    title: "Find Any Record in Seconds",
    body: "Pull up student, academic, or financial records safely from any phone, tablet, or desktop — no more lost files or 'I will check on Monday'.",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
    glow: "group-hover:shadow-indigo-500/20",
  },
];

const bento = [
  {
    title: "One Place for Every Department",
    body: "See student numbers, staff, fees, and quick actions the moment you log in. Stop jumping between spreadsheets and WhatsApp chats.",
    className: "md:col-span-2",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    title: "Student Registry",
    body: "Enroll, search, promote, and export students in seconds. Bulk uploads keep class lists accurate year after year.",
    className: "",
    color: "text-sky-600",
    bg: "bg-sky-50",
  },
  {
    title: "Marks & Reports",
    body: "Enter marks by grade and stream with built-in checks. Generate PDF report cards, broadsheets, and rankings automatically.",
    className: "",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    title: "Fees & Receipts",
    body: "Record payments, track arrears, and send instant receipts. Bursars close the books faster and parents get clear answers.",
    className: "md:col-span-2",
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

const schools = [
  "Nairobi Academy",
  "Mombasa Junior",
  "Kisumu Central",
  "Eldoret School",
  "Nakuru High",
  "Thika Academy",
  "Ruiru Primary",
  "Machakos School",
];

const steps = [
  {
    title: "Set up your school",
    body: "Add classes, streams, subjects, and staff in minutes. No complicated IT required.",
  },
  {
    title: "Record marks & fees",
    body: "Teachers enter marks. Bursars record fees. Everything stays linked to the right student.",
  },
  {
    title: "Generate reports instantly",
    body: "One click produces report cards, broadsheets, and fee statements — ready to print or share.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-50/50 pb-24 pt-12 sm:pb-32 sm:pt-20">
        <div className="absolute inset-0 -z-10 bg-grid opacity-25"></div>
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -right-20 -top-20 h-[600px] w-[600px] rounded-full bg-indigo-400/20 blur-3xl animate-blob"></div>
          <div className="absolute left-0 top-40 h-[500px] w-[500px] rounded-full bg-sky-400/20 blur-3xl animate-blob-delayed"></div>
          <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-emerald-400/20 blur-3xl animate-blob"></div>
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
                <span className="text-gradient">End Report-Card Panic.</span>
              </h1>

              <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
                Mwalimu Ease takes the late-night mark sheets, lost fee
                receipts, and end-of-term report rush off your hands — so you
                can close school on Friday and actually rest.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-indigo-600/20 transition-all hover:brightness-110"
                >
                  See Pricing
                </Link>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3.5 text-base font-semibold text-slate-700 shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50 hover:shadow-md"
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

            <div className="relative mx-auto w-full max-w-xl [perspective:1200px] lg:max-w-none">
              <div className="animate-float">
                <div className="group relative rounded-[2.5rem] bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-500 p-[3px] shadow-2xl shadow-indigo-500/25">
                  <div className="relative overflow-hidden rounded-[2.35rem] bg-white p-6 sm:p-8">
                    <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-indigo-50 opacity-40 blur-3xl"></div>

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

                    <div className="relative z-10 grid grid-cols-3 gap-3">
                      <div className="rounded-2xl bg-indigo-50 p-4 transition-transform hover:-translate-y-1">
                        <div className="text-2xl font-black text-indigo-700">
                          1,248
                        </div>
                        <div className="text-[10px] font-semibold uppercase tracking-wider text-indigo-500">
                          Students
                        </div>
                      </div>
                      <div className="rounded-2xl bg-emerald-50 p-4 transition-transform hover:-translate-y-1">
                        <div className="text-2xl font-black text-emerald-700">
                          98%
                        </div>
                        <div className="text-[10px] font-semibold uppercase tracking-wider text-emerald-500">
                          Fees In
                        </div>
                      </div>
                      <div className="rounded-2xl bg-sky-50 p-4 transition-transform hover:-translate-y-1">
                        <div className="text-2xl font-black text-sky-700">42</div>
                        <div className="text-[10px] font-semibold uppercase tracking-wider text-sky-500">
                          Teachers
                        </div>
                      </div>
                    </div>

                    <div className="relative z-10 mt-4 rounded-2xl bg-slate-50 p-4">
                      <div className="mb-3 h-2 w-1/3 rounded bg-slate-200"></div>
                      <div className="space-y-2">
                        <div className="h-2 w-full rounded bg-slate-200"></div>
                        <div className="h-2 w-5/6 rounded bg-slate-200"></div>
                        <div className="h-2 w-4/6 rounded bg-slate-200"></div>
                      </div>
                    </div>

                    <div className="relative z-10 mt-4 flex gap-3">
                      <div className="h-10 flex-1 rounded-xl bg-indigo-100 transition-colors hover:bg-indigo-200"></div>
                      <div className="h-10 flex-1 rounded-xl bg-slate-100 transition-colors hover:bg-slate-200"></div>
                    </div>

                    <div className="pointer-events-none absolute inset-0 -left-1/2 -z-0 h-full w-1/2 -skew-x-12 bg-white/20 opacity-0 transition-opacity duration-700 group-hover:opacity-100 group-hover:animate-shimmer"></div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 top-12 hidden animate-float rounded-2xl border border-emerald-100 bg-white/90 p-4 shadow-lg backdrop-blur sm:block">
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

              <div className="absolute -left-8 bottom-16 hidden animate-float-delayed rounded-2xl border border-indigo-100 bg-white/90 p-4 shadow-lg backdrop-blur sm:block">
                <div className="text-xs font-semibold text-slate-400">Arrears today</div>
                <div className="text-lg font-black text-indigo-600">Ksh 0</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-slate-100 bg-white py-12">
        <p className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-slate-400">
          Trusted by leading Kenyan schools
        </p>
        <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="animate-marquee flex shrink-0 items-center gap-12 pr-12">
            {schools.map((s) => (
              <span
                key={s}
                className="whitespace-nowrap text-2xl font-black text-slate-200"
              >
                {s}
              </span>
            ))}
          </div>
          <div className="animate-marquee flex shrink-0 items-center gap-12 pr-12">
            {schools.map((s) => (
              <span
                key={`${s}-dup`}
                className="whitespace-nowrap text-2xl font-black text-slate-200"
              >
                {s}
              </span>
            ))}
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
                className={`group relative overflow-hidden rounded-3xl border ${f.border} bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-2xl ${f.glow}`}
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
                className={`group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10 ${item.className}`}
              >
                <div
                  className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${item.bg} ${item.color}`}
                >
                  <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="leading-relaxed text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                  From Mark Entry to Report Cards Without the Weekend Rush
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-slate-600">
                  Enter marks by grade, stream, and assessment with built-in
                  checks. Generate PDF report cards, broadsheets, and rankings
                  automatically.
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
              <div className="relative rounded-3xl bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-500 p-[3px] shadow-xl shadow-indigo-500/20">
                <div className="rounded-[calc(1.5rem-2px)] bg-white p-6">
                  <div className="mb-4 h-3 w-1/3 rounded bg-slate-100"></div>
                  <div className="space-y-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex items-center gap-4 rounded-xl bg-slate-50 p-4 transition-colors hover:bg-indigo-50">
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

      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              How Mwalimu Ease Works
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Three simple steps from setup to report day.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-indigo-200 via-sky-200 to-emerald-200 md:block"></div>
            <div className="space-y-12 md:space-y-0">
              {steps.map((step, i) => (
                <div
                  key={step.title}
                  className={`relative flex flex-col gap-6 md:w-1/2 ${
                    i % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"
                  }`}
                >
                  <div className="absolute left-1/2 top-0 hidden h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-indigo-600 to-sky-500 text-sm font-black text-white shadow-lg md:flex">
                    {i + 1}
                  </div>
                  <div className="md:hidden flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-sky-500 text-sm font-black text-white shadow-lg">
                    {i + 1}
                  </div>
                  <div className="rounded-3xl border border-slate-200 bg-slate-50/50 p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                    <h3 className="mb-2 text-xl font-bold text-slate-900">{step.title}</h3>
                    <p className="text-slate-600">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-sky-600/20 blur-3xl"></div>
        <div className="absolute inset-0 -z-10 bg-grid-dark opacity-20"></div>

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Ready to get your weekends back?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            Join the Kenyan schools that have already traded paperwork panic
            for calm, organized records. Start your 40-day free trial today.
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
