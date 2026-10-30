"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/siteData";
import {
  Send,
  CheckCircle2,
  Phone,
  Building,
  Calendar,
  Sparkles,
  MapPin,
  Clock,
} from "lucide-react";

interface QuoteFormProps {
  defaultService?: string;
  defaultLocation?: string;
  className?: string;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({
  defaultService = "office-cleaning",
  defaultLocation = "Arlington (All Areas)",
  className = "",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    serviceType: defaultService,
    location: defaultLocation,
    sqft: "5000",
    frequency: "5-nights-week",
    comments: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate high-converting fast submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 border border-emerald-200 shadow-xl text-center space-y-4 animate-in fade-in duration-300">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-black text-slate-900">Quote Request Received!</h3>
        <p className="text-sm text-slate-600 max-w-md mx-auto">
          Thank you, <span className="font-semibold text-slate-900">{formData.name || "Client"}</span>. Our Arlington commercial facility estimator is reviewing your specifications and will deliver a detailed scope & pricing breakdown within 15 minutes during operating hours.
        </p>

        <div className="p-4 bg-sky-50 rounded-xl border border-sky-100 text-left text-xs text-slate-700 space-y-1">
          <p className="font-bold text-sky-900 text-sm mb-1">Request Summary:</p>
          <p><span className="font-semibold">Facility Type:</span> {formData.serviceType}</p>
          <p><span className="font-semibold">Area / Zip:</span> {formData.location}</p>
          <p><span className="font-semibold">Approx. Size:</span> ~{Number(formData.sqft).toLocaleString()} sq. ft.</p>
          <p><span className="font-semibold">Frequency:</span> {formData.frequency}</p>
        </div>

        <div className="pt-2">
          <p className="text-xs text-slate-500 mb-2">Need immediate pricing or have an urgent request?</p>
          <a
            href={siteConfig.phoneTel}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow transition-all hover:scale-105"
          >
            <Phone className="w-4 h-4 text-sky-400" />
            <span>Call Estimator Now: {siteConfig.phoneFormatted}</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xl ${className}`}>
      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Fast, 100% Free Arlington Estimate</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
          Request a Customized Commercial Cleaning Quote
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Compare scopes, customized schedules, and transparent pricing with zero obligation.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Sarah Jenkins"
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm text-slate-900"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Company / Facility Name</label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="e.g. Arlington Tech Partners"
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm text-slate-900"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Business Phone *</label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="(703) 555-0199"
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm text-slate-900"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Work Email Address *</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="sarah@company.com"
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm text-slate-900"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Type of Commercial Service</label>
            <select
              value={formData.serviceType}
              onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm text-slate-900 bg-white"
            >
              <option value="office-cleaning">Office Cleaning Services</option>
              <option value="janitorial-services">Janitorial & Custodial Services</option>
              <option value="medical-office-cleaning">Medical & Dental Clinic Cleaning</option>
              <option value="commercial-floor-care">Commercial Floor Care (Strip & Wax)</option>
              <option value="commercial-carpet-cleaning">Commercial Carpet Hot Water Extraction</option>
              <option value="day-porter-services">On-Site Day Porter Staffing</option>
              <option value="deep-cleaning">Commercial Deep Cleaning Reset</option>
              <option value="post-construction-cleaning">Post-Construction Cleaning</option>
              <option value="disinfection-sanitizing">Disinfection & Electrostatic Spray</option>
              <option value="restaurant-cleaning">Restaurant & Kitchen Degreasing</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Arlington Location / Neighborhood</label>
            <select
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm text-slate-900 bg-white"
            >
              <option value="Rosslyn (22209)">Rosslyn (22209)</option>
              <option value="Courthouse (22201)">Courthouse (22201)</option>
              <option value="Clarendon (22201)">Clarendon (22201)</option>
              <option value="Ballston (22203)">Ballston (22203)</option>
              <option value="Crystal City (22202)">Crystal City / National Landing (22202)</option>
              <option value="Pentagon City (22202)">Pentagon City (22202)</option>
              <option value="Shirlington (22206)">Shirlington (22206)</option>
              <option value="Columbia Pike (22204)">Columbia Pike (22204)</option>
              <option value="Other Arlington Area">Other Arlington County Area</option>
            </select>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="text-xs font-bold text-slate-700">Estimated Cleanable Square Footage</label>
            <span className="text-xs font-extrabold text-sky-600">
              {Number(formData.sqft).toLocaleString()} sq. ft.
            </span>
          </div>
          <input
            type="range"
            min="1000"
            max="50000"
            step="1000"
            value={formData.sqft}
            onChange={(e) => setFormData({ ...formData, sqft: e.target.value })}
            className="w-full accent-sky-600 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-slate-400 mt-0.5">
            <span>1,000 sq ft</span>
            <span>15,000 sq ft</span>
            <span>30,000 sq ft</span>
            <span>50,000+ sq ft</span>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">Cleaning Frequency Needed</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { id: "5-nights-week", label: "5x / Week" },
              { id: "3-nights-week", label: "3x / Week" },
              { id: "weekly", label: "1x / Week" },
              { id: "one-time", label: "One-Time" },
            ].map((freq) => (
              <button
                type="button"
                key={freq.id}
                onClick={() => setFormData({ ...formData, frequency: freq.id })}
                className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all ${
                  formData.frequency === freq.id
                    ? "bg-sky-600 text-white border-sky-600 shadow-sm"
                    : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                }`}
              >
                {freq.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">Special Building Requirements (Optional)</label>
          <textarea
            rows={2}
            value={formData.comments}
            onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
            placeholder="Restroom count, after-hours keycard access, loading dock rules, carpet stains..."
            className="w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 text-xs text-slate-900"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white font-extrabold text-sm shadow-md shadow-sky-600/30 hover:shadow-lg transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
        >
          {loading ? (
            <span>Calculating & Sending...</span>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Submit Free Quote Request</span>
            </>
          )}
        </button>

        <p className="text-[11px] text-center text-slate-400">
          🔒 Strict Privacy: Your details are never sold. No spam. You will receive an accurate, written scope and price breakdown.
        </p>
      </form>
    </div>
  );
};

export default QuoteForm;
