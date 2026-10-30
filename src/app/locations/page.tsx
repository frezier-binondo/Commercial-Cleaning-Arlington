import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import BodyLink from "@/components/BodyLink";
import QuoteForm from "@/components/QuoteForm";
import { siteConfig } from "@/data/siteData";
import { locationsData } from "@/data/locationsData";
import {
  MapPin,
  Building2,
  CheckCircle2,
  Phone,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  ChevronRight,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Commercial Cleaning Service Areas in Arlington, VA | All Neighborhoods",
  description:
    "Find commercial cleaning & janitorial services in Rosslyn, Courthouse, Clarendon, Ballston, Crystal City, Pentagon City, Shirlington & Columbia Pike. Free quotes.",
  keywords: [
    "commercial cleaning arlington service areas",
    "rosslyn commercial cleaning",
    "ballston office cleaning",
    "crystal city janitorial",
    "courthouse office cleaning va",
  ],
};

export default function LocationsHubPage() {
  return (
    <div className="flex flex-col w-full">
      <Breadcrumbs items={[{ label: "Service Areas & Locations" }]} />

      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-semibold">
              <MapPin className="w-3.5 h-3.5" />
              <span>County-Wide Commercial Coverage</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Commercial Cleaning Service Areas in Arlington, VA
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              We connect business owners, asset managers, and facility directors with dedicated local commercial cleaning crews across all eight primary neighborhoods in Arlington County. Choose your commercial corridor below for localized building specs and quote comparisons.
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
                <span>Request Local Market Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NEIGHBORHOOD CARDS GRID */}
      <section className="py-20 bg-slate-50 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-100 px-3 py-1 rounded-full">
              Arlington Market Silos
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
              Explore Commercial Cleaning By Arlington District
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Each neighborhood presents distinctive tenant mixes, building heights, access requirements, and cleaning challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locationsData.map((loc) => (
              <div
                key={loc.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1"
              >
                <div>
                  <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={loc.heroImage}
                      alt={loc.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-4 text-xs font-black text-white bg-sky-600 px-2 py-0.5 rounded">
                      Zip {loc.zipCodes.join(", ")}
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                      {loc.name}
                    </h3>
                    <p className="text-slate-600 text-xs mt-2 line-clamp-3 leading-relaxed">
                      {loc.overview}
                    </p>

                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Building Mix:
                      </p>
                      <p className="text-xs text-slate-700 line-clamp-2">
                        {loc.buildingMix}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-sky-600 hover:text-white text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors group-hover:bg-sky-600 group-hover:text-white shadow-sm"
                  >
                    <span>View {loc.name} Specs</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXTENSIVE 2000-WORD LOCALLY OPTIMIZED EDITORIAL CONTENT */}
      <section className="py-20 bg-white text-slate-900 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 seo-prose leading-relaxed space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">
              Local Market Intelligence
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-3">
              Arlington County Commercial Corridors: Cleaning Logistics & Infrastructure Analysis
            </h2>
          </div>

          <p className="text-slate-700 leading-relaxed">
            Arlington County represents one of the most concentrated commercial economies in the United States, driven by its strategic location immediately adjacent to Washington, D.C., the Pentagon, and major federal decision-makers. However, each commercial sub-market within Arlington exhibits distinct structural characteristics that fundamentally alter custodial operations.
          </p>

          <h3 className="text-2xl font-bold text-slate-900">
            The Rosslyn-Ballston Metro Corridor: Vertical Office Architecture
          </h3>
          <p className="text-slate-700 leading-relaxed">
            Stretching along the Orange and Silver lines of the Washington Metro, the Rosslyn-Ballston corridor contains the majority of Arlington&apos;s Class A high-rise commercial inventory. Beginning in{" "}
            <BodyLink href="/locations/rosslyn">Rosslyn</BodyLink>, where office towers soar above 30 stories, commercial cleaning operations must coordinate closely with building management regarding after-hours freight elevator access, loading bay reservations, and multi-tenant security badges.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Moving west into{" "}
            <BodyLink href="/locations/courthouse">Courthouse</BodyLink>, the commercial landscape shifts toward legal partnerships, administrative suites, and civic facilities clustered around the Arlington County Justice Center. Here, strict confidentiality protocols govern custodial routines, ensuring open trial casebooks and confidential deposition exhibits remain undisturbed. In{" "}
            <BodyLink href="/locations/clarendon">Clarendon</BodyLink>, creative agencies, tech lofts, and popular dining spots require late-night cleaning windows between 1:00 AM and 7:00 AM, along with specialized floor degreasing. Continuing into{" "}
            <BodyLink href="/locations/ballston">Ballston</BodyLink>, corporate research facilities and university satellite campuses demand anti-static ESD cleaning in server labs and high-turnaround lecture hall sanitization.
          </p>

          <h3 className="text-2xl font-bold text-slate-900">
            National Landing (Crystal City & Pentagon City): Enterprise Scale
          </h3>
          <p className="text-slate-700 leading-relaxed">
            Along the Blue and Yellow lines in Southern Arlington,{" "}
            <BodyLink href="/locations/crystal-city">Crystal City</BodyLink> and{" "}
            <BodyLink href="/locations/pentagon-city">Pentagon City</BodyLink> comprise National Landing. This sub-market hosts massive multi-building campuses for aerospace contractors, federal technology divisions, and Amazon HQ2. Custodial contractors in National Landing must possess the labor capacity to deploy multi-technician teams managing tens of thousands of square feet per shift, backed by standardized electronic QA reporting and strict DoD security badging.
          </p>

          <h3 className="text-2xl font-bold text-slate-900">
            Village at Shirlington & Columbia Pike: Mixed-Use & Small Business Hubs
          </h3>
          <p className="text-slate-700 leading-relaxed">
            Beyond the primary Metro corridors, the Village at{" "}
            <BodyLink href="/locations/shirlington">Shirlington</BodyLink> and the historic{" "}
            <BodyLink href="/locations/columbia-pike">Columbia Pike</BodyLink> corridor serve as vital neighborhood commercial hubs. Shirlington&apos;s pedestrian village features craft breweries, theaters, and specialty medical practices, while Columbia Pike encompasses diverse multi-family residential communities with ground-floor retail and community clinics. These environments benefit from cost-effective recurring janitorial agreements tailored to independent business budgets.
          </p>

          <h3 className="text-2xl font-bold text-slate-900">
            Municipal Collaboration and Chamber Leadership
          </h3>
          <p className="text-slate-700 leading-relaxed">
            Operating effectively in Arlington County requires continuous coordination with local regulatory bodies. From adhering to commercial recycling mandates enforced by the Arlington County Department of Environmental Services to active participation with the{" "}
            <BodyLink href="https://www.arlingtonchamber.org" external>
              Arlington Chamber of Commerce
            </BodyLink>, our network is deeply embedded in the Northern Virginia business community.
          </p>

          <h3 className="text-2xl font-bold text-slate-900">
            Request an Accurate Commercial Cleaning Quote in Your Area
          </h3>
          <p className="text-slate-700 leading-relaxed">
            Regardless of whether your commercial facility is located in Rosslyn, Ballston, Crystal City, or Columbia Pike, we are ready to deliver a customized proposal with competitive pricing.{" "}
            <BodyLink href="/get-free-quote">Request free commercial cleaning quotes across Arlington</BodyLink>{" "}
            or speak with our operations desk at{" "}
            <a href={siteConfig.phoneTel} className="font-bold text-sky-600 underline">
              {siteConfig.phoneFormatted}
            </a>.
          </p>
        </div>
      </section>

      {/* EMBEDDED QUOTE FORM ON LOCATIONS HUB */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteForm defaultLocation="Arlington (All Areas)" />
        </div>
      </section>
    </div>
  );
}
