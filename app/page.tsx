import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import ProductsSection from "@/components/ProductsSection";
import AboutSection from "@/components/AboutSection";
import OurApproachSection from "@/components/OurApproachSection";
import FacilityCarousel from "@/components/FacilityCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";
import GlobalOfficesSection from "@/components/GlobalOfficesSection";
import CertificationsSection from "@/components/CertificationsSection";
import SiteFooter from "@/components/SiteFooter";
import {
  aboutSection,
  certificationsSection,
  facilitySection,
  footer,
  heroSection,
  officesSection,
  ourApproachSection,
  productsSection,
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
        <StatsBar {...statsSection} />
        <ProductsSection {...productsSection} />
        <AboutSection
          {...aboutSection}
          image="/images/facility-2.jpg"
          alt="The Bhargovi Gems Surat facility"
        />
        <OurApproachSection {...ourApproachSection} />
        <FacilityCarousel {...facilitySection} variant="light" />
        <TestimonialsSection {...testimonialsSection} />
        <GlobalOfficesSection {...officesSection} />
        <CertificationsSection {...certificationsSection} />
      </main>

      <SiteFooter brand={site.brand} {...footer} />
    </>
  );
}
