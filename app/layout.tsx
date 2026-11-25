import type { Metadata } from "next";
import { Arsenal, Arsenal_SC, Manrope } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll/SmoothScroll";
import JsonLd from "@/components/JsonLd/JsonLd";
import { heroSection, site } from "@/lib/content";
import { pages, siteSchema, siteUrl } from "@/lib/seo";
import "./globals.css";

/* Self-hosted at build time by next/font: no render-blocking request to
   fonts.googleapis.com. Each font exposes a CSS variable that
   globals.css slots into --font-display / --font-heading / --font-body. */
const arsenalSc = Arsenal_SC({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--ff-arsenal-sc",
});
const arsenal = Arsenal({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--ff-arsenal",
});
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--ff-manrope",
});

/* Site-wide defaults. Each page sets its own title, description,
   canonical and share card with pageMetadata() from lib/seo.ts. No
   canonical here, so a page without one (such as the 404) doesn't
   claim to be the homepage. */
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: pages.home.title,
  description: pages.home.description,
  applicationName: site.brand,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${arsenalSc.variable} ${arsenal.variable} ${manrope.variable}`}
    >
      <head>
        {/* Hero poster: fetch it as early as possible,
            so it's ready the moment the page paints — matters
            most on slow mobile connections. */}
        <link rel="preload" as="image" href={heroSection.image} fetchPriority="high" />
      </head>
      <body>
        <JsonLd data={siteSchema} />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
