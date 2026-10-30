"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/siteData";
import {
  Phone,
  Sparkles,
  ChevronDown,
  Menu,
  X,
  ShieldCheck,
  Building2,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const pathname = usePathname();

  const services = [
    { title: "Office Cleaning", href: "/services/office-cleaning" },
    { title: "Janitorial Services", href: "/services/janitorial-services" },
    { title: "Medical Office Cleaning", href: "/services/medical-office-cleaning" },
    { title: "Commercial Floor Care", href: "/services/commercial-floor-care" },
    { title: "Commercial Carpet Cleaning", href: "/services/commercial-carpet-cleaning" },
    { title: "Day Porter Services", href: "/services/day-porter-services" },
    { title: "Commercial Deep Cleaning", href: "/services/deep-cleaning" },
    { title: "Post-Construction Cleaning", href: "/services/post-construction-cleaning" },
    { title: "Disinfection & Sanitizing", href: "/services/disinfection-sanitizing" },
  ];

  const locations = [
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
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
      {/* Top Notification Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              Licensed, Bonded & $5M Insured in Arlington, VA
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              24/7 Nightly Crews & Emergency Response
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-slate-400">Direct Dispatch:</span>
            <a
              href={siteConfig.phoneTel}
              className="text-white hover:text-sky-300 font-bold transition-colors inline-flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-sky-400" />
              {siteConfig.phoneFormatted}
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-sky-700 to-sky-500 flex items-center justify-center text-white shadow-md shadow-sky-600/20 group-hover:scale-105 transition-transform">
              <Sparkles className="w-6 h-6 animate-pulse-subtle" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 leading-none block">
                Commercial Cleaning
              </span>
              <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-sky-600 block mt-0.5">
                Arlington
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link
              href="/"
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === "/"
                  ? "text-sky-700 font-bold bg-sky-50"
                  : "text-slate-700 hover:text-sky-600 hover:bg-slate-50"
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                href="/services"
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors inline-flex items-center gap-1 ${
                  pathname.startsWith("/services")
                    ? "text-sky-700 font-bold bg-sky-50"
                    : "text-slate-700 hover:text-sky-600 hover:bg-slate-50"
                }`}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4 opacity-75" />
              </Link>

              {servicesOpen && (
                <div className="absolute left-0 w-72 bg-white rounded-xl shadow-xl border border-slate-200 py-2 mt-0 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-4 py-2 border-b border-slate-100 bg-slate-50/70">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Arlington Service Silos
                    </p>
                  </div>
                  <div className="py-1">
                    {services.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-sky-50 hover:text-sky-700 transition-colors font-medium"
                      >
                        {item.title}
                      </Link>
                    ))}
                    <div className="pt-1 mt-1 border-t border-slate-100">
                      <Link
                        href="/services"
                        className="flex items-center justify-between px-4 py-2 text-xs font-bold text-sky-600 hover:text-sky-800"
                      >
                        <span>View All Services</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Locations Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setLocationsOpen(true)}
              onMouseLeave={() => setLocationsOpen(false)}
            >
              <Link
                href="/locations"
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors inline-flex items-center gap-1 ${
                  pathname.startsWith("/locations")
                    ? "text-sky-700 font-bold bg-sky-50"
                    : "text-slate-700 hover:text-sky-600 hover:bg-slate-50"
                }`}
              >
                <span>Locations</span>
                <ChevronDown className="w-4 h-4 opacity-75" />
              </Link>

              {locationsOpen && (
                <div className="absolute left-0 w-72 bg-white rounded-xl shadow-xl border border-slate-200 py-2 mt-0 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-4 py-2 border-b border-slate-100 bg-slate-50/70">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Arlington Commercial Hubs
                    </p>
                  </div>
                  <div className="py-1">
                    {locations.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-sky-50 hover:text-sky-700 transition-colors font-medium"
                      >
                        {item.name}
                      </Link>
                    ))}
                    <div className="pt-1 mt-1 border-t border-slate-100">
                      <Link
                        href="/locations"
                        className="flex items-center justify-between px-4 py-2 text-xs font-bold text-sky-600 hover:text-sky-800"
                      >
                        <span>All Service Areas Hub</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/blog"
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname.startsWith("/blog")
                  ? "text-sky-700 font-bold bg-sky-50"
                  : "text-slate-700 hover:text-sky-600 hover:bg-slate-50"
              }`}
            >
              Blog
            </Link>

            <Link
              href="/faq"
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === "/faq"
                  ? "text-sky-700 font-bold bg-sky-50"
                  : "text-slate-700 hover:text-sky-600 hover:bg-slate-50"
              }`}
            >
              FAQ
            </Link>

            <Link
              href="/contact"
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === "/contact"
                  ? "text-sky-700 font-bold bg-sky-50"
                  : "text-slate-700 hover:text-sky-600 hover:bg-slate-50"
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Right Action & Phone Button */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={siteConfig.phoneTel}
              className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-slate-800 hover:text-sky-700 hover:bg-sky-50/70 border border-slate-200 transition-all font-bold text-sm"
              title={`Call Commercial Cleaning Arlington at ${siteConfig.phoneFormatted}`}
            >
              <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-left leading-tight">
                <span className="block text-[10px] uppercase font-bold text-slate-500">Call Now</span>
                <span className="block text-sm font-black text-slate-900">{siteConfig.phoneFormatted}</span>
              </div>
            </a>

            <Link
              href="/get-free-quote"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white font-bold text-sm shadow-md shadow-sky-600/25 hover:shadow-lg hover:shadow-sky-600/35 transition-all transform hover:-translate-y-0.5 inline-flex items-center gap-1.5"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <a
              href={siteConfig.phoneTel}
              className="p-2.5 rounded-lg bg-sky-50 text-sky-700 hover:bg-sky-100 transition-colors"
              aria-label="Call Phone"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col space-y-1">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-base font-semibold text-slate-900 hover:bg-sky-50 hover:text-sky-700"
            >
              Home
            </Link>

            <div className="pt-2 pb-1 px-3 text-xs font-bold uppercase tracking-wider text-slate-400">
              Services (9 Core Silos)
            </div>
            <div className="pl-3 grid grid-cols-1 gap-1">
              {services.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-1.5 rounded-md text-sm font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-700"
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <div className="pt-3 pb-1 px-3 text-xs font-bold uppercase tracking-wider text-slate-400">
              Arlington Locations
            </div>
            <div className="pl-3 grid grid-cols-2 gap-1">
              {locations.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-1.5 rounded-md text-xs font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-700"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-100 flex flex-col space-y-1">
              <Link
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-base font-semibold text-slate-900 hover:bg-sky-50 hover:text-sky-700"
              >
                Blog
              </Link>
              <Link
                href="/faq"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-base font-semibold text-slate-900 hover:bg-sky-50 hover:text-sky-700"
              >
                FAQ (10 Questions & Answers)
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-base font-semibold text-slate-900 hover:bg-sky-50 hover:text-sky-700"
              >
                Contact Us & Location Map
              </Link>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <a
              href={siteConfig.phoneTel}
              className="w-full py-3 px-4 rounded-xl bg-slate-900 text-white font-bold text-center flex items-center justify-center gap-2 shadow"
            >
              <Phone className="w-4 h-4 text-sky-400" />
              <span>Call Direct: {siteConfig.phoneFormatted}</span>
            </a>
            <Link
              href="/get-free-quote"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 px-4 rounded-xl bg-sky-600 text-white font-bold text-center flex items-center justify-center gap-2 shadow"
            >
              <span>Request Free Instant Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
