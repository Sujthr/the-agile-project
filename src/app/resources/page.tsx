import { Download, FileText, CheckSquare, Layout, BarChart } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Free templates, checklists, and frameworks for Agile delivery in fintech and trading platforms.",
};

const resources = [
  {
    icon: CheckSquare,
    title: "Sprint Planning Checklist",
    description:
      "A comprehensive checklist to ensure your sprint planning sessions are effective and complete. Covers capacity planning, story readiness criteria, and risk identification.",
    format: "PDF",
    category: "Agile",
  },
  {
    icon: Layout,
    title: "Jira Board Configuration Guide",
    description:
      "Step-by-step guide to setting up an optimized Jira board for delivery teams. Includes workflow templates, WIP limits, and automation recipes.",
    format: "PDF",
    category: "Tools",
  },
  {
    icon: FileText,
    title: "OMS Requirements Template",
    description:
      "A requirements document template specifically designed for Order Management System projects. Covers functional, non-functional, and regulatory requirements.",
    format: "DOCX",
    category: "Trading Platforms",
  },
  {
    icon: BarChart,
    title: "Agile Metrics Dashboard Template",
    description:
      "Track cycle time, throughput, and delivery predictability with this ready-to-use metrics template. Compatible with Jira and Azure DevOps.",
    format: "XLSX",
    category: "Metrics",
  },
];

export default function ResourcesPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            Resources
          </h1>
          <p className="mt-4 text-lg text-muted">
            Free templates, checklists, and frameworks to help you deliver
            better software, faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((resource) => (
            <div
              key={resource.title}
              className="rounded-2xl border border-slate-200 bg-white p-8 flex flex-col"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <resource.icon size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className="text-lg font-semibold text-slate-900">
                      {resource.title}
                    </h2>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-primary bg-primary/10 rounded-full px-2 py-0.5 font-medium">
                      {resource.category}
                    </span>
                    <span className="text-muted">{resource.format}</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted leading-relaxed mb-6 flex-1">
                {resource.description}
              </p>
              <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary text-primary px-5 py-2.5 text-sm font-semibold hover:bg-primary hover:text-white transition w-full">
                <Download size={16} /> Download (Coming Soon)
              </button>
            </div>
          ))}
        </div>

        {/* Lead capture */}
        <div className="mt-20 rounded-2xl bg-gradient-to-br from-primary to-primary-dark p-8 sm:p-12 text-white text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Want Early Access to All Resources?
          </h2>
          <p className="text-blue-100 mb-8 max-w-lg mx-auto">
            Join the mailing list and get notified when new templates, guides,
            and frameworks are published.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 rounded-lg px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <button
              type="submit"
              className="rounded-lg bg-white text-primary px-6 py-3 text-sm font-bold hover:bg-blue-50 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
