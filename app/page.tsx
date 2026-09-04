import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mwalimu Ease | Modern School Management for Kenyan Schools",
  description:
    "Mwalimu Ease helps Kenyan schools stop report-card panic, avoid lost fee receipts, and find any record in seconds.",
};

const features = [
  {
    title: "No More Report-Card Panic",
    body: "Stop spending weekends compiling marks and broadsheets. Print fully formatted report cards in minutes.",
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
  {
    title: "Never Lose a Fee Receipt Again",
    body: "Replace the shoebox of receipts and disputed balances with real-time tracking and instant digital receipts.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    title: "Find Any Record in Seconds",
    body: "Pull up student, academic, or financial records safely from any phone, tablet, or desktop.",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
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
    <div className="overflow-hidden">
      <section
        className="relative"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(99, 102, 241, 0.06), transparent), radial-gradient(circle at bottom left, rgba(14, 165, 233, 0.06), transparent)",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-12 md:pb-32 md:pt-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6 text-center sm:space-y-8 lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1.5 text-xs font-medium text-indigo-800">
                <span className="h-2 w-2 rounded-full bg-indigo-600"></span>
                <span>Trusted by 50+ Schools in Kenya</span>
              </div>

              <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl">
                Reclaim Your Weekends.{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-sky-500 bg-clip-text text-transparent">
                  End Report-Card Panic.
                </span>
              </h1>

              <p className="mx-auto max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl lg:mx-0">
                Mwalimu Ease takes the late-night mark sheets, lost fee
                receipts, and end-of-term report rush off your hands.
              </p>

              <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row lg:justify-start">
                <a
                  href="/"
                  className="rounded-lg bg-indigo-600 px-6 py-3.5 text-center text-base font-medium text-white transition-colors hover:bg-indigo-700"
                >
                  Start Free Setup
                </a>
                <a
                  href="#features"
                  className="rounded-lg border border-slate-200 bg-white px-6 py-3.5 text-center text-base font-medium text-slate-700 transition-colors hover:bg-slate-50"
                >
                  View Features
                </a>
              </div>

              <div className="flex items-center justify-center gap-4 border-t border-slate-100 pt-8 lg:justify-start">
                <div className="flex -space-x-2">
                  {["A", "B", "C"].map((l, i) => (
                    <div
                      key={l}
                      className={`flex h-10 w-10 items-center justify-center rounded-full text-xs font-semibold ring-2 ring-white ${
                        i === 0
                          ? "bg-slate-200"
                          : i === 1
                            ? "bg-slate-300"
                            : "bg-slate-400"
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

            <div className="relative mx-auto max-w-2xl lg:max-w-none">
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xl">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-rose-400"></div>
                    <div className="h-3 w-3 rounded-full bg-amber-400"></div>
                    <div className="h-3 w-3 rounded-full bg-emerald-400"></div>
                  </div>
                  <span className="text-xs font-medium text-slate-400">
                    Dashboard Preview
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="h-3 w-3/4 rounded bg-slate-100"></div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-20 rounded-lg bg-indigo-50"></div>
                    <div className="h-20 rounded-lg bg-emerald-50"></div>
                    <div className="h-20 rounded-lg bg-sky-50"></div>
                  </div>
                  <div className="h-24 rounded-lg bg-slate-50"></div>
                  <div className="h-3 w-1/2 rounded bg-slate-100"></div>
                </div>
              </div>
              <div className="absolute -right-6 -top-6 hidden h-24 w-24 rounded-full bg-yellow-400/20 blur-2xl sm:block"></div>
              <div className="absolute -bottom-10 -left-10 hidden h-32 w-32 rounded-full bg-indigo-400/20 blur-3xl sm:block"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="mb-12 text-3xl font-bold text-slate-900 sm:mb-16 md:text-4xl">
            Stop Dreading Report Day, Losing Receipts, and Re-Typing Records
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 md:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div
                  className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${f.bg}`}
                >
                  <svg
                    className={`h-8 w-8 ${f.color}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900">
                  {f.title}
                </h3>
                <p className="leading-relaxed text-slate-600">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center sm:mb-20">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              One Place for Every Department
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              From mark entry to report cards, fee recording to arrears reports,
              and register scans to student lists.
            </p>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-200">
                <svg
                  className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Calm, Organized, and Fast
              </h3>
              <p className="text-lg leading-relaxed text-slate-600">
                See student numbers, staff, fees, and quick actions the moment
                you log in. Stop jumping between spreadsheets, files, and WhatsApp
                chats.
              </p>
              <ul className="space-y-4">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span className="font-medium text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/"
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
              >
                Start Enrolling Students Now
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-lg">
              <div className="space-y-3">
                <div className="h-4 w-1/3 rounded bg-slate-100"></div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-28 rounded-lg bg-indigo-50 p-4">
                    <div className="text-2xl font-black text-indigo-600">1,248</div>
                    <div className="text-xs font-medium text-slate-500">Students</div>
                  </div>
                  <div className="h-28 rounded-lg bg-emerald-50 p-4">
                    <div className="text-2xl font-black text-emerald-600">98%</div>
                    <div className="text-xs font-medium text-slate-500">Fees Collected</div>
                  </div>
                </div>
                <div className="h-40 rounded-lg bg-slate-50 p-4">
                  <div className="mb-2 h-2 w-3/4 rounded bg-slate-200"></div>
                  <div className="mb-2 h-2 w-1/2 rounded bg-slate-200"></div>
                  <div className="mb-2 h-2 w-5/6 rounded bg-slate-200"></div>
                  <div className="h-2 w-2/3 rounded bg-slate-200"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
