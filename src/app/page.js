import Link from "next/link";

const strengths = [
  ["01", "Custom IT Consulting", "Node.js and Next.js engineering shaped around your product, team, and growth plans."],
  ["02", "Proprietary Platforms", "Ready-to-deploy SaaS engines that help teams move from idea to operation faster."],
  ["03", "Cloud & DevOps", "Docker and DigitalOcean infrastructure designed for dependable releases and scale."],
];

export const metadata = { title: "VM Solutions | Digital Product Engineering", description: "End-to-end product engineering and IT consulting for digital businesses." };

export default function HomePage() {
  return <>
    <section className="hero"><div className="container"><span className="eyebrow">Product engineering · IT consulting</span><h1>Architecting the Future of Digital Business.</h1><p>End-to-end product engineering and IT consulting. From intelligent SaaS products to robust backend architectures, we build systems designed to scale.</p><div className="actions"><Link className="button button-blue" href="/services">Explore Services</Link><Link className="button button-outline" href="/products">View Products</Link></div></div></section>
    <section className="section section-soft"><div className="container"><h2 className="section-title">Certifications &amp; credentials</h2><p className="section-lead">Continuous learning across cloud platforms and software engineering.</p><div className="grid grid-3">
      <article className="card cert-card"><div className="cert-logo" style={{color:"#f59e0b"}}>aws</div><div className="cert-year">2024</div><h3>AWS Cloud Foundations</h3></article>
      <article className="card cert-card"><div className="cert-logo" style={{color:"#4285f4"}}>Google Cloud</div><div className="cert-year">2024</div><h3>Cloud Digital Leader</h3></article>
      <article className="card cert-card"><div className="cert-logo" style={{color:"#7c3aed"}}>Coding Ninjas</div><div className="cert-year">2024</div><h3>Full Stack Web Development</h3></article>
    </div><p className="text-sm" style={{fontSize:".8rem",marginTop:16,color:"#6b7280"}}>Credential labels shown as supplied; add verified credential links or official logo assets when available.</p></div></section>
    <section className="section"><div className="container"><span className="eyebrow">How we help</span><h2 className="section-title">Engineering for what comes next</h2><div className="grid grid-3">{[ ["Services", "From backend architecture to cloud infrastructure, we deliver the engineering your roadmap needs.", "/services"], ["Products", "Explore practical platforms for inquiries, marketplaces, and business workflows.", "/products"], ["Industries", "Adaptable systems for real estate, civic technology, sustainability, and corporate teams.", "/industries"] ].map(([title, body, href]) => <article className="card" key={title}><h3>{title}</h3><p>{body}</p><Link href={href} className="text-link">Learn more →</Link></article>)}</div></div></section>
    <section className="section dark-section"><div className="container"><span className="eyebrow">Why VM Solutions</span><h2 className="section-title">Our Distinctive Strengths</h2><div className="grid grid-3">{strengths.map(([number,title,description]) => <article className="card dark-card" key={title}><span className="eyebrow">{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>
  </>;
}
