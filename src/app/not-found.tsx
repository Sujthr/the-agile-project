import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-32 px-6 text-center">
      <div className="w-20 h-20 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-8">
        <Search size={36} />
      </div>
      <h1 className="text-6xl font-black text-slate-900 mb-4">404</h1>
      <h2 className="text-xl font-semibold text-slate-700 mb-3">
        Page Not Found
      </h2>
      <p className="text-muted max-w-md mb-10">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Let&apos;s get you back on track.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
        >
          Browse the Blog
        </Link>
      </div>
    </div>
  );
}
