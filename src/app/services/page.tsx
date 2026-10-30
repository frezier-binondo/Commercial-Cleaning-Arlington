import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import BodyLink from "@/components/BodyLink";
import QuoteForm from "@/components/QuoteForm";
import { siteConfig } from "@/data/siteData";
import { servicesData } from "@/data/servicesData";
import {
  Sparkles,
  CheckCircle2,
  Phone,
  ShieldCheck,
  ArrowRight,
  ChevronRight,
  Building2,
  Clock,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Commercial Cleaning Services Arlington VA | 9 Core Service Silos",
  description:
    "Comprehensive commercial cleaning services in Arlington, VA. Office cleaning, janitorial programs, medical sanitation, floor care, carpet extraction & day porters. Free bids.",
  keywords: [
    "commercial cleaning services arlington va",
    "office cleaning services arlington",
    "janitorial services arlington",
    "medical cleaning arlington va",
    "commercial floor care arlington",
  ],
};

export default function ServicesPage() {
  const coreServices = servicesData.slice(0, 9);

  return (
    <div className="flex flex-col w-full">
      <Breadcrumbs items={[{ label: "Commercial Services" }]} />

      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-10 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Spectrum Facility Solutions</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Commercial Cleaning Services in Arlington, VA
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Explore our 9 specialized commercial cleaning silos designed for Arlington County&apos;s corporate towers, healthcare suites, retail centers, and high-density commercial facilities. Every service is backed by trained, bonded personnel, EPA-approved products, and a $5,000,000 insurance guarantee.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={siteConfig.phoneTel}
                className="px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-extrabold text-sm flex items-center gap-2 shadow-lg transition-transform hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                <span>Call {siteConfig.phoneFormatted}</span>
              </a>
              <Link
                href="/get-free-quote"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm flex items-center gap-2 backdrop-blur-sm transition-transform hover:scale-105"
              >
                <span>Request Custom SOW Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9 CORE SILO GRID */}
      <section className="py-20 bg-slate-50 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-100 px-3 py-1 rounded-full">
              Silo Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
              Specialized Service Lines for Every Commercial Environment
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Select any of our 9 specialized service categories below for detailed scope checklists, industry compliance specifications, and transparent proposal guidelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={service.heroImage}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <span className="absolute top-3 left-4 text-xs font-black text-white bg-slate-900/80 px-2.5 py-1 rounded">
                      Silo 0{index + 1}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm mt-2 line-clamp-3 leading-relaxed">
                      {service.shortDescription}
                    </p>

                    <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Key Deliverables:
                      </p>
                      {service.scopeList.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/services/${service.slug}`}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-sky-600 hover:text-white text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors group-hover:bg-sky-600 group-hover:text-white shadow-sm"
                  >
                    <span>Explore Full {service.title} Scope</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCALLY OPTIMIZED EDITORIAL CONTENT (800+ WORDS) */}
      <section className="py-20 bg-white text-slate-900 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 seo-prose leading-relaxed space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">
              Commercial Operations Manual
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-3">
              Engineered Cleaning Systems for Arlington Commercial Real Estate
            </h2>
          </div>

          <p className="text-slate-700 leading-relaxed">
            Maintaining commercial space in Arlington County, Virginia requires navigating unique urban density, regulatory compliance, and architectural diversity. Whether operating inside high-rise office towers in{" "}
            <BodyLink href="/locations/rosslyn">Rosslyn</BodyLink>, civic and judicial facilities in{" "}
            <BodyLink href="/locations/courthouse">Courthouse</BodyLink>, retail and restaurant corridors in{" "}
            <BodyLink href="/locations/clarendon">Clarendon</BodyLink>, or enterprise tech campuses in{" "}
            <BodyLink href="/locations/ballston">Ballston</BodyLink> and{" "}
            <BodyLink href="/locations/crystal-city">Crystal City</BodyLink>, commercial cleaning cannot be treated as an afterthought. It directly influences occupant health, asset depreciation, and brand authority.
          </p>

          <h3 className="text-2xl font-bold text-slate-900">
            Establishing Clear Scopes of Work (SOW) Across Multiple Facilities
          </h3>
          <p className="text-slate-700 leading-relaxed">
            A primary source of dissatisfaction between property managers and budget janitorial vendors is ambiguous contract scopes. When tasks are vaguely described as &apos;clean restrooms&apos; or &apos;vacuum floors,&apos; quality quickly deteriorates. Commercial Cleaning Arlington structures every contract around an itemized Scope of Work (SOW) dividing duties into daily recurring, weekly rotational, and monthly/quarterly restorative milestones.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Daily routines focus on touchpoint sanitization, trash and recycling evacuation, and restroom hygiene using hospital-grade disinfectants. Weekly duties tackle high dusting of architectural registers, edge vacuuming along baseboards, and glass partition polishing. Monthly and quarterly projects incorporate industrial{" "}
            <BodyLink href="/services/commercial-floor-care">commercial floor care</BodyLink> including VCT strip and wax, and high-temperature{" "}
            <BodyLink href="/services/commercial-carpet-cleaning">commercial carpet cleaning</BodyLink> to lift embedded soils.
          </p>

          <h3 className="text-2xl font-bold text-slate-900">
            Adherence to Leading Environmental and Safety Standards
          </h3>
          <p className="text-slate-700 leading-relaxed">
            Our cleaning methodologies align directly with recommendations established by the{" "}
            <BodyLink href="https://www.issa.com" external>
              ISSA - The Worldwide Cleaning Industry Association
            </BodyLink>. ISSA standards emphasize the Clean Standard for K-12 and Commercial Facilities, measuring objective hygiene through ATP bioluminescence surface testing rather than superficial visual appearance alone.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Furthermore, to support corporate clients pursuing LEED O+M certification, we strictly mandate Green Seal GS-37 certified chemicals and EPA Safer Choice products that emit zero volatile organic compounds (VOCs). This preserves indoor air quality and safeguards the health of employees suffering from respiratory sensitivities or asthma.
          </p>

          <h3 className="text-2xl font-bold text-slate-900">
            Get an Accurate, Itemized Cleaning Proposal Today
          </h3>
          <p className="text-slate-700 leading-relaxed">
            Need to compare pricing or review a customized scope for your commercial property?{" "}
            <BodyLink href="/get-free-quote">Request free commercial cleaning quotes in Arlington</BodyLink>{" "}
            or speak directly with our senior operations estimator at{" "}
            <a href={siteConfig.phoneTel} className="font-bold text-sky-600 underline">
              {siteConfig.phoneFormatted}
            </a>.
          </p>
        </div>
      </section>

      {/* EMBEDDED QUOTE FORM ON SERVICES HUB */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteForm />
        </div>
      </section>
    </div>
  );
}
