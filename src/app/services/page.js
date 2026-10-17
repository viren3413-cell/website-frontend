const capabilities = [
  ["01", "Backend Architecture", "Build dependable services with Node.js and Express.js, backed by PostgreSQL and Sequelize ORM."],
  ["02", "Frontend & Web Apps", "Create fast, responsive digital experiences with Next.js, React, and thoughtful interface design."],
  ["03", "Cloud Infrastructure", "Containerize with Docker and deploy on AWS or DigitalOcean with reliable release practices."],
  ["04", "API & Payment Integrations", "Connect your systems with documented Swagger APIs and Cashfree payment processing."],
];
const steps = [["01","Discovery","We align on users, business goals, constraints, and a practical technical plan."],["02","Prototyping","We shape the experience and validate key workflows before full implementation."],["03","Agile Engineering","We deliver in focused iterations with regular demos, feedback, and clear priorities."],["04","Deployment","We launch, monitor, and prepare your system for ongoing growth."]];
export const metadata = { title: "Services | VM Solutions", description: "Product engineering, cloud infrastructure, backend architecture, and integrations." };
export default function ServicesPage(){return <>
  <section className="page-intro"><div className="container"><span className="eyebrow">Our services</span><h1>Engineering that Powers Modern Business.</h1><p>Thoughtful product development and dependable infrastructure, from first architecture decisions through launch.</p></div></section>
  <section className="section section-soft"><div className="container"><div className="grid grid-4">{capabilities.map(([num,title,desc])=><article className="card" key={title}><span className="card-icon">{num}</span><h3>{title}</h3><p>{desc}</p></article>)}</div></div></section>
  <section className="section"><div className="container"><span className="eyebrow">A clear path forward</span><h2 className="section-title">The Development Process</h2><div className="process">{steps.map(([num,title,desc])=><article className="process-step" key={title}><div className="process-dot">{num}</div><div><h3>{title}</h3><p>{desc}</p></div></article>)}</div></div></section>
</>}
