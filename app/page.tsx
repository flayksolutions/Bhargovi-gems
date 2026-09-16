import SiteHeader from "@/components/SiteHeader/SiteHeader";
import Hero from "@/components/Hero/Hero";
import ProductsSection from "@/components/ProductsSection/ProductsSection";
import AboutSection from "@/components/AboutSection/AboutSection";
import ProcessSection from "@/components/ProcessSection/ProcessSection";
import FacilityCarousel from "@/components/FacilityCarousel/FacilityCarousel";
import CraftingSection from "@/components/CraftingSection/CraftingSection";
import OfficesSection from "@/components/OfficesSection/OfficesSection";
import CommitmentsSection from "@/components/CommitmentsSection/CommitmentsSection";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import {
  aboutSection,
  craftingSection,
  facilitySection,
  footer,
  heroSection,
  officesSection,
  commitmentsSection,
  processSection,
  productsSection,
  site,
  milestonesSection,
} from "@/lib/content";
import MilestonesSection from "@/components/MilestonesSection";

export default function Home() {
  return (
    <>
      <SiteHeader brand={site.brand} nav={site.nav} cta={site.cta} />

      <main>
        <Hero {...heroSection} />

        <div className="scroll-stack">
          <ProductsSection {...productsSection} />
          <AboutSection {...aboutSection} />
          <ProcessSection {...processSection} />
          {/* <FacilityCarousel {...facilitySection} /> */}
          <OfficesSection {...officesSection} />
          <CraftingSection {...craftingSection} />
          {/* <MilestonesSection {...milestonesSection} /> */}
          <CommitmentsSection {...commitmentsSection} />
        </div>
      </main>

      <SiteFooter brand={site.brand} {...footer} />
    </>
  );
}
