"use client";

import React, { useState } from "react";
import { 
  Send, 
  CheckCircle2, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Phone, 
  HelpCircle, 
  ChevronDown,
  Sparkles,
  ArrowRight,
  Loader2
} from "lucide-react";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import GlassCard from "../ui/GlassCard";

const FAQS = [
  {
    q: "How quickly can a dedicated engineering pod onboard onto our codebase?",
    a: "Our senior pods typically achieve full sprint velocity within 5 to 7 business days. We begin with a 48-hour architecture and repository audit to map dependencies, CI/CD pipelines, and coding conventions.",
  },
  {
    q: "Can we test or demo your proprietary SaaS products before purchasing?",
    a: "Yes. We provision sandbox instances with pre-loaded mock data and automated API credentials so your technical team can test end-to-end integration and evaluate performance.",
  },
  {
    q: "Who owns the Intellectual Property (IP) for custom engineering projects?",
    a: "You retain 100% full ownership of all custom code, database schemas, Docker containers, and documentation upon project milestone settlement. We sign comprehensive mutual NDAs prior to technical scoping.",
  },
  {
    q: "What is your typical sprint cadence and communication rhythm?",
    a: "We adhere to strict 2-week agile sprints. You receive daily asynchronous 15-minute standups, direct shared Slack/Discord channels, real-time Jira/Linear visibility, and a live Day 10 staging demonstration.",
  },
  {
    q: "Do you offer post-launch maintenance, SLA support, and cloud management?",
    a: "Yes. Every production deployment comes with a 30-day hypercare warranty. We also offer 24/7 Managed Cloud DevOps and 99.99% uptime SLA agreements with dedicated on-call engineers.",
  },
];

export default function SmartContactForm() {
  const [inquiryType, setInquiryType] = useState("demo"); // "demo", "services", "general"
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    productInterest: "Ledgerly ERP (Real Estate & Billing)",
    serviceType: "Full-Stack Web & SaaS Application",
    budgetRange: "$25,000 - $50,000",
    timeline: "Within 2-4 Weeks",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="relative py-20 lg:py-28 bg-white border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          
          {/* Left Column: Smart Dynamic Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-10 shadow-xl shadow-slate-500/5">
              
              <div className="mb-8">
                <Badge variant="slate" dot={true} className="mb-3">
                  Direct Engineering Inquiry
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  <span className="text-gradient">Start an Engineering Discussion</span>
                </h2>
                <p className="text-slate-600 text-sm sm:text-base mt-2">
                  Select your objective below. We route inquiries directly to our Lead Architects, not non-technical sales reps.
                </p>
              </div>

              {/* Inquiry Type Toggle */}
              <div className="grid grid-cols-3 gap-2 p-1.5 rounded-xl bg-slate-50/60 border border-slate-200 mb-8 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => {
                    setInquiryType("demo");
                    setSubmitted(false);
                  }}
                  className={`py-2.5 px-2 rounded-lg transition-all cursor-pointer ${
                    inquiryType === "demo"
                      ? "bg-[#f8fafc] text-[#334155] border border-[#cbd5e1] shadow-xs font-bold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Request Product Demo
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setInquiryType("services");
                    setSubmitted(false);
                  }}
                  className={`py-2.5 px-2 rounded-lg transition-all cursor-pointer ${
                    inquiryType === "services"
                      ? "bg-[#f8fafc] text-[#334155] border border-[#cbd5e1] shadow-xs font-bold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Hire IT Engineering
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setInquiryType("general");
                    setSubmitted(false);
                  }}
                  className={`py-2.5 px-2 rounded-lg transition-all cursor-pointer ${
                    inquiryType === "general"
                      ? "bg-[#f8fafc] text-[#334155] border border-[#cbd5e1] shadow-xs font-bold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  General Inquiry
                </button>
              </div>

              {submitted ? (
                /* Success State */
                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    <span className="text-gradient">Inquiry Transmitted to Architecture Pod</span>
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-900">{formData.name || "friend"}</strong>. A Senior Solutions Architect has been assigned to review your technical requirements. We typically reply within 4 business hours.
                  </p>
                  <div className="pt-4">
                    <Button
                      onClick={() => setSubmitted(false)}
                      variant="secondary"
                      size="sm"
                    >
                      Submit Another Requirement
                    </Button>
                  </div>
                </div>
              ) : (
                /* Dynamic Form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Marcus Vance"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200/90 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="m.vance@enterprise.com"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200/90 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Organization / Company *
                      </label>
                      <input
                        type="text"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Vance Logistics Corp"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200/90 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500 transition-colors"
                      />
                    </div>

                    {/* Conditional Field: Product of Interest */}
                    {inquiryType === "demo" && (
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                          Select Product
                        </label>
                        <select
                          name="productInterest"
                          value={formData.productInterest}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200/90 text-slate-900 text-sm focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500 transition-colors cursor-pointer"
                        >
                          <option>Ledgerly ERP (Real Estate &amp; Billing)</option>
                          <option>CivicFlow GovTech (Intake Orchestration)</option>
                          <option>API Atlas DevHub (OpenAPI Registry)</option>
                          <option>All Products Suite Demo</option>
                        </select>
                      </div>
                    )}

                    {/* Conditional Field: Service Type */}
                    {inquiryType === "services" && (
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                          Primary Capability
                        </label>
                        <select
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200/90 text-slate-900 text-sm focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500 transition-colors cursor-pointer"
                        >
                          <option>Dedicated Agile Pod (Full Team)</option>
                          <option>Full-Stack Web &amp; Next.js Application</option>
                          <option>Scalable Backend &amp; RESTful APIs</option>
                          <option>Cloud &amp; Docker DevOps Migration</option>
                          <option>PostgreSQL Database Architecture</option>
                          <option>Fixed-Scope MVP Build (6-8 Weeks)</option>
                        </select>
                      </div>
                    )}

                    {/* Conditional Field: General Inquiry */}
                    {inquiryType === "general" && (
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                          Inquiry Topic
                        </label>
                        <select
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200/90 text-slate-900 text-sm focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500 transition-colors cursor-pointer"
                        >
                          <option>Partnership &amp; Channel Reselling</option>
                          <option>Careers &amp; Engineering Culture</option>
                          <option>Press &amp; Media</option>
                          <option>Security &amp; Compliance Audit</option>
                        </select>
                      </div>
                    )}
                  </div>

                  {/* If IT Services is chosen, show Budget & Timeline Selectors */}
                  {inquiryType === "services" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-[#f8fafc]/40 border border-slate-200">
                      <div>
                        <label className="block text-xs font-bold text-[#334155] uppercase tracking-wider mb-2">
                          Estimated Budget Range
                        </label>
                        <select
                          name="budgetRange"
                          value={formData.budgetRange}
                          onChange={handleChange}
                          className="w-full px-3 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-slate-500"
                        >
                          <option>$10,000 - $25,000 (Sprint Audit / MVP Scope)</option>
                          <option>$25,000 - $50,000 (Multi-Sprint Pod)</option>
                          <option>$50,000 - $100,000 (Quarterly Embedded Pod)</option>
                          <option>$100,000+ (Enterprise Transformation)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#334155] uppercase tracking-wider mb-2">
                          Target Kickoff Timeline
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full px-3 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-slate-500"
                        >
                          <option>Immediate (Within 7-10 Days)</option>
                          <option>Within 2-4 Weeks</option>
                          <option>Next Quarter</option>
                          <option>Exploratory / Planning Stage</option>
                        </select>
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Project Requirements &amp; Architecture Notes *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={
                        inquiryType === "demo"
                          ? "Tell us about your team size, current tooling, and target evaluation date..."
                          : inquiryType === "services"
                          ? "Briefly describe your application stack, database needs, key integrations, and goals..."
                          : "How can our leadership or engineering team assist you?"
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200/90 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500 transition-colors"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-xs text-slate-600 flex items-center gap-1.5 font-medium">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      Mutual NDA guaranteed &bull; No marketing spam
                    </span>
                    <Button
                      type="submit"
                      variant="primary"
                      loading={loading}
                      iconRight={Send}
                      className="w-full sm:w-auto"
                    >
                      {loading ? "Transmitting..." : "Submit Technical Brief"}
                    </Button>
                  </div>
                </form>
              )}

            </div>
          </div>

          {/* Right Column: Direct Info Cards & FAQ Accordion */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Cards */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-5 shadow-sm">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-slate-700" />
                <span className="text-gradient">Direct Communication Lines</span>
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-[#f8fafc]/40 border border-slate-100">
                  <Mail className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Architecture Desk</div>
                    <a href="mailto:architects@nexusforge.tech" className="text-slate-900 hover:text-slate-700 font-bold transition-colors">
                      architects@nexusforge.tech
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-[#f8fafc]/40 border border-slate-100">
                  <Clock className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-slate-500 font-medium">SLA Response Guarantee</div>
                    <div className="text-slate-900 font-bold">Under 4 Business Hours</div>
                    <div className="text-[11px] text-slate-500">Global timezone coverage (US, EU, APAC)</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-[#f8fafc]/40 border border-slate-100">
                  <MapPin className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Engineering Hub &amp; Cloud HQ</div>
                    <div className="text-slate-900 font-bold">San Francisco &bull; London &bull; Remote Distributed</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive FAQ Accordion */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-slate-700" />
                <span className="text-gradient">Frequently Addressed Inquiries</span>
              </h3>

              <div className="space-y-2">
                {FAQS.map((faq, idx) => {
                  const isOpen = expandedFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-slate-200/80 rounded-xl overflow-hidden bg-white"
                    >
                      <button
                        onClick={() => setExpandedFaq(isOpen ? -1 : idx)}
                        className="w-full text-left p-3.5 flex items-center justify-between text-xs sm:text-sm font-bold text-slate-800 hover:text-slate-800 transition-colors cursor-pointer"
                      >
                        <span className="pr-2">{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-700 shrink-0 transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-3.5 pb-3.5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-[#f8fafc]/20 animate-in fade-in duration-150">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
