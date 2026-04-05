import Link from "next/link";
import {
  ArrowRight,
  Target,
  BarChart3,
  Rocket,
  Quote,
} from "lucide-react";
import { getAllPosts } from "@/lib/blog";

const pillars = [
  {
    icon: Target,
    title: "Agile & Scrum Delivery",
    description:
      "Structured, iterative delivery using Scrum, Kanban, and SAFe frameworks tailored for fintech environments.",
  },
  {
    icon: BarChart3,
    title: "Trading Platform Engineering",
    description:
      "Building OMS, RMS, charting, and market data systems that handle real-time, high-stakes workloads.",
  },
  {
    icon: Rocket,
    title: "Product & Program Management",
    description:
      "End-to-end product lifecycle management — from discovery to delivery — with stakeholder alignment.",
  },
];

const testimonials = [
  {
    quote:
      "Sujit brings rare clarity to complex delivery challenges. His structured approach transformed our release cycle.",
    author: "Engineering Director, Fintech Startup",
  },
  {
    quote:
      "A project manager who truly understands both the business and tech side of trading platforms.",
    author: "VP Product, Trading Technology Firm",
  },
];

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-primary-dark to-slate-900 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
              Agile &middot; Fintech &middot; Trading Platforms
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Delivering Software That{" "}
              <span className="text-accent">Moves Markets</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
              Insights on Agile project management, product delivery, and
              building high-performance financial platforms — from the
              trenches.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-dark"
              >
                Read the Blog <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Pillars */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              What I Bring to the Table
            </h2>
            <p className="mt-4 text-muted max-w-2xl mx-auto">
              Deep expertise at the intersection of Agile delivery and financial
              technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="group rounded-2xl border border-slate-200 p-8 transition hover:border-primary hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition">
                  <pillar.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      {posts.length > 0 && (
        <section className="py-20 sm:py-24 bg-surface">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                  Latest Insights
                </h2>
                <p className="mt-3 text-muted">
                  Practical knowledge from real-world delivery.
                </p>
              </div>
              <Link
                href="/blog"
                className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-dark transition"
              >
                View all posts <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group rounded-2xl bg-white border border-slate-200 overflow-hidden transition hover:shadow-lg hover:shadow-slate-200/50"
                >
                  <div className="p-6">
                    <span className="inline-block text-xs font-semibold text-primary bg-primary/10 rounded-full px-3 py-1 mb-4">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-semibold text-slate-900 group-hover:text-primary transition mb-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-muted">
                      <span>{post.date}</span>
                      <span>&middot;</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center sm:hidden">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1 text-sm font-semibold text-primary"
              >
                View all posts <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-16">
            What People Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="relative rounded-2xl bg-surface border border-slate-200 p-8"
              >
                <Quote
                  size={32}
                  className="text-primary/20 absolute top-6 right-6"
                />
                <p className="text-slate-700 leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-sm font-semibold text-slate-900">
                  — {t.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Let&apos;s Build Something Great
          </h2>
          <p className="text-lg text-blue-100 mb-10 max-w-xl mx-auto">
            Whether you&apos;re scaling a trading platform or transforming your
            delivery process, I&apos;d love to connect.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-white text-primary px-8 py-4 text-sm font-bold transition hover:bg-blue-50"
          >
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
