"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-0">
      {items.map((item, i) => (
        <div key={i} className="border-b border-dashed border-[#1a1a2e]/12 last:border-b-0">
          <button
            className="w-full text-left py-5 flex items-center justify-between gap-4 group"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span className="font-display text-[18px] font-bold group-hover:text-[#d4a843] transition-colors">
              {item.question}
            </span>
            <span className={`flex-shrink-0 w-6 h-6 border border-[#d4a843] flex items-center justify-center text-[#d4a843] transition-transform duration-300 ${openIndex === i ? "rotate-45" : ""}`}>
              +
            </span>
          </button>
          {openIndex === i && (
            <div className="pb-5 text-[15px] text-[#4a4a5a] leading-[1.8]">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
