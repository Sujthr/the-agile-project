import { Play, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Videos",
  description:
    "Video content on Agile delivery, fintech engineering, and trading platform best practices.",
};

const videos = [
  {
    id: "1",
    title: "Scrum for Trading Platforms: What's Different?",
    description:
      "A walkthrough of how to adapt Scrum ceremonies for teams building real-time trading systems.",
    duration: "12 min",
    category: "Agile Frameworks",
    comingSoon: true,
  },
  {
    id: "2",
    title: "Jira Workflow Masterclass for Delivery Teams",
    description:
      "Step-by-step guide to setting up Jira boards, workflows, and automation for maximum delivery speed.",
    duration: "18 min",
    category: "Tools & Process",
    comingSoon: true,
  },
  {
    id: "3",
    title: "OMS Architecture: From Concept to Production",
    description:
      "How to approach the design and delivery of an Order Management System using Agile methodologies.",
    duration: "22 min",
    category: "Trading Platforms",
    comingSoon: true,
  },
];

export default function VideosPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            Videos
          </h1>
          <p className="mt-4 text-lg text-muted">
            Deep dives, walkthroughs, and practical demonstrations on Agile
            delivery and fintech engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group rounded-2xl border border-slate-200 bg-white overflow-hidden"
            >
              {/* Thumbnail placeholder */}
              <div className="relative aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <Play size={24} className="text-white ml-1" />
                </div>
                {video.comingSoon && (
                  <span className="absolute top-3 right-3 text-xs font-semibold text-white bg-accent px-3 py-1 rounded-full">
                    Coming Soon
                  </span>
                )}
              </div>

              <div className="p-6">
                <span className="inline-block text-xs font-semibold text-primary bg-primary/10 rounded-full px-3 py-1 mb-3">
                  {video.category}
                </span>
                <h2 className="text-lg font-semibold text-slate-900 mb-2">
                  {video.title}
                </h2>
                <p className="text-sm text-muted mb-4">{video.description}</p>
                <div className="flex items-center gap-1.5 text-xs text-muted">
                  <Clock size={12} />
                  <span>{video.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-20 rounded-2xl bg-surface border border-slate-200 p-8 sm:p-12 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            Get Notified When New Videos Drop
          </h2>
          <p className="text-muted mb-8 max-w-md mx-auto">
            Subscribe to be the first to know when new video content is
            published.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 rounded-lg border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
            <button
              type="submit"
              className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition"
            >
              Notify Me
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
