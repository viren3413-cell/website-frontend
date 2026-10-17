import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Compass, 
  Calendar, 
  Code2, 
  Rocket, 
  CheckCircle2, 
  Repeat,
  ShieldCheck,
  Clock
} from "lucide-react";
import Button from "../ui/Button";
import SectionHeading from "../ui/SectionHeading";
import Badge from "../ui/Badge";

const STEPS = [
  {
    number: "01",
    title: "Discovery & Architecture",
    icon: Compass,
    color: "indigo",
    desc: "ERD modeling, REST/GraphQL OpenAPI contracts, and cloud architecture blueprint prior to line one of code.",
    deliverable: "API Spec & ERD Diagram",
  },
  {
    number: "02",
    title: "Sprint Planning & Grooming",
    icon: Calendar,
    color: "cyan",
    desc: "Rigorous backlog estimation, acceptance criteria definition, and commit milestones mapped to 2-week iterations.",
    deliverable: "Committed Jira/Linear Board",
  },
  {
    number: "03",
    title: "Modular Code & Peer Reviews",
    icon: Code2,
    color: "purple",
    desc: "Senior engineering pods writing type-safe code with strict branch policies and mandatory dual peer approvals.",
    deliverable: "CI-Gated Pull Requests",
  },
  {
    number: "04",
    title: "Staging Release & Live Demo",
    icon: Rocket,
    color: "emerald",
    desc: "Automated Docker CI/CD deployment to staging environment followed by live sprint demo on Day 10.",
    deliverable: "Working Tested Software",
  },
];

const METRICS = [
  { value: "99.99%", label: "System Availability SLA", sub: "Enterprise uptime standard" },
  { value: "2 Weeks", label: "Fixed Sprint Cadence", sub: "Predictable, incremental shipping" },
  { value: "100%", label: "Documented API Contracts", sub: "OpenAPI 3.0 & Swagger specs" },
  { value: "50+", label: "Successful Cloud Deployments", sub: "Zero-downtime track record" },
];

export default function AgileWorkflow() {
  return (
    <section className="relative py-20 lg:py-28 bg-white border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="Agile Engineering Methodology"
          badgeVariant="slate"
          badgeDot={true}
          title="Engineered for Predictable Delivery:"
          gradientTitle="The 2-Week Sprint Cycle."
          description="Software engineering without black boxes. You get working, tested increments every fourteen days with full visibility into code commits, backlog velocity, and staging environments."
        />

        {/* 4-Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-400 hover:shadow-lg hover:shadow-slate-500/10 transition-all duration-300 group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-slate-700 font-mono transition-colors">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#f8fafc] border border-[#cbd5e1] flex items-center justify-center text-slate-700 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-extrabold mb-2">
                    <span className="text-gradient">{step.title}</span>
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-[#334155]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                  <span className="font-semibold truncate">{step.deliverable}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Method CTA Link */}
        <div className="flex justify-center mb-16">
          <Button href="/process" variant="secondary" iconRight={ArrowRight}>
            Explore Our 6-Stage SDLC &amp; Sprint Timeline
          </Button>
        </div>

        {/* Metrics Strip */}
        <div className="rounded-2xl border border-slate-300 bg-white p-8 sm:p-10 shadow-xl shadow-slate-500/5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {METRICS.map((metric, i) => (
              <div key={i} className="text-center sm:text-left border-l-2 border-slate-400 pl-4">
                <div className="text-3xl sm:text-4xl font-black font-mono tracking-tight">
                  <span className="text-gradient">{metric.value}</span>
                </div>
                <div className="text-sm font-bold text-slate-900 mt-1">
                  {metric.label}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  {metric.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
