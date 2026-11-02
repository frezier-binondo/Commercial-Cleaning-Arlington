import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import BodyLink from "@/components/BodyLink";
import QuoteForm from "@/components/QuoteForm";
import { locationsData } from "@/data/locationsData";
import { siteConfig } from "@/data/siteData";
import {
  MapPin,
  Building2,
  CheckCircle2,
  Phone,
  ShieldCheck,
  Clock,
  ArrowRight,
  ExternalLink,
  Sparkles,
  HelpCircle,
  AlertTriangle,
  Award,
} from "lucide-react";

interface LocationPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return locationsData.map((loc) => ({
    slug: loc.slug,
  }));
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const loc = locationsData.find((l) => l.slug === slug);

  if (!loc) {
    return {
      title: "Location Not Found",
    };
  }

  return {
    title: loc.metaTitle,
    description: loc.metaDescription,
    keywords: [
      loc.primaryKeyword,
      `commercial cleaning ${loc.name.toLowerCase()} arlington va`,
      `janitorial services ${loc.name.toLowerCase()}`,
      `office cleaning ${loc.zipCodes.join(" ")}`,
    ],
    openGraph: {
      title: loc.metaTitle,
      description: loc.metaDescription,
      url: `https://www.commercialcleaningarlington.site/locations/${loc.slug}`,
      images: [
        {
          url: loc.heroImage,
          width: 1200,
          height: 630,
          alt: `Commercial Cleaning in ${loc.name}, Arlington VA`,
        },
      ],
    },
  };
}

export default async function LocationDetailPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const loc = locationsData.find((l) => l.slug === slug);

  if (!loc) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full">
      <Breadcrumbs
        items={[
          { label: "Locations", href: "/locations" },
          { label: `${loc.name}, Arlington, VA` },
        ]}
      />

      {/* LOCATION HERO */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                <span>Arlington Neighborhood Silo: Zip {loc.zipCodes.join(", ")}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                {loc.h1}
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                {loc.overview}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href={siteConfig.phoneTel}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-extrabold text-base flex items-center justify-center gap-2 shadow-lg shadow-sky-500/30 transition-all hover:scale-105"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {siteConfig.phoneFormatted}</span>
                </a>
                <Link
                  href="/get-free-quote"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-base flex items-center justify-center gap-2 backdrop-blur-sm transition-all hover:scale-105"
                >
                  <span>Request {loc.name} Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Logistics Alert */}
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 text-xs text-slate-300 text-left flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block mb-0.5">Local Building Logistics Notice:</span>
                  <span>{loc.logisticsNotice}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
                <Image
                  src={loc.heroImage}
                  alt={`Commercial Cleaning in ${loc.name}, Arlington VA`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-xs text-slate-300">
                  <p className="font-bold text-white mb-0.5">{loc.name} Commercial Portfolio</p>
                  <p className="line-clamp-2">{loc.buildingMix}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR SERVICES IN THIS NEIGHBORHOOD */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
            Frequently Requested Services in {loc.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {loc.popularServices.map((service, i) => (
              <Link
                key={i}
                href={service.href}
                className="p-5 rounded-xl bg-white border border-slate-200 hover:border-sky-500 hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-bold text-slate-900 group-hover:text-sky-600 transition-colors text-base mb-1.5">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1 text-xs font-bold text-sky-600">
                  <span>View Scope</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* COMPREHENSIVE 2000-WORD LOCAL CONTENT BODY */}
      <section className="py-16 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-12 seo-prose leading-relaxed">
              {loc.detailedSections.map((sec, idx) => (
                <div key={idx} className="space-y-4">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                      {sec.heading}
                    </h2>
                    {sec.subheading && (
                      <p className="text-sm font-semibold text-sky-600 mt-1 uppercase tracking-wider">
                        {sec.subheading}
                      </p>
                    )}
                  </div>

                  {sec.content.map((p, pIdx) => (
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

              {/* Local Photography Break */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                <div className="relative h-60 rounded-xl overflow-hidden shadow">
                  <Image
                    src={loc.secondaryImage}
                    alt={`${loc.name} Office Suites and Commercial Buildings`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 35vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative h-60 rounded-xl overflow-hidden shadow">
                  <Image
                    src={loc.tertiaryImage}
                    alt={`${loc.name} Commercial Cleaning and Janitorial Teams`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 35vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Local Verified Case Study */}
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white shadow-xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-semibold">
                  <Award className="w-3.5 h-3.5" />
                  <span>Verified {loc.name} Case Study</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  {loc.localCaseStudy.clientType}
                </h3>
                <div className="space-y-2 text-xs sm:text-sm text-slate-300">
                  <p>
                    <strong className="text-white">Facility Challenge:</strong> {loc.localCaseStudy.challenge}
                  </p>
                  <p>
                    <strong className="text-white">Customized Solution:</strong> {loc.localCaseStudy.solution}
                  </p>
                  <p className="text-emerald-300 font-semibold pt-1">
                    <strong className="text-white">Measurable Result:</strong> {loc.localCaseStudy.result}
                  </p>
                </div>
              </div>

              {/* MANDATORY 5 INTERNAL LINKS & 1 EXTERNAL LINK PER SPECIFICATION */}
              <div className="p-6 sm:p-8 bg-sky-50/70 rounded-2xl border border-sky-200 space-y-4">
                <h3 className="font-bold text-sky-950 text-lg">
                  Related Services & Neighboring Arlington Markets
                </h3>
                <p className="text-sm text-slate-700">
                  Businesses operating in <span className="font-bold text-slate-900">{loc.name}</span> frequently connect with these related services and nearby service areas:
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {loc.internalLinks.map((link, idx) => (
                    <BodyLink key={idx} href={link.href} className="text-sm">
                      {link.anchor}
                    </BodyLink>
                  ))}
                  <BodyLink href="/locations" className="text-sm">
                    Arlington service areas directory
                  </BodyLink>
                </div>

                <div className="pt-3 border-t border-sky-200/80 text-xs text-slate-600 flex items-center gap-2">
                  <span className="font-semibold text-slate-800">Regional Authority Resource:</span>
                  <BodyLink href={loc.externalLink.href} external>
                    {loc.externalLink.anchor} ({loc.externalLink.source})
                  </BodyLink>
                </div>
              </div>

              {/* Neighborhood FAQs */}
              <div className="space-y-4 pt-4">
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-sky-600" />
                  Frequently Asked Questions About Commercial Cleaning in {loc.name}
                </h3>
                <div className="space-y-3">
                  {loc.faqs.map((faq, i) => (
                    <div key={i} className="p-5 rounded-xl border border-slate-200 bg-white">
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-2">
                        {faq.question}
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Column: Quote Form & Direct Dispatch */}
            <div className="lg:col-span-4 space-y-6">
              <div className="sticky top-24 space-y-6">
                <QuoteForm defaultLocation={`${loc.name} (${loc.zipCodes[0]})`} />

                <div className="p-6 rounded-2xl bg-slate-900 text-white text-center space-y-3 shadow-lg">
                  <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center mx-auto">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h4 className="font-extrabold text-lg text-white">Call {loc.name} Dispatch</h4>
                  <p className="text-xs text-slate-300">
                    Direct communication with our Arlington County operations coordinator.
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
