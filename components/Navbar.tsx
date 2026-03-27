"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="nav-inner">
        <Link href="/" className="nav-logo">
          <div className="nav-logo-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{color:"var(--gold)"}}>
              <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5"/>
              <line x1="12" y1="22" x2="12" y2="15.5"/>
              <polyline points="22,8.5 12,15.5 2,8.5"/>
            </svg>
          </div>
          BAD MASH
        </Link>
        <div className="nav-links">
          <Link href="/services">Services</Link>
          <Link href="/results">Results</Link>
          <Link href="/#process">Process</Link>
          <Link href="/about">About</Link>
          <Link href="/get-started" className="nav-cta">Get Started</Link>
        </div>
        <button className="nav-hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
      <div className={`nav-mobile-menu${open ? " open" : ""}`}>
        <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
        <Link href="/results" onClick={() => setOpen(false)}>Results</Link>
        <Link href="/#process" onClick={() => setOpen(false)}>Process</Link>
        <Link href="/about" onClick={() => setOpen(false)}>About</Link>
        <Link href="/get-started" className="nav-cta" onClick={() => setOpen(false)}>Get Started</Link>
      </div>
    </nav>
  );
}
