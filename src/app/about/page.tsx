import Link from "next/link";
import { PersonJsonLd } from "@/components/JsonLd";
import {
  ArrowRight,
  Target,
  BarChart3,
  Users,
  Zap,
  CalendarCheck,
  Settings,
  Building2,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Sujit Kumar Thakur — Senior Project Manager specializing in fintech and trading platform delivery.",
};

const expertise = [
  { icon: Target, label: "Agile & Scrum Delivery" },
  { icon: BarChart3, label: "Trading Platforms (OMS, RMS, Charting)" },
  { icon: Users, label: "Product & Program Management" },
  { icon: Zap, label: "Stakeholder & Client Communication" },
  { icon: CalendarCheck, label: "Release Planning & Execution" },
  { icon: Settings, label: "Jira & Confluence Optimization" },
  { icon: Building2, label: "Fintech System Architecture" },
];

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-24">
      <PersonJsonLd />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-3 animate-fade-in">
            {/* Avatar */}
            <div className="mb-8 flex items-center gap-5">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-2xl font-black shadow-lg">
                SK
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                  Sujit Kumar Thakur
                </h1>
                <p className="text-muted text-sm mt-1">
                  Senior Project Manager | Fintech & Trading Platforms
                </p>
              </div>
            </div>

            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p className="text-lg">
                I&apos;m{" "}
                <strong className="text-slate-900">Sujit Kumar Thakur</strong>,
                a Senior Project Manager specializing in building and delivering
                scalable fintech and trading platform solutions.
              </p>

              <p>
                With strong expertise in Agile methodologies, product delivery,
                and cross-functional team leadership, I&apos;ve successfully led
                complex software initiatives in high-stakes, real-time
                environments.
              </p>

              <p>
                I bring deep domain knowledge in trading systems — including
                order management, charting integrations, and market data
                platforms — enabling me to bridge the gap between business needs
                and technical execution.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 pt-6">
                My Approach
              </h2>

              <p>
                I focus on <strong>outcome-driven delivery</strong>, emphasizing
                clarity, speed, and accountability. I&apos;m known for
                simplifying complex problems, aligning stakeholders, and
                ensuring predictable execution through structured Agile
                practices.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 pt-6">
                My Vision
              </h2>

              <p>
                To build intelligent, scalable, and user-centric financial
                platforms while continuously evolving Agile practices to meet
                modern product and delivery challenges.
              </p>
            </div>

            <div className="mt-12">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
              >
                Let&apos;s Connect <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2">
            <div className="sticky top-24 space-y-8">
              {/* Expertise Card */}
              <div className="rounded-2xl border border-slate-200 bg-white p-8">
                <h3 className="text-lg font-bold text-slate-900 mb-6">
                  Core Expertise
                </h3>
                <ul className="space-y-4">
                  {expertise.map((item) => (
                    <li key={item.label} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                        <item.icon size={18} />
                      </div>
                      <span className="text-sm font-medium text-slate-700">
                        {item.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Connect Card */}
              <div className="rounded-2xl border border-slate-200 bg-surface p-8">
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  Connect
                </h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/sujit-kumar-thakur-699263117/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-dark font-medium transition"
                    >
                      LinkedIn Profile &rarr;
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:thakursujitkumar@gmail.com"
                      className="text-primary hover:text-primary-dark font-medium transition"
                    >
                      thakursujitkumar@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
