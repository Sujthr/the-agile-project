import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllPosts, getCategories } from "@/lib/blog";
import BlogCategoryFilter from "@/components/BlogCategoryFilter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles on Agile delivery, fintech engineering, trading platforms, and product management.",
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { category } = await searchParams;
  const allPosts = getAllPosts();
  const categories = getCategories();
  const posts = category
    ? allPosts.filter((post) => post.category === category)
    : allPosts;

  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            Blog
          </h1>
          <p className="mt-4 text-lg text-muted">
            Practical insights on Agile delivery, fintech engineering, and
            building trading platforms that perform.
          </p>
        </div>

        {/* Categories */}
        <BlogCategoryFilter categories={categories} />

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-2xl border border-slate-200 bg-white overflow-hidden transition hover:shadow-lg hover:shadow-slate-200/50"
            >
              <div className="p-6">
                <span className="inline-block text-xs font-semibold text-primary bg-primary/10 rounded-full px-3 py-1 mb-4">
                  {post.category}
                </span>
                <h2 className="text-lg font-semibold text-slate-900 group-hover:text-primary transition mb-3 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-sm text-muted line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-muted">
                  <div className="flex items-center gap-2">
                    <span>{post.date}</span>
                    <span>&middot;</span>
                    <span>{post.readTime}</span>
                  </div>
                  <ArrowRight
                    size={14}
                    className="text-primary opacity-0 group-hover:opacity-100 transition"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {posts.length === 0 && (
          <p className="text-center text-muted py-20">
            No posts yet. Check back soon!
          </p>
        )}
      </div>
    </div>
  );
}
