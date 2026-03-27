export const resultsData = [
  { client: "Estate Planning Firm", number: "+340%", metric: "YouTube Subscriber Growth", caseStudyHref: "#" },
  { client: "Estate Planning Firm", number: "50+", metric: "Videos Produced & Optimized", caseStudyHref: "#" },
  { client: "Estate Planning Firm", number: "3X", metric: "Increase in Consultation Requests", caseStudyHref: "#" },
];

export default function ResultsSection() {
  return (
    <section className="results" id="results">
      <div className="container">
        <span className="section-label" style={{color:"var(--gold)"}}>Proof</span>
        <h2>If You Work With Us, You Will Grow</h2>
        <p className="results-desc">We don&rsquo;t hide behind vague reports. Here&rsquo;s what happens when an attorney commits to consistent video with the right strategy behind it.</p>
        <div className="results-grid">
          <div className="result-card">
            <div className="result-logo">Estate Planning Firm</div>
            <div className="result-number">+340%</div>
            <div className="result-metric">YouTube Subscriber Growth</div>
            <a href="#" className="result-link">View case study &rarr;</a>
          </div>
          <div className="result-card">
            <div className="result-logo">Estate Planning Firm</div>
            <div className="result-number">50+</div>
            <div className="result-metric">Videos Produced &amp; Optimized</div>
            <a href="#" className="result-link">View case study &rarr;</a>
          </div>
          <div className="result-card">
            <div className="result-logo">Estate Planning Firm</div>
            <div className="result-number">3X</div>
            <div className="result-metric">Increase in Consultation Requests</div>
            <a href="#" className="result-link">View case study &rarr;</a>
          </div>
        </div>
      </div>
    </section>
  );
}
