import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async rewrites() {
    return [
      {
        source: "/commercial-cleaning-arlington-va",
        destination: "/",
      },
      {
        source: "/commercial-cleaning-arlington-va/service-areas",
        destination: "/locations",
      },
      {
        source: "/commercial-cleaning-arlington-va/office-cleaning",
        destination: "/services/office-cleaning",
      },
      {
        source: "/commercial-cleaning-arlington-va/janitorial-services",
        destination: "/services/janitorial-services",
      },
      {
        source: "/commercial-cleaning-arlington-va/medical-office-cleaning",
        destination: "/services/medical-office-cleaning",
      },
      {
        source: "/commercial-cleaning-arlington-va/commercial-floor-care",
        destination: "/services/commercial-floor-care",
      },
      {
        source: "/commercial-cleaning-arlington-va/commercial-carpet-cleaning",
        destination: "/services/commercial-carpet-cleaning",
      },
      {
        source: "/commercial-cleaning-arlington-va/day-porter-services",
        destination: "/services/day-porter-services",
      },
      {
        source: "/commercial-cleaning-arlington-va/deep-cleaning",
        destination: "/services/deep-cleaning",
      },
      {
        source: "/commercial-cleaning-arlington-va/post-construction-cleaning",
        destination: "/services/post-construction-cleaning",
      },
      {
        source: "/commercial-cleaning-arlington-va/disinfection-sanitizing",
        destination: "/services/disinfection-sanitizing",
      },
      {
        source: "/commercial-cleaning-arlington-va/rosslyn",
        destination: "/locations/rosslyn",
      },
      {
        source: "/commercial-cleaning-arlington-va/courthouse",
        destination: "/locations/courthouse",
      },
      {
        source: "/commercial-cleaning-arlington-va/clarendon",
        destination: "/locations/clarendon",
      },
      {
        source: "/commercial-cleaning-arlington-va/ballston",
        destination: "/locations/ballston",
      },
      {
        source: "/commercial-cleaning-arlington-va/crystal-city",
        destination: "/locations/crystal-city",
      },
      {
        source: "/commercial-cleaning-arlington-va/pentagon-city",
        destination: "/locations/pentagon-city",
      },
      {
        source: "/commercial-cleaning-arlington-va/shirlington",
        destination: "/locations/shirlington",
      },
      {
        source: "/commercial-cleaning-arlington-va/columbia-pike",
        destination: "/locations/columbia-pike",
      },
    ];
  },
};

export default nextConfig;
