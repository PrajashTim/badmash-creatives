import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ButtonPrimary from "@/components/ButtonPrimary";

export const metadata: Metadata = {
  title: "Services | Bad Mash Creatives",
  description: "Video marketing services built exclusively for law firms. YouTube strategy, short form video, editing, social media, paid ads, and content strategy.",
};

const services = [
  {
    href: "/services/youtube-strategy",
    title: "YouTube Strategy",
    desc: "Build a YouTube channel that generates qualified consultations. We handle strategy, scripting, SEO, and channel management.",
    icon: (
      <svg viewBox="0 0 24 24" fill="#cc0000" stroke="none" className="w-6 h-6">
        <path d="M23 7s-.2-1.7-1-2.4c-.9-1-1.8-1-2.3-1C16.5 3.3 12 3.3 12 3.3s-4.5 0-7.7.3c-.5 0-1.4 0-2.3 1C1.2 5.3 1 7 1 7S.8 9 .8 11v1.8c0 2 .2 4 .2 4s.2 1.7 1 2.4c.9 1 2 .9 2.5 1 1.8.2 7.5.2 7.5.2s4.5 0 7.7-.3c.5 0 1.4 0 2.3-1 .8-.7 1-2.4 1-2.4s.2-2 .2-4V11c0-2-.2-4-.2-4zM9.5 15.5V8.5l6.3 3.5-6.3 3.5z"/>
      </svg>
    ),
  },
  {
    href: "/services/short-form-video",
    title: "Short Form Video",
    desc: "Turn one recording session into 5 to 10 short clips for TikTok, Instagram Reels, and Facebook. Maximum reach, minimum effort from you.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#c45a5a" strokeWidth="1.5" className="w-6 h-6">
        <rect x="2" y="3" width="20" height="18" rx="3"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="18" cy="6" r="1" fill="#c45a5a" stroke="none"/>
      </svg>
    ),
  },
  {
    href: "/services/video-editing",
    title: "Video Editing",
    desc: "Professional editing, captions, motion graphics, and brand consistency. Your raw footage, transformed into polished content.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#5b8db8" strokeWidth="1.5" className="w-6 h-6">
        <polygon points="23 7 16 12 23 17 23 7"/>
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
      </svg>
    ),
  },
  {
    href: "/services/social-media-management",
    title: "Social Media Management",
    desc: "We manage your YouTube, TikTok, Instagram, and Facebook channels end to end. Posting, engaging, and optimizing so you don't have to.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#8b6aaf" strokeWidth="1.5" className="w-6 h-6">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    href: "/services/paid-ads",
    title: "Paid Ads",
    desc: "Facebook, Instagram, and YouTube ad campaigns that put your best content in front of people actively looking for a lawyer in your area.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#5aaa6e" strokeWidth="1.5" className="w-6 h-6">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
  {
    href: "/services/content-strategy",
    title: "Content Strategy",
    desc: "A full content calendar built on keyword research, competitor analysis, and your specific practice area. No guessing, no wasted videos.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#c4944a" strokeWidth="1.5" className="w-6 h-6">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{background:"var(--bg-dark)", paddingTop:"var(--section-pad)", paddingBottom:"var(--section-pad)", color:"var(--text-light)"}}>
          <div className="container" style={{textAlign:"center"}}>
            <span className="section-label">What We Do</span>
            <h2 style={{fontFamily:"var(--font-display)", fontSize:"clamp(32px, 4vw, 56px)", fontWeight:900, lineHeight:1.05, marginBottom:"20px"}}>
              Our Services
            </h2>
            <p style={{fontSize:"16px", color:"var(--text-body-light)", maxWidth:"640px", margin:"0 auto", lineHeight:1.8}}>
              Everything we offer is designed for one outcome: more qualified clients walking through your door.
            </p>
          </div>
        </section>

        {/* Services grid - 3 cols */}
        <section style={{padding:"var(--section-pad) 0", background:"var(--bg-light)"}}>
          <div className="container">
            <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:0, border:"1px dashed rgba(26,26,46,0.15)"}}>
              {services.map((s, i) => (
                <Link
                  key={s.href}
                  href={s.href}
                  style={{
                    padding:"40px 32px",
                    borderRight:i % 3 !== 2 ? "1px dashed rgba(26,26,46,0.15)" : "none",
                    borderBottom:i < 3 ? "1px dashed rgba(26,26,46,0.15)" : "none",
                    transition:"background 0.3s",
                    display:"block",
                    textDecoration:"none",
                    color:"inherit",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = "rgba(240,230,211,0.5)"}
                  onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
                >
                  <div style={{width:"44px", height:"44px", background:"var(--bg-icon)", borderRadius:"10px", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:"16px"}}>
                    {s.icon}
                  </div>
                  <h3 style={{fontFamily:"var(--font-display)", fontSize:"18px", fontWeight:700, marginBottom:"8px"}}>{s.title}</h3>
                  <p style={{fontSize:"14px", color:"var(--text-body-dark)", lineHeight:1.7, marginBottom:"12px"}}>{s.desc}</p>
                  <span style={{fontSize:"13px", fontWeight:700, letterSpacing:"1px", textTransform:"uppercase", color:"var(--gold)"}}>Learn More →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{padding:"var(--section-pad) 0", background:"var(--bg-dark)", color:"var(--text-light)", textAlign:"center"}}>
          <div className="container">
            <h2 style={{fontFamily:"var(--font-display)", fontSize:"clamp(32px, 4.5vw, 52px)", fontWeight:900, marginBottom:"16px"}}>
              Not Sure Which Service You Need?
            </h2>
            <p style={{fontSize:"16px", color:"var(--text-body-light)", maxWidth:"580px", margin:"0 auto 32px", lineHeight:1.8}}>
              Book a free strategy call. We&apos;ll look at your current presence and tell you exactly where to start.
            </p>
            <ButtonPrimary href="/get-started">Book A Strategy Call →</ButtonPrimary>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
