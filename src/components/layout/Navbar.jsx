"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["Services", "/services"],
  ["Products", "/products"],
  ["Industries", "/industries"],
  ["About Us", "/about"],
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="nav-inner">
      <Link href="/" className="brand">VM Solutions</Link>
      <nav className="desktop-nav" aria-label="Main navigation">{links.map(([label, href]) => <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined}>{label}</Link>)}</nav>
      <div className="nav-actions"><Link className="button button-blue" href="/about#careers">Join Our Team</Link><Link className="button button-dark" href="/contact">Talk to us <span aria-hidden="true">›</span></Link></div>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav className="mobile-nav" aria-label="Mobile navigation">{links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}<Link href="/contact" onClick={() => setOpen(false)}>Talk to us ›</Link></nav>}
  </header>;
}
