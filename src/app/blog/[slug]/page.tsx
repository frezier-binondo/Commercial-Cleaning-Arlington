import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import BodyLink from "@/components/BodyLink";
import QuoteForm from "@/components/QuoteForm";
import { blogPosts } from "@/data/blogData";
import { siteConfig } from "@/data/siteData";
import {
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  Phone,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
} from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return {
    title: `${post.title} | Commercial Cleaning Arlington`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedDate,
      url: `https://www.commercialcleaningarlington.site/blog/${post.slug}`,
      images: [
        {
          url: post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostDetailPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.featuredImage,
    datePublished: post.publishedDate,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: "https://www.commercialcleaningarlington.site/logo.png",
      },
    },
  };

  return (
    <div className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      {/* ARTICLE HEADER */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white py-14 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-semibold">
              {post.category}
            </span>
            <span className="text-xs text-slate-400">•</span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 pt-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-slate-700">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-bold text-white text-sm">{post.author.name}</p>
              <p className="text-xs text-slate-400">{post.author.role} • {post.publishedDate}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <section className="py-16 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Post Body */}
            <article className="lg:col-span-8 space-y-8 seo-prose leading-relaxed">
              <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-lg mb-8">
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  className="object-cover"
                />
              </div>

              {post.content.map((sec, idx) => (
                <div key={idx} className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    {sec.heading}
                  </h2>
                  {sec.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-slate-700 leading-relaxed">
                      {p}
                    </p>
                  ))}
                  {sec.bulletPoints && (
                    <ul className="space-y-2 bg-slate-50 p-6 rounded-xl border border-slate-200 text-sm text-slate-700">
                      {sec.bulletPoints.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {/* MANDATORY 5 INTERNAL LINKS & 1 EXTERNAL LINK */}
              <div className="p-6 sm:p-8 bg-sky-50/70 rounded-2xl border border-sky-200 space-y-4 my-8">
                <h3 className="font-bold text-sky-950 text-lg">
                  Related Arlington Cleaning Services & Knowledge Resources
                </h3>
                <p className="text-sm text-slate-700">
                  Implement these standards in your Northern Virginia building with our professional commercial teams:
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {post.internalLinks.map((link, idx) => (
                    <BodyLink key={idx} href={link.href} className="text-sm">
                      {link.anchor}
                    </BodyLink>
                  ))}
                  <BodyLink href="/contact" className="text-sm">
                    contact Arlington cleaning team
                  </BodyLink>
                </div>

                <div className="pt-3 border-t border-sky-200/80 text-xs text-slate-600 flex items-center gap-2">
                  <span className="font-semibold text-slate-800">External Authority Reference:</span>
                  <BodyLink href={post.externalLink.href} external>
                    {post.externalLink.anchor} ({post.externalLink.source})
                  </BodyLink>
                </div>
              </div>
            </article>

            {/* Sidebar Column */}
            <div className="lg:col-span-4 space-y-6">
              <div className="sticky top-24 space-y-6">
                <QuoteForm />

                <div className="p-6 rounded-2xl bg-slate-900 text-white text-center space-y-3 shadow-lg">
                  <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center mx-auto">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h4 className="font-extrabold text-lg text-white">Have Questions About This Guide?</h4>
                  <p className="text-xs text-slate-300">
                    Call our Arlington facility advisory team for immediate advice on commercial cleaning and compliance.
                  </p>
                  <a
                    href={siteConfig.phoneTel}
                    className="block w-full py-3 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-extrabold text-sm shadow transition-all hover:scale-105"
                  >
                    Call {siteConfig.phoneFormatted}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
