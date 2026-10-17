"use client";

import React, { useState } from "react";
import { 
  Server, 
  Layout, 
  Database, 
  Cloud, 
  CheckCircle, 
  ExternalLink,
  Terminal,
  ShieldAlert,
  Cpu
} from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import Badge from "../ui/Badge";

const TECH_CATEGORIES = {
  backend: {
    label: "Backend & APIs",
    icon: Server,
    color: "indigo",
    headline: "High-Throughput Node.js & Distributed Microservices",
    description: "Battle-tested asynchronous event-driven engines built for sub-millisecond response times, fault tolerance, and secure RESTful & GraphQL endpoints.",
    technologies: [
      { name: "Node.js", role: "Runtime Engine", version: "v20+ LTS", tag: "Async Core" },
      { name: "Express.js", role: "REST Framework", version: "v4.x / v5", tag: "Modular Routing" },
      { name: "TypeScript", role: "Type Safety", version: "v5.4", tag: "Strict Contracts" },
      { name: "Sequelize & Prisma", role: "ORM / Query Engine", version: "v6+", tag: "Migration Safe" },
      { name: "Socket.io", role: "Real-time WebSockets", version: "v4.7", tag: "Bidirectional" },
      { name: "BullMQ", role: "Distributed Job Queues", version: "Redis-backed", tag: "Background Tasks" },
    ],
    codePreview: `// Strict Express + TypeScript API Contract
router.post('/api/v2/orders', authenticateToken, validateSchema(OrderPayload), 
  async (req: Request, res: Response) => {
    const transaction = await sequelize.transaction();
    try {
      const order = await OrderService.createWithCredits(req.body, transaction);
      await AuditLogger.record('ORDER_CREATED', order.id, transaction);
      await transaction.commit();
      return res.status(201).json({ success: true, data: order });
    } catch (err) {
      await transaction.rollback();
      throw new APIError('TRANSACTION_FAILED', 400, err.message);
    }
  }
);`,
  },
  frontend: {
    label: "Frontend & UI",
    icon: Layout,
    color: "cyan",
    headline: "Server-Rendered React, Next.js & Modern Web Vitals",
    description: "High-conversion web interfaces with sub-second page loads, accessible UI design systems, dynamic client state management, and full mobile optimization.",
    technologies: [
      { name: "React 19", role: "UI Library", version: "Concurrent Mode", tag: "Virtual DOM" },
      { name: "Next.js 16", role: "Full-Stack Framework", version: "App Router", tag: "SSR & Streaming" },
      { name: "Tailwind CSS v4", role: "Utility Styling Engine", version: "JIT Compiler", tag: "Design Tokens" },
      { name: "Lucide React", role: "SVG Iconography", version: "6,000+ Icons", tag: "Tree-Shaken" },
      { name: "Zustand & TanStack Query", role: "State & Cache", version: "Global State", tag: "Optimistic UI" },
      { name: "Framer Motion", role: "Micro-interactions", version: "GPU Accelerated", tag: "Smooth 60fps" },
    ],
    codePreview: `// Next.js App Router Client Component with Optimistic State
export default function RealTimeDashboard({ initialMetrics }) {
  const [data, setData] = useState(initialMetrics);
  const { data: liveStream } = useQuery({
    queryKey: ['clusterHealth'],
    queryFn: fetchClusterMetrics,
    refetchInterval: 3000,
  });

  return (
    <GlassCard className="border-indigo-500/20 backdrop-blur-xl">
      <SectionHeading badge="REAL-TIME TELEMETRY" title="Cluster Uptime" />
      <MetricsGrid stats={liveStream || data} />
    </GlassCard>
  );
}`,
  },
  database: {
    label: "Database & Cache",
    icon: Database,
    color: "emerald",
    headline: "ACID-Compliant PostgreSQL & Distributed Redis Caching",
    description: "Robust data architectures with zero data loss policies, comprehensive automated migration rollbacks, connection pooling, and sub-millisecond Redis caches.",
    technologies: [
      { name: "PostgreSQL 16", role: "Primary Relational DB", version: "v16.2", tag: "ACID Guaranteed" },
      { name: "Sequelize ORM", role: "Data Layer Model", version: "v6.37", tag: "Schema Migrations" },
      { name: "Redis 7", role: "Distributed Cache & Pub/Sub", version: "In-Memory", tag: "Sub-ms Reads" },
      { name: "PgBouncer", role: "Connection Pooling", version: "Optimized", tag: "5,000+ Conns" },
      { name: "Elasticsearch", role: "Full-Text Search", version: "v8.x", tag: "Faceted Search" },
      { name: "AWS RDS Multi-AZ", role: "Cloud High Availability", version: "Automated Failover", tag: "99.99% SLA" },
    ],
    codePreview: `-- PostgreSQL Partitioned Transactions & Indices
CREATE TABLE tenant_transactions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id UUID NOT NULL REFERENCES tenants(id),
    amount_cents BIGINT NOT NULL,
    currency VARCHAR(3) DEFAULT 'USD',
    created_at TIMESTAMPTZ DEFAULT NOW()
) PARTITION BY RANGE (created_at);

CREATE INDEX idx_tenant_transactions_perf 
ON tenant_transactions (tenant_id, created_at DESC);`,
  },
  devops: {
    label: "DevOps & API Testing",
    icon: Cloud,
    color: "purple",
    headline: "Containerized Docker Pods, AWS Cloud & Automated QA",
    description: "Immutable deployments via Docker & Kubernetes, zero-downtime Blue/Green releases on AWS, and end-to-end API contract testing via Swagger and Postman.",
    technologies: [
      { name: "Docker", role: "Containerization", version: "Multi-stage Builds", tag: "Immutable Images" },
      { name: "AWS (EKS, ECS, S3)", role: "Cloud Infrastructure", version: "Terraform IaC", tag: "Auto-Scaling" },
      { name: "Swagger / OpenAPI 3.0", role: "Contract Documentation", version: "Live Sandbox", tag: "Interactive Docs" },
      { name: "Postman & Apidog", role: "Automated API Test Suites", version: "CI Integration", tag: "Regression Gate" },
      { name: "GitHub Actions", role: "Automated CI/CD", version: "Matrix Workflows", tag: "Lint -> Test -> Deploy" },
      { name: "Prometheus & Grafana", role: "Real-time Telemetry", version: "AlertManager", tag: "24/7 Monitoring" },
    ],
    codePreview: `# GitHub Actions CI/CD Pipeline Stage
name: Production Docker Build & Deploy
jobs:
  verify-and-ship:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run Jest & Supertest Integration QA
        run: npm run test:ci
      - name: Validate Swagger API Contracts
        run: npx spectral lint swagger.yaml
      - name: Build & Push Docker to AWS ECR
        run: |
          docker build -t app:\${{ github.sha }} .
          aws ecs update-service --cluster prod-cluster --service web --force-new-deployment`,
  },
};

export default function TechStackTabs() {
  const [activeTab, setActiveTab] = useState("backend");
  const current = TECH_CATEGORIES[activeTab];

  return (
    <section className="relative py-20 lg:py-28 bg-white border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="Enterprise Grade Stack"
          badgeVariant="slate"
          badgeDot={true}
          title="Battle-Tested Technologies Engineered for"
          gradientTitle="Scale, Speed &amp; Security."
          description="We avoid fleeting hype. Every tool in our stack is selected for enterprise resilience, long-term support, maintainability, and horizontal scalability."
        />

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {Object.entries(TECH_CATEGORIES).map(([key, data]) => {
            const Icon = data.icon;
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 border cursor-pointer ${
                  isActive
                    ? "bg-[#f8fafc] text-[#334155] border-[#cbd5e1] shadow-md shadow-slate-500/10 scale-105 font-bold"
                    : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-slate-700" : "text-slate-500"}`} />
                <span>{data.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Technologies Grid */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-500/5">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant={activeTab === "backend" || activeTab === "database" ? "slate" : "white"} size="sm">
                  {current.label} Architecture
                </Badge>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold mb-3">
                <span className="text-gradient">{current.headline}</span>
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {current.description}
              </p>

              {/* Technologies Badge Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {current.technologies.map((tech, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-white border border-slate-200/80 flex flex-col justify-between hover:border-slate-400 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-slate-900">{tech.name}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#f8fafc] text-[#334155] border border-slate-300 font-bold">
                        {tech.version}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-100 text-xs">
                      <span className="text-slate-500">{tech.role}</span>
                      <span className="text-[11px] text-slate-700 font-bold">{tech.tag}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Code or Pipeline Contract Preview */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xl shadow-slate-500/5">
              {/* Terminal Title Bar */}
              <div className="px-4 py-3 bg-[#f8fafc] border-b border-slate-200 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-400" />
                  <span className="w-3 h-3 rounded-full bg-slate-400" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="text-slate-600 ml-2 font-semibold">architecture-spec.ts</span>
                </div>
                <span className="text-[11px] text-[#334155] font-bold flex items-center gap-1">
                  <Terminal className="w-3 h-3 text-slate-700" /> Production Verified
                </span>
              </div>

              {/* Code Snippet */}
              <div className="p-4 sm:p-6 overflow-x-auto font-mono text-xs text-slate-800 leading-relaxed bg-white max-h-[420px] select-all">
                <pre>{current.codePreview}</pre>
              </div>

              {/* Terminal Footer */}
              <div className="px-4 py-2.5 bg-[#f8fafc]/60 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-600">
                <span>Standard: Zero Tech Debt Policy</span>
                <span className="text-emerald-700 font-semibold">&bull; Automated Static Analysis</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
