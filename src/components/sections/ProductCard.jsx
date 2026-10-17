"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  ExternalLink, 
  FileText, 
  ShieldCheck, 
  CheckCircle2, 
  Terminal, 
  Eye, 
  Layers, 
  Cpu,
  Database,
  Lock,
  CreditCard,
  Network
} from "lucide-react";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import GlassCard from "../ui/GlassCard";

export default function ProductCard({ product }) {
  const [viewMode, setViewMode] = useState("ui"); // "ui" or "arch"

  return (
    <article className="rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-slate-400 hover:shadow-xl hover:shadow-slate-500/10 transition-all duration-300 shadow-md flex flex-col justify-between">
      {/* Product Card Header */}
      <div className="p-6 sm:p-8 border-b border-slate-100 bg-white">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2.5">
            <Badge variant={product.categoryColor || "slate"} size="sm">
              {product.category}
            </Badge>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#f8fafc] text-[#334155] border border-slate-300 font-bold">
              {product.version}
            </span>
          </div>

          {/* Toggle View Mode */}
          <div className="flex items-center rounded-lg bg-slate-50/60 border border-slate-200 p-0.5 text-xs font-medium">
            <button
              onClick={() => setViewMode("ui")}
              className={`px-2.5 py-1 rounded-md transition-colors flex items-center gap-1.5 cursor-pointer ${
                viewMode === "ui"
                  ? "bg-[#f8fafc] text-[#334155] border border-[#cbd5e1] shadow-xs font-bold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Eye className="w-3.5 h-3.5" /> UI Preview
            </button>
            <button
              onClick={() => setViewMode("arch")}
              className={`px-2.5 py-1 rounded-md transition-colors flex items-center gap-1.5 cursor-pointer ${
                viewMode === "arch"
                  ? "bg-[#f8fafc] text-[#334155] border border-[#cbd5e1] shadow-xs font-bold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Network className="w-3.5 h-3.5" /> Architecture
            </button>
          </div>
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold mb-2">
          <span className="text-gradient">{product.name}</span>
        </h3>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* Interactive Preview Mockup Box */}
      <div className="p-6 sm:p-8 bg-white border-b border-slate-100 min-h-[220px] flex items-center justify-center">
        {viewMode === "ui" ? (
          /* Simulated UI Mockup */
          <div className="w-full rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs text-slate-500">
              <span className="font-semibold text-slate-900 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-slate-500 animate-pulse" />
                {product.name} Cloud Console
              </span>
              <span className="font-mono text-[11px] text-emerald-700 font-bold">Active Tenant: Live</span>
            </div>
            <div className="grid grid-cols-3 gap-2 my-3">
              {product.mockStats.map((stat, idx) => (
                <div key={idx} className="p-2 rounded-lg bg-[#f8fafc]/50 border border-slate-200/80 text-center">
                  <div className="text-[10px] text-slate-500 truncate">{stat.label}</div>
                  <div className="text-sm font-bold text-slate-900 font-mono mt-0.5">{stat.value}</div>
                </div>
              ))}
            </div>
            <div className="p-2 rounded bg-slate-50/50 border border-slate-100 flex items-center justify-between text-xs text-slate-700">
              <span className="font-mono text-[11px] truncate">{product.mockAction}</span>
              <span className="px-1.5 py-0.5 text-[10px] font-bold rounded bg-slate-200 text-[#334155]">OK</span>
            </div>
          </div>
        ) : (
          /* System Architecture View */
          <div className="w-full rounded-xl border border-slate-200 bg-white p-4 font-mono text-xs shadow-sm">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-slate-500 text-[11px]">
              <span className="font-semibold">SYSTEM ARCHITECTURE TOPOLOGY</span>
              <span className="text-slate-700 font-bold">REST &bull; PostgreSQL &bull; Redis</span>
            </div>
            <div className="py-3 flex flex-wrap items-center justify-center gap-2 text-center">
              <span className="px-2.5 py-1.5 rounded bg-[#f8fafc] border border-[#cbd5e1] text-[#334155] font-semibold">
                Client Layer
              </span>
              <span className="text-slate-400">&rarr;</span>
              <span className="px-2.5 py-1.5 rounded bg-white border border-slate-300 text-slate-800 font-semibold">
                JWT &amp; RBAC Gateway
              </span>
              <span className="text-slate-400">&rarr;</span>
              <span className="px-2.5 py-1.5 rounded bg-[#f8fafc] border border-[#cbd5e1] text-[#334155] font-semibold">
                Core Microservices
              </span>
              <span className="text-slate-400">&rarr;</span>
              <span className="px-2.5 py-1.5 rounded bg-white border border-slate-300 text-slate-800 font-semibold">
                PostgreSQL + S3
              </span>
            </div>
            <div className="text-[10px] text-slate-500 text-center">
              Event Queue: Redis Pub/Sub &bull; Webhooks: Stripe &bull; Docker Containerized
            </div>
          </div>
        )}
      </div>

      {/* Problem & Solution Accordion */}
      <div className="p-6 sm:p-8 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-3.5 rounded-xl bg-rose-50/60 border border-rose-200">
            <span className="text-[11px] font-bold uppercase tracking-wider text-rose-800 block mb-1">
              Industry Bottleneck
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {product.problem}
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block mb-1">
              Our Architectural Solution
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {product.solution}
            </p>
          </div>
        </div>

        {/* Key Architecture Highlights */}
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
            Key Architecture Highlights
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
            {product.highlights.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-[#f8fafc]/40 border border-slate-100">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                <span className="truncate">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Card Actions */}
      <div className="p-6 sm:p-8 pt-0 flex flex-wrap items-center gap-3">
        <Button
          href="/contact"
          variant="primary"
          size="sm"
          iconRight={ArrowRight}
          className="flex-1 sm:flex-initial"
        >
          Request Live Demo
        </Button>
        <Button
          href="/contact"
          variant="secondary"
          size="sm"
          icon={FileText}
          className="flex-1 sm:flex-initial"
        >
          API Docs &amp; Specs
        </Button>
      </div>
    </article>
  );
}
