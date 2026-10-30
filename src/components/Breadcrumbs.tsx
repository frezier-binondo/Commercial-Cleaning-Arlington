import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const schemaList = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.commercialcleaningarlington.com",
    },
    ...items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 2,
      name: item.label,
      item: item.href ? `https://www.commercialcleaningarlington.com${item.href}` : undefined,
    })),
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: schemaList,
  };

  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 bg-slate-50 border-b border-slate-200 text-sm text-slate-600">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-7xl mx-auto flex items-center space-x-2 flex-wrap">
        <Link href="/" className="flex items-center text-slate-500 hover:text-sky-600 transition-colors">
          <Home className="w-4 h-4 mr-1" />
          <span>Home</span>
        </Link>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <ChevronRight className="w-4 h-4 text-slate-400 flex-shrink-0" />
            {item.href && index < items.length - 1 ? (
              <Link href={item.href} className="text-slate-600 hover:text-sky-600 font-medium transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-slate-900 font-semibold" aria-current="page">
                {item.label}
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};

export default Breadcrumbs;
