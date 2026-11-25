/* ------------------------------------------------------------------
   Search and social metadata for every page: titles, descriptions,
   canonical URLs, share cards and JSON-LD structured data.
------------------------------------------------------------------- */
import type { Metadata } from "next";
import {
  contactFormSection,
  diamondInfoFaqSection,
  footer,
  site,
} from "@/lib/content";

export const siteUrl = "https://www.bhargovigems.co";

export type PageSeo = {
  path: string;
  /** Short page name, used in breadcrumbs. Match the menu label. */
  name: string;
  title: string;
  description: string;
  image: { url: string; alt: string };
};

export const pages = {
  home: {
    path: "/",
    name: "Home",
    title: "Bhargovi Gems | Lab Grown Diamond Manufacturer",
    description:
      "Bhargovi Gems is a lab grown diamond manufacturer with a manufacturing facility in Surat and a corporate office in Mumbai, India.",
    image: {
      url: "/images/og/home.jpg",
      alt: "A craftsman examining a diamond at a polishing wheel",
    },
  },
  about: {
    path: "/about",
    name: "About Us",
    title: "About Us — Bhargovi Gems",
    description:
      "A family diamond legacy since 1988. Bhargovi Gems manufactures precision-cut lab grown diamonds with in-house cutting and polishing.",
    image: {
      url: "/images/og/about.jpg",
      alt: "The Bhargovi Gems founder's office overlooking a lake",
    },
  },
  sustainability: {
    path: "/sustainability",
    name: "Sustainability",
    title: "Sustainability — Bhargovi Gems",
    description:
      "Responsible by design: how Bhargovi Gems manufactures lab grown diamonds with a focus on quality and a more sustainable future.",
    image: {
      url: "/images/og/sustainability.jpg",
      alt: "Polished diamonds cascading from a white calla lily",
    },
  },
  diamondInformation: {
    path: "/diamond-information",
    name: "Diamond Information",
    title: "Diamond Information — Bhargovi Gems",
    description:
      "A buyer's guide to the 4Cs, diamond shapes and lab grown vs mined diamonds, for businesses sourcing lab grown diamonds.",
    image: {
      url: "/images/og/diamond-information.jpg",
      alt: "Polished diamonds in four shapes resting on a moss-covered stone",
    },
  },
  contact: {
    path: "/contact",
    name: "Contact Us",
    title: "Contact Us — Bhargovi Gems",
    description:
      "Contact Bhargovi Gems about lab grown diamonds, bulk orders and partnerships. Corporate office in Mumbai, manufacturing in Surat.",
    image: {
      url: "/images/og/home.jpg",
      alt: "A craftsman examining a diamond at a polishing wheel",
    },
  },
} satisfies Record<string, PageSeo>;

export function pageMetadata({ path, title, description, image }: PageSeo): Metadata {
  const images = [{ ...image, width: 1200, height: 630 }];

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: site.brand,
      images,
      locale: "en_US",
      type: "website",
    },
    twitter: { card: "summary_large_image", title, description, images },
  };
}

/* ------------------------------ JSON-LD ----------------------------- */

const absolute = (path: string) => new URL(path, siteUrl).href;
const organizationId = `${siteUrl}/#organization`;
const websiteId = `${siteUrl}/#website`;

/* Postal parts of the addresses in contactFormSection.offices.
   Update both together if an office moves. */
const postalAddresses = [
  {
    "@type": "PostalAddress",
    streetAddress: "JE 1260, Bharat Diamond Bourse, Bandra Kurla Complex",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400051",
    addressCountry: "IN",
  },
  {
    "@type": "PostalAddress",
    streetAddress:
      "Riverview, Near Karamnath Mahadev Temple, Next To Jalaram Furniture, Kapodra",
    addressLocality: "Surat",
    addressRegion: "Gujarat",
    postalCode: "395006",
    addressCountry: "IN",
  },
];

/* Company and site identity, included on every page so the @id
   references in each page's schema resolve. */
export const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: site.brand,
      url: absolute("/"),
      description: pages.home.description,
      logo: absolute("/brand/logo-512.png"),
      email: footer.contact.email,
      telephone: footer.contact.phone,
      address: postalAddresses,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: footer.contact.email,
        telephone: footer.contact.phone,
      },
      /* Profile links without their share/tracking query strings. */
      sameAs: contactFormSection.reachOut
        .filter((item) => item.href.startsWith("https://"))
        .map((item) => item.href.split("?")[0]),
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: absolute("/"),
      name: site.brand,
      inLanguage: "en",
      publisher: { "@id": organizationId },
    },
  ],
};

/* The page itself, plus a Home > Page breadcrumb on inner pages. */
export function pageSchema(page: PageSeo, type: string | string[] = "WebPage") {
  const url = absolute(page.path);
  const isHome = page.path === "/";

  const webPage = {
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name: page.title,
    description: page.description,
    inLanguage: "en",
    isPartOf: { "@id": websiteId },
    about: { "@id": organizationId },
    primaryImageOfPage: absolute(page.image.url),
    ...(isHome ? {} : { breadcrumb: { "@id": `${url}#breadcrumb` } }),
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: [pages.home, page].map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: absolute(crumb.path),
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": isHome ? [webPage] : [webPage, breadcrumb],
  };
}

/* The Diamond Information page is also an FAQ page: same node, with the
   questions that are visible in its accordion. */
export function faqPageSchema(page: PageSeo) {
  const schema = pageSchema(page, ["WebPage", "FAQPage"]);
  const [webPage, ...rest] = schema["@graph"];

  return {
    ...schema,
    "@graph": [
      {
        ...webPage,
        mainEntity: diamondInfoFaqSection.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
      ...rest,
    ],
  };
}
