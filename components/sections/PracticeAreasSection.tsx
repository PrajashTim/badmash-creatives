export default function PracticeAreasSection() {
  return (
    <section className="areas">
      <div className="container">
        <h2>This Process Works For All Areas Of Law</h2>
        <p className="areas-desc">If your clients have questions, video is the fastest way to build trust before they ever pick up the phone.</p>
        <div className="areas-grid">
          <div className="area-item">
            <div className="icon-box"><svg viewBox="0 0 24 24" fill="none" stroke="var(--icon-warm)" strokeWidth="1.5"><path d="M12 3L1 9l11 6 9-5V17"/><path d="M5 13.2V17c0 1.1 3.1 3 7 3s7-1.9 7-3v-3.8"/></svg></div>
            <h4>Estate Planning</h4><div className="area-arrow">&rarr;</div>
          </div>
          <div className="area-item">
            <div className="icon-box"><svg viewBox="0 0 24 24" fill="none" stroke="var(--icon-red)" strokeWidth="1.5"><rect x="1" y="6" width="22" height="12" rx="3"/><circle cx="7" cy="12" r="2"/><circle cx="17" cy="12" r="2"/><path d="M7 6V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"/></svg></div>
            <h4>Personal Injury</h4><div className="area-arrow">&rarr;</div>
          </div>
          <div className="area-item">
            <div className="icon-box"><svg viewBox="0 0 24 24" fill="none" stroke="var(--icon-blue)" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
            <h4>Criminal Defense</h4><div className="area-arrow">&rarr;</div>
          </div>
          <div className="area-item">
            <div className="icon-box"><svg viewBox="0 0 24 24" fill="none" stroke="var(--icon-warm)" strokeWidth="1.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
            <h4>Bankruptcy</h4><div className="area-arrow">&rarr;</div>
          </div>
          <div className="area-item">
            <div className="icon-box"><svg viewBox="0 0 24 24" fill="none" stroke="var(--icon-purple)" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
            <h4>Divorce &amp; Family</h4><div className="area-arrow">&rarr;</div>
          </div>
          <div className="area-item">
            <div className="icon-box"><svg viewBox="0 0 24 24" fill="none" stroke="var(--icon-green)" strokeWidth="1.5"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg></div>
            <h4>Employment</h4><div className="area-arrow">&rarr;</div>
          </div>
          <div className="area-item">
            <div className="icon-box"><svg viewBox="0 0 24 24" fill="none" stroke="var(--icon-red)" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg></div>
            <h4>Tickets &amp; DUI</h4><div className="area-arrow">&rarr;</div>
          </div>
          <div className="area-item">
            <div className="icon-box"><svg viewBox="0 0 24 24" fill="none" stroke="var(--icon-blue)" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div>
            <h4>Immigration</h4><div className="area-arrow">&rarr;</div>
          </div>
        </div>
        <div className="areas-cta"><a href="/get-started" className="btn-text">Help Me Get More Clients &rarr;</a></div>
      </div>
    </section>
  );
}
