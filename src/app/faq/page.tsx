"use client";

import React, { useState } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import BodyLink from "@/components/BodyLink";
import QuoteForm from "@/components/QuoteForm";
import { FAQJsonLd } from "@/components/JsonLd";
import { faqList } from "@/data/faqData";
import { siteConfig } from "@/data/siteData";
import {
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Phone,
  Search,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [openFaq, setOpenFaq] = useState<string | null>("faq-1");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "All",
    "Pricing & Quotes",
    "Services & Scopes",
    "Security & Access",
    "Green Cleaning & Safety",
  ];

  const filteredFaqs = faqList.filter((faq) => {
    const matchesCat = activeCategory === "All" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="flex flex-col w-full">
      <FAQJsonLd faqs={faqList} />

      <Breadcrumbs items={[{ label: "Frequently Asked Questions" }]} />

      {/* FAQ HERO */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white py-16 lg:py-20 relative overflow-hidden text-center">
        <div className="absolute top-0 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Commercial Cleaning FAQ Hub</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Frequently Asked Questions
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Find immediate answers regarding commercial cleaning rates, after-hours security clearances, contracts, and cleaning scopes across Arlington, VA.
          </p>

          {/* Search Input Bar */}
          <div className="max-w-xl mx-auto pt-4">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search questions (e.g. costs, after hours, supplies, Rosslyn)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FILTER BUTTONS & ACCORDION */}
      <section className="py-16 bg-slate-50 text-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeCategory === cat
                    ? "bg-sky-600 text-white shadow-md shadow-sky-600/30 scale-105"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQ Accordion List (10 FAQ items) */}
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => {
                const isOpen = openFaq === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm transition-all"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-lg bg-sky-100 text-sky-700 text-xs font-black flex items-center justify-center flex-shrink-0">
                          Q
                        </span>
                        <span className="font-extrabold text-base sm:text-lg text-slate-900">
                          {faq.question}
                        </span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 flex-shrink-0">
                        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-2 border-t border-slate-100 bg-slate-50/50 text-sm text-slate-700 leading-relaxed space-y-3 animate-in fade-in duration-200">
                        <p>{faq.answer}</p>
                        <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
                          <span className="font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded">
                            Category: {faq.category}
                          </span>
                          <Link
                            href="/get-free-quote"
                            className="font-bold text-sky-600 hover:text-sky-800 flex items-center gap-1"
                          >
                            <span>Request Specific Quote</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8">
                <p className="text-slate-500 font-medium text-base">
                  No matching questions found for &ldquo;{searchQuery}&rdquo;.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("All");
                  }}
                  className="mt-3 text-xs font-bold text-sky-600 underline"
                >
                  Clear search filters
                </button>
              </div>
            )}
          </div>

          {/* MANDATORY 5 INTERNAL LINKS & 1 EXTERNAL LINK */}
          <div className="mt-16 p-8 bg-white rounded-2xl border border-slate-200 shadow-sm seo-prose leading-relaxed space-y-4">
            <h3 className="text-xl font-bold text-slate-900">
              Additional Commercial Cleaning Resources & Scope Guides
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Have specific questions regarding a customized cleaning scope? Review our full breakdown of{" "}
              <BodyLink href="/services/office-cleaning">office cleaning services</BodyLink>, ongoing{" "}
              <BodyLink href="/services/janitorial-services">janitorial building programs</BodyLink>, or clinical{" "}
              <BodyLink href="/services/medical-office-cleaning">medical office cleaning</BodyLink>. If your property is located in{" "}
              <BodyLink href="/locations/rosslyn">Rosslyn (22209)</BodyLink> or{" "}
              <BodyLink href="/locations/crystal-city">Crystal City (22202)</BodyLink>, our crews are already deployed in your area.
            </p>
            <div className="pt-2 text-xs text-slate-600 flex items-center gap-2">
              <span className="font-semibold text-slate-800">Learn More:</span>
              <BodyLink href="https://www.boma.org" external>
                BOMA International Commercial Property Standards
              </BodyLink>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ASSISTANCE CTA */}
      <section className="py-14 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Have a Specific Question Not Listed Here?
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Our Arlington commercial operations managers are available by phone or email to answer any technical or logistical questions.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
            <a
              href={siteConfig.phoneTel}
              className="px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-sm flex items-center justify-center gap-2 shadow"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us: {siteConfig.phoneFormatted}</span>
            </a>
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm flex items-center justify-center gap-2 border border-white/20"
            >
              <span>Contact Support Desk</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
