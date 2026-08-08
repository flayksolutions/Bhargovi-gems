/* ------------------------------------------------------------------
   All copy for the page lives here.
   Swap `image` paths once the real photography is ready.
------------------------------------------------------------------- */

export const site = {
  brand: "Bhargovi Gems",
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Sustainability", href: "/sustainability" },
    { label: "Contact", href: "/contact" },
  ],
  cta: { label: "Enquire Now", href: "/contact" },
};

export const heroSection = {
  titleLines: ["Manufacturing", "Certified Diamonds"],
  body: "Precision-cut, ethically sourced diamonds \u2014 trusted by jewellery manufacturers and retail brands worldwide.",
  cta: { label: "Download Catalogue", href: "/catalogue" },
  image: "/images/hero-diamond.jpg",
  video: "/videos/hero.mp4",
  alt: "A round brilliant diamond held in tweezers against a dark field",
};

export const aboutSection = {
  eyebrow: "About Us",
  title: "A Family Legacy in Diamond Crafting Since 1994",
  body: "Bhargovi Gems operates in-house cutting and polishing facilities and an extensive inventory, serving jewellery brands across India and abroad.",
  /* Drop the real headquarters photograph in at
     public/images/facility.jpg and this line needs no change. */
  image: "/images/facility.jpg",
  alt: "The Bhargovi Gems headquarters at night",
};

export const statsSection = {
  stats: [
    { value: 30, suffix: "+", label: "Years in Business" },
    { value: 500, suffix: "K+", label: "Carats Polished / Year" },
    { value: 15, suffix: "+", label: "Countries Served" },
    { value: 300, suffix: "+", label: "Global Clients" },
  ],
};

/* Cards 05-08 are placeholders: same four plates, dummy copy.
   Swap `image`, `name` and `spec` when the real shapes land. */
export const productsSection = {
  eyebrow: "Flagship Products",
  titleLines: ["Round, Princess, Emerald", "& Cushion Cuts"],
  cta: { label: "More info", href: "/products" },
  cards: [
    {
      id: "round-brilliant",
      name: "Round Brilliant",
      spec: "58 Facets \u00b7 Excellent Cut",
      image: "/images/cuts/round-brilliant.png",
      alt: "Round brilliant cut diamond",
    },
    {
      id: "princess-cut",
      name: "Princess Cut",
      spec: "76 Facets \u00b7 Sharp Corners",
      image: "/images/cuts/princess-cut.png",
      alt: "Princess cut diamond",
    },
    {
      id: "emerald-cut",
      name: "Emerald Cut",
      spec: "Step Cut \u00b7 Hall-of-Mirrors",
      image: "/images/cuts/emerald-cut.png",
      alt: "Emerald cut diamond",
    },
    {
      id: "cushion-cut",
      name: "Cushion Cut",
      spec: "Pillow Silhouette \u00b7 Soft Fire",
      image: "/images/cuts/cushion-cut.png",
      alt: "Cushion cut diamond",
    },
    {
      id: "shape-five",
      name: "Shape Five",
      spec: "Placeholder \u00b7 Spec Line",
      image: "/images/cuts/round-brilliant.png",
      alt: "Placeholder diamond plate",
    },
    {
      id: "shape-six",
      name: "Shape Six",
      spec: "Placeholder \u00b7 Spec Line",
      image: "/images/cuts/princess-cut.png",
      alt: "Placeholder diamond plate",
    },
    {
      id: "shape-seven",
      name: "Shape Seven",
      spec: "Placeholder \u00b7 Spec Line",
      image: "/images/cuts/emerald-cut.png",
      alt: "Placeholder diamond plate",
    },
    {
      id: "shape-eight",
      name: "Shape Eight",
      spec: "Placeholder \u00b7 Spec Line",
      image: "/images/cuts/cushion-cut.png",
      alt: "Placeholder diamond plate",
    },
  ],
};

export const facilitySection = {
  eyebrow: "The Facility",
  title: "A Closer Look at Every Facet",
  body: "Recent parcels and bench work, photographed in our Surat HQ.",
  /* `image: null` renders an empty plate. Drop a path in per slide
     as the photography arrives. */
  slides: [1, 2, 3, 4, 5, 6, 7].map((n) => ({
    id: "facility-" + n,
    image: null as string | null,
    alt: "Bhargovi Gems facility, photograph " + n,
    caption: "Image " + String(n).padStart(2, "0"),
  })),
};

/* Seal marks in public/brand/certs are neutral placeholders drawn in
   house - swap for the official artwork before launch. */
export const certificationsSection = {
  eyebrow: "Certifications & Compliance",
  title: "Every Stone Backed by Global Standards",
  items: [
    {
      id: "gia",
      code: "GIA",
      name: "Gemological Institute of America",
      blurb: "Global standard in diamond grading",
      logo: "/brand/certs/gia.svg",
      alt: "GIA seal",
    },
    {
      id: "igi",
      code: "IGI",
      name: "International Gemological Institute",
      blurb: "Independent verification & certification",
      logo: "/brand/certs/igi.svg",
      alt: "IGI seal",
    },
    {
      id: "hrd",
      code: "HRD",
      name: "HRD Antwerp",
      blurb: "European diamond grading authority",
      logo: "/brand/certs/hrd.svg",
      alt: "HRD Antwerp seal",
    },
    {
      id: "kpc",
      code: "KPC",
      name: "Kimberley Process",
      blurb: "Ensuring conflict-free sourcing",
      logo: "/brand/certs/kpc.svg",
      alt: "Kimberley Process seal",
    },
  ],
};

export const footer = {
  tagline: "Certified diamonds, manufactured ethically and cut precisely.",
  image: "/images/footer-diamond.jpg",
  columns: [
    {
      title: "Quick Links",
      items: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Diamond Information", href: "/diamond-information" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Contact",
      items: [
        { label: "+91 XXXXX XXXXX", href: "tel:+91" },
        { label: "sales@bhargovigems.com", href: "mailto:sales@bhargovigems.com" },
        { label: "Mumbai, India" },
      ],
    },
  ],
  legal: "All Rights Reserved.",
  credit: { prefix: "Site by", label: "Flayk", href: "#" },
};

export const testimonialsSection = {
  eyebrow: "What Our Clients Say",
  title: "Trusted by Jewellery Brands Worldwide",
  image: "/images/testimonial-diamonds.png",
  imageAlt: "Scattered polished diamonds of varying cuts",
  testimonials: [
    {
      id: "kiran-shah",
      quote:
        "Every parcel arrives calibrated exactly to the specification we send. In six years we have not once returned a stone for a grading mismatch.",
      name: "Kiran Shah",
      role: "Procurement Head, Rosenthal & Vaal · Antwerp, Belgium",
    },
    {
      id: "elena-marchetti",
      quote:
        "Their turnaround on custom melee orders is unmatched. We plan entire collections around their production calendar because the dates always hold.",
      name: "Elena Marchetti",
      role: "Sourcing Director, Marchetti Gioielli · Milan, Italy",
    },
    {
      id: "david-okafor",
      quote:
        "What stood out was the transparency — full traceability documents on every shipment, no exceptions, no follow-up emails required.",
      name: "David Okafor",
      role: "Head of Compliance, Okafor & Sons · Lagos, Nigeria",
    },
    {
      id: "mei-lin-tan",
      quote:
        "We switched three suppliers before Bhargovi Gems. The consistency in cut quality across large parcels is the reason we stayed.",
      name: "Mei Lin Tan",
      role: "Managing Partner, Tan Diamond House · Singapore",
    },
  ],
};

export const officesSection = {
  eyebrow: "Global Reach",
  title: "Our Offices",
  /* Exported straight from Figma with the Mumbai/Surat location pins
     already composited in, so they stay pixel-accurate no matter how
     the full-bleed image gets cropped by object-fit: cover. */
  mapImage: "/images/offices-map-pins.png",
  mapImageAlt: "World map highlighting the Mumbai and Surat office locations",
  cta: { label: "Request a Quote", href: "/contact" },
  offices: [
    {
      id: "mumbai",
      name: "Mumbai (HQ)",
      address: "Bharat Diamond Bourse, BKC, Mumbai, India",
      icon: "/icons/office-mumbai.svg",
    },
    {
      id: "surat",
      name: "Surat",
      address: "Manufacturing Facility, Surat, Gujarat, India",
      icon: "/icons/office-surat.svg",
    },
  ],
};

export type ProcessStep = {
  id: string;
  name: string;
  description: string;
  image: string;
  alt: string;
};

const PLACEHOLDER_IMAGE = "/images/rough-stone.jpg";

export const processSection = {
  eyebrow: "Our Process",
  title: "From Rough Stone to Polish",
  steps: [
    {
      id: "growing",
      name: "Growing",
      description:
        "Cillum est sint exercitation occaecat sit eu et sint aute. Ipsum ad fugiat et irure et ullamco incididunt cillum.",
      image: PLACEHOLDER_IMAGE,
      alt: "Rough octahedral diamond crystal resting on dark stone",
    },
    {
      id: "planning-marking",
      name: "Planning & Marking",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      image: PLACEHOLDER_IMAGE,
      alt: "Rough diamond mapped for planning and marking",
    },
    {
      id: "sawing-cleaving",
      name: "Sawing & Cleaving",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis.",
      image: PLACEHOLDER_IMAGE,
      alt: "Diamond being sawn along its crystal plane",
    },
    {
      id: "bruting",
      name: "Bruting",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.",
      image: PLACEHOLDER_IMAGE,
      alt: "Diamond girdle shaped on the bruting lathe",
    },
    {
      id: "faceting",
      name: "Faceting",
      description:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi.",
      image: PLACEHOLDER_IMAGE,
      alt: "Fifty-seven facets polished onto a brilliant cut",
    },
    {
      id: "grading",
      name: "Grading and Quality Check",
      description:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
      image: PLACEHOLDER_IMAGE,
      alt: "Finished stone under the loupe for grading",
    },
  ] satisfies ProcessStep[],
};
