import React from "react";
import Link from "next/link";
import { 
  Layout, 
  Server, 
  Cloud, 
  Database, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  Terminal, 
  Layers, 
  CheckCircle2,
  Workflow
} from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import Badge from "../ui/Badge";

export default function ServiceBentoGrid() {
  return (
    <section className="relative py-20 lg:py-28 bg-white border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="Specialized IT Engineering"
          badgeVariant="slate"
          badgeDot={true}
          title="Modular Capabilities for"
          gradientTitle="High-Velocity Engineering Teams."
          description="We do not supply junior generalists. Our pods are comprised of seasoned full-stack architects and DevOps practitioners who take complete technical ownership."
        />

        {/* Bento Grid Layout in White & Light slate */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          
          {/* Bento Item 1: Full-Stack Web Apps (Col-span 7) */}
          <div className="lg:col-span-7 rounded-2xl border border-slate-200 bg-white p-8 sm:p-10 flex flex-col justify-between hover:border-slate-400 hover:shadow-xl hover:shadow-slate-500/10 transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#f8fafc] border border-[#cbd5e1] flex items-center justify-center text-slate-700 group-hover:scale-110 transition-transform">
                  <Layout className="w-6 h-6" />
                </div>
                <Badge variant="slate">01 &bull; Core Frontend</Badge>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
                <span className="text-gradient">Full-Stack Web &amp; SaaS Development</span>
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Production-ready React 19 and Next.js 16 web applications engineered with server components, streaming SSR, accessible design systems, and sub-second Time-to-Interactive.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3 rounded-xl bg-[#f8fafc]/40 border border-slate-200/80">
                  <div className="text-xs text-slate-500">Core Web Vitals</div>
                  <div className="text-lg font-bold text-emerald-700 font-mono mt-0.5">99/100</div>
                  <div className="text-[10px] text-slate-600">Lighthouse Performance</div>
                </div>
                <div className="p-3 rounded-xl bg-[#f8fafc]/40 border border-slate-200/80">
                  <div className="text-xs text-slate-500">Architecture</div>
                  <div className="text-lg font-bold text-slate-900 font-mono mt-0.5">Next.js App Router</div>
                  <div className="text-[10px] text-slate-700 font-bold">Server Actions + Streaming</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 text-xs text-slate-700">
                {["Next.js 16", "React 19", "Tailwind CSS v4", "TypeScript", "Zustand", "Responsive UX"].map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-full bg-slate-50/70 border border-slate-200 font-mono text-[11px] font-semibold text-slate-800">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
              <Link href="/contact" className="text-xs sm:text-sm text-[#334155] hover:text-slate-600 font-bold flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                Initiate Full-Stack Project <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Bento Item 2: Backend & RESTful APIs (Col-span 5) */}
          <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white p-8 flex flex-col justify-between hover:border-slate-400 hover:shadow-xl hover:shadow-slate-500/10 transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#f8fafc] border border-[#cbd5e1] flex items-center justify-center text-slate-700 group-hover:scale-110 transition-transform">
                  <Server className="w-6 h-6" />
                </div>
                <Badge variant="white">02 &bull; API Systems</Badge>
              </div>

              <h3 className="text-2xl font-extrabold mb-3">
                <span className="text-gradient">Scalable Backend &amp; RESTful APIs</span>
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Event-driven Node.js &amp; Express architectures with formal Swagger/OpenAPI contracts, distributed JWT/OAuth auth, and idempotent webhook handlers.
              </p>

              <div className="space-y-2.5 mb-6 text-xs text-slate-700">
                <div className="flex items-center gap-2 p-2 rounded-lg bg-[#f8fafc]/40 border border-slate-200/80">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Dynamic RBAC &amp; Tenant Partitioning</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-[#f8fafc]/40 border border-slate-200/80">
                  <Zap className="w-4 h-4 text-slate-600 shrink-0" />
                  <span className="font-semibold text-slate-900">Sub-20ms P99 API Gateway Latency</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-[#f8fafc]/40 border border-slate-200/80">
                  <Terminal className="w-4 h-4 text-slate-700 shrink-0" />
                  <span>OpenAPI 3.0 &amp; Swagger Spec Gated</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <Link href="/contact" className="text-xs sm:text-sm text-[#334155] hover:text-slate-600 font-bold flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                Consult on API Strategy <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Bento Item 3: Cloud & Docker DevOps (Col-span 5) */}
          <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white p-8 flex flex-col justify-between hover:border-slate-400 hover:shadow-xl hover:shadow-slate-500/10 transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#f8fafc] border border-[#cbd5e1] flex items-center justify-center text-slate-700 group-hover:scale-110 transition-transform">
                  <Cloud className="w-6 h-6" />
                </div>
                <Badge variant="slate">03 &bull; Infrastructure</Badge>
              </div>

              <h3 className="text-2xl font-extrabold mb-3">
                <span className="text-gradient">Cloud &amp; Docker DevOps Pipelines</span>
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Dockerized container pipelines, AWS EKS/ECS deployment automation, Terraform IaC, and automated smoke testing for zero-downtime releases.
              </p>

              <div className="p-3.5 rounded-xl bg-[#f8fafc]/40 border border-slate-200/80 font-mono text-xs text-slate-800 mb-6">
                <div className="text-[10px] text-slate-500 mb-1">CI/CD PIPELINE STATUS:</div>
                <div className="text-emerald-700 font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Docker Build: Cached (14s)
                </div>
                <div className="text-emerald-700 font-bold flex items-center gap-2 mt-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> EKS Rolling Update: Passed
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <Link href="/contact" className="text-xs sm:text-sm text-[#334155] hover:text-slate-600 font-bold flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                Scale Your Cloud Infra <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Bento Item 4: Database Architecture (Col-span 7) */}
          <div className="lg:col-span-7 rounded-2xl border border-slate-200 bg-white p-8 sm:p-10 flex flex-col justify-between hover:border-slate-400 hover:shadow-xl hover:shadow-slate-500/10 transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#f8fafc] border border-[#cbd5e1] flex items-center justify-center text-slate-700 group-hover:scale-110 transition-transform">
                  <Database className="w-6 h-6" />
                </div>
                <Badge variant="white">04 &bull; Data Layer</Badge>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
                <span className="text-gradient">PostgreSQL &amp; High-Concurrency Databases</span>
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                ACID-guaranteed relational schema design, Sequelize/Prisma migrations, query index tuning, and distributed Redis caching for high-load fintech and enterprise platforms.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <div className="p-3 rounded-xl bg-[#f8fafc]/40 border border-slate-200/80">
                  <div className="text-xs text-slate-500">PostgreSQL Core</div>
                  <div className="text-sm font-bold text-slate-900 mt-1">Partitioned Tables</div>
                </div>
                <div className="p-3 rounded-xl bg-[#f8fafc]/40 border border-slate-200/80">
                  <div className="text-xs text-slate-500">Redis In-Memory</div>
                  <div className="text-sm font-bold text-slate-700 mt-1">Sub-1ms Lookups</div>
                </div>
                <div className="p-3 rounded-xl bg-[#f8fafc]/40 border border-slate-200/80">
                  <div className="text-xs text-slate-500">Data Integrity</div>
                  <div className="text-sm font-bold text-slate-900 mt-1">Atomic Transactions</div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <Link href="/contact" className="text-xs sm:text-sm text-[#334155] hover:text-slate-600 font-bold flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                Audit Your Database Architecture <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
