import SiteHeader from "@/components/archived-components/SiteHeader/SiteHeader";
import Hero from "@/components/archived-components/Hero/Hero";
import StatsBar from "@/components/archived-components/StatsBar/StatsBar";
import ProductsSection from "@/components/archived-components/ProductsSection/ProductsSection";
import PurposeSection from "@/components/archived-components/PurposeSection/PurposeSection";
import AboutSection from "@/components/archived-components/AboutSection/AboutSection";
import OurApproachSection from "@/components/archived-components/OurApproachSection/OurApproachSection";
import FacilityCarousel from "@/components/archived-components/FacilityCarousel/FacilityCarousel";
import TestimonialsSection from "@/components/archived-components/TestimonialsSection/TestimonialsSection";
import GlobalOfficesSection from "@/components/archived-components/GlobalOfficesSection/GlobalOfficesSection";
import CraftingSection from "@/components/archived-components/CraftingSection/CraftingSection";
import CertificationsSection from "@/components/CertificationsSection/CertificationsSection";
import SiteFooter from "@/components/archived-components/SiteFooter/SiteFooter";
import {
  aboutSection,
  certificationsSection,
  craftingSection,
  facilitySection,
  footer,
  heroSection,
  officesSection,
  ourApproachSection,
  productsSection,
  purposeSection,
  site,
  statsSection,
  testimonialsSection,
} from "@/lib/content";

export default function Home() {
  return (
    <>
      <SiteHeader brand={site.brand} nav={site.nav} cta={site.cta} />

      <main>
        <Hero {...heroSection} />
        {/* <StatsBar {...statsSection} /> */}
        <ProductsSection {...productsSection} />

        <AboutSection
          {...aboutSection}
          image="/images/facility-2.jpg"
          alt="The Bhargovi Gems Surat facility"
        />
        <PurposeSection {...purposeSection} />
        <OurApproachSection {...ourApproachSection} />
        <CraftingSection {...craftingSection} />
        <FacilityCarousel {...facilitySection} variant="light" />
        {/* <TestimonialsSection {...testimonialsSection} /> */}
        <GlobalOfficesSection {...officesSection} />

        {/* <CertificationsSection {...certificationsSection} /> */}
      </main>

      <SiteFooter brand={site.brand} {...footer} />
    </>
  );
}
