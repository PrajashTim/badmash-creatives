import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">BAD MASH</div>
            <p className="footer-desc">Video marketing agency exclusively for law firms. We turn attorneys into trusted online authorities.</p>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/results">Results</Link></li>
              <li><Link href="/get-started">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link href="/services/youtube-strategy">YouTube Strategy</Link></li>
              <li><Link href="/services/short-form-video">Short Form Video</Link></li>
              <li><Link href="/services/video-editing">Video Editing</Link></li>
              <li><Link href="/services/social-media-management">Social Management</Link></li>
              <li><Link href="/services/paid-ads">Paid Ads</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li><Link href="#">Blog</Link></li>
              <li><Link href="#">YouTube</Link></li>
              <li><Link href="/results">Case Studies</Link></li>
              <li><Link href="/get-started">Free Strategy Guide</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 Bad Mash Creatives. All rights reserved.</span>
          <span>Northern Virginia</span>
        </div>
      </div>
    </footer>
  );
}
