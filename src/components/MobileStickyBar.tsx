import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteData";
import { Phone, FileText } from "lucide-react";

export const MobileStickyBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 flex items-center justify-between gap-2 shadow-2xl sm:hidden">
      <a
        href={siteConfig.phoneTel}
        className="flex-1 py-3 px-3 rounded-xl bg-slate-900 text-white font-extrabold text-xs flex items-center justify-center gap-2 active:bg-slate-800 shadow"
      >
        <Phone className="w-4 h-4 text-sky-400 animate-pulse" />
        <span>Call (817) 404-4508</span>
      </a>
      <Link
        href="/get-free-quote"
        className="flex-1 py-3 px-3 rounded-xl bg-gradient-to-r from-sky-600 to-sky-700 text-white font-extrabold text-xs flex items-center justify-center gap-1.5 active:bg-sky-800 shadow"
      >
        <FileText className="w-4 h-4" />
        <span>Free Quote</span>
      </Link>
    </div>
  );
};

export default MobileStickyBar;
