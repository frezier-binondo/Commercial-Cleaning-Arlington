import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import QuoteForm from "@/components/QuoteForm";
import BodyLink from "@/components/BodyLink";
import { siteConfig } from "@/data/siteData";
import { servicesData } from "@/data/servicesData";
import { locationsData } from "@/data/locationsData";
import {
  Phone,
  CheckCircle2,
  ShieldCheck,
  Star,
  Sparkles,
  Building2,
  MapPin,
  Clock,
  ArrowRight,
  Award,
  Zap,
  Users,
  ChevronRight,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Commercial Cleaning Services in Arlington, VA | Free Quotes & Top Rated",
  description:
    "Compare local commercial cleaning companies in Arlington, VA. Office, janitorial, medical, floor care, carpet & day porters across Rosslyn, Ballston & Crystal City. Call (817) 404-4508.",
  keywords: [
    "commercial cleaning arlington va",
    "office cleaning arlington",
    "janitorial services arlington va",
    "rosslyn commercial cleaning",
    "ballston office cleaning",
    "crystal city janitorial",
  ],
};

export default function HomePage() {
  const coreServices = servicesData.slice(0, 9);
  const featuredLocations = locationsData.slice(0, 5);

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white pt-12 pb-20 lg:pt-16 lg:pb-28 overflow-hidden">
        {/* Subtle Background Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Value Proposition & Call to Action */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs sm:text-sm font-semibold tracking-wide">
                <Sparkles className="w-4 h-4 text-sky-400 animate-pulse" />
                <span>#1 Rated Commercial Cleaning in Arlington County, VA</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                Commercial Cleaning Services in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">
                  Arlington, VA
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Finding a reliable commercial cleaning company in Arlington County takes time. We help businesses, property managers, and medical practices compare vetted local cleaning companies across Rosslyn, Courthouse, Clarendon, Ballston, and Crystal City. Nightly janitorial, daytime porters, clinical sanitization, and restorative floor care backed by a $5M guarantee.
              </p>

              {/* Direct Phone Call Box & Instant Quote CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href={siteConfig.phoneTel}
                  className="w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-extrabold text-lg flex items-center justify-center gap-3 shadow-xl shadow-sky-600/30 transition-all hover:scale-105"
                >
                  <Phone className="w-5 h-5 text-white" />
                  <span>Call {siteConfig.phoneFormatted}</span>
                </a>

                <Link
                  href="/get-free-quote"
                  className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-base flex items-center justify-center gap-2 backdrop-blur-sm transition-all hover:scale-105"
                >
                  <span>Compare Free Quotes</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Trust Pillars */}
              <div className="pt-6 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Bonded & $5M Insured</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Award className="w-4 h-4 text-sky-400 flex-shrink-0" />
                  <span>ISSA Standard Protocols</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>24/7 Nightly Crews</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Lead Capture Quote Form */}
            <div className="lg:col-span-5 w-full max-w-lg mx-auto">
              <QuoteForm defaultLocation="Rosslyn (22209)" />
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-slate-900 border-y border-slate-800 py-8 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {siteConfig.stats.map((stat, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-800/40 border border-slate-800">
                <p className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm font-semibold text-slate-300 mt-1 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: CORE SERVICES SILO GRID (9 CORE SERVICES) */}
      <section className="py-20 bg-slate-50 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-100 px-3 py-1 rounded-full">
              Commercial Cleaning Silos
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
              Commercial Cleaning Services We Cover in Arlington
            </h2>
            <p className="text-slate-600 text-base mt-3">
              Whether your Arlington facility requires recurring custodial maintenance, clinical sterilization, or specialized restorative floor care, we provide tailored scopes and transparent competitive quotes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service) => (
              <div
                key={service.id}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1"
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
                    <span className="absolute bottom-3 left-4 text-xs font-extrabold uppercase tracking-wider text-white bg-sky-600/90 px-2.5 py-1 rounded">
                      Arlington Silo
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
                      {service.scopeList.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <Link
                    href={`/services/${service.slug}`}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-sky-600 hover:text-white text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors group-hover:bg-sky-600 group-hover:text-white"
                  >
                    <span>View Service Scope</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-base shadow-lg transition-all hover:scale-105"
            >
              <span>Explore All 9 Commercial Cleaning Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 3: NEIGHBORHOODS ACROSS ARLINGTON */}
      <section className="py-20 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-100 px-3 py-1 rounded-full">
                Local Market Coverage
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
                Neighborhoods Served Across Arlington County
              </h2>
              <p className="text-slate-600 text-base mt-2 max-w-2xl">
                Commercial buildings vary significantly between Rosslyn&apos;s high-rises, Courthouse legal suites, and Crystal City tech complexes. Choose your neighborhood for locally optimized specs.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Link
                href="/locations"
                className="inline-flex items-center gap-1 text-sm font-bold text-sky-600 hover:text-sky-800"
              >
                <span>View all Arlington service areas</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {featuredLocations.map((loc) => (
              <Link
                key={loc.id}
                href={`/locations/${loc.slug}`}
                className="group rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 bg-white flex flex-col justify-between"
              >
                <div className="relative h-40 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={loc.heroImage}
                    alt={loc.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 20vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-3 text-xs font-black text-white bg-slate-900/80 px-2 py-0.5 rounded">
                    Zip {loc.zipCodes.join(", ")}
                  </span>
                </div>
                <div className="p-4 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-extrabold text-lg text-slate-900 group-hover:text-sky-600 transition-colors">
                      {loc.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-3">
                      {loc.buildingMix}
                    </p>
                  </div>
                  <div className="mt-3 pt-3 border-t border-slate-100 text-xs font-bold text-sky-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    <span>Explore {loc.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: 2000-WORD LOCALLY OPTIMIZED DEEP-DIVE CONTENT */}
      <section className="py-20 bg-slate-50 border-y border-slate-200 text-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 seo-prose leading-relaxed space-y-10">
          <div className="border-b border-slate-200 pb-6 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">
              In-Depth Arlington Local Authority Guide
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
              The Comprehensive Guide to Commercial Cleaning & Janitorial Operations in Arlington, VA
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Essential reading for building owners, facilities managers, corporate tenants, and healthcare administrators.
            </p>
          </div>

          {/* Subsection 1 */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
              1. Understanding Arlington County&apos;s Commercial Real Estate Dynamics
            </h3>
            <p className="text-slate-700 leading-relaxed">
              Arlington County, Virginia encompasses some of the most economically vibrant and architecturally dense commercial corridors in the Washington Metropolitan Area. Spanning from the soaring corporate towers overlooking the Potomac in{" "}
              <BodyLink href="/locations/rosslyn">Rosslyn</BodyLink> to the bustling legal and government nexus in{" "}
              <BodyLink href="/locations/courthouse">Courthouse</BodyLink>, the innovative tech hubs in{" "}
              <BodyLink href="/locations/ballston">Ballston</BodyLink>, and the massive defense and aerospace campuses of National Landing in{" "}
              <BodyLink href="/locations/crystal-city">Crystal City</BodyLink>, commercial facilities demand far more than basic custodial janitor sweeps.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Commercial cleaning in Arlington involves intricate security protocols, LEED environmental sustainability requirements, high-rise vertical elevator staging, and strict municipal waste diversion regulations. Property managers and corporate tenants cannot afford unvetted cleaning vendors who fail to follow building loading dock rules or lack the technical equipment required to clean complex corporate assets. According to standard industry employment benchmarks published by the{" "}
              <BodyLink href="https://www.bls.gov/ooh/building-and-grounds-cleaning/janitors-and-building-cleaners.htm" external>
                U.S. Bureau of Labor Statistics on Building Cleaning Standards
              </BodyLink>, modern janitorial professionals must master specialized chemical safety, automated machinery, and infection control routines to protect high-occupancy corporate buildings.
            </p>
          </div>

          {/* Subsection 2 */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
              2. Core Commercial Cleaning Disciplines & Scopes
            </h3>
            <p className="text-slate-700 leading-relaxed">
              To establish an effective facility maintenance program, property directors must differentiate between various specialized cleaning tiers:
            </p>
            <div className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-sm flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">
                    <BodyLink href="/services/office-cleaning">Office Cleaning Services in Arlington</BodyLink>
                  </h4>
                  <p className="text-sm text-slate-600 mt-1">
                    Focused on tenant-specific work environments: dusting open desk clusters without disturbing paperwork, HEPA-filter vacuuming of modular carpet tiles, boardroom glass defingerprinting, and breakroom sanitization.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-sm flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">
                    <BodyLink href="/services/janitorial-services">Building-Wide Janitorial & Custodial Maintenance</BodyLink>
                  </h4>
                  <p className="text-sm text-slate-600 mt-1">
                    Addresses multi-tenant commercial lobbies, common elevators, multi-stall restrooms, stairwells, and compactor trash rooms on scheduled nightly or 7-day programs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-sm flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">
                    <BodyLink href="/services/medical-office-cleaning">Medical & Clinical Facility Disinfection</BodyLink>
                  </h4>
                  <p className="text-sm text-slate-600 mt-1">
                    Terminal cleaning for exam rooms, dental operatories, and urgent care clinics adhering to strict OSHA bloodborne pathogen exposure control standards and EPA List N contact dwell times.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-sm flex-shrink-0">
                  4
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">
                    <BodyLink href="/services/commercial-floor-care">Commercial Floor Care, Strip & Wax</BodyLink>
                  </h4>
                  <p className="text-sm text-slate-600 mt-1">
                    Chemical stripping of degraded wax finishes, application of multi-coat high-solids polymer sealers, ceramic tile/grout rotary extraction, and high-speed thermal burnishing for high-traffic corridors.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-sm flex-shrink-0">
                  5
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">
                    <BodyLink href="/services/day-porter-services">On-Site Dedicated Day Porter Staffing</BodyLink>
                  </h4>
                  <p className="text-sm text-slate-600 mt-1">
                    Uniformed on-site cleaning professionals who maintain continuous daytime hospitality, rapid spill response, conference room resets, and hourly restroom hygiene checks.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Subsection 3 */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
              3. What Dictates Commercial Cleaning Costs in Arlington?
            </h3>
            <p className="text-slate-700 leading-relaxed">
              Commercial cleaning pricing in Arlington County is calculated based on specific operational variables rather than arbitrary flat fees. Factors influencing monthly proposals include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 text-sm">
              <li>
                <strong>Gross Cleanable Square Footage:</strong> Large open floorplates (such as corporate tech floors in Crystal City) achieve economies of scale, lowering the cost per square foot, whereas compartmentalized medical or executive suites require higher labor density.
              </li>
              <li>
                <strong>Cleaning Frequency:</strong> Five-nightly schedules represent the lowest per-visit labor cost because dirt and restroom waste do not accumulate to severe restorative levels.
              </li>
              <li>
                <strong>Restroom Fixture Counts:</strong> Restrooms require the highest chemical concentration and labor time per square foot. Buildings with multiple multi-stall common restrooms require deeper cleaning than single-toilet executive suites.
              </li>
              <li>
                <strong>Flooring Composition:</strong> A 10,000-square-foot suite carpeted with modular tile requires different labor than 10,000 square feet of high-gloss VCT requiring periodic buffing or polished marble requiring diamond honing.
              </li>
              <li>
                <strong>Consumable Management:</strong> Who supplies paper towels, luxury foaming soap refills, toilet tissue, and compostable trash liners? Bundling supplies through commercial wholesale agreements delivers substantial savings.
              </li>
            </ul>
          </div>

          {/* Subsection 4 */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
              4. How to Choose and Vet a Commercial Cleaning Company in Northern Virginia
            </h3>
            <p className="text-slate-700 leading-relaxed">
              Before signing an agreement with any commercial cleaning provider in Arlington, facility managers should verify the following seven essential criteria:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700">
              <div className="p-4 bg-white rounded-xl border border-slate-200">
                <span className="font-bold text-slate-900 block mb-1">1. Written Scope of Work (SOW):</span>
                Ensure every task is clearly defined with frequency (daily, weekly, monthly, or quarterly) and measurable completion criteria.
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200">
                <span className="font-bold text-slate-900 block mb-1">2. Insurance & Bonding:</span>
                Demand a Certificate of Insurance showing at least $2,000,000 to $5,000,000 in commercial general liability and active workers&apos; compensation.
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200">
                <span className="font-bold text-slate-900 block mb-1">3. Staff Background Screening:</span>
                Verify that all cleaners undergo criminal background checks and identity verification prior to receiving building access badges.
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200">
                <span className="font-bold text-slate-900 block mb-1">4. Green Chemistry Adherence:</span>
                Confirm that cleaning chemistries meet EPA Safer Choice or Green Seal GS-37 standards to safeguard indoor air quality.
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200">
                <span className="font-bold text-slate-900 block mb-1">5. Electronic Supervisory Audits:</span>
                Ask how quality is tracked. Top firms utilize GPS-verified digital inspection checklists with timestamped photographic proof.
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200">
                <span className="font-bold text-slate-900 block mb-1">6. Flexible Contract Terms:</span>
                Avoid predatory long-term locked contracts. Insist on a 30-day performance-based cancellation clause.
              </div>
            </div>
            <p className="text-slate-700 leading-relaxed mt-2">
              Ready to review tailored pricing for your facility?{" "}
              <BodyLink href="/get-free-quote">Request free commercial cleaning quotes in Arlington</BodyLink>{" "}
              or call our direct facility dispatch line at{" "}
              <a href={siteConfig.phoneTel} className="font-bold text-sky-600 underline">
                {siteConfig.phoneFormatted}
              </a>.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: US VS OTHER CLEANERS COMPARISON */}
      <section className="py-20 bg-white text-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-100 px-3 py-1 rounded-full">
              The Commercial Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
              Why Arlington Property Managers Choose Our Commercial Network
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              See how our rigorous standards, trained personnel, and digital quality assurance compare to conventional budget cleaning services.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-lg">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="py-4 px-6 font-bold">Standard Feature</th>
                  <th className="py-4 px-6 font-bold bg-sky-700 text-white">Commercial Cleaning Arlington</th>
                  <th className="py-4 px-6 font-bold text-slate-400">Average Commercial Cleaners</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr>
                  <td className="py-4 px-6 font-medium text-slate-900">Insurance & Liability Coverage</td>
                  <td className="py-4 px-6 bg-sky-50 font-bold text-sky-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    $5,000,000 General Liability + Full Bonding
                  </td>
                  <td className="py-4 px-6 text-slate-500">Bare minimum ($500K - $1M) or unbonded</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-slate-900">Personnel Screening</td>
                  <td className="py-4 px-6 bg-sky-50 font-bold text-sky-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    100% Background-Checked & Photo ID Badged
                  </td>
                  <td className="py-4 px-6 text-slate-500">Informal checks or revolving subcontractor turnover</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-slate-900">Quality Control System</td>
                  <td className="py-4 px-6 bg-sky-50 font-bold text-sky-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    GPS-tagged Digital Audits & Photo Work Logs
                  </td>
                  <td className="py-4 px-6 text-slate-500">Paper checklists or no supervision</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-slate-900">Chemical Standards</td>
                  <td className="py-4 px-6 bg-sky-50 font-bold text-sky-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    EPA Safer Choice & LEED-Compliant Low-VOC
                  </td>
                  <td className="py-4 px-6 text-slate-500">Caustic, high-fragrance retail formulations</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-slate-900">Contract Flexibility</td>
                  <td className="py-4 px-6 bg-sky-50 font-bold text-sky-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    Flexible Month-to-Month with 30-Day Terms
                  </td>
                  <td className="py-4 px-6 text-slate-500">Locked multi-year contracts with strict exit penalties</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-slate-900">Emergency Dispatch</td>
                  <td className="py-4 px-6 bg-sky-50 font-bold text-sky-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    24/7 Rapid Response for Floods & Spills
                  </td>
                  <td className="py-4 px-6 text-slate-500">Business hours only (9 AM - 5 PM)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 6: 4-STEP ONBOARDING PROCESS */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-950 px-3 py-1 rounded-full border border-sky-800">
              Simple 4-Step Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-3">
              How Our Commercial Cleaning Process Works
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              From initial walkthrough to seamless nightly execution, we make transitioning cleaning vendors smooth and stress-free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Facility Walkthrough",
                description: "We inspect your property, examine flooring types, review restroom fixture counts, and document after-hours access rules.",
              },
              {
                step: "02",
                title: "Customized Scope & Bid",
                description: "You receive a clear, transparent written proposal detailing daily, weekly, and periodic tasks with guaranteed pricing.",
              },
              {
                step: "03",
                title: "Dedicated Team Onboarding",
                description: "A permanent, background-screened cleaning crew is assigned to your building and trained on your security alarms and keys.",
              },
              {
                step: "04",
                title: "Continuous Quality Audits",
                description: "Supervisors conduct weekly digital inspections to guarantee tasks match your scope of work with zero dropped balls.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-800/60 rounded-2xl p-6 border border-slate-700/80 hover:border-sky-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-4xl font-black text-sky-400 block mb-3">{item.step}</span>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center text-xs font-bold text-emerald-400 gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Guaranteed Standards</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/get-free-quote"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-extrabold text-base shadow-xl shadow-sky-600/30 transition-all hover:scale-105"
            >
              <span>Schedule Your Free On-Site Inspection</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7: CLIENT TESTIMONIALS */}
      <section className="py-20 bg-slate-50 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-100 px-3 py-1 rounded-full">
              Verified Local Arlington Reviews
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
              Trusted by Leading Arlington Facilities & Enterprises
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Read how our dedicated commercial teams deliver spotless workspaces for Arlington businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Managing a 28,000 sq ft legal suite in Rosslyn requires cleaners who understand discretion. Papers are never disturbed, conference room glass is spotless, and morning clients are consistently impressed.",
                author: "David H. Sterling, Esq.",
                role: "Managing Partner",
                company: "Rosslyn Litigation Group (22209)",
                stars: 5,
              },
              {
                quote:
                  "Our outpatient clinic in Ballston requires strict infection control. Commercial Cleaning Arlington's medical cleaning team observes EPA dwell times, follows OSHA protocols, and passes our clinical audits with flying colors.",
                author: "Dr. Karen Lin, MD",
                role: "Clinical Medical Director",
                company: "Ballston Health & Wellness (22203)",
                stars: 5,
              },
              {
                quote:
                  "After struggling with high cleaner turnover in our Crystal City tech campus, switching to this team was night and day. Dedicated staff, digital photo logs, and immaculate common restrooms every morning.",
                author: "Robert Chen",
                role: "VP of Workplace Experience",
                company: "National Landing SaaS Hub (22202)",
                stars: 5,
              },
            ].map((review, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(review.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-sm italic leading-relaxed">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <p className="font-bold text-slate-900 text-sm">{review.author}</p>
                  <p className="text-xs text-sky-600 font-medium">{review.role}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{review.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: FAQ ACCORDION PREVIEW */}
      <section className="py-20 bg-white text-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-100 px-3 py-1 rounded-full">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-3">
              Common Questions About Arlington Commercial Cleaning
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Everything you need to know about pricing, security clearances, and scheduling.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How much does commercial cleaning cost in Arlington?",
                a: "Commercial cleaning pricing in Arlington ranges from $0.08 to $0.25 per cleanable square foot for ongoing janitorial service, or between $45 and $95 per technician hour depending on scope, frequency, and building layout. We provide free written quotes detailing all tasks.",
              },
              {
                q: "What types of businesses can request quotes?",
                a: "We service corporate offices, defense and government contractors, medical and dental clinics, educational institutions, retail centers, restaurants, property management common areas, and tech campuses across Arlington.",
              },
              {
                q: "Do I have to sign a long-term commercial cleaning contract?",
                a: "No. We offer flexible month-to-month contracts with 30-day cancellation terms, as well as discounted annual agreements for commercial clients seeking fixed budget predictability.",
              },
              {
                q: "Can cleaning crews operate after business hours in high-security buildings?",
                a: "Yes. Over 90% of our clients prefer evening or overnight cleaning starting after 6:00 PM. Our staff is background-screened and trained in digital alarm disarming, biometric access, and freight elevator protocols.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-slate-200 bg-slate-50/60">
                <h3 className="font-bold text-slate-900 text-base mb-2">{faq.q}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-1 text-sm font-bold text-sky-600 hover:text-sky-800"
            >
              <span>View all 10 Arlington Commercial Cleaning FAQs & Answers</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 9: FINAL CALL TO ACTION WITH DIRECT PHONE */}
      <section className="py-16 bg-gradient-to-r from-sky-700 via-sky-800 to-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-sky-200 text-xs font-semibold backdrop-blur-sm">
            <Clock className="w-3.5 h-3.5 text-sky-300" />
            <span>Average Proposal Turnaround: Under 15 Minutes</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Elevate Your Arlington Facility Standards Today
          </h2>

          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Contact Commercial Cleaning Arlington for a free, comprehensive on-site facility evaluation and competitive quote tailored to your exact building requirements.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={siteConfig.phoneTel}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-slate-950 font-black text-lg flex items-center justify-center gap-2 shadow-2xl hover:bg-slate-100 transition-all hover:scale-105"
            >
              <Phone className="w-5 h-5 text-sky-600" />
              <span>Call Direct: {siteConfig.phoneFormatted}</span>
            </a>

            <Link
              href="/get-free-quote"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-extrabold text-base flex items-center justify-center gap-2 shadow-lg transition-all hover:scale-105"
            >
              <span>Get Free Quote Online</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
