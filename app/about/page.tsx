import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FounderSection from "@/components/sections/FounderSection";
import SectionLabel from "@/components/SectionLabel";
import ButtonPrimary from "@/components/ButtonPrimary";

export const metadata: Metadata = {
  title: "About | Bad Mash Creatives",
  description: "The story behind Bad Mash Creatives, a video marketing agency built exclusively for law firms.",
};

const values = [
  {
    title: "Law Firms Only",
    desc: "We don't spread ourselves thin across industries. Every system, script, and strategy is purpose built for legal professionals.",
  },
  {
    title: "Video First",
    desc: "Video isn't an add-on for us. It's the entire product. We live and breathe content creation for attorneys.",
  },
  {
    title: "Clients Over Clicks",
    desc: "Vanity metrics are easy to fake. We hold ourselves accountable to the only number that matters: qualified consultations.",
  },
  {
    title: "Radical Transparency",
    desc: "You'll always know what we're doing, why we're doing it, and what the results look like. No hidden work, no inflated reports.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        {/* Hero */}
        <section className="bg-[#1a1a2e] py-20 text-[#f0ede6]">
          <div className="max-w-[1140px] mx-auto px-6 text-center">
            <span className="font-mono text-[11px] tracking-[3px] uppercase text-[#d4a843] mb-4 block">Our Story</span>
            <h1 className="font-display text-[clamp(36px,5vw,64px)] font-black leading-[1.05] mb-4">
              About Bad Mash Creatives
            </h1>
            <p className="text-[17px] text-[#b8b8cc] max-w-[560px] mx-auto leading-[1.8]">
              We exist for one reason: to help law firms build the kind of online presence that brings qualified clients to their door.
            </p>
          </div>
        </section>

        {/* Brand name meaning */}
        <section className="py-20 bg-[#f5f3ef]">
          <div className="max-w-[800px] mx-auto px-6">
            <SectionLabel>The Name</SectionLabel>
            <h2 className="font-display text-[clamp(28px,4vw,40px)] font-black mb-6">
              What Does &ldquo;Bad Mash&rdquo; Mean?
            </h2>
            {/* Placeholder: Praj to fill in the story behind the name */}
            <p className="text-[16px] text-[#4a4a5a] leading-[1.8] mb-4">
              [Praj: add the story behind the name &ldquo;Bad Mash&rdquo; here. What does it mean to you? Where did it come from? This is a great place to inject personality and make the brand memorable.]
            </p>
            <p className="text-[16px] text-[#4a4a5a] leading-[1.8]">
              What we know for certain: the name reflects our mindset. We&apos;re not a buttoned-up agency that plays it safe with cookie cutter content. We push attorneys to show up authentically, speak plainly, and build trust at scale.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 bg-[#eae7e0] border-t border-dashed border-[#1a1a2e]/10">
          <div className="max-w-[800px] mx-auto px-6">
            <SectionLabel>Mission</SectionLabel>
            <h2 className="font-display text-[clamp(28px,4vw,40px)] font-black mb-6">
              Why We Do This
            </h2>
            <p className="text-[16px] text-[#4a4a5a] leading-[1.8] mb-4">
              The legal industry is full of brilliant attorneys who can&apos;t explain what makes them different. They&apos;re experts in the courtroom but invisible online. Meanwhile, clients are making decisions based on YouTube videos and TikTok clips, choosing attorneys based on who they feel they already know.
            </p>
            <p className="text-[16px] text-[#4a4a5a] leading-[1.8]">
              Our mission is simple: close that gap. We give law firms the content engine to reach their ideal clients, build genuine trust, and grow their practice without adding hours to their week.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-[#f5f3ef] border-t border-dashed border-[#1a1a2e]/10">
          <div className="max-w-[1140px] mx-auto px-6">
            <div className="text-center mb-12">
              <SectionLabel>What We Stand For</SectionLabel>
              <h2 className="font-display text-[clamp(28px,4vw,40px)] font-black">Our Values</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-dashed border-[#1a1a2e]/12">
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className={`p-10 ${
                    i % 2 === 0 ? "border-r border-dashed border-[#1a1a2e]/12" : ""
                  } ${
                    i < 2 ? "border-b border-dashed border-[#1a1a2e]/12" : ""
                  }`}
                >
                  <div className="w-3 h-3 bg-[#d4a843] rounded-full mb-4" />
                  <h3 className="font-display text-[22px] font-bold italic mb-3">{v.title}</h3>
                  <p className="text-[15px] text-[#4a4a5a] leading-[1.7]">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder section (reused) */}
        <FounderSection />

        {/* CTA */}
        <section className="py-20 bg-[#f5f3ef] text-center">
          <div className="max-w-[1140px] mx-auto px-6">
            <h2 className="font-display text-[clamp(28px,4vw,40px)] font-black mb-4">
              Ready To Work Together?
            </h2>
            <p className="text-[16px] text-[#4a4a5a] max-w-[480px] mx-auto mb-8 leading-[1.8]">
              Book a free strategy call. No pitch, no pressure. Just a clear picture of what&apos;s possible for your firm.
            </p>
            <ButtonPrimary href="/get-started">Book A Strategy Call →</ButtonPrimary>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
