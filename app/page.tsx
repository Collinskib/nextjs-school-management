import type { Metadata } from "next";
import Link from "next/link";
import FAQ from "./components/FAQ";

export const metadata: Metadata = {
  title: "Mwalimu Ease | Modern School Management for Kenyan Schools",
  description:
    "Mwalimu Ease helps Kenyan schools stop report-card panic, avoid lost fee receipts, and find any record in seconds.",
};

const painPoints = [
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
    body: "Pull up student, academic, or financial records safely from any phone, tablet, or desktop—no more lost files or 'I will check on Monday.'",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
  },
];

const modules = [
  {
    title: "One Place for Every Department",
    body: "See student numbers, staff, fees, and quick actions the moment you log in. Stop jumping between spreadsheets, files, and WhatsApp chats to find one answer.",
    points: [
      "See student counts, staff, and fees in one glance",
      "Open marks, fees, or reports without digging through files",
    ],
    image: "/images/dashboard1.png",
    alt: "Mwalimu Ease dashboard with marks, fees, and reports",
    caption: "1. Log in → 2. See alerts → 3. Jump to marks, fees, or reports",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    title: "A Student Registry That Doesn’t Eat Your Afternoon",
    body: "Enroll, search, promote, and export students in seconds. Bulk uploads and promotion tools keep your class lists accurate year after year, without re-typing the same names.",
    points: [
      "Find any student by name, admission, grade, or stream in seconds",
      "Promote classes in bulk and print class lists whenever you need them",
    ],
    image: "/images/students.png",
    alt: "Student registry with search and bulk tools",
    caption: "1. Search → 2. Promote → 3. Export class lists",
    color: "text-sky-600",
    bg: "bg-sky-50",
    span: "",
  },
  {
    title: "From Mark Entry to Report Cards Without the Weekend Rush",
    body: "Enter marks by grade, stream, and assessment with built-in checks. Generate PDF report cards, broadsheets, and class rankings automatically—no more report-card weekends.",
    points: [
      "Enter marks once, for one student or the whole class",
      "Get PDF report cards, broadsheets, and rankings automatically",
    ],
    image: "/images/marks_entry.png",
    alt: "Marks entry and auto-generated report cards",
    caption: "1. Enter marks → 2. Validate → 3. Print report cards",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    span: "",
  },
  {
    title: "Fee Records That Don’t Disappear",
    body: "Track expected, collected, and outstanding fees in real time. Assign fee packages to grades and streams, record payments, and stop losing receipts or shillings.",
    points: [
      "Every student’s balance and a receipt trail in one place",
      "Pull stream and grade-level fee statements in one click",
    ],
    image: "/images/finances.png",
    alt: "Fee tracking and arrears dashboard",
    caption: "1. Record payment → 2. Auto-receipt → 3. View arrears",
    color: "text-amber-600",
    bg: "bg-amber-50",
    span: "",
  },
  {
    title: "Timetables That Build Themselves",
    body: "Set rooms, periods, and teacher availability once, then let Mwalimu Ease generate a clash-free timetable for every stream and subject. No more double-booked classrooms or Friday-night scheduling.",
    points: [
      "Respect teacher availability, room limits, and subject constraints",
      "Publish and print timetables for each class, teacher, and room",
    ],
    image: "/images/timetable_web.png",
    alt: "Sample school timetable view",
    caption: "1. Set rules → 2. Generate → 3. Publish timetables",
    color: "text-sky-600",
    bg: "bg-sky-50",
    span: "",
  },
];

const extras = [
  {
    title: "No More Lost Library Cards",
    body: "Catalog books, see who has what, and flag overdue returns before the books go missing.",
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    title: "Timetables That Don’t Clash",
    body: "Generate timetables that respect teachers, streams, and rooms—no more double-booked classrooms.",
    color: "bg-sky-100 text-sky-600",
  },
  {
    title: "Reports That Look Official Instantly",
    body: "Upload your logo, signature, and colors so every report and fee statement looks official from the first print.",
    color: "bg-rose-100 text-rose-600",
  },
  {
    title: "Let Staff and Parents Help Themselves",
    body: "Give teachers and parents secure access to marks, fees, and notices—fewer interruptions for you.",
    color: "bg-emerald-100 text-emerald-600",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-white pb-20 pt-12 sm:pb-28 sm:pt-20">
        <div className="absolute inset-0 -z-10 bg-grid opacity-25"></div>
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -right-20 -top-20 h-[600px] w-[600px] rounded-full bg-indigo-400/20 blur-3xl animate-blob"></div>
          <div className="absolute left-0 top-40 h-[500px] w-[500px] rounded-full bg-sky-400/20 blur-3xl animate-blob-delayed"></div>
          <div className="absolute bottom-0 right-1/3 h-[400px] w-[400px] rounded-full bg-emerald-400/20 blur-3xl animate-blob"></div>
        </div>

        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/80 px-4 py-1.5 text-xs font-semibold text-indigo-700 backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-600"></span>
              Trusted by 50+ Schools in Kenya
            </div>

            <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl md:text-7xl">
              Reclaim Your Weekends.{" "}
              <span className="text-gradient">End Report-Card Panic.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Mwalimu Ease takes the late-night mark sheets, lost fee receipts,
              and end-of-term report rush off your hands—so you can close school
              on Friday and actually rest.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-indigo-600/20 transition-all hover:brightness-110"
              >
                Start Free Setup
              </Link>
              <a
                href="#showcase"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-700 shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50 hover:shadow-md"
              >
                See How It Works
              </a>
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <div className="flex -space-x-3">
                {["A", "B", "C"].map((l, i) => (
                  <div
                    key={l}
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold text-white ring-2 ring-white ${
                      i === 0 ? "bg-indigo-500" : i === 1 ? "bg-sky-500" : "bg-emerald-500"
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

          <div className="relative mx-auto mt-16 max-w-5xl">
            <div className="relative [perspective:1200px]">
              <div className="relative rounded-[2.5rem] bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-500 p-[3px] shadow-2xl shadow-indigo-500/25">
                <div className="relative overflow-hidden rounded-[2.35rem] bg-white p-2">
                  <img
                    src="/images/dashboard1.png"
                    alt="Mwalimu Ease dashboard with marks, fees, and reports"
                    className="w-full rounded-3xl"
                  />
                </div>
              </div>
            </div>

            <div className="absolute -right-4 top-8 hidden animate-float rounded-2xl border border-emerald-100 bg-white/90 p-4 shadow-lg backdrop-blur sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Reports ready</div>
                  <div className="text-xs text-slate-500">in 3 minutes</div>
                </div>
              </div>
            </div>

            <div className="absolute -left-6 bottom-12 hidden animate-float-delayed rounded-2xl border border-indigo-100 bg-white/90 p-4 shadow-lg backdrop-blur sm:block">
              <div className="text-xs font-semibold text-slate-400">Arrears today</div>
              <div className="text-lg font-black text-indigo-600">Ksh 0</div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-slate-50/50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Stop Dreading Report Day, Losing Receipts, and Re-Typing Records
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Mwalimu Ease replaces the daily panic with calm, organized school
              records.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {painPoints.map((p) => (
              <div
                key={p.title}
                className={`group relative overflow-hidden rounded-3xl border ${p.border} bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-2xl`}
              >
                <div
                  className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${p.bg} transition-transform group-hover:scale-110`}
                >
                  <svg className={`h-7 w-7 ${p.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900">{p.title}</h3>
                <p className="leading-relaxed text-slate-600">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="showcase" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              See Exactly Where Mwalimu Ease Fits
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              From mark entry to report cards, fee recording to arrears reports,
              register scans to student lists—clear steps that keep school
              moving.
            </p>
          </div>

          <div className="grid auto-rows-fr gap-6 md:grid-cols-2">
            {modules.map((m) => (
              <div
                key={m.title}
                className={`group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-2xl ${m.span}`}
              >
                <div className="relative overflow-hidden p-4">
                  <img
                    src={m.image}
                    alt={m.alt}
                    className="w-full rounded-2xl border border-slate-100 shadow-sm transition-transform duration-700 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  <p className="mt-4 text-center text-sm font-semibold text-slate-500">
                    {m.caption}
                  </p>
                </div>
                <div className="flex flex-1 flex-col p-8 pt-0">
                  <div
                    className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${m.bg} ${m.color}`}
                  >
                    <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-slate-900">{m.title}</h3>
                  <p className="mb-6 leading-relaxed text-slate-600">{m.body}</p>
                  <ul className="mt-auto space-y-3">
                    {m.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-sm font-medium text-slate-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            <div className="group flex flex-col justify-center overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-2xl">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0020.07 7H21a2 2 0 012 2v9a2 2 0 01-2 2H3a2 2 0 01-2-2V9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-slate-900">
                From Paper Register to Student List in Seconds
              </h3>
              <p className="mb-6 leading-relaxed text-slate-600">
                Snap a photo of a handwritten class register and let Mwalimu
                Ease do the typing. It reads up to four images at once, lists the
                names for you to review, and adds the students with one click—no
                more re-typing.
              </p>
              <ul className="space-y-3">
                {[
                  "Capture or upload up to 4 register photos",
                  "OCR extracts handwritten names for you to review",
                  "Review, edit, and confirm—then add the class in one click",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-sm font-medium text-slate-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50/50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              More Ways to Take the Pressure Off
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Extra tools that keep timetables, library cards, and parent
              questions off your weekend to-do list.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {extras.map((e) => (
              <div
                key={e.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${e.color}`}>
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="mb-2 text-lg font-bold text-slate-900">{e.title}</h4>
                <p className="text-sm leading-relaxed text-slate-600">{e.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-slate-600">Straight answers. No sales pitch.</p>
            <p className="mt-2 text-sm text-slate-500">
              Mwalimu Ease is best for Kenyan primary and secondary schools that
              want to stop losing time to mark sheets, fee receipts, and
              end-of-term reports.
            </p>
          </div>

          <FAQ />
        </div>
      </section>

      <section className="relative overflow-hidden bg-indigo-600 py-24 text-white">
        <div className="absolute -right-40 -top-40 h-[400px] w-[400px] rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-sky-400/20 blur-3xl"></div>

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to Leave the Late Nights Behind?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-indigo-100">
            Most schools move from paper to Mwalimu Ease in an afternoon. The
            longer you wait, the more weekends you lose.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-indigo-600 transition-colors hover:bg-slate-50"
            >
              Register School
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-xl border border-white px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              Learn More
            </Link>
          </div>
          <p className="mt-8 text-sm font-medium text-indigo-200">
            No long contracts &bull; Your data stays private &bull; Help when you need it
          </p>
        </div>
      </section>
    </>
  );
}
