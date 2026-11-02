import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import { LocalBusinessJsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/data/siteData";

export const metadata: Metadata = {
  title: {
    default: "Commercial Cleaning Arlington | Top-Rated Janitorial & Office Cleaning in Arlington, VA",
    template: "%s | Commercial Cleaning Arlington",
  },
  description:
    "Leading commercial cleaning and janitorial services in Arlington, VA. Serving Rosslyn, Courthouse, Clarendon, Ballston, Crystal City and all Northern VA. Free quotes.",
  keywords: [
    "commercial cleaning arlington va",
    "office cleaning arlington",
    "janitorial services arlington va",
    "medical office cleaning arlington",
    "commercial floor care arlington",
    "commercial carpet cleaning arlington",
    "day porter arlington va",
  ],
  authors: [{ name: "Commercial Cleaning Arlington" }],
  creator: "Commercial Cleaning Arlington",
  publisher: "Commercial Cleaning Arlington",
  metadataBase: new URL("https://www.commercialcleaningarlington.site"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Commercial Cleaning Arlington | Premier Janitorial Services in Arlington, VA",
    description: "Compare reliable commercial cleaning & janitorial quotes in Arlington, VA. Office cleaning, medical sanitation, floor care & day porters.",
    url: "https://www.commercialcleaningarlington.site",
    siteName: "Commercial Cleaning Arlington",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Commercial Cleaning Arlington Headquarters & Modern Office Facility",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "nPw7qoPNrmxxFB376dMcIVfjA4CqCHTlDl-uv4jLvd8",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="nPw7qoPNrmxxFB376dMcIVfjA4CqCHTlDl-uv4jLvd8"
        />
        <LocalBusinessJsonLd />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased selection:bg-sky-200 selection:text-sky-900">
        <Navbar />
        <main className="flex-grow pb-16 sm:pb-0">{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
