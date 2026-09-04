"use client";

import { useState } from "react";

export default function PricingCalculator() {
  const [students, setStudents] = useState<number>(50);

  return (
    <div className="rounded-[2.5rem] border border-slate-200 bg-white p-10 shadow-xl">
      <h3 className="mb-8 text-2xl font-black text-slate-900">
        See the Real Value Per Child
      </h3>

      <div className="space-y-8">
        <div className="space-y-3">
          <label className="ml-1 block text-[10px] font-black uppercase tracking-widest text-slate-400">
            Estimated New Students to Admit
          </label>
          <input
            type="number"
            min={10}
            max={2000}
            value={students}
            onChange={(e) => setStudents(Math.max(10, Math.min(2000, Number(e.target.value) || 0)))}
            className="w-full rounded-2xl bg-slate-100 px-6 py-4 text-2xl font-black text-slate-900 outline-none focus:border-indigo-600 focus:bg-white focus:ring-4 focus:ring-indigo-600/10"
            placeholder="Number of new students..."
          />
          <input
            type="range"
            min={10}
            max={2000}
            value={students}
            onChange={(e) => setStudents(Number(e.target.value))}
            className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-100 accent-indigo-600"
          />
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
            Returning students are always readmitted for Ksh 0.
          </p>
        </div>

        <div className="space-y-4 border-t border-slate-100 pt-8">
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-slate-600">
              One-Time Student Licenses ({students} x Ksh 110)
            </p>
            <p className="text-xl font-black text-indigo-600">
              Ksh {(students * 110).toLocaleString()}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-slate-600">Year 1 Maintenance Fee</p>
            <p className="text-xl font-black text-emerald-600">Ksh 0 (Waived)</p>
          </div>
          <div className="flex items-center justify-between border-t border-slate-100 pt-4">
            <p className="text-sm font-black uppercase tracking-widest text-slate-900">
              First-Year Investment
            </p>
            <p className="text-3xl font-black tracking-tighter text-indigo-600">
              Ksh {(students * 110).toLocaleString()}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 rounded-2xl bg-indigo-50 p-4">
          <p className="text-xs font-bold leading-relaxed text-indigo-700">
            For {students} new students, your first-year investment is Ksh{" "}
            {(students * 110).toLocaleString()}. Year 1 maintenance is waived, and
            from Year 2 you pay a flat Ksh 5,000/year for the whole school.
          </p>
        </div>
      </div>
    </div>
  );
}
