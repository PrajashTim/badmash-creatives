import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { resultsData } from "@/components/sections/ResultsSection";
import ButtonPrimary from "@/components/ButtonPrimary";
import CountUpNumber from "@/components/CountUpNumber";

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
        <section
          style={{
            background: "var(--bg-light)",
            padding: "var(--section-pad) 0",
          }}
        >
          <div className="container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                border: "1px dashed rgba(26,26,46,0.15)",
                marginBottom: "var(--section-pad)",
              }}
            >
              {resultsData.map((card, i) => (
                <div
                  key={i}
                  style={{
                    padding: "48px 32px",
                    textAlign: "center",
                    borderRight: i < resultsData.length - 1 ? "1px dashed rgba(26,26,46,0.15)" : "none",
                  }}
                >
                  <div
                    style={{
                      height: "32px",
                      marginBottom: "20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-display)",
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#8a8a9a",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                    }}
                  >
                    {card.client}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(48px, 6vw, 72px)",
                      fontWeight: "900",
                      color: "var(--bg-dark)",
                      lineHeight: "1",
                      marginBottom: "8px",
                    }}
                  >
                    <CountUpNumber value={card.number} />
                  </div>
                  <div style={{ fontSize: "14px", color: "#4a4a5a", marginBottom: "16px" }}>
                    {card.metric}
                  </div>
                  <Link
                    href={card.caseStudyHref}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      marginTop: "16px",
                      fontSize: "12px",
                      fontWeight: "bold",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                      borderBottom: "1px dashed var(--gold)",
                      paddingBottom: "4px",
                      textDecoration: "none",
                      transition: "opacity 0.3s",
                    }}
                  >
                    View case study →
                  </Link>
                </div>
              ))}
            </div>

            <div style={{ textAlign: "center" }}>
              <ButtonPrimary href="/get-started">Book A Strategy Call →</ButtonPrimary>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
