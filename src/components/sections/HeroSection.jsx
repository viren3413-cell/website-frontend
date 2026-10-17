"use client";

import React, { useState } from "react";
import { 
  ArrowRight, 
  Sparkles, 
  Activity, 
  ShieldCheck, 
  Database, 
  Server, 
  Cpu, 
  CheckCircle2,
  TrendingUp,
  Zap,
  Code2
} from "lucide-react";
import Button from "../ui/Button";
import Badge from "../ui/Badge";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState("gateway");

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Copy */}
          <div className="lg:col-span-7 text-left space-y-6">
            <div className="flex items-center gap-2">
              <Badge variant="slate" dot={true}>
                ⚡ Next-Generation Software Engineering &amp; Cloud Solutions
              </Badge>
              <span className="hidden sm:inline-flex items-center gap-1 text-xs text-slate-900 border border-slate-300 bg-[#f8fafc] px-2.5 py-1 rounded-full font-semibold">
                <Sparkles className="w-3 h-3 text-slate-600" /> Built for modern businesses
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08]">
              Engineering Scalable <br />
              <span className="text-gradient">Digital Products</span> <br />
              for Forward-Thinking Businesses.
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-xl leading-relaxed">
              From high-performance web applications to resilient cloud architectures and custom API ecosystems, we turn complex technical challenges into seamless digital experiences.
            </p>

            {/* Dual CTAs: Light slate Button & Crisp White Button */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                iconRight={ArrowRight}
              >
                Start Your Project
              </Button>
              <Button
                href="/portfolio"
                variant="secondary"
                size="lg"
                icon={Code2}
              >
                Explore Our Work
              </Button>
            </div>

            {/* Trust and Social Proof Strip */}
            <div className="pt-8 border-t border-slate-200/80 flex flex-wrap items-center gap-6 text-sm text-slate-600">
              <div>
                <p className="font-bold text-slate-900 flex items-center gap-1.5">
                  Built with modern, enterprise-grade technologies
                </p>
                <p className="text-xs text-slate-500">
                  Next.js &bull; Node.js &bull; PostgreSQL &bull; AWS &bull; Docker
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Architecture Dashboard Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1 bg-gradient-to-r from-slate-200 to-slate-400 rounded-2xl blur-xl opacity-30 animate-pulse-glow" />

              <div className="relative rounded-2xl border border-slate-300 bg-white shadow-xl overflow-hidden">
                {/* Dashboard Window Header */}
                <div className="px-4 py-3 bg-[#f8fafc] border-b border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-400" />
                    <span className="w-3 h-3 rounded-full bg-slate-400" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span className="text-xs font-mono font-semibold text-slate-950 ml-2">
                      nexusforge-core-v2.1
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-300">
                    <Activity className="w-3 h-3 animate-pulse" />
                    HEALTHY
                  </div>
                </div>

                {/* Dashboard Tabs */}
                <div className="flex border-b border-slate-200 bg-slate-50/50 text-xs font-semibold">
                  <button
                    onClick={() => setActiveTab("gateway")}
                    className={`flex-1 py-2.5 px-3 text-center transition-colors flex items-center justify-center gap-1.5 cursor-pointer ${
                      activeTab === "gateway"
                        ? "text-slate-900 border-b-2 border-slate-500 bg-white font-bold shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <Server className="w-3.5 h-3.5 text-slate-600" /> API Gateway
                  </button>
                  <button
                    onClick={() => setActiveTab("velocity")}
                    className={`flex-1 py-2.5 px-3 text-center transition-colors flex items-center justify-center gap-1.5 cursor-pointer ${
                      activeTab === "velocity"
                        ? "text-slate-900 border-b-2 border-slate-500 bg-white font-bold shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <TrendingUp className="w-3.5 h-3.5 text-slate-600" /> Velocity
                  </button>
                  <button
                    onClick={() => setActiveTab("cluster")}
                    className={`flex-1 py-2.5 px-3 text-center transition-colors flex items-center justify-center gap-1.5 cursor-pointer ${
                      activeTab === "cluster"
                        ? "text-slate-900 border-b-2 border-slate-500 bg-white font-bold shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <Database className="w-3.5 h-3.5 text-slate-600" /> Cluster
                  </button>
                </div>

                {/* Tab 1: API Gateway */}
                {activeTab === "gateway" && (
                  <div className="p-5 space-y-4 bg-white">
                    {/* Metrics Row */}
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div className="p-2.5 rounded-xl bg-slate-50/50 border border-slate-200">
                        <div className="text-xs text-slate-500 font-medium">P99 Latency</div>
                        <div className="text-lg font-bold text-slate-900 font-mono mt-0.5">18ms</div>
                        <div className="text-[10px] text-emerald-700 font-bold mt-0.5">&darr; 4ms opt</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-50/50 border border-slate-200">
                        <div className="text-xs text-slate-500 font-medium">Throughput</div>
                        <div className="text-lg font-bold text-slate-900 font-mono mt-0.5">12.4k/s</div>
                        <div className="text-[10px] text-slate-700 font-bold mt-0.5">&uarr; 18% load</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-50/50 border border-slate-200">
                        <div className="text-xs text-slate-500 font-medium">Uptime SLA</div>
                        <div className="text-lg font-bold text-emerald-700 font-mono mt-0.5">99.99%</div>
                        <div className="text-[10px] text-slate-500 mt-0.5">365 Days</div>
                      </div>
                    </div>

                    {/* Live Endpoints Activity */}
                    <div className="space-y-2">
                      <div className="text-xs font-bold text-slate-700 flex items-center justify-between">
                        <span>Active Microservices Route Log</span>
                        <span className="text-[10px] font-mono text-slate-500">HTTPS / 2.0</span>
                      </div>
                      <div className="space-y-1.5 font-mono text-xs">
                        <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50/30 border border-slate-100 text-slate-800">
                          <span className="flex items-center gap-2">
                            <span className="px-1.5 py-0.5 text-[10px] font-bold rounded bg-emerald-100 text-emerald-800">GET</span>
                            <span>/api/v2/auth/verify-jwt</span>
                          </span>
                          <span className="text-emerald-700 font-bold">200 OK &bull; 6ms</span>
                        </div>
                        <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50/30 border border-slate-100 text-slate-800">
                          <span className="flex items-center gap-2">
                            <span className="px-1.5 py-0.5 text-[10px] font-bold rounded bg-slate-100 text-slate-900">POST</span>
                            <span>/api/v2/billing/webhooks</span>
                          </span>
                          <span className="text-emerald-700 font-bold">200 OK &bull; 14ms</span>
                        </div>
                        <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50/30 border border-slate-100 text-slate-800">
                          <span className="flex items-center gap-2">
                            <span className="px-1.5 py-0.5 text-[10px] font-bold rounded bg-[#f8fafc] text-slate-900 border border-slate-300">PUT</span>
                            <span>/api/v2/tenants/sync-rbac</span>
                          </span>
                          <span className="text-emerald-700 font-bold">201 OK &bull; 21ms</span>
                        </div>
                      </div>
                    </div>

                    {/* Security Badge */}
                    <div className="p-2.5 rounded-xl bg-[#f8fafc] border border-slate-300 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 text-slate-950 font-semibold">
                        <ShieldCheck className="w-4 h-4 text-slate-700" />
                        <span>mTLS &amp; Rate-Limiter Active</span>
                      </div>
                      <span className="font-mono text-[11px] text-slate-800 font-bold">0 dropped pkts</span>
                    </div>
                  </div>
                )}

                {/* Tab 2: Velocity */}
                {activeTab === "velocity" && (
                  <div className="p-5 space-y-4 bg-white">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-700 font-bold">Sprint 14 Burndown Progress</span>
                      <span className="text-slate-700 font-mono font-bold">94% Target Achieved</span>
                    </div>
                    {/* Visual bar chart in Light slate on White */}
                    <div className="h-28 flex items-end justify-between gap-1.5 px-2 pt-2 bg-slate-50/40 rounded-xl border border-slate-200">
                      {[35, 52, 45, 68, 62, 85, 76, 92, 88, 98, 94].map((height, idx) => (
                        <div key={idx} className="flex-1 flex flex-col items-center gap-1 group">
                          <div 
                            style={{ height: `${height}%` }}
                            className={`w-full rounded-t transition-all duration-300 ${
                              idx === 10
                                ? "bg-gradient-to-t from-slate-500 to-slate-300 shadow-md shadow-slate-500/20"
                                : "bg-slate-200 hover:bg-slate-300"
                            }`} 
                          />
                          <span className="text-[9px] text-slate-500 font-mono">D{idx + 1}</span>
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 bg-slate-50/50 rounded-lg border border-slate-200">
                        <span className="text-slate-500 font-medium">Story Points Shipped:</span>
                        <div className="text-slate-900 font-bold text-sm mt-0.5">82 / 88 pts</div>
                      </div>
                      <div className="p-2.5 bg-slate-50/50 rounded-lg border border-slate-200">
                        <span className="text-slate-500 font-medium">Code Coverage:</span>
                        <div className="text-emerald-700 font-bold text-sm mt-0.5">96.8% (Jest)</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 3: Cluster */}
                {activeTab === "cluster" && (
                  <div className="p-5 space-y-3 bg-white">
                    <div className="text-xs font-bold text-slate-700">AWS EKS Cluster Health</div>
                    <div className="space-y-2">
                      <div className="p-2.5 rounded-lg bg-slate-50/40 border border-slate-200 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <Cpu className="w-4 h-4 text-slate-600" />
                          <span className="text-slate-800 font-medium">PostgreSQL Primary + Replica</span>
                        </div>
                        <span className="text-emerald-700 font-mono font-bold">Sync: 0 lag</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-50/40 border border-slate-200 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <Server className="w-4 h-4 text-slate-600" />
                          <span className="text-slate-800 font-medium">Redis Distributed Cache</span>
                        </div>
                        <span className="text-emerald-700 font-mono font-bold">99.4% Hit</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-50/40 border border-slate-200 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <Zap className="w-4 h-4 text-slate-600" />
                          <span className="text-slate-800 font-medium">Dockerized Microservices</span>
                        </div>
                        <span className="text-slate-700 font-mono font-semibold">16 Pods Running</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Dashboard Footer */}
                <div className="px-5 py-2.5 bg-[#f8fafc] border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-950 font-medium">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Automated CI/CD Staging Live
                  </span>
                  <span className="font-mono text-slate-800 font-bold">v2.1.4-prod</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
