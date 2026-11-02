import React from "react";
import { siteConfig } from "@/data/siteData";

export const LocalBusinessJsonLd = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    "@id": "https://www.commercialcleaningarlington.site",
    url: "https://www.commercialcleaningarlington.site",
    telephone: siteConfig.phoneFormatted,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.87998,
      longitude: -77.10677,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    areaServed: [
      { "@type": "AdministrativeArea", name: "Arlington County, VA" },
      { "@type": "City", name: "Rosslyn" },
      { "@type": "City", name: "Courthouse" },
      { "@type": "City", name: "Clarendon" },
      { "@type": "City", name: "Ballston" },
      { "@type": "City", name: "Crystal City" },
      { "@type": "City", name: "Pentagon City" },
      { "@type": "City", name: "Shirlington" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Commercial Cleaning Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Office Cleaning Services",
            description: "Scheduled recurring custodial routines for commercial suites and headquarters.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Janitorial Services",
            description: "Daily building maintenance and facility upkeep.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Medical Office Cleaning",
            description: "Clinical-grade disinfection following OSHA & CDC guidelines.",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const FAQJsonLd = ({ faqs }: { faqs: { question: string; answer: string }[] }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const ServiceJsonLd = ({
  name,
  description,
  url,
  image,
}: {
  name: string;
  description: string;
  url: string;
  image: string;
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      telephone: siteConfig.phoneFormatted,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Arlington",
        addressRegion: "VA",
      },
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Arlington, VA",
    },
    description: description,
    image: image,
    url: url,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
