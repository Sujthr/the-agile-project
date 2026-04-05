import { ChevronDown } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Q&A",
  description:
    "Frequently asked questions about Agile delivery, Scrum in fintech, trading platform engineering, and more.",
};

const faqs = [
  {
    category: "Agile & Scrum",
    questions: [
      {
        q: "How do you handle regulatory compliance within Scrum sprints?",
        a: "Compliance should be baked into your Definition of Done, not treated as a separate phase. Every user story touching regulated functionality should include compliance acceptance criteria. I also recommend having a compliance representative attend sprint reviews to catch issues early.",
      },
      {
        q: "What sprint length works best for trading platform teams?",
        a: "I recommend 2-week sprints for most trading teams. The first week focuses on development and internal testing; the second week includes UAT with the trading desk and performance validation. This respects the reality that trading teams are unavailable during market hours.",
      },
      {
        q: "How do you manage dependencies across multiple Agile teams?",
        a: "I use a combination of Scrum-of-Scrums for daily sync, shared dependency boards in Jira, and PI Planning sessions (borrowed from SAFe) for longer-term alignment. The key is making dependencies visible early — not discovering them mid-sprint.",
      },
    ],
  },
  {
    category: "Trading Platforms",
    questions: [
      {
        q: "What's the biggest mistake teams make when building an OMS?",
        a: "Underestimating the complexity of edge cases. Happy-path order flow is maybe 30% of the work. The remaining 70% is handling partial fills, rejects, cancellations, amendments, and reconciliation. Teams that don't invest in domain modeling upfront pay for it in endless rework later.",
      },
      {
        q: "How do you ensure system reliability during peak trading hours?",
        a: "Three things: load testing every sprint (simulating 10x normal volume), blue-green deployments for instant rollback, and comprehensive observability — distributed tracing, real-time dashboards, and automated alerting. You should never deploy during active market hours.",
      },
    ],
  },
  {
    category: "Product Management",
    questions: [
      {
        q: "How do you prioritize features when everything is 'urgent'?",
        a: "I use a WSJF (Weighted Shortest Job First) framework. Score each item on business value, time criticality, risk reduction, and effort. This turns emotional priority debates into data-driven conversations. The numbers don't lie — and they give product owners defensible reasoning.",
      },
      {
        q: "How do you align engineering and product teams on delivery goals?",
        a: "Shared OKRs are the foundation. Engineering and product should own the same outcomes, not separate outputs. I also ensure product managers attend standups (briefly) and that engineers attend customer demos. Empathy in both directions is key.",
      },
    ],
  },
];

export default function QAPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="max-w-2xl mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            Q&A
          </h1>
          <p className="mt-4 text-lg text-muted">
            Answers to common questions about Agile delivery, trading platform
            engineering, and product management in fintech.
          </p>
        </div>

        <div className="space-y-12">
          {faqs.map((section) => (
            <div key={section.category}>
              <h2 className="text-xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
                {section.category}
              </h2>
              <div className="space-y-6">
                {section.questions.map((item, i) => (
                  <details key={i} className="group">
                    <summary className="flex items-start justify-between gap-4 cursor-pointer list-none py-4 px-6 rounded-xl bg-white border border-slate-200 hover:border-primary/30 transition">
                      <span className="text-sm font-semibold text-slate-900">
                        {item.q}
                      </span>
                      <ChevronDown
                        size={18}
                        className="flex-shrink-0 text-muted mt-0.5 transition-transform group-open:rotate-180"
                      />
                    </summary>
                    <div className="mt-2 px-6 py-4 text-sm text-slate-600 leading-relaxed">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Ask a question CTA */}
        <div className="mt-16 rounded-2xl bg-surface border border-slate-200 p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            Have a Question?
          </h2>
          <p className="text-muted mb-6 max-w-md mx-auto">
            Didn&apos;t find what you were looking for? Send me your question
            and I might feature it here.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition"
          >
            Ask a Question
          </Link>
        </div>
      </div>
    </div>
  );
}
