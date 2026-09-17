import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll/SmoothScroll";
import "./globals.css";

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
    images: ["/images/hero-4-poster.jpg"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/hero-4-poster.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* Arsenal SC (display) · Arsenal (headings) · Manrope (body) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Arsenal+SC:ital,wght@0,400;0,700;1,400;1,700&family=Arsenal:ital,wght@0,400;0,700;1,400;1,700&family=Manrope:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
