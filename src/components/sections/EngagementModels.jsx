import React from "react";
import Link from "next/link";
import { 
  Users, 
  Repeat, 
  Rocket, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Shield,
  Calendar,
  Layers
} from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import Badge from "../ui/Badge";

const MODELS = [
  {
    name: "Dedicated Agile Pod",
    tag: "MOST POPULAR",
    badgeColor: "indigo",
    featured: true,
    icon: Users,
    headline: "Your Embedded Senior Engineering Team",
    description: "An autonomous, cross-functional pod aligned directly with your product roadmap, engineering culture, and internal sprint rituals.",
    idealFor: "Scaling Series A+ startups & enterprises with sustained roadmap demands.",
    cadence: "Continuous 2-Week Sprints",
    composition: "1 Lead Architect, 2 Senior Full-Stack Engineers, 1 QA Automation Eng",
    features: [
      "Full daily standup & backlog integration",
      "Direct Slack/Discord & GitHub access",
      "Zero recruitment or overhead friction",
      "Scalable up or down with 30 days notice",
      "Dedicated Technical Account Manager",
      "Bi-weekly executive architecture demos",
    ],
    ctaText: "Assemble Your Pod",
    commitment: "3-month initial commitment",
  },
  {
    name: "Sprint-Based Time & Material",
    tag: "FLEXIBLE VELOCITY",
    badgeColor: "cyan",
    featured: false,
    icon: Repeat,
    headline: "Targeted Sprints for Evolving Scope",
    description: "Engage senior engineering muscle on demand to solve specific architectural bottlenecks, API integrations, or feature accelerations.",
    idealFor: "Teams tackling complex migrations, audits, or peak seasonal backlogs.",
    cadence: "Bi-Weekly Sprint Blocks",
    composition: "Senior Specialists tailored to sprint objectives (e.g., DevOps/Backend)",
    features: [
      "Pay strictly for validated sprint capacity",
      "Flexible story point commitment model",
      "Granular weekly burndown reports",
      "Seamless knowledge transfer to internal team",
      "Comprehensive Swagger & architecture docs",
    ],
    ctaText: "Book Sprint Capacity",
    commitment: "Flexible 2-week sprint blocks",
  },
  {
    name: "Fixed-Scope Production MVP",
    tag: "RAPID TIME-TO-MARKET",
    badgeColor: "purple",
    featured: false,
    icon: Rocket,
    headline: "From Zero to Validated Launch in 6-8 Weeks",
    description: "A tightly scoped, turnkey engineering package taking your validated specification from architecture to live production deployment with guaranteed deliverables.",
    idealFor: "Founders & enterprise labs launching a new product line or proof of concept.",
    cadence: "Milestone-Gated Sprints (4-Stage)",
    composition: "1 Solutions Architect + 2 Full-Stack Engineers",
    features: [
      "Fixed budget & guaranteed delivery date",
      "Complete ERD & API specification phase",
      "Production Docker & AWS cloud setup",
      "Post-launch 30-day hypercare warranty",
      "Full source code and IP handover",
    ],
    ctaText: "Scope Your MVP",
    commitment: "Guaranteed milestone delivery",
  },
];

export default function EngagementModels() {
  return (
    <section className="relative py-20 lg:py-28 bg-white border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="Flexible Collaboration"
          badgeVariant="slate"
          badgeDot={true}
          title="Transparent Engagement Models Shaped Around"
          gradientTitle="Your Exact Stage &amp; Velocity."
          description="We do not force rigid enterprise vendor locks. Choose the delivery structure that aligns with your timeline, internal team capabilities, and capital structure."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {MODELS.map((model, i) => {
            const Icon = model.icon;
            return (
              <div
                key={i}
                className={`relative rounded-2xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 ${
                  model.featured
                    ? "bg-white border-2 border-slate-400 shadow-xl shadow-slate-500/15 lg:-translate-y-2"
                    : "bg-white border border-slate-200 shadow-md shadow-slate-500/5 hover:border-slate-300"
                }`}
              >
                {/* Popular Pill */}
                {model.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#f8fafc] border border-[#cbd5e1] text-[#334155] font-extrabold text-[11px] tracking-wider uppercase shadow-sm flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-slate-700" /> {model.tag}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#f8fafc] border border-[#cbd5e1] flex items-center justify-center text-slate-700">
                      <Icon className="w-6 h-6" />
                    </div>
                    {!model.featured && (
                      <Badge variant="slate" size="sm">
                        {model.tag}
                      </Badge>
                    )}
                  </div>

                  <h3 className="text-2xl font-extrabold mb-2">
                    <span className="text-gradient">{model.name}</span>
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {model.description}
                  </p>

                  {/* Highlights box */}
                  <div className="p-3.5 rounded-xl bg-slate-50/50 border border-slate-200/80 space-y-2 mb-6 text-xs text-slate-700">
                    <div>
                      <span className="text-slate-500 uppercase tracking-wider text-[10px] block">Best For:</span>
                      <span className="text-slate-900 font-semibold">{model.idealFor}</span>
                    </div>
                    <div className="pt-2 border-t border-slate-200/60 flex justify-between">
                      <span className="text-slate-500 text-[10px] uppercase">Rhythm:</span>
                      <span className="text-[#334155] font-bold">{model.cadence}</span>
                    </div>
                  </div>

                  {/* Features list */}
                  <div className="space-y-2.5 mb-8 text-xs text-slate-700">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                      Included Capabilities:
                    </span>
                    {model.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-6 border-t border-slate-100 space-y-3">
                  <div className="text-[11px] text-center text-slate-500 font-mono">
                    {model.commitment}
                  </div>
                  <Button
                    href="/contact"
                    variant={model.featured ? "primary" : "secondary"}
                    className="w-full justify-center"
                    iconRight={ArrowRight}
                  >
                    {model.ctaText}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
