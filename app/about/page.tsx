import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FounderSection from "@/components/sections/FounderSection";
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
      <main>
        {/* Hero */}
        <section style={{background:"var(--bg-dark)", paddingTop:"var(--section-pad)", paddingBottom:"var(--section-pad)", color:"var(--text-light)"}}>
          <div className="container" style={{textAlign:"center"}}>
            <span className="section-label">Our Story</span>
            <h2 style={{fontFamily:"var(--font-display)", fontSize:"clamp(32px, 4vw, 56px)", fontWeight:900, lineHeight:1.05, marginBottom:"20px"}}>
              About Bad Mash Creatives
            </h2>
            <p style={{fontSize:"16px", color:"var(--text-body-light)", maxWidth:"640px", margin:"0 auto", lineHeight:1.8}}>
              We exist for one reason: to help law firms build the kind of online presence that brings qualified clients to their door.
            </p>
          </div>
        </section>

        {/* Brand name meaning */}
        <section style={{padding:"var(--section-pad) 0", background:"var(--bg-light)", borderTop:"1px dashed rgba(26,26,46,0.12)"}}>
          <div className="container">
            <div style={{maxWidth:"800px", margin:"0 auto"}}>
              <span className="section-label">The Name</span>
              <h2 style={{fontFamily:"var(--font-display)", fontSize:"clamp(28px, 4vw, 48px)", fontWeight:900, marginBottom:"24px"}}>
                What Does "Bad Mash" Mean?
              </h2>
              <p style={{fontSize:"16px", color:"var(--text-body-dark)", lineHeight:1.8, marginBottom:"16px"}}>
                [Praj: add the story behind the name "Bad Mash" here. What does it mean to you? Where did it come from? This is a great place to inject personality and make the brand memorable.]
              </p>
              <p style={{fontSize:"16px", color:"var(--text-body-dark)", lineHeight:1.8}}>
                What we know for certain: the name reflects our mindset. We're not a buttoned-up agency that plays it safe with cookie cutter content. We push attorneys to show up authentically, speak plainly, and build trust at scale.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section style={{padding:"var(--section-pad) 0", background:"var(--bg-light-alt)", borderTop:"1px dashed rgba(26,26,46,0.12)"}}>
          <div className="container">
            <div style={{maxWidth:"800px", margin:"0 auto"}}>
              <span className="section-label">Mission</span>
              <h2 style={{fontFamily:"var(--font-display)", fontSize:"clamp(28px, 4vw, 48px)", fontWeight:900, marginBottom:"24px"}}>
                Why We Do This
              </h2>
              <p style={{fontSize:"16px", color:"var(--text-body-dark)", lineHeight:1.8, marginBottom:"16px"}}>
                The legal industry is full of brilliant attorneys who can't explain what makes them different. They're experts in the courtroom but invisible online. Meanwhile, clients are making decisions based on YouTube videos and TikTok clips, choosing attorneys based on who they feel they already know.
              </p>
              <p style={{fontSize:"16px", color:"var(--text-body-dark)", lineHeight:1.8}}>
                Our mission is simple: close that gap. We give law firms the content engine to reach their ideal clients, build genuine trust, and grow their practice without adding hours to their week.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section style={{padding:"var(--section-pad) 0", background:"var(--bg-light)", borderTop:"1px dashed rgba(26,26,46,0.12)"}}>
          <div className="container">
            <div style={{textAlign:"center", marginBottom:"48px"}}>
              <span className="section-label">What We Stand For</span>
              <h2 style={{fontFamily:"var(--font-display)", fontSize:"clamp(28px, 4vw, 48px)", fontWeight:900}}>Our Values</h2>
            </div>
            <div style={{maxWidth:"1140px", margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(2, 1fr)", gap:0, border:"1px dashed rgba(26,26,46,0.15)"}}>
              {values.map((v, i) => (
                <div
                  key={v.title}
                  style={{
                    padding:"40px 32px",
                    borderRight:i % 2 === 0 ? "1px dashed rgba(26,26,46,0.15)" : "none",
                    borderBottom:i < 2 ? "1px dashed rgba(26,26,46,0.15)" : "none",
                  }}
                >
                  <div style={{width:"10px", height:"10px", background:"var(--gold)", borderRadius:"50%", marginBottom:"16px"}} />
                  <h3 style={{fontFamily:"var(--font-display)", fontSize:"22px", fontWeight:700, fontStyle:"italic", marginBottom:"12px"}}>{v.title}</h3>
                  <p style={{fontSize:"15px", color:"var(--text-body-dark)", lineHeight:1.7}}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder section (reused) */}
        <FounderSection />

        {/* CTA */}
        <section style={{padding:"var(--section-pad) 0", background:"var(--bg-light)", textAlign:"center"}}>
          <div className="container">
            <h2 style={{fontFamily:"var(--font-display)", fontSize:"clamp(28px, 4vw, 48px)", fontWeight:900, marginBottom:"16px"}}>
              Ready To Work Together?
            </h2>
            <p style={{fontSize:"16px", color:"var(--text-body-dark)", maxWidth:"580px", margin:"0 auto 32px", lineHeight:1.8}}>
              Book a free strategy call. No pitch, no pressure. Just a clear picture of what's possible for your firm.
            </p>
            <ButtonPrimary href="/get-started">Book A Strategy Call →</ButtonPrimary>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
