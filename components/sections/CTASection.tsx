export default function CTASection() {
  return (
    <section className="cta-section" id="start">
      <div className="container">
        <h2>Ready For More Clients?</h2>
        <p className="cta-subtitle">Most agencies waste your first call selling you. We spend ours showing you exactly what&rsquo;s possible. You&rsquo;ll leave with a plan whether you hire us or not.</p>
        <div className="cta-inner">
          <div>
            <h3 style={{fontFamily:"var(--font-display)",fontSize:"20px",marginBottom:"24px",fontStyle:"italic"}}>Here&rsquo;s what you should expect:</h3>
            <ul className="cta-steps">
              <li className="cta-step">
                <h4>Schedule A Strategy Call</h4>
                <p>A 30 minute deep dive into your practice area, your current online presence, and where your competitors are winning with video.</p>
              </li>
              <li className="cta-step">
                <h4>Receive Your Content Roadmap</h4>
                <p>A roadmap showing everything you need to do to start getting more visibility, including investment amount and timeline to results.</p>
              </li>
              <li className="cta-step">
                <h4>Start Showing Up</h4>
                <p>If you accept our roadmap, we get to work building your content engine. Most clients have their first batch of content live within 30 days.</p>
              </li>
            </ul>
          </div>
          <div className="pricing-card">
            <div className="pricing-label">Work With Us</div>
            <div className="pricing-title">Let&rsquo;s Build Your Video Engine</div>
            <ul className="pricing-features">
              <li><span className="pricing-check">&#10003;</span> Full content strategy and scripting</li>
              <li><span className="pricing-check">&#10003;</span> Professional video editing and post production</li>
              <li><span className="pricing-check">&#10003;</span> YouTube, TikTok, Instagram, and Facebook management</li>
              <li><span className="pricing-check">&#10003;</span> Paid ad campaign setup and management</li>
              <li><span className="pricing-check">&#10003;</span> Monthly performance reporting</li>
              <li><span className="pricing-check">&#10003;</span> No long term contracts</li>
            </ul>
            <a href="/get-started" className="btn-primary" style={{width:"100%",justifyContent:"center"}}>Book Your Strategy Call &rarr;</a>
          </div>
        </div>
      </div>
    </section>
  );
}
