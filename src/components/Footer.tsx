import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteData";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  ShieldCheck,
  ExternalLink,
  Award,
  CheckCircle2,
} from "lucide-react";

export const Footer: React.FC = () => {
  const servicesLinks = [
    { name: "Office Cleaning Services", href: "/services/office-cleaning" },
    { name: "Janitorial Services", href: "/services/janitorial-services" },
    { name: "Medical Office Cleaning", href: "/services/medical-office-cleaning" },
    { name: "Commercial Floor Care", href: "/services/commercial-floor-care" },
    { name: "Commercial Carpet Cleaning", href: "/services/commercial-carpet-cleaning" },
    { name: "Day Porter Services", href: "/services/day-porter-services" },
    { name: "Commercial Deep Cleaning", href: "/services/deep-cleaning" },
    { name: "Post-Construction Cleaning", href: "/services/post-construction-cleaning" },
    { name: "Disinfection & Sanitizing", href: "/services/disinfection-sanitizing" },
  ];

  const locationLinks = [
    { name: "Rosslyn (22209)", href: "/locations/rosslyn" },
    { name: "Courthouse (22201)", href: "/locations/courthouse" },
    { name: "Clarendon (22201)", href: "/locations/clarendon" },
    { name: "Ballston (22203)", href: "/locations/ballston" },
    { name: "Crystal City (22202)", href: "/locations/crystal-city" },
    { name: "Pentagon City (22202)", href: "/locations/pentagon-city" },
    { name: "Shirlington (22206)", href: "/locations/shirlington" },
    { name: "Columbia Pike (22204)", href: "/locations/columbia-pike" },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Prominent High-Conversion CTA Banner above Footer Columns */}
        <div className="bg-gradient-to-r from-sky-900 via-slate-900 to-sky-950 rounded-2xl p-8 mb-16 border border-sky-700/40 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Instant Phone Estimate Available Now</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Ready for a Spotless Commercial Facility in Arlington?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl">
                Get free, no-obligation quotes from local cleaning specialists. Fully insured, background-checked, and bonded.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href={siteConfig.phoneTel}
                className="px-6 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-extrabold text-lg flex items-center justify-center gap-2 shadow-lg shadow-sky-500/30 transition-all hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                <span>{siteConfig.phoneFormatted}</span>
              </a>
              <Link
                href="/get-free-quote"
                className="px-6 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-extrabold text-base flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-md"
              >
                <span>Request Free Quote</span>
              </Link>
            </div>
          </div>
        </div>

        {/* REQUIRED: VISIBLE GOOGLE MAP SECTION */}
        <div className="mb-16 bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400 block mb-1">
                Local Presence & Headquarters
              </span>
              <h4 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <MapPin className="w-5 h-5 text-sky-400" />
                Commercial Cleaning Arlington Service Hub
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Conveniently dispatched across all Arlington corridors and adjacent commercial centers.
              </p>
            </div>
            <div>
              <a
                href={siteConfig.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs transition-colors shadow"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="w-full h-72 sm:h-80 rounded-xl overflow-hidden border border-slate-700 relative shadow-inner">
            <iframe
              src="https://maps.google.com/maps?q=32.7379219,-97.1054994&hl=en&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Commercial Cleaning Arlington Location Map"
              className="w-full h-full grayscale-[20%] contrast-110"
            />
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Direct GPS Dispatched Commercial Teams
            </span>
            <span>
              Map link:{" "}
              <a
                href={siteConfig.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 underline hover:text-sky-300"
              >
                {siteConfig.mapUrl}
              </a>
            </span>
          </div>
        </div>

        {/* 4-Column Footer Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: About & Phone CTA */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-600 flex items-center justify-center text-white shadow-md">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-xl font-black text-white">Commercial Cleaning Arlington</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Arlington County&apos;s trusted commercial cleaning and janitorial partner. Providing hospital-grade sanitation, office care, floor restoration, and dedicated day porters.
            </p>

            <div className="pt-2 space-y-2.5 text-sm">
              <div className="flex items-center gap-3 text-white font-bold">
                <Phone className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a href={siteConfig.phoneTel} className="hover:text-sky-400 transition-colors">
                  {siteConfig.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-sky-400 transition-colors">
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-start gap-3 text-slate-300">
                <Clock className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">{siteConfig.operatingHours}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Services Silo Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 pb-1 border-b border-slate-800">
              Commercial Services (9 Silos)
            </h4>
            <ul className="space-y-2 text-sm">
              {servicesLinks.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-slate-400 hover:text-sky-400 hover:underline transition-colors block py-0.5"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Arlington Locations */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 pb-1 border-b border-slate-800">
              Arlington Neighborhoods
            </h4>
            <ul className="space-y-2 text-sm">
              {locationLinks.map((loc) => (
                <li key={loc.href}>
                  <Link
                    href={loc.href}
                    className="text-slate-400 hover:text-sky-400 hover:underline transition-colors block py-0.5"
                  >
                    {loc.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/locations"
                  className="text-xs font-bold text-sky-400 hover:text-sky-300 inline-flex items-center gap-1"
                >
                  <span>Explore All Service Areas &rarr;</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Trust, Safety & Authoritative Standards */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 pb-1 border-b border-slate-800">
              Compliance & Standards
            </h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>$5,000,000 Commercial General Liability Insurance & Full Bonding</span>
              </li>
              <li className="flex items-start gap-2">
                <Award className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <span>ISSA Standardized Cleaning Practice Alignment</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>EPA Safer Choice Certified & LEED O+M Compliant Formulations</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>OSHA 29 CFR 1910.1030 Bloodborne Pathogen Certified Crews</span>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <p className="text-xs text-slate-500 mb-2">Need an emergency quote right now?</p>
              <a
                href={siteConfig.phoneTel}
                className="w-full py-2.5 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-sky-400 hover:text-sky-300 border border-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Dispatch: {siteConfig.phoneFormatted}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Navigation links */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Commercial Cleaning Arlington. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/" className="hover:text-slate-300 transition-colors">
              Home
            </Link>
            <Link href="/services" className="hover:text-slate-300 transition-colors">
              Services
            </Link>
            <Link href="/locations" className="hover:text-slate-300 transition-colors">
              Locations
            </Link>
            <Link href="/blog" className="hover:text-slate-300 transition-colors">
              Blog
            </Link>
            <Link href="/faq" className="hover:text-slate-300 transition-colors">
              FAQ
            </Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Contact Us
            </Link>
            <Link href="/get-free-quote" className="hover:text-slate-300 transition-colors">
              Free Quote
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
