"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is Mwalimu Ease?",
    answer:
      "Mwalimu Ease is a Kenyan school management platform that handles the daily paperwork—students, marks, fees, reports, timetables, and library records—in one secure dashboard.",
  },
  {
    question: "Does it support both CBC and 8-4-4 systems?",
    answer:
      "Yes. It supports both CBC and 8-4-4, including the report-card formats and performance tracking each system requires.",
  },
  {
    question: "Can I import my existing student records?",
    answer:
      "Absolutely. You can bulk import students and staff using Excel/CSV templates, so you do not have to re-type years of records.",
  },
  {
    question: "Is Mwalimu Ease accessible on mobile devices?",
    answer:
      "Yes. It works on phones, tablets, and computers, so teachers and bursars can enter marks, record fees, and pull reports from wherever they are.",
  },
  {
    question: "How do I get started?",
    answer:
      "Click Start Free Setup to register your school, run the quick setup wizard, and begin adding students, staff, and classes. Most schools are set up the same day.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div
            key={faq.question}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold text-slate-900 transition-colors hover:bg-slate-50"
              aria-expanded={isOpen}
            >
              <span className="pr-4">{faq.question}</span>
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500">
                <svg
                  className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isOpen ? "M5 12h14" : "M12 4.5v15m7.5-7.5h-15"}
                  />
                </svg>
              </span>
            </button>
            <div
              className={`grid transition-all ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 leading-relaxed text-slate-600">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
