import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader/SiteHeader";
import DiamondInfoHero from "@/components/DiamondInfoHero/DiamondInfoHero";
import ChapterRail from "@/components/ChapterRail/ChapterRail";
import FourCsSection from "@/components/FourCsSection/FourCsSection";
import ShapesCutsSection from "@/components/ShapesCutsSection/ShapesCutsSection";
import LabGrownVsMinedSection from "@/components/LabGrownVsMinedSection/LabGrownVsMinedSection";
import AnatomyGlossarySection from "@/components/AnatomyGlossarySection/AnatomyGlossarySection";
import DiamondInfoFaqSection from "@/components/DiamondInfoFaqSection/DiamondInfoFaqSection";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import {
  anatomyGlossarySection,
  chapterRailSection,
  diamondInfoFaqSection,
  diamondInfoHeroSection,
  footer,
  fourCsSection,
  labGrownVsMinedSection,
  shapesCutsSection,
  site,
} from "@/lib/content";

const title = "Diamond Information — Bhargovi Gems";
const description =
  "From the 4Cs to shapes and lab-grown vs mined — everything our sourcing partners need to specify, verify and buy lab-grown diamonds with confidence.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/diamond-information",
  },
  openGraph: {
    title,
    description,
    url: "/diamond-information",
    siteName: "Bhargovi Gems",
    images: ["/images/diamond-info/hero-guide.jpg"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/diamond-info/hero-guide.jpg"],
  },
};

export default function DiamondInformationPage() {
  return (
    <>
      <SiteHeader brand={site.brand} nav={site.nav} cta={site.cta} />

      <main>
        <DiamondInfoHero {...diamondInfoHeroSection} />

        <div className="scroll-stack">
          <ChapterRail {...chapterRailSection} />
          <FourCsSection {...fourCsSection} />
          <ShapesCutsSection {...shapesCutsSection} />
          <LabGrownVsMinedSection {...labGrownVsMinedSection} />
          <AnatomyGlossarySection {...anatomyGlossarySection} />
          <DiamondInfoFaqSection {...diamondInfoFaqSection} />
        </div>
      </main>

      <SiteFooter brand={site.brand} {...footer} />
    </>
  );
}
