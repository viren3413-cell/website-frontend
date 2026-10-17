import React from "react";
import Link from "next/link";
import { 
  Package, 
  Wrench, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  Cpu, 
  Users, 
  Workflow, 
  ShieldCheck,
  Zap
} from "lucide-react";
import Button from "../ui/Button";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import Badge from "../ui/Badge";

export default function DualOfferingSplit() {
  return (
    <section className="relative py-20 lg:py-28 bg-white border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Two Pillars. One Engineering Core."
          badgeVariant="slate"
          badgeDot={true}
          title="Bridging Proven SaaS Products with"
          gradientTitle="Custom IT Engineering."
          description="Whether you require turnkey, battle-tested software suites or a dedicated agile engineering pod to build your proprietary vision, we deliver senior craftsmanship at every tier."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Proprietary SaaS Products (Light slate Highlight) */}
          <div className="group relative rounded-2xl border border-slate-300 bg-white p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:border-slate-400 hover:shadow-xl hover:shadow-slate-500/10">
            {/* Top Accent Line */}
            <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-slate-300 via-slate-400 to-transparent" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#f8fafc] border border-[#cbd5e1] flex items-center justify-center text-slate-700 group-hover:scale-110 transition-transform">
                  <Package className="w-6 h-6" />
                </div>
                <Badge variant="slate">01 &bull; Turnkey SaaS Platforms</Badge>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
                <span className="text-gradient">Proprietary SaaS Solutions</span>
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Production-proven applications built for immediate enterprise deployment. Designed with modular credit systems, multi-tenant RBAC permissions, and automated billing engines.
              </p>

              {/* Highlights List */}
              <div className="space-y-3.5 mb-8 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900">Ledgerly:</strong> Multi-tenant real estate &amp; rent-roll management with automated Stripe payment reconciliation.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900">CivicFlow:</strong> High-throughput civic request orchestration with dynamic escalation rules &amp; audit trails.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900">API Atlas:</strong> Centralized OpenAPI registry with automated mock servers &amp; performance metrics.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900">Rapid Onboarding:</strong> Deploy on your private AWS VPC or our SOC-2 compliant managed cloud in 48 hours.
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-mono">
                Subscription &bull; Private VPC &bull; White-label
              </span>
              <Button href="/products" variant="primary" iconRight={ArrowRight}>
                Explore Products
              </Button>
            </div>
          </div>

          {/* Card 2: Custom IT Engineering Services (Crisp White with Light slate Highlight) */}
          <div className="group relative rounded-2xl border border-slate-200 bg-white p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:border-slate-400 hover:shadow-xl hover:shadow-slate-500/10">
            {/* Top Accent Line */}
            <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-slate-300 via-slate-400 to-transparent" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#f8fafc] border border-[#cbd5e1] flex items-center justify-center text-slate-700 group-hover:scale-110 transition-transform">
                  <Wrench className="w-6 h-6" />
                </div>
                <Badge variant="white">02 &bull; Bespoke IT Services</Badge>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
                <span className="text-gradient">Custom IT &amp; Cloud Engineering</span>
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Embedded agile engineering pods that integrate directly into your sprint cycle. From enterprise API architecture to high-load databases and cloud modernization.
              </p>

              {/* Highlights List */}
              <div className="space-y-3.5 mb-8 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900">Full-Stack Web &amp; Apps:</strong> Modern Next.js, React, and TypeScript applications with pixel-perfect responsive UX.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900">Backend &amp; Microservices:</strong> High-throughput Node.js/Express and Go APIs with strict OpenAPI/Swagger contracts.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900">Cloud &amp; DevOps Pipelines:</strong> Docker containerization, Kubernetes orchestration, and automated AWS CI/CD pipelines.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900">Database Optimization:</strong> PostgreSQL indexing, Redis caching layers, and high-concurrency schema design.
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-mono">
                Dedicated Pods &bull; Sprints &bull; Fixed-Scope MVP
              </span>
              <Button href="/services" variant="secondary" iconRight={ArrowRight}>
                View IT Services
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
