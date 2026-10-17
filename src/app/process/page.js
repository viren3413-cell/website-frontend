"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  Compass, 
  Code2, 
  Terminal, 
  Cpu, 
  ShieldCheck, 
  Sparkles,
  ChevronRight,
  Workflow,
  Rocket,
  Layers,
  FileCheck2
} from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { SDLC_STAGES, SPRINT_CADENCE_DAYS } from "@/data/siteData";

export default function ProcessPage() {
  const [activeStage, setActiveStage] = useState(0);
  const current = SDLC_STAGES[activeStage];

  return (
    <div className="w-full">
      {/* 1. Page Header */}
      <PageHeader
        badge="Agile SDLC &amp; Sprint Methodology"
        badgeVariant="indigo"
        badgeDot={true}
        title="Predictable Engineering."
        gradientTitle="Zero Black Boxes."
        description="We replaced vague timelines and end-of-quarter surprises with a disciplined, transparent 6-stage Agile SDLC anchored by bi-weekly staging deliverables."
        stats={[
          { value: "6 Stages", label: "Iterative SDLC" },
          { value: "10 Days", label: "Per Sprint Cycle" },
          { value: "15 Mins", label: "Daily Asynchronous Standup" },
          { value: "Day 10", label: "Live Staging Client Demo" },
        ]}
      />

      {/* 2. Interactive 6-Stage Agile SDLC Stepper */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            badge="The 6-Stage Lifecycle"
            badgeVariant="slate"
            badgeDot={true}
            title="From Architectural Spec to"
            gradientTitle="Production Docker Containers."
            description="Click each stage below to explore our exact engineering procedures, automated quality gates, and committed deliverables."
          />

          {/* Stepper Navigation Pills */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-10">
            {SDLC_STAGES.map((s, idx) => {
              const isActive = activeStage === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStage(idx)}
                  className={`p-3.5 rounded-xl text-left border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? "bg-[#f8fafc] border-[#cbd5e1] shadow-md shadow-slate-500/10 scale-105"
                      : "bg-white border-slate-200 text-slate-700 hover:border-slate-400 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-[#334155]">
                      STAGE {s.number}
                    </span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-slate-500 animate-pulse" />
                    )}
                  </div>
                  <div className={`text-xs font-bold leading-tight ${isActive ? "text-[#334155]" : "text-slate-800"}`}>
                    {s.stage.split("&")[0]}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detailed Panel */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-12 shadow-xl shadow-slate-500/5">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <Badge variant="slate" size="md">
                    Stage {current.number} of 06
                  </Badge>
                  <span className="text-xs text-slate-500 font-mono font-medium">
                    {current.tagline}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
                  <span className="text-gradient">{current.stage}</span>
                </h3>

                <p className="text-slate-600 text-base leading-relaxed">
                  {current.summary}
                </p>

                <div className="space-y-3 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                    Core Technical Activities:
                  </span>
                  {current.activities.map((act, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <div className="p-6 rounded-xl bg-[#f8fafc]/40 border border-slate-200/80 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900">
                    <FileCheck2 className="w-4 h-4 text-slate-700" />
                    <span>Stage Deliverable &bull; Sign-Off Gate</span>
                  </div>
                  <div className="p-3.5 rounded-lg bg-white border border-slate-300 text-slate-950 text-sm font-bold shadow-xs">
                    {current.deliverables}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Every stage requires explicit automated or client validation before advancing to subsequent development gates.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50/50 border border-slate-200 text-xs text-slate-700 space-y-2">
                  <div className="font-bold text-slate-900">Communication Protocol:</div>
                  <div>&bull; Daily asynchronous Slack updates at 09:30 UTC</div>
                  <div>&bull; Staging URLs updated automatically on Git branch push</div>
                  <div>&bull; Linear / Jira issue boards shared in real-time</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 3. 2-Week Sprint Cadence Visualizer */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            badge="The 10-Day Sprint Schedule"
            badgeVariant="slate"
            badgeDot={true}
            title="Inside the 2-Week Cadence:"
            gradientTitle="From Day 1 to Live Staging Demo."
            description="Our fixed 10-business-day iteration rhythm maintains consistent momentum while ensuring thorough quality testing before any client presentation."
          />

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 my-12">
            {SPRINT_CADENCE_DAYS.map((item, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-xl border flex flex-col justify-between transition-all ${
                  item.type === "demo"
                    ? "bg-[#f8fafc] border-[#cbd5e1] shadow-md shadow-slate-500/10"
                    : item.type === "event"
                    ? "bg-[#f8fafc]/40 border-slate-300"
                    : "bg-white border-slate-200"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-slate-900">
                      {item.day}
                    </span>
                    {item.type === "demo" && (
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-200 text-[#334155]">
                        CLIENT DEMO
                      </span>
                    )}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1.5 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>15m Standup</span>
                  <span className="text-emerald-700 font-semibold">&bull; CI Valid</span>
                </div>
              </div>
            ))}
          </div>

          {/* Sprint Guarantees Banner */}
          <div className="p-6 rounded-2xl bg-white border border-slate-300 shadow-md shadow-slate-500/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#f8fafc] border border-[#cbd5e1] flex items-center justify-center text-slate-700 shrink-0">
                <Rocket className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">
                  Ready to experience our sprint velocity?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600">
                  Book a trial 2-week sprint block or request our sample Jira board export.
                </p>
              </div>
            </div>
            <Button href="/contact" variant="primary" iconRight={ArrowRight}>
              Initiate Sprint 0 Onboarding
            </Button>
          </div>

        </div>
      </section>
    </div>
  );
}
