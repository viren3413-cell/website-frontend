"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  TrendingUp, 
  Layers, 
  Cpu, 
  Server, 
  Filter,
  Sparkles,
  ShieldCheck
} from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { CASE_STUDIES } from "@/data/siteData";

const CASE_CATEGORIES = [
  "All Case Studies",
  "Real Estate & FinTech",
  "Civic Tech",
  "Cloud & DevOps",
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All Case Studies");

  const filteredStudies =
    activeFilter === "All Case Studies"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((c) => c.category === activeFilter);

  return (
    <div className="w-full">
      {/* 1. Page Header */}
      <PageHeader
        badge="Proven Engineering Track Record"
        badgeVariant="cyan"
        badgeDot={true}
        title="Real-World Architectural Impact &amp;"
        gradientTitle="Measurable Business Results."
        description="Explore how our senior full-stack and DevOps pods helped high-growth startups and enterprises resolve performance bottlenecks, streamline operations, and launch resilient software."
        stats={[
          { value: "50+", label: "Completed Sprints" },
          { value: "$18M+", label: "Monthly Volume Processed" },
          { value: "78%", label: "Average Latency Drop" },
          { value: "Zero", label: "Production Security Breaches" },
        ]}
      />

      {/* 2. Filterable Case Studies Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Tabs */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12 pb-6 border-b border-slate-200">
            <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
              <Filter className="w-4 h-4 text-slate-700" />
              <span>Filter by Technical Domain:</span>
              <span className="font-bold text-slate-900">({filteredStudies.length} Engagements)</span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {CASE_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    activeFilter === cat
                      ? "bg-[#f8fafc] text-[#334155] border border-[#cbd5e1] shadow-xs font-bold"
                      : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Case Studies Detailed Cards */}
          <div className="space-y-12 mb-20">
            {filteredStudies.map((study, idx) => (
              <article
                key={study.id}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-slate-400 hover:shadow-xl hover:shadow-slate-500/10 transition-all duration-300 shadow-md"
              >
                {/* Header Strip */}
                <div className="p-6 sm:p-8 bg-white border-b border-slate-100 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="slate" size="sm">
                        {study.category}
                      </Badge>
                      <span className="text-xs text-slate-500">Client: <strong className="text-slate-900">{study.client}</strong></span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold">
                      <span className="text-gradient">{study.title}</span>
                    </h3>
                  </div>

                  <Button href="/contact" variant="secondary" size="sm" iconRight={ArrowRight}>
                    Consult on Similar Architecture
                  </Button>
                </div>

                {/* Challenge & Solution Architecture */}
                <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-rose-800 mb-2">
                        The Architectural Challenge
                      </h4>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
                        Our Solution &amp; Engineering Execution
                      </h4>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {study.solution}
                      </p>
                    </div>

                    {/* Tech Stack Badges */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                        Tech Stack Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {study.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md bg-[#f8fafc] border border-[#cbd5e1] text-xs font-mono text-[#334155] font-semibold"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Business Results Metrics Box */}
                  <div className="lg:col-span-5 p-6 rounded-xl bg-white border border-slate-200 flex flex-col justify-between shadow-xs">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-800 mb-4">
                        <TrendingUp className="w-4 h-4 text-slate-700" />
                        <span>Verified Business Impact</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        {study.metrics.map((metric, mIdx) => (
                          <div key={mIdx} className="p-3 rounded-lg bg-[#f8fafc]/40 border border-slate-100">
                            <div className="text-xs text-slate-500">{metric.label}</div>
                            <div className="text-base sm:text-lg font-bold font-mono mt-1 text-gradient">
                              {metric.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                      <span>Zero Downtime Cutover</span>
                      <span className="text-emerald-700 font-semibold">&bull; Production Sign-Off</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom Conversion Box */}
          <div className="p-8 sm:p-12 rounded-2xl bg-white border border-slate-300 shadow-xl shadow-slate-500/10 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
              Have a Similar Architecture <span className="text-gradient">Challenge?</span>
            </h3>
            <p className="text-slate-600 text-sm sm:text-base mb-6 leading-relaxed">
              We have solved high-concurrency bottlenecks, legacy system migrations, and critical API contracts across real estate, municipal services, logistics, and fintech.
            </p>
            <Button href="/contact" variant="primary" size="lg" iconRight={ArrowRight}>
              Schedule an Architecture Audit
            </Button>
          </div>

        </div>
      </section>
    </div>
  );
}
