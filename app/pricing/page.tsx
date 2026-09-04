import type { Metadata } from "next";
import PricingCalculator from "../components/PricingCalculator";

export const metadata: Metadata = {
  title: "Pricing | Mwalimu Ease - Calm School Administration for Kenyan Schools",
  description:
    "Predictable school management pricing for Kenya. Pay Ksh 110 once per new student, get Year 1 maintenance free, then Ksh 5,000/year.",
};

const features = [
  "CBC & 8-4-4 grading with fewer mark-entry errors",
  "Batch report cards in PDF & Excel",
  "Fee tracking & automatic digital receipts",
  "Library & textbook inventory with one quick search",
  "Teacher & administrator portals with clear access",
  "Parent SMS notifications without manual calls",
  "Daily automated cloud backups",
  "Priority support when term-end pressure hits",
];

const maintenance = [
  {
    item: "Cloud Server Hosting",
    save: "No expensive server hardware or downtime. Staff log in and work, even during heavy exam-reporting weeks.",
  },
  {
    item: "Database Optimization",
    save: "Fee receipts, grades, and student records stay fast and organized as your school grows.",
  },
  {
    item: "Automated Daily Backups",
    save: "No more panic over lost laptops, viruses, or power surges. Every record is backed up automatically.",
  },
  {
    item: "Priority Technical Support",
    save: "Direct help from a team that understands Kenyan schools when the pressure is highest.",
  },
];

const benefits = [
  {
    title: "One Fee, No Termly Budget Shocks",
    body: "Pay Ksh 110 once for each new student. No recurring term fees, no per-child invoices.",
  },
  {
    title: "Records You Can Trust",
    body: "Every payment and mark is recorded clearly, so school heads can answer parent questions with confidence.",
  },
  {
    title: "Time Back for Teachers",
    body: "Reports, broadsheets, and class lists that used to take days now take minutes.",
  },
];

export default function PricingPage() {
  return (
    <main
      className="px-6 pb-20 pt-20"
      style={{
        background:
          "radial-gradient(circle at top right, rgba(99, 102, 241, 0.08), transparent), radial-gradient(circle at bottom left, rgba(14, 165, 233, 0.08), transparent)",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 space-y-8 text-center">
          <h1 className="text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
            No More Termly Subscription Shocks.{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-sky-500 bg-clip-text text-transparent">
              Just Calm, Confident School Management.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg font-medium leading-relaxed text-slate-600 md:text-xl">
            Replace unpredictable software bills, lost fee receipts, and
            report-day panic with one predictable cost: Ksh 110 once for each
            new student. Year 1 maintenance is free.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/"
              className="w-full rounded-2xl bg-indigo-600 px-10 py-5 text-center text-xs font-black uppercase tracking-[0.2em] text-white shadow-2xl shadow-indigo-500/20 transition-colors hover:bg-indigo-500 sm:w-auto"
            >
              Start Free 40-Day Trial
            </a>
            <a
              href="#calculator"
              className="w-full rounded-2xl border-2 border-slate-200 bg-white px-10 py-5 text-center text-xs font-black uppercase tracking-[0.2em] text-slate-900 transition-colors hover:border-indigo-600 hover:text-indigo-600 sm:w-auto"
            >
              See What You Save
            </a>
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
            No credit card required
          </p>
        </div>

        <div className="mb-20 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600">
              Pricing Built for Kenyan Schools
            </span>
          </div>
          <h2 className="mb-4 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
            Ksh 110 Per New Student Once.{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-sky-500 bg-clip-text text-transparent">
              Year 1 Maintenance Included Free.
            </span>
          </h2>
          <p className="mx-auto max-w-2xl font-medium text-slate-500">
            No per-term subscriptions. No surprise charges. Returning students
            are always re-admitted for Ksh 0.
          </p>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-[2.5rem] border-2 border-slate-200 bg-white p-8 shadow-2xl transition-all hover:-translate-y-3 hover:border-indigo-500 hover:shadow-2xl md:p-12">
            <div className="absolute right-0 top-0 p-8">
              <span className="rounded-full bg-gradient-to-br from-indigo-600 to-purple-500 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-white shadow-lg">
                Best Value
              </span>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="mb-2 text-3xl font-black uppercase tracking-tight text-slate-900">
                  Mwalimu Ease — One Complete Plan
                </h2>
                <p className="font-medium text-slate-500">
                  Every module included from day one. No feature tiers to
                  compare.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black tracking-tighter text-slate-900">
                    Ksh 110
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    / New Student / One-Time
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black tracking-tighter text-emerald-600">
                    + Ksh 0 Maintenance in Year 1
                  </span>
                </div>
                <p className="text-xs font-black uppercase tracking-widest text-slate-400">
                  (Ksh 5,000/year starting Year 2)
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
                  <h4 className="mb-1 text-sm font-black uppercase tracking-tight text-emerald-900">
                    First Year Free
                  </h4>
                  <p className="text-xs font-bold leading-relaxed text-emerald-700">
                    Zero server or database maintenance fees for your entire
                    first year.
                  </p>
                </div>
                <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-4">
                  <h4 className="mb-1 text-sm font-black uppercase tracking-tight text-indigo-900">
                    Year 2 Onward
                  </h4>
                  <p className="text-xs font-bold leading-relaxed text-indigo-700">
                    A flat Ksh 5,000/year covers hosting, daily backups, updates,
                    and support for your whole school.
                  </p>
                </div>
              </div>

              <ul className="space-y-4 border-t border-slate-100 pt-8">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
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
                    </div>
                    <span className="text-sm font-bold tracking-tight text-slate-700">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="/"
                className="block w-full rounded-2xl bg-slate-900 py-5 text-center text-xs font-black uppercase tracking-[0.2em] text-white shadow-xl transition-colors hover:bg-indigo-600"
              >
                Start Free 40-Day Trial
              </a>
              <p className="text-center text-[10px] font-black uppercase tracking-widest text-slate-400">
                No credit card required &bull; Full access to all features
              </p>
            </div>
          </div>

          <div className="space-y-12">
            <PricingCalculator />

            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-[2rem] border border-amber-100 bg-amber-50 p-6">
                <h4 className="mb-1 text-sm font-black uppercase tracking-tight text-amber-900">
                  40 Days to Feel the Relief
                </h4>
                <p className="text-[10px] font-bold uppercase leading-relaxed text-amber-700">
                  Use your real school data for over a month before paying.
                </p>
              </div>
              <div className="rounded-[2rem] border border-violet-100 bg-violet-50 p-6">
                <h4 className="mb-1 text-sm font-black uppercase tracking-tight text-violet-900">
                  Free Setup, No Surprise Fees
                </h4>
                <p className="text-[10px] font-bold uppercase leading-relaxed text-violet-700">
                  Free implementation, migration help, and staff guidance.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-32 mt-32">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
              What the Year 2 Maintenance Fee Really Covers
            </h2>
            <p className="mx-auto max-w-2xl font-medium text-slate-500">
              A flat Ksh 5,000/year keeps your school&apos;s records safe, fast,
              and supported.
            </p>
          </div>
          <div className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-xl">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50">
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">
                    What Your Ksh 5,000/Year Includes
                  </th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">
                    What That Saves You
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {maintenance.map((row, i) => (
                  <tr
                    key={row.item}
                    className={
                      i !== maintenance.length - 1 ? "border-b border-slate-100" : ""
                    }
                  >
                    <td className="p-6 font-black text-slate-900">{row.item}</td>
                    <td className="p-6 font-medium text-slate-600">{row.save}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 rounded-2xl border border-indigo-100 bg-indigo-50 p-6 text-center">
            <p className="text-sm font-bold leading-relaxed text-indigo-900">
              At less than Ksh 14 per day, the Year 2 maintenance fee costs
              less than a single ream of printing paper each month — while
              removing the risk of lost records, manual errors, and last-minute
              report panic.
            </p>
          </div>
        </div>

        <div className="mb-32">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-black tracking-tight text-slate-900">
              What School Heads Actually Get
            </h2>
            <p className="mx-auto max-w-xl font-medium text-slate-500">
              Predictable costs, fewer disputes, and records you can trust.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-xl"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 shadow-sm">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-lg font-black tracking-tight text-slate-900">
                  {b.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 font-medium">
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
