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
      <main>
        {/* Hero */}
        <section style={{background:"var(--bg-dark)", paddingTop:"var(--section-pad)", paddingBottom:"var(--section-pad)", color:"var(--text-light)"}}>
          <div className="container" style={{textAlign:"center"}}>
            <span className="section-label">Free Strategy Call</span>
            <h2 style={{fontFamily:"var(--font-display)", fontSize:"clamp(32px, 4vw, 56px)", fontWeight:900, lineHeight:1.05, marginBottom:"20px"}}>
              Ready For More Clients?
            </h2>
            <p style={{fontSize:"16px", color:"var(--text-body-light)", maxWidth:"640px", margin:"0 auto", lineHeight:1.8}}>
              This is a no pitch, no pressure call. We use the time to understand your firm and show you what's possible. You leave with a roadmap, whether you hire us or not.
            </p>
          </div>
        </section>

        {/* Main content */}
        <section style={{padding:"var(--section-pad) 0", background:"var(--bg-light)"}}>
          <div className="container">
            <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"64px", alignItems:"start"}}>
              {/* Left: Benefits */}
              <div>
                <h3 style={{fontFamily:"var(--font-display)", fontSize:"20px", fontWeight:700, fontStyle:"italic", marginBottom:"32px"}}>
                  On this call, you&apos;ll get:
                </h3>
                <div style={{display:"flex", flexDirection:"column", gap:"24px"}}>
                  {benefits.map((b, i) => (
                    <div key={i} style={{display:"flex", gap:"16px"}}>
                      <div style={{width:"10px", height:"10px", background:"var(--gold)", borderRadius:"50%", flexShrink:0, marginTop:"6px"}} />
                      <div>
                        <h4 style={{fontWeight:700, fontSize:"16px", marginBottom:"4px"}}>{b.title}</h4>
                        <p style={{fontSize:"14px", color:"var(--text-body-dark)", lineHeight:1.7}}>{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Calendly embed placeholder */}
              <div>
                <div style={{background:"var(--bg-dark)", borderRadius:"12px", padding:"48px", textAlign:"center", color:"var(--text-light)", minHeight:"500px", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:"16px", border:"1px dashed rgba(255,255,255,0.1)"}}>
                  <div style={{width:"64px", height:"64px", border:"2px solid var(--gold)", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:"8px"}}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" style={{width:"28px", height:"28px"}}>
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                  </div>
                  <div style={{fontFamily:"var(--font-display)", fontSize:"22px", fontWeight:700}}>Calendly Embed Here</div>
                  <p style={{color:"var(--text-body-light)", fontSize:"14px", maxWidth:"300px", lineHeight:1.6}}>
                    Praj: paste your Calendly URL into this component to enable booking. See the comment in the code above this block.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{padding:"var(--section-pad) 0", background:"var(--bg-light-alt)", borderTop:"1px dashed rgba(26,26,46,0.12)"}}>
          <div className="container">
            <div style={{maxWidth:"800px", margin:"0 auto"}}>
              <h2 style={{fontFamily:"var(--font-display)", fontSize:"clamp(28px, 4vw, 48px)", fontWeight:900, marginBottom:"48px", textAlign:"center"}}>
                Frequently Asked Questions
              </h2>
              <FAQAccordion items={faqs} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
