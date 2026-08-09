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
  slides: [
    {
      id: "facility-1",
      image: "/images/facility/facility-01-cutting-floor.jpg",
      alt: "Cutting and polishing floor at the Surat facility",
      caption: "Image 01",
    },
    {
      id: "facility-2",
      image: "/images/facility/facility-02-sarine-mapping.jpg",
      alt: "Sarine 4D mapping software scanning a rough diamond",
      caption: "Image 02",
    },
    {
      id: "facility-3",
      image: "/images/facility/facility-03-grading.jpg",
      alt: "Craftsman grading a polished stone with a loupe and tweezers",
      caption: "Image 03",
    },
    {
      id: "facility-4",
      image: "/images/facility/facility-04-laser-sawing.jpg",
      alt: "Technician operating a laser sawing machine",
      caption: "Image 04",
    },
    {
      id: "facility-5",
      image: "/images/facility/facility-05-bruting-floor.jpg",
      alt: "Craftsmen at work on the bruting floor",
      caption: "Image 05",
    },
    {
      id: "facility-6",
      image: "/images/facility/facility-06-polishing-wheel.jpg",
      alt: "Craftsman setting a stone at the polishing wheel",
      caption: "Image 06",
    },
    {
      id: "facility-7",
      image: "/images/facility/facility-07-planning-room.jpg",
      alt: "Diamond planning and mapping room",
      caption: "Image 07",
    },
  ] satisfies { id: string; image: string | null; alt: string; caption: string }[],
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

/* ------------------------------------------------------------------
   About page (/about)
------------------------------------------------------------------- */

export const aboutHeroSection = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "About" },
  ],
  title: "A Family Legacy in Diamond Crafting Since 1994",
  body: "Three generations of expertise in sourcing, cutting and polishing certified natural diamonds for the world's leading jewellery brands.",
  image: "/images/about/hero-diamonds.png",
  alt: "A round brilliant diamond held in tweezers, scattered diamonds on a dark field",
};

export const legacySection = {
  eyebrow: "About Us",
  title: "Your Trusted Diamond Manufacturer Since 1994",
  body: "With in-house cutting and polishing facilities and an extensive inventory, Bhargovi Gems caters to the growing needs of jewellery manufacturers and retail brands across India and abroad.",
  /* Pre-composited collage tiles exported straight from Figma — each
     PNG already carries its own diagonal alpha-cut edge, so the three
     interlock exactly the way they were designed, no matter how the
     layout scales. Positions below are the % offsets of the original
     514.5px-tall composition. */
  images: [
    {
      id: "collage-1",
      src: "/images/about/legacy-collage-1.png",
      alt: "The Bhargovi Gems headquarters building",
      left: 0,
      top: 0,
      width: 100,
      height: 62.74,
    },
    {
      id: "collage-2",
      src: "/images/about/legacy-collage-2.png",
      alt: "Bench worker polishing a diamond",
      left: 47.29,
      top: 50.49,
      width: 52.71,
      height: 49.47,
    },
    {
      id: "collage-3",
      src: "/images/about/legacy-collage-3.png",
      alt: "Cutting and polishing floor at the Surat facility",
      left: 0,
      top: 59.68,
      width: 55.44,
      height: 40.32,
    },
  ],
  features: [
    "Manufactured for 15+ Countries",
    "Extensive inventory across shapes & sizes",
    "Quick and reliable global delivery",
    "Diverse Range in Standard & Custom Cuts",
  ],
};

export type Milestone = {
  id: string;
  year: string;
  label: string;
  body: string;
};

export const milestonesSection = {
  eyebrow: "Our Story",
  title: "Three Decades of Milestones",
  milestones: [
    {
      id: "1994",
      year: "1994",
      label: "Founded",
      body: "Founded in Mumbai as a small diamond manufacturing firm",
    },
    {
      id: "2003",
      year: "2003",
      label: "In-House Unit",
      body: "Opened in-house cutting & polishing unit in Surat",
    },
    {
      id: "2011",
      year: "2011",
      label: "Certified",
      body: "Became GIA/IGI certified export partner",
    },
    {
      id: "2016",
      year: "2016",
      label: "Global Reach",
      body: "Expanded to serve clients in 10+ countries",
    },
    {
      id: "2023",
      year: "2023",
      label: "Antwerp Office",
      body: "Opened Antwerp liaison office; 15+ countries served",
    },
  ] satisfies Milestone[],
};

export type Facility = {
  id: string;
  name: string;
  location: string;
  image: string;
  alt: string;
  size: "large" | "medium" | "small" | "wide";
};

export const facilitiesPageSection = {
  eyebrow: "Facilities",
  title: "From Manufacturing Floor to Vault",
  body: "Nine specialised facilities across Surat and Mumbai — from rough-stone intake to secure vault storage — engineered for precision at every stage of the journey.",
  /* Plain, uncropped photos — the slanted card shape comes from a
     clip-path on the card div (see FacilitiesSection), not from the
     image asset itself. */
  facilities: [
    {
      id: "surat-cutting",
      name: "Surat Cutting & Polishing Unit",
      location: "SURAT",
      image: "/images/about/facility-surat-cutting.jpg",
      alt: "Craftsman cutting a diamond on the bench at the Surat unit",
      size: "large",
    },
    {
      id: "sarine-lab",
      name: "Sarine Mapping & Grading Lab",
      location: "SURAT",
      image: "/images/about/facility-sarine-lab.jpg",
      alt: "Sarine 4D mapping software scanning a rough diamond",
      size: "medium",
    },
    {
      id: "rough-sorting",
      name: "Rough Diamond Sorting House",
      location: "SURAT",
      image: "/images/about/facility-rough-sorting.jpg",
      alt: "Workers sorting rough diamond parcels",
      size: "small",
    },
    {
      id: "laser-sawing",
      name: "Laser Sawing & Bruting Floor",
      location: "SURAT",
      image: "/images/about/facility-laser-sawing.jpg",
      alt: "Technician operating a laser sawing machine",
      size: "small",
    },
    {
      id: "polishing-wheels",
      name: "Automated Polishing Wheels",
      location: "SURAT",
      image: "/images/about/facility-polishing-wheels.jpg",
      alt: "Automated polishing wheel finishing a stone",
      size: "small",
    },
    {
      id: "quality-control",
      name: "In-House Quality Control Lab",
      location: "MUMBAI",
      image: "/images/about/facility-quality-control.jpg",
      alt: "Quality control technicians inspecting stones",
      size: "medium",
    },
    {
      id: "certification-desk",
      name: "Certification & Documentation Desk",
      location: "MUMBAI",
      image: "/images/about/facility-certification-desk.jpg",
      alt: "Staff preparing certification documentation",
      size: "large",
    },
    {
      id: "export-packing",
      name: "Secure Export Packing Unit",
      location: "MUMBAI",
      image: "/images/about/facility-export-packing.jpg",
      alt: "Secure packing of stones for export",
      size: "wide",
    },
    {
      id: "inventory-vault",
      name: "Mumbai Inventory Vault",
      location: "MUMBAI",
      image: "/images/about/facility-inventory-vault.jpg",
      alt: "Rows of desks in the Mumbai inventory vault",
      size: "wide",
    },
  ] satisfies Facility[],
};

export type ApproachStory = {
  id: string;
  title: string;
  body: string;
  image: string;
  alt: string;
};

export const ourApproachSection = {
  eyebrow: "Our Approach",
  titleLines: ["Commitment to Quality", "and Service"],
  body: "Over three decades of excellence in diamond manufacturing, backed by strong sourcing networks and customer-focused operations.",
  bleedImage: "/images/about/approach-bleed-diamond.png",
  bleedImageAlt: "A diamond held in tweezers, faded into the dark background",
  stories: [
    {
      id: "what-sets-us-apart",
      title: "What Sets Us Apart",
      body: "Deep sourcing partnerships across mining regions, in-house Sarine 4D mapping and polishing under one roof, and an extensive ready inventory across shapes and sizes.",
      image: "/images/about/approach-jewelry.png",
      alt: "Finished diamond jewellery on display",
    },
    {
      id: "certified-verified-guaranteed",
      title: "Certified. Verified. Guaranteed.",
      body: "Every stone is GIA/IGI certified, 4D Sarine scanned and multi-point inspected before it leaves the floor. Certificates are quoted by number on the invoice and matched to the laser inscription on the girdle.",
      image: "/images/about/approach-retail.png",
      alt: "Retail jewellery counter with a client reviewing stones",
    },
    {
      id: "trusted-by-brands",
      title: "Trusted by Brands Worldwide",
      body: "Three generations of grading and craftsmanship since 1994, reliable delivery to 15+ countries, and transparent GIA/IGI-backed grading on every parcel we ship.",
      image: "/images/about/approach-loose-diamonds.png",
      alt: "A scatter of loose polished diamonds of varying cuts",
    },
  ] satisfies ApproachStory[],
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
