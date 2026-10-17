import Link from "next/link";

export default function Footer() {
  return <footer className="site-footer"><div className="footer-grid">
    <div><Link href="/" className="footer-brand">VM Solutions</Link><p>Engineering the systems behind ambitious digital businesses.</p></div>
    <div><h2>Services</h2><Link href="/services">Product engineering</Link><Link href="/services">Cloud &amp; DevOps</Link><Link href="/services">API integrations</Link></div>
    <div><h2>Products</h2><Link href="/products">Inquiry Engine</Link><Link href="/products">Marketplace Architecture</Link><Link href="/industries">Industries</Link></div>
    <div><h2>Visit &amp; contact</h2><p>VM Solutions<br />India</p><a href="mailto:hello@vmsolutions.com">hello@vmsolutions.com</a></div>
  </div><div className="footer-bottom">© 2026 VM Solutions. All rights reserved.</div></footer>;
}
