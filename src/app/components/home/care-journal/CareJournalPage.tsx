"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Clock3,
  Search,
  Sparkles,
} from "lucide-react";

export type JournalCategory = {
  _id: string;
  name: string;
  slug: string;
};

export type JournalArticle = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;

  coverImage?: {
    url: string;
    key?: string;
  };

  category: {
    _id: string;
    name: string;
    slug: string;
  };

  tags?: string[];

  author?: {
    name: string;
    image?: {
      url: string;
    };
  };

  readingTime?: number;

  publishedAt?: string;

  isFeatured?: boolean;
};

interface CareJournalPageProps {
  articles: JournalArticle[];
  categories: JournalCategory[];
}

export default function CareJournalPage({
  articles,
  categories,
}: CareJournalPageProps) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const publishedArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesSearch =
        !search ||
        article.title.toLowerCase().includes(search.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(search.toLowerCase()) ||
        article.category.name.toLowerCase().includes(search.toLowerCase()) ||
        article.tags?.some((tag) =>
          tag.toLowerCase().includes(search.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === "all" ||
        article.category.slug === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [articles, search, selectedCategory]);

  const featuredArticle =
    articles.find((article) => article.isFeatured) || articles[0];

  const regularArticles = publishedArticles.filter(
    (article) => article._id !== featuredArticle?._id
  );

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="border-b border-slate-100 bg-[#f8fcfb]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white px-4 py-2 text-xs font-medium text-teal-700 shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
              CAREPROFF CARE JOURNAL
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Trusted Guidance for{" "}
              <span className="text-teal-700">
                Better Baby & Mother Care
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              Helpful care tips, product guides, and practical advice for
              mothers, parents, and caregivers.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {[
                "Baby Care",
                "Newborn Care",
                "Mother Care",
                "Baby Skin Care",
                "Postpartum Care",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-600"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURED ARTICLE
      ========================================================== */}
      {featuredArticle && (
        <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-5xl">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="grid lg:grid-cols-2">
                {/* Image */}
                <Link
                  href={`/care-journal/${featuredArticle.slug}`}
                  className="relative block min-h-[280px] bg-teal-50 lg:min-h-[390px]"
                >
                  {featuredArticle.coverImage?.url ? (
                    <Image
                      src={featuredArticle.coverImage.url}
                      alt={featuredArticle.title}
                      fill
                      priority
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="flex h-full min-h-[280px] items-center justify-center text-teal-700">
                      <BookOpen className="h-16 w-16" />
                    </div>
                  )}
                </Link>

                {/* Content */}
                <div className="flex flex-col justify-center p-7 sm:p-10">
                  <div className="mb-4 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-teal-50 px-3 py-1.5 text-[11px] font-semibold text-teal-700">
                      Featured Article
                    </span>

                    <span className="rounded-full border border-slate-200 px-3 py-1.5 text-[11px] font-medium text-slate-500">
                      {featuredArticle.category.name}
                    </span>
                  </div>

                  <Link
                    href={`/care-journal/${featuredArticle.slug}`}
                    className="group"
                  >
                    <h2 className="text-2xl font-bold leading-tight text-slate-900 transition-colors group-hover:text-teal-700 sm:text-3xl">
                      {featuredArticle.title}
                    </h2>
                  </Link>

                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    {featuredArticle.excerpt}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-slate-100 pt-5 text-xs text-slate-500">
                    {featuredArticle.author?.name && (
                      <span>{featuredArticle.author.name}</span>
                    )}

                    {featuredArticle.publishedAt && (
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays className="h-3.5 w-3.5" />
                        {formatDate(featuredArticle.publishedAt)}
                      </span>
                    )}

                    {featuredArticle.readingTime && (
                      <span className="inline-flex items-center gap-1.5">
                        <Clock3 className="h-3.5 w-3.5" />
                        {featuredArticle.readingTime} min read
                      </span>
                    )}
                  </div>

                  <Link
                    href={`/care-journal/${featuredArticle.slug}`}
                    className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-teal-700 px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-teal-800"
                  >
                    Read Article
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =========================================================
          ARTICLES
      ========================================================== */}
      <section className="border-y border-slate-100 bg-[#f8fafb]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          {/* Filters */}
          <div className="mb-8 flex flex-col gap-4">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              <CategoryButton
                active={selectedCategory === "all"}
                onClick={() => setSelectedCategory("all")}
              >
                All
              </CategoryButton>

              {categories.map((category) => (
                <CategoryButton
                  key={category._id}
                  active={selectedCategory === category.slug}
                  onClick={() => setSelectedCategory(category.slug)}
                >
                  {category.name}
                </CategoryButton>
              ))}
            </div>

            {/* Search */}
            <div className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search baby & mother care articles..."
                className="h-11 w-full rounded-full border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
              />
            </div>
          </div>

          {/* Result count */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-xs font-medium text-slate-500">
              Showing{" "}
              <span className="font-semibold text-slate-700">
                {regularArticles.length}
              </span>{" "}
              articles
            </p>
          </div>

          {/* Article Grid */}
          {regularArticles.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {regularArticles.map((article) => (
                <JournalCard key={article._id} article={article} />
              ))}
            </div>
          ) : (
            <EmptyState />
          )}
        </div>
      </section>

      {/* =========================================================
          NEWSLETTER
      ========================================================== */}
      <section className="bg-[#f8fafb] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-teal-100 bg-gradient-to-br from-teal-50 to-white px-6 py-12 text-center shadow-sm sm:px-10">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Stay Informed About Baby & Mother Care
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-500">
                Get helpful baby care tips, motherhood guidance, product
                education, and exclusive Careproff offers delivered to your
                inbox.
              </p>

              <form className="mx-auto mt-7 flex max-w-lg flex-col gap-2 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="h-11 flex-1 rounded-full border border-slate-200 bg-white px-5 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                />

                <button
                  type="submit"
                  className="h-11 rounded-full bg-teal-700 px-6 text-sm font-semibold text-white transition hover:bg-teal-800"
                >
                  Subscribe
                </button>
              </form>

              <p className="mt-4 text-[11px] text-slate-400">
                Helpful care tips and exclusive offers from Careproff.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   JOURNAL CARD
========================================================= */

function JournalCard({ article }: { article: JournalArticle }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <Link
        href={`/care-journal/${article.slug}`}
        className="relative block aspect-[16/9] overflow-hidden bg-teal-50"
      >
        {article.coverImage?.url ? (
          <Image
            src={article.coverImage.url}
            alt={article.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-teal-700">
            <BookOpen className="h-10 w-10" />
          </div>
        )}

        {/* Reading time */}
        {article.readingTime && (
          <span className="absolute right-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold text-slate-600 shadow-sm">
            {article.readingTime} min read
          </span>
        )}
      </Link>

      {/* Content */}
      <div className="p-5">
        <span className="inline-flex rounded-full bg-teal-50 px-2.5 py-1 text-[10px] font-semibold text-teal-700">
          {article.category.name}
        </span>

        <Link href={`/care-journal/${article.slug}`}>
          <h3 className="mt-3 line-clamp-2 text-lg font-bold leading-snug text-slate-900 transition-colors group-hover:text-teal-700">
            {article.title}
          </h3>
        </Link>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-500">
          {article.excerpt}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
          <div className="min-w-0">
            <p className="truncate text-[11px] font-medium text-slate-600">
              {article.author?.name || "Careproff Care Team"}
            </p>

            {article.publishedAt && (
              <p className="mt-1 text-[10px] text-slate-400">
                {formatDate(article.publishedAt)}
              </p>
            )}
          </div>

          <Link
            href={`/care-journal/${article.slug}`}
            className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-teal-700"
          >
            Read
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   CATEGORY BUTTON
========================================================= */

function CategoryButton({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`shrink-0 rounded-full border px-4 py-2 text-xs font-medium transition ${
        active
          ? "border-teal-700 bg-teal-700 text-white"
          : "border-slate-200 bg-white text-slate-600 hover:border-teal-200 hover:text-teal-700"
      }`}
    >
      {children}
    </button>
  );
}

/* =========================================================
   EMPTY STATE
========================================================= */

function EmptyState() {
  return (
    <div className="rounded-2xl border border-dashed border-slate-200 bg-white px-6 py-20 text-center">
      <BookOpen className="mx-auto h-10 w-10 text-slate-300" />

      <h3 className="mt-4 text-lg font-semibold text-slate-800">
        No articles found
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        Try another search or choose a different category.
      </p>
    </div>
  );
}

/* =========================================================
   DATE FORMATTER
========================================================= */

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}