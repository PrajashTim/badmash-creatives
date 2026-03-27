export default function FrameworkSection() {
  return (
    <section className="framework" id="services">
      <div className="container">
        <span className="section-label">Our System</span>
        <h2>The Authority Engine&#8482; Framework</h2>
        <p className="framework-desc">Other agencies make excuses. <strong>We make you visible.</strong> Our framework is built to turn attorneys into trusted authorities online. No vanity metrics, just consultations and signed clients.</p>
        <div className="framework-grid">
          <div className="framework-card">
            <div className="fw-icon">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="12" x2="16" y2="14"/></svg>
            </div>
            <h3>Strategy</h3>
            <span className="framework-arrow"></span>
            <p>We audit your market, competitors, and practice areas to build a content plan that targets the exact questions your ideal clients are searching for.</p>
          </div>
          <div className="framework-card">
            <div className="fw-icon">
              <svg viewBox="0 0 24 24"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
            </div>
            <h3>Production</h3>
            <span className="framework-arrow"></span>
            <p>We script, brief, and guide every recording session. Then our editors transform raw footage into polished, on brand content for every platform.</p>
          </div>
          <div className="framework-card">
            <div className="fw-icon">
              <svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </div>
            <h3>Distribution</h3>
            <span className="framework-arrow"></span>
            <p>Every long form video becomes 5 to 10 short form pieces. We publish, optimize, and manage your presence across YouTube, TikTok, Instagram, and Facebook.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
