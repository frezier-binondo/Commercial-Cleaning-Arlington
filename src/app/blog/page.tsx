import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import BodyLink from "@/components/BodyLink";
import { blogPosts } from "@/data/blogData";
import { siteConfig } from "@/data/siteData";
import {
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  BookOpen,
  ChevronRight,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Commercial Cleaning Insights & Facility Guides | Arlington, VA",
  description:
    "Expert commercial cleaning articles, facility compliance checklists, OSHA healthcare sanitization guides, and LEED green cleaning practices for Arlington businesses.",
  keywords: [
    "commercial cleaning blog arlington va",
    "facility maintenance tips northern virginia",
    "office cleaning checklist arlington",
    "medical sanitization standards",
  ],
};

export default function BlogHubPage() {
  return (
    <div className="flex flex-col w-full">
      <Breadcrumbs items={[{ label: "Commercial Cleaning Blog" }]} />

      {/* BLOG HERO */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-semibold mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Facility Management & Hygiene Knowledge Hub</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Commercial Cleaning Insights & Industry Guides
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mt-4">
            Actionable compliance checklists, green cleaning science, and infection control strategies tailored specifically to commercial properties in Arlington, VA.
          </p>
        </div>
      </section>

      {/* BLOG POSTS LISTING */}
      <section className="py-20 bg-slate-50 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1"
              >
                <div>
                  <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <span className="absolute top-3 left-4 text-xs font-bold text-white bg-sky-600 px-2.5 py-1 rounded">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.publishedDate}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>

                    <p className="text-slate-600 text-sm mt-3 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-7 h-7 rounded-full overflow-hidden bg-slate-200">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-xs font-semibold text-slate-700">{post.author.name}</span>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-sky-600 hover:text-sky-800"
                  >
                    <span>Read Article</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* EDITORIAL LOCAL SUMMARY WITH LINKS */}
          <div className="mt-16 p-8 bg-white rounded-2xl border border-slate-200 shadow-sm max-w-4xl mx-auto seo-prose leading-relaxed space-y-4">
            <h3 className="text-2xl font-bold text-slate-900">
              Commercial Hygiene Standards in Northern Virginia
            </h3>
            <p className="text-slate-700 text-sm sm:text-base">
              At Commercial Cleaning Arlington, we believe an educated facility client achieves superior outcomes. Whether your organization is implementing a recurring{" "}
              <BodyLink href="/services/office-cleaning">office cleaning service</BodyLink> along Wilson Boulevard, seeking specialized{" "}
              <BodyLink href="/services/medical-office-cleaning">medical office cleaning</BodyLink> in Courthouse, or evaluating{" "}
              <BodyLink href="/services/day-porter-services">day porter services in Rosslyn</BodyLink>, staying abreast of EPA and OSHA guidelines protects your staff and bottom line.
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <BodyLink href="/locations/ballston">Ballston commercial cleaning</BodyLink>
              <BodyLink href="/locations/crystal-city">Crystal City janitorial</BodyLink>
              <BodyLink href="https://www.issa.com" external>
                ISSA Worldwide Cleaning Industry Standards
              </BodyLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
