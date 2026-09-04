import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Mwalimu Ease",
  description:
    "Mwalimu Ease helps Kenyan school heads, bursars, and teachers spend less time on paperwork and more time on learners.",
};

const stats = [
  {
    title: "Hours back for teachers",
    body: "Enrolments, marks, and report cards stop being weekend work. Reduce marking errors and produce reports in minutes.",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    title: "Fewer fee disputes",
    body: "Payments and balances are recorded clearly, so bursars can answer parent questions with confidence.",
    color: "text-sky-600",
    bg: "bg-sky-50",
  },
  {
    title: "Less time searching",
    body: "Books and items are tracked from one place, so nothing goes missing quietly and staff stop wasting hours.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    title: "Calmer term starts",
    body: "Timetables are generated and shared without clashes, giving teachers and students a predictable rhythm.",
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
];

const values = [
  {
    title: "Your data stays yours",
    body: "Every school gets isolated records with controlled access, so learner information stays private and secure.",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    title: "Support that understands schools",
    body: "No expensive servers. No complicated IT team. Access from any browser and get help from people who know Kenyan schools.",
    color: "text-sky-600",
    bg: "bg-sky-50",
  },
];

export default function AboutPage() {
  return (
    <div
      className="relative min-h-screen pb-24 pt-20"
      style={{
        background:
          "radial-gradient(circle at top right, rgba(99, 102, 241, 0.04), transparent), radial-gradient(circle at bottom left, rgba(14, 165, 233, 0.04), transparent)",
      }}
    >
      <div className="mx-auto max-w-4xl px-6">
        <div className="space-y-16">
          <div className="text-center">
            <h1 className="mb-6 text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl">
              About{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-sky-500 bg-clip-text text-transparent">
                Mwalimu Ease
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Built to give Kenyan educators their evenings back — less
              paperwork, fewer fee disputes, and more time for what matters in
              school.
            </p>
          </div>

          <div className="space-y-12 text-lg leading-relaxed text-slate-600">
            <p>
              If you run or teach in a Kenyan school, you know the weight:
              late-night marking, chasing fee payments, reconciling
              spreadsheets, and hunting through files for a single learner
              record. Mwalimu Ease was built from those exact moments — the
              stress of paperwork, the risk of lost data, and the slow creep of
              admin work that pulls teachers away from teaching.
            </p>

            <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="absolute left-0 top-0 h-full w-2 bg-indigo-600"></div>
              <h2 className="mb-4 text-2xl font-bold italic text-slate-900">
                &ldquo;School administration should support teaching, not slow
                it down.&rdquo;
              </h2>
              <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
                The Mwalimu Ease Philosophy
              </p>
            </div>

            <p>
              School administration should support teaching, not slow it down.
              Mwalimu Ease brings student records, marks, fees, reports, and
              timetables into one calm, secure dashboard — so school heads,
              bursars, and teachers spend less time chasing information and
              more time running the school.
            </p>

            <h2 className="mb-6 mt-16 text-3xl font-bold text-slate-900">
              What changes when admin stops slowing you down
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              {stats.map((s) => (
                <div
                  key={s.title}
                  className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
                >
                  <div
                    className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${s.bg}`}
                  >
                    <svg
                      className={`h-6 w-6 ${s.color}`}
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
                  <h3 className="mb-2 text-xl font-bold text-slate-900">
                    {s.title}
                  </h3>
                  <p className="text-sm text-slate-600">{s.body}</p>
                </div>
              ))}
            </div>

            <h2 className="mb-6 mt-16 text-3xl font-bold text-slate-900">
              Built for the real pace of Kenyan schools
            </h2>
            <p>
              Mwalimu Ease is shaped by the realities of Kenyan education:
              termly fee cycles, multi-stream classes, CBC and 8-4-4 grading,
              and the need to work on the devices you already have. The old way
              means paperwork, spreadsheets, and last-minute panic. The new way
              is calm, organized, and fast — records when you need them,
              reports in minutes, and a clear view of fees and marks.
            </p>

            <div className="grid gap-8 md:grid-cols-2">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
                >
                  <div
                    className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${v.bg}`}
                  >
                    <svg
                      className={`h-6 w-6 ${v.color}`}
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
                  <h3 className="mb-2 text-xl font-bold text-slate-900">
                    {v.title}
                  </h3>
                  <p className="text-sm text-slate-600">{v.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center border-t border-slate-200 pt-16 text-center">
            <h2 className="mb-6 text-3xl font-bold text-slate-900">
              Is Mwalimu Ease right for your school?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-600">
              It is best for school heads, bursars, and teachers who want
              administration to support teaching, not slow it down.
            </p>
            <a
              href="/"
              className="rounded-lg bg-indigo-600 px-6 py-3.5 text-base font-medium text-white transition-colors hover:bg-indigo-700"
            >
              Register Your School
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
