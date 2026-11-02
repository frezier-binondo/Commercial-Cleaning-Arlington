import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import BodyLink from "@/components/BodyLink";
import QuoteForm from "@/components/QuoteForm";
import { ServiceJsonLd } from "@/components/JsonLd";
import { servicesData } from "@/data/servicesData";
import { siteConfig } from "@/data/siteData";
import {
  CheckCircle2,
  Phone,
  ShieldCheck,
  Building2,
  Clock,
  ArrowRight,
  ExternalLink,
  Sparkles,
  HelpCircle,
  FileCheck,
} from "lucide-react";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: [
      service.primaryKeyword,
      "commercial cleaning arlington va",
      "arlington janitorial services",
      `${service.title.toLowerCase()} northern virginia`,
    ],
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://www.commercialcleaningarlington.site/services/${service.slug}`,
      images: [
        {
          url: service.heroImage,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full">
      <ServiceJsonLd
        name={service.title}
        description={service.shortDescription}
        url={`https://www.commercialcleaningarlington.site/services/${service.slug}`}
        image={service.heroImage}
      />

      <Breadcrumbs
        items={[
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      {/* SERVICE HERO */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Arlington Specialized Cleaning Silo</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                {service.h1}
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                {service.leadParagraph}
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
                  <span>Request Custom SOW Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Bonded & $5M Insured
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-sky-400" />
                  Nightly & Day Shifts Available
                </span>
                <span className="flex items-center gap-1.5">
                  <FileCheck className="w-4 h-4 text-emerald-400" />
                  Itemized Scope of Work Guarantee
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-xs text-slate-300">
                  <p className="font-bold text-white mb-0.5">Commercial Standards Guarantee</p>
                  <p className="line-clamp-2">
                    Executed by background-screened, uniformed technicians trained in Arlington County safety protocols.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED CONTENT SECTION */}
      <section className="py-16 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content Body */}
            <div className="lg:col-span-8 space-y-12 seo-prose leading-relaxed">
              {/* Scope Checklist Box */}
              <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-100 px-3 py-1 rounded-full">
                  Standardized Scope Checklist
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-3 mb-6">
                  What Our {service.title} Package Covers
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {service.scopeList.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detailed Editorial Sections */}
              {service.detailedContent.map((section, idx) => (
                <div key={idx} className="space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                    {section.sectionTitle}
                  </h3>
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-slate-700 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              ))}

              {/* In-Content Visual Break */}
              <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden shadow-md my-8">
                <Image
                  src={service.secondaryImage}
                  alt={`${service.title} in Arlington, VA`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  className="object-cover"
                />
              </div>

              {/* Target Sectors & Pricing Drivers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-lg mb-3 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-sky-600" />
                    Ideal For These Facilities
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {service.targetSectors.map((sector, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-600 flex-shrink-0" />
                        <span>{sector}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-lg mb-3 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-emerald-600" />
                    Key Proposal Cost Factors
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {service.pricingFactors.map((factor, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0" />
                        <span>{factor}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* MANDATORY 5 INTERNAL LINKS & 1 EXTERNAL LINK PER SPECIFICATION */}
              <div className="p-6 sm:p-8 bg-sky-50/70 rounded-2xl border border-sky-200 space-y-4">
                <h4 className="font-bold text-sky-950 text-lg">
                  Related Arlington Services & Regional Coverage
                </h4>
                <p className="text-sm text-slate-700">
                  Clients comparing <span className="font-bold text-slate-900">{service.title}</span> in Arlington County frequently explore these complementary commercial maintenance programs:
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {service.internalLinks.map((link, idx) => (
                    <BodyLink key={idx} href={link.href} className="text-sm">
                      {link.anchor}
                    </BodyLink>
                  ))}
                  <BodyLink href="/get-free-quote" className="text-sm">
                    request {service.title.toLowerCase()} quote
                  </BodyLink>
                </div>

                <div className="pt-3 border-t border-sky-200/80 text-xs text-slate-600 flex items-center gap-2">
                  <span className="font-semibold text-slate-800">Industry Reference Authority:</span>
                  <BodyLink href={service.externalLink.href} external>
                    {service.externalLink.anchor} ({service.externalLink.source})
                  </BodyLink>
                </div>
              </div>

              {/* Service FAQ Accordion */}
              <div className="space-y-4 pt-6">
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-sky-600" />
                  Frequently Asked Questions About {service.title}
                </h3>
                <div className="space-y-3">
                  {service.faqs.map((faq, i) => (
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

            {/* Sidebar Column: Sticky Quote Form & Local Call Box */}
            <div className="lg:col-span-4 space-y-6">
              <div className="sticky top-24 space-y-6">
                <QuoteForm defaultService={service.id} />

                {/* Direct Call Card */}
                <div className="p-6 rounded-2xl bg-slate-900 text-white text-center space-y-3 shadow-lg">
                  <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center mx-auto">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h4 className="font-extrabold text-lg text-white">Speak With Our Operations Team</h4>
                  <p className="text-xs text-slate-300">
                    Get answers about staffing, COIs, chemical lists, and schedule availability.
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
