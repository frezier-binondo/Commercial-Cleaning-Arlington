export interface FAQItem {
  id: string;
  category: "Pricing & Quotes" | "Services & Scopes" | "Security & Access" | "Green Cleaning & Safety";
  question: string;
  answer: string;
  relatedServiceSlug?: string;
  relatedLocationSlug?: string;
}

export const faqList: FAQItem[] = [
  {
    id: "faq-1",
    category: "Pricing & Quotes",
    question: "How much does commercial cleaning cost in Arlington, VA?",
    answer: "Commercial cleaning pricing in Arlington typically ranges from $0.08 to $0.25 per cleanable square foot for ongoing recurring janitorial services, or between $45 and $95 per technician hour depending on scope, frequency, and building layout. Small office suites (under 2,500 sq. ft.) with 2–3 weekly visits often average $350–$650 per month, while larger multi-floor enterprise facilities in Rosslyn or Ballston with nightly 5-day custodial service receive customized volume bids. Written proposals detailing exact scope, restroom counts, and consumable restocking are always provided free of charge.",
  },
  {
    id: "faq-2",
    category: "Pricing & Quotes",
    question: "Do I have to sign a long-term commercial cleaning contract?",
    answer: "No. While we offer discounted annual service agreements for commercial properties seeking fixed budget predictability, we also offer flexible month-to-month service agreements with standard 30-day cancellation terms. We believe our quality should retain your business every single month, not an inflexible legal contract.",
  },
  {
    id: "faq-3",
    category: "Security & Access",
    question: "Can cleaning services be performed after hours or overnight?",
    answer: "Yes! Over 90% of our Arlington commercial clients schedule their cleaning during evening or overnight hours (typically between 6:00 PM and 5:00 AM) or over weekends. This ensures complete freedom from noise, vacuum distraction, or wet floors during normal business operations. Our supervisors are trained in secure digital alarm disarming, keycard protocols, and multi-point lockup routines.",
  },
  {
    id: "faq-4",
    category: "Security & Access",
    question: "Are your cleaning technicians background-checked, bonded, and insured?",
    answer: "Yes, 100%. Every technician undergoes rigorous multi-state criminal background checks, identity verification, and regular drug screening before entering client properties. Commercial Cleaning Arlington carries $5,000,000 in comprehensive commercial general liability insurance, full statutory workers' compensation, and comprehensive fidelity bonding. Certificates of Insurance (COI) naming your property management firm or landlord as additionally insured can be issued within 24 hours.",
  },
  {
    id: "faq-5",
    category: "Services & Scopes",
    question: "What is the difference between office cleaning and janitorial services?",
    answer: "The terms are often used interchangeably, but in commercial property management, 'office cleaning' generally refers to tenant-level interior space maintenance (desks, trash, private restrooms, conference rooms, breakrooms). 'Janitorial services' refers to comprehensive, recurring building-wide maintenance covering multi-tenant lobbies, common restrooms, elevators, stairwells, and scheduled floor care.",
  },
  {
    id: "faq-6",
    category: "Services & Scopes",
    question: "What commercial cleaning services do you cover in Arlington County?",
    answer: "We cover complete commercial solutions including Office Cleaning, Janitorial Services, Medical & Dental Office Cleaning, Commercial Floor Care (Strip and Wax, Buffing), Commercial Carpet Hot Water Extraction, Dedicated Day Porter Services, Commercial Deep Cleaning, Post-Construction Cleaning, Disinfection & Sanitizing, School Cleaning, and Restaurant/Hospitality Cleaning.",
  },
  {
    id: "faq-7",
    category: "Green Cleaning & Safety",
    question: "Do you use eco-friendly or LEED-compliant green cleaning products?",
    answer: "Yes. We prioritize 100% Green Seal certified, EPA Safer Choice, and low-VOC cleaning formulations that contain no harsh ammonia, phosphates, or chlorine bleach. Our green cleaning protocols protect indoor air quality, support building LEED O+M certification credits, and ensure safe breathing conditions for asthma or allergy sufferers in your workplace.",
  },
  {
    id: "faq-8",
    category: "Services & Scopes",
    question: "How do your supervisors verify that cleaning tasks were completed properly?",
    answer: "We utilize mobile GPS-tagged quality assurance software. Supervisors conduct weekly unannounced inspections evaluating 24 to 30 specific checkpoints per facility. Digital inspection reports complete with time stamps and photos are logged into our quality system, ensuring consistent accountability and high standards.",
  },
  {
    id: "faq-9",
    category: "Services & Scopes",
    question: "Do you supply restroom paper goods, soaps, and trash liners?",
    answer: "Yes. We offer complete consumable inventory management. We can source, deliver, and restock commercial toilet paper, multifold hand towels, touchless foaming hand soap refills, sanitary seat covers, and trash liners directly at wholesale prices, eliminating inventory management headaches for your office manager.",
  },
  {
    id: "faq-10",
    category: "Security & Access",
    question: "Which specific neighborhoods and corridors in Arlington do you service?",
    answer: "We provide comprehensive commercial cleaning coverage across all major Arlington commercial corridors including Rosslyn (22209), Courthouse (22201), Clarendon (22201), Ballston (22203), Crystal City / National Landing (22202), Pentagon City (22202), Shirlington (22206), and the Columbia Pike commercial corridor (22204).",
  },
];
