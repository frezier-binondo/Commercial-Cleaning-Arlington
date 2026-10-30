import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import BodyLink from "@/components/BodyLink";
import QuoteForm from "@/components/QuoteForm";
import { siteConfig } from "@/data/siteData";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Building2,
  Send,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us & Location Map | Commercial Cleaning Arlington",
  description:
    "Contact Commercial Cleaning Arlington. Call (817) 404-4508 or request free janitorial quotes online. Visit our service hub on Google Maps.",
  keywords: [
    "contact commercial cleaning arlington",
    "arlington janitorial phone number",
    "commercial cleaning quote arlington va",
  ],
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      <Breadcrumbs items={[{ label: "Contact Us" }]} />

      {/* CONTACT HERO */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>24/7 Response & Immediate Estimates</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Contact Commercial Cleaning Arlington
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Connect directly with our Northern Virginia facility specialists for immediate quotes, on-site walkthroughs, or emergency service dispatch across Arlington County.
          </p>

          <div className="pt-2">
            <a
              href={siteConfig.phoneTel}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-extrabold text-lg shadow-xl shadow-sky-600/30 transition-all hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now: {siteConfig.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS & QUOTE FORM */}
      <section className="py-20 bg-slate-50 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Info & Details */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-100 px-3 py-1 rounded-full">
                  Direct Facility Channels
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-3">
                  We are Ready to Assist Your Arlington Facility
                </h2>
                <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                  Have questions regarding our insurance certificates, night access keys, green cleaning products, or emergency response times? Reach out directly.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {/* Phone Card */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-base">Direct Phone & Emergency Dispatch</h3>
                    <p className="text-xs text-slate-500 mt-0.5">24 Hours / 7 Days Live Calling</p>
                    <a
                      href={siteConfig.phoneTel}
                      className="text-base font-black text-sky-600 hover:text-sky-800 block mt-1"
                    >
                      {siteConfig.phoneFormatted}
                    </a>
                  </div>
                </div>

                {/* Email Card */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-base">Written Quotes & RFPs</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Send building blueprints or bid requests</p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-sm font-bold text-sky-600 hover:text-sky-800 block mt-1"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                {/* Hours Card */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-base">Operational Hours</h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      <strong>Office Hours:</strong> {siteConfig.officeHours}
                      <br />
                      <strong>Cleaning Crews:</strong> {siteConfig.operatingHours}
                    </p>
                  </div>
                </div>

                {/* Address Card */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-base">Service Territory Hub</h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Commercial Cleaning Arlington
                      <br />
                      Serving all commercial hubs in Arlington County, VA
                    </p>
                    <a
                      href={siteConfig.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-sky-600 hover:underline mt-2 inline-flex items-center gap-1"
                    >
                      <span>View on Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Form */}
            <div className="lg:col-span-7">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* EMBEDDED MAP SECTION WITH GOOGLE MAPS LINK */}
      <section className="py-16 bg-white text-slate-900 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-100 px-3 py-1 rounded-full">
                Interactive Google Map
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-2 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-sky-600" />
                Find Commercial Cleaning Arlington On The Map
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Centrally positioned to deploy crews across Rosslyn, Courthouse, Clarendon, Ballston, and National Landing.
              </p>
            </div>

            <a
              href={siteConfig.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow transition-all hover:scale-105"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Map Frame */}
          <div className="w-full h-96 sm:h-[450px] rounded-2xl overflow-hidden border border-slate-300 shadow-xl relative">
            <iframe
              src="https://maps.google.com/maps?q=32.7379219,-97.1054994&hl=en&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Commercial Cleaning Arlington Google Maps Embed"
              className="w-full h-full"
            />
          </div>

          {/* MANDATORY 5 INTERNAL LINKS & 1 EXTERNAL LINK */}
          <div className="p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 seo-prose">
            <h3 className="font-bold text-slate-900 text-lg">
              Immediate Arlington Commercial Coverage
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              We coordinate on-site cleaning crews throughout all major Arlington County districts. Explore our specialized services for{" "}
              <BodyLink href="/services/office-cleaning">office cleaning</BodyLink>, scheduled{" "}
              <BodyLink href="/services/janitorial-services">janitorial maintenance</BodyLink>, clinical{" "}
              <BodyLink href="/services/medical-office-cleaning">medical office cleaning</BodyLink>, or check local coverage in{" "}
              <BodyLink href="/locations/rosslyn">Rosslyn (22209)</BodyLink> and{" "}
              <BodyLink href="/locations/courthouse">Courthouse (22201)</BodyLink>.
            </p>
            <div className="pt-2 text-xs text-slate-500 flex items-center gap-2">
              <span className="font-semibold text-slate-700">Official Municipal Portal:</span>
              <BodyLink href="https://www.arlingtonva.us" external>
                Arlington County Government (ArlingtonVA.us)
              </BodyLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
