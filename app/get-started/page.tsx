import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Get Started | Bad Mash Creatives",
  description: "Book a free strategy call with Bad Mash Creatives. Get a content roadmap tailored to your law firm.",
};

const benefits = [
  {
    title: "Current Performance Review",
    desc: "We look at your existing online presence and identify what's working, what's not, and what you're missing completely.",
  },
  {
    title: "Growth Opportunities",
    desc: "We show you exactly where your competitors are winning with video and how you can take market share in your practice area.",
  },
  {
    title: "Areas for Improvement",
    desc: "Specific, actionable gaps in your current strategy that we can help you close within the first 30 days.",
  },
  {
    title: "A Clear Content Roadmap",
    desc: "You leave with a documented plan showing what topics to cover, which platforms to prioritize, and a realistic timeline to results.",
  },
  {
    title: "Honest Investment Ranges",
    desc: "No mystery pricing. We tell you what working together looks like and let you decide if it makes sense for your firm.",
  },
];

const faqs = [
  {
    question: "Where are you located?",
    answer: "We're based in Northern Virginia, but we work remotely with law firms nationwide. All sessions are conducted virtually, so geography is never a barrier.",
  },
  {
    question: "How much do your services cost?",
    answer: "We build custom packages based on your goals, practice area, and where you are in your content journey. There's no one-size-fits-all pricing. Book a call and we'll give you an honest range based on what you actually need.",
  },
  {
    question: "Are you going to lock us into a long contract?",
    answer: "No. We don't believe in long term contracts. If we don't meet your expectations, you can leave at any time. We'd rather earn your business every month than trap you in a commitment.",
  },
  {
    question: "How long does it take to see results?",
    answer: "Most clients have content live within 30 days of starting. Meaningful growth, meaning more consultations and increased brand recognition, typically happens in 60 to 90 days depending on consistency and your specific market.",
  },
];

export default function GetStartedPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        {/* Hero */}
        <section className="bg-[#1a1a2e] py-20 text-[#f0ede6]">
          <div className="max-w-[1140px] mx-auto px-6 text-center">
            <span className="font-mono text-[11px] tracking-[3px] uppercase text-[#d4a843] mb-4 block">Free Strategy Call</span>
            <h1 className="font-display text-[clamp(36px,5vw,64px)] font-black leading-[1.05] mb-4">
              Ready For More Clients?
            </h1>
            <p className="text-[17px] text-[#b8b8cc] max-w-[560px] mx-auto leading-[1.8]">
              This is a no pitch, no pressure call. We use the time to understand your firm and show you what&apos;s possible. You leave with a roadmap, whether you hire us or not.
            </p>
          </div>
        </section>

        {/* Main content */}
        <section className="py-20 bg-[#f5f3ef]">
          <div className="max-w-[1140px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left: Benefits */}
              <div>
                <h2 className="font-display text-[28px] font-bold italic mb-8">
                  On this call, you&apos;ll get:
                </h2>
                <div className="space-y-6">
                  {benefits.map((b, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-3.5 h-3.5 bg-[#d4a843] rounded-full flex-shrink-0 mt-1.5" />
                      <div>
                        <h4 className="font-bold text-[16px] mb-1">{b.title}</h4>
                        <p className="text-[14px] text-[#4a4a5a] leading-[1.7]">{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Calendly embed placeholder */}
              <div>
                {/*
                  TO SWAP IN CALENDLY:
                  Replace this div with:
                  <div className="calendly-inline-widget" data-url="YOUR_CALENDLY_URL" style={{minWidth:'320px',height:'700px'}} />
                  <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
                */}
                <div className="bg-[#1a1a2e] rounded-lg p-12 text-center text-[#f0ede6] min-h-[500px] flex flex-col items-center justify-center gap-4 border border-dashed border-white/10">
                  <div className="w-16 h-16 border-2 border-[#d4a843] rounded-full flex items-center justify-center mb-2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#d4a843" strokeWidth="1.5" className="w-7 h-7">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                  </div>
                  <div className="font-display text-[22px] font-bold">Calendly Embed Here</div>
                  <p className="text-[#b8b8cc] text-[14px] max-w-[300px] leading-[1.6]">
                    Praj: paste your Calendly URL into this component to enable booking. See the comment in the code above this block.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-[#eae7e0] border-t border-dashed border-[#1a1a2e]/10">
          <div className="max-w-[800px] mx-auto px-6">
            <h2 className="font-display text-[clamp(28px,4vw,40px)] font-black mb-10 text-center">
              Frequently Asked Questions
            </h2>
            <FAQAccordion items={faqs} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
