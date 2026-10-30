import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import BodyLink from "@/components/BodyLink";
import QuoteForm from "@/components/QuoteForm";
import { siteConfig } from "@/data/siteData";
import {
  Sparkles,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  HelpCircle,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Free Commercial Cleaning Quotes in Arlington, VA | Instant Estimates",
  description:
    "Request free commercial cleaning quotes in Arlington, VA. Tell us about your space and compare offers from local cleaning companies in one place. Call (817) 404-4508.",
  keywords: [
    "commercial cleaning quote arlington va",
    "free janitorial estimate arlington",
    "office cleaning quote arlington",
  ],
};

export default function GetFreeQuotePage() {
  return (
    <div className="flex flex-col w-full">
      <Breadcrumbs items={[{ label: "Get Free Quote" }]} />

      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white py-14 lg:py-16 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fast, Free & Transparent Estimates</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Get Free Commercial Cleaning Quotes in Arlington, VA
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Tell us about your building and what you need cleaned. We match your requirements with vetted local Arlington commercial cleaning teams so you can compare scopes and budgets with zero pressure.
          </p>

          <div className="pt-2">
            <a
              href={siteConfig.phoneTel}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-extrabold text-base shadow-lg transition-all hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              <span>Or Call Direct: {siteConfig.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </section>

      {/* MAIN FORM SECTION */}
      <section className="py-16 bg-slate-50 text-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Form */}
          <QuoteForm />

          {/* What to Include & How It Works */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-slate-700 seo-prose leading-relaxed">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <h3 className="text-lg font-bold text-slate-900">What to Include in Your Request</h3>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>Facility type (office, medical, school, retail, restaurant)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>Approximate square footage & number of restrooms</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>Preferred frequency (nightly 5x, 3x weekly, or one-time)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>Any specific keycard or building security procedures</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <h3 className="text-lg font-bold text-slate-900">What Happens Next?</h3>
              <ol className="space-y-2 text-xs sm:text-sm list-decimal pl-4">
                <li>We review your property details and cleanable square footage.</li>
                <li>We prepare an itemized Scope of Work and competitive pricing proposal.</li>
                <li>You review the proposal with zero obligation to sign.</li>
                <li>Once approved, a bonded, background-screened team is onboarded.</li>
              </ol>
            </div>
          </div>

          {/* MANDATORY 5 INTERNAL LINKS & 1 EXTERNAL LINK */}
          <div className="p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-3 seo-prose">
            <h3 className="font-bold text-slate-900 text-lg">
              Explore Our Core Service Lines Before Requesting Quotes
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              We provide tailored pricing for{" "}
              <BodyLink href="/services/office-cleaning">office cleaning services</BodyLink>, scheduled{" "}
              <BodyLink href="/services/janitorial-services">janitorial contracts</BodyLink>, clinical{" "}
              <BodyLink href="/services/medical-office-cleaning">medical office cleaning</BodyLink>, restorative{" "}
              <BodyLink href="/services/commercial-floor-care">commercial floor care</BodyLink>, or neighborhood coverage in{" "}
              <BodyLink href="/locations/rosslyn">Rosslyn (22209)</BodyLink>.
            </p>
            <div className="pt-2 text-xs text-slate-500 flex items-center gap-2">
              <span className="font-semibold text-slate-700">Industry Quality Benchmarks:</span>
              <BodyLink href="https://www.issa.com" external>
                ISSA Clean Standards & Quality Measurement
              </BodyLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
