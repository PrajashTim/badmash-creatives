export default function HeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-label">VIDEO MARKETING AGENCY FOR LAW FIRMS</div>
            <h1>Get <span className="highlight">More</span> Clients.</h1>
            <p className="hero-desc">Not views. Not followers. We exist to help law firms get more clients through video. Tap into our proven Authority Engine framework.</p>
            <div className="hero-buttons">
              <a href="/get-started" className="btn-primary">Get Started</a>
              <a href="/results" className="btn-outline">What To Expect</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="platform-stack">
              {/* YouTube card */}
              <div className="platform-card pc-youtube">
                <div className="platform-label">YOUTUBE</div>
                <div className="platform-card-inner">
                  <div className="platform-card-header">
                    <div className="platform-card-dot" style={{background:"#ff0000"}}></div>
                    <div className="platform-card-title">Channel Analytics</div>
                  </div>
                  <div style={{display:"flex",gap:"20px",marginTop:"8px"}}>
                    <div><div className="platform-card-metric">12.4K</div><div className="platform-card-body">Views (28d)</div></div>
                    <div><div className="platform-card-metric">847</div><div className="platform-card-body">Subscribers</div></div>
                    <div><div className="platform-card-metric">6:42</div><div className="platform-card-body">Avg Watch</div></div>
                  </div>
                </div>
              </div>
              {/* TikTok card */}
              <div className="platform-card pc-tiktok" style={{background:"#000",border:"none"}}>
                <div className="pc-tiktok">
                  <div className="platform-card-inner" style={{background:"#000",minHeight:"220px"}}>
                    <div className="play-btn"></div>
                    <div className="platform-card-title" style={{color:"white",fontSize:"10px"}}>3 things your estate plan is missing right now</div>
                    <div className="platform-card-body" style={{color:"rgba(255,255,255,0.5)",fontSize:"9px",marginTop:"4px"}}>@attorneyname</div>
                  </div>
                </div>
              </div>
              {/* Analytics card */}
              <div className="platform-card pc-analytics">
                <div className="platform-label">ANALYTICS</div>
                <div className="platform-card-inner">
                  <div className="platform-card-header">
                    <div className="platform-card-dot" style={{background:"var(--gold)"}}></div>
                    <div className="platform-card-title">Monthly Lead Growth</div>
                  </div>
                  <div className="chart-bars">
                    {[15,22,18,35,42,55,48,68,75,82,90,100].map((h, i) => (
                      <div key={i} className="chart-bar" style={{height:`${h}%`}}></div>
                    ))}
                  </div>
                  <div className="stat-row"><span>Consultations</span><span className="up">+340%</span></div>
                  <div className="stat-row"><span>Video Views</span><span className="up">+1,200%</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
