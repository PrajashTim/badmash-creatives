import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { resultsData } from "@/components/sections/ResultsSection";
import ButtonPrimary from "@/components/ButtonPrimary";

export const metadata: Metadata = {
  title: "Results | Bad Mash Creatives",
  description: "Real results from law firms who partnered with Bad Mash Creatives for video marketing.",
};

export default function ResultsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        {/* Hero */}
        <section className="bg-[#1a1a2e] py-20 text-[#f0ede6]">
          <div className="max-w-[1140px] mx-auto px-6 text-center">
            <span className="font-mono text-[11px] tracking-[3px] uppercase text-[#d4a843] mb-4 block">Proof</span>
            <h1 className="font-display text-[clamp(40px,5.5vw,72px)] font-black leading-[1.05] mb-4">
              Get <span className="gold-underline text-[#d4a843]">More</span> Clients.
            </h1>
            <p className="text-[17px] text-[#b8b8cc] max-w-[560px] mx-auto leading-[1.8]">
              Real numbers from real law firms who committed to video and let us build the engine behind it.
            </p>
          </div>
        </section>

        {/* Results grid */}
        <section className="py-20 bg-[#f5f3ef]">
          <div className="max-w-[1140px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 border border-dashed border-[#1a1a2e]/15 mb-16">
              {resultsData.map((card, i) => (
                <div
                  key={i}
                  className={`py-12 px-8 text-center ${
                    i < resultsData.length - 1 ? "border-b md:border-b-0 md:border-r border-dashed border-[#1a1a2e]/15" : ""
                  }`}
                >
                  <div className="h-8 mb-5 flex items-center justify-center font-display text-[14px] font-bold text-[#8a8a9a] tracking-[1px] uppercase">
                    {card.client}
                  </div>
                  <div className="font-display text-[clamp(48px,6vw,72px)] font-black text-[#1a1a2e] leading-none mb-2">
                    {card.number}
                  </div>
                  <div className="text-[14px] text-[#4a4a5a]">{card.metric}</div>
                  <Link
                    href={card.caseStudyHref}
                    className="inline-flex items-center gap-1.5 mt-4 text-[12px] font-bold tracking-[1px] uppercase text-[#d4a843] border-b border-dashed border-[#d4a843] pb-0.5 hover:opacity-80 transition-opacity"
                  >
                    View case study →
                  </Link>
                </div>
              ))}
            </div>

            {/* Placeholder note */}
            <div className="text-center p-8 bg-[#1a1a2e] rounded-lg max-w-[640px] mx-auto mb-16">
              <p className="text-[#b8b8cc] text-[14px] leading-[1.8]">
                <strong className="text-[#d4a843]">Praj:</strong> These are placeholder numbers. Replace them with real Speedwell Law metrics by editing the <code className="text-[#d4a843] bg-white/10 px-1 rounded">resultsData</code> array in <code className="text-[#d4a843] bg-white/10 px-1 rounded">components/sections/ResultsSection.tsx</code>.
              </p>
            </div>

            <div className="text-center">
              <ButtonPrimary href="/get-started">Book A Strategy Call →</ButtonPrimary>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
