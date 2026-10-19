import type { Metadata } from "next";
import { Arsenal, Arsenal_SC, Manrope } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll/SmoothScroll";
import { heroSection } from "@/lib/content";
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

const title = "Bhargovi Gems — Our Process";
const description =
  "From rough stone to polish — the Bhargovi Gems diamond process.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bhargovigems.co"),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Bhargovi Gems",
    images: [heroSection.image],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [heroSection.image],
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
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
