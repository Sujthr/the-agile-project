"use client";

import { useSearchParams, useRouter } from "next/navigation";

export default function BlogCategoryFilter({
  categories,
}: {
  categories: string[];
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeCategory = searchParams.get("category");

  function handleClick(category: string | null) {
    if (category) {
      router.push(`/blog?category=${encodeURIComponent(category)}`);
    } else {
      router.push("/blog");
    }
  }

  return (
    <div className="flex flex-wrap gap-2 mb-12">
      <button
        onClick={() => handleClick(null)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition ${
          !activeCategory
            ? "bg-primary text-white"
            : "bg-slate-100 text-slate-600 hover:bg-slate-200 cursor-pointer"
        }`}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleClick(cat)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition ${
            activeCategory === cat
              ? "bg-primary text-white"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200 cursor-pointer"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
