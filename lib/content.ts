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
    { label: "Diamond", href: "/diamond-information" },
    { label: "Contact", href: "/contact" },
  ],
  cta: { label: "Enquire Now", href: "/contact" },
};

export const heroSection = {
  titleLines: ["Manufacturing", "Lab Grown Diamonds"],
  body: "Precision-cut, ethically sourced diamonds \u2014 trusted by jewellery manufacturers and retail brands worldwide.",
  cta: { label: "Download Catalogue", href: "/catalogue" },
  image: "/images/hero-diamond.jpg",
  video: "/videos/hero-2.mp4",
  alt: "A round brilliant diamond held in tweezers against a dark field",
};


// export const aboutSection = {
//   eyebrow: "About Us",
//   title: "A Family Legacy in Diamond Crafting Since 1994",
//   body: "Bhargovi Gems operates in-house cutting and polishing facilities and an extensive inventory.",
//   /* Drop the real headquarters photograph in at
//      public/images/facility.jpg and this line needs no change. */
//   image: "/images/facility.jpg",
//   alt: "The Bhargovi Gems headquarters at night",
// };

export const aboutSection = {
  eyebrow: "About Us",
  title: "A Family Legacy in Diamond Crafting Since 1994",
  body: "Bhargovi Gems operates in-house cutting and polishing facilities and an extensive inventory, serving jewellery brands across India and abroad.",
  image: "/images/facility-2.jpg",
  video: "/videos/house-tour.mp4",
  alt: "The Bhargovi Gems Surat facility",
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
// export const productsSection = {
//   eyebrow: "Flagship Products",
//   titleLines: ["Round, Princess, Emerald", "& Cushion Cuts"],
//   cta: { label: "More info", href: "/products" },
//   cards: [
//     {
//       id: "round-brilliant",
//       name: "Round Brilliant",
//       spec: "58 Facets \u00b7 Excellent Cut",
//       image: "/images/cuts/round-brilliant.png",
//       alt: "Round brilliant cut diamond",
//     },
//     {
//       id: "princess-cut",
//       name: "Princess Cut",
//       spec: "76 Facets \u00b7 Sharp Corners",
//       image: "/images/cuts/princess-cut.png",
//       alt: "Princess cut diamond",
//     },
//     {
//       id: "emerald-cut",
//       name: "Emerald Cut",
//       spec: "Step Cut \u00b7 Hall-of-Mirrors",
//       image: "/images/cuts/emerald-cut.png",
//       alt: "Emerald cut diamond",
//     },
//     {
//       id: "cushion-cut",
//       name: "Cushion Cut",
//       spec: "Pillow Silhouette \u00b7 Soft Fire",
//       image: "/images/cuts/cushion-cut.png",
//       alt: "Cushion cut diamond",
//     },
//     // {
//     //   id: "shape-five",
//     //   name: "Shape Five",
//     //   spec: "Placeholder \u00b7 Spec Line",
//     //   image: "/images/cuts/round-brilliant.png",
//     //   alt: "Placeholder diamond plate",
//     // },
//     // {
//     //   id: "shape-six",
//     //   name: "Shape Six",
//     //   spec: "Placeholder \u00b7 Spec Line",
//     //   image: "/images/cuts/princess-cut.png",
//     //   alt: "Placeholder diamond plate",
//     // },
//     // {
//     //   id: "shape-seven",
//     //   name: "Shape Seven",
//     //   spec: "Placeholder \u00b7 Spec Line",
//     //   image: "/images/cuts/emerald-cut.png",
//     //   alt: "Placeholder diamond plate",
//     // },
//     // {
//     //   id: "shape-eight",
//     //   name: "Shape Eight",
//     //   spec: "Placeholder \u00b7 Spec Line",
//     //   image: "/images/cuts/cushion-cut.png",
//     //   alt: "Placeholder diamond plate",
//     // },
//   ],
// };

export const productsSection = {
  eyebrow: "Flagship Products",
  title: "Each One Grown, Not Mined",
  tagline: "Precision. Purity. Perfection",
  background: "/images/shapes-bg.png",
  shapes: [
    { src: "/images/shapes/round-brilliant.png", name: "Round Brilliant" },
    { src: "/images/shapes/princess.png", name: "Princess" },
    { src: "/images/shapes/emerald.png", name: "Emerald" },
    { src: "/images/shapes/oval.png", name: "Oval" },
    { src: "/images/shapes/pear.png", name: "Pear" },
    { src: "/images/shapes/heart.png", name: "Heart" },
    { src: "/images/shapes/marquise.png", name: "Marquise" },
    { src: "/images/shapes/half-moon.png", name: "Half Moon" },
    { src: "/images/shapes/trillian.png", name: "Trillion" },
    { src: "/images/shapes/octagon.png", name: "Octagon" },
    { src: "/images/shapes/lozenge.png", name: "Lozenge" },
    { src: "/images/shapes/baguette.png", name: "Baguette" },
  ],
};

export const purposeSection = {
  eyebrow: "Building a Better Tomorrow",
  title: "Purpose Beyond Business",
  body: "Our commitment goes beyond creating exceptional diamonds. We invest in communities, support meaningful causes, and embrace responsible practices that create lasting value. Through initiatives in education, healthcare and environmental care, we strive to make a positive difference today and for generations to come.",
  image: "/images/purpose-community.png",
  alt: "Two children planting a sapling together in the soil",
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
  ] satisfies {
    id: string;
    image: string | null;
    alt: string;
    caption: string;
  }[],
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
  image: "/images/facility-2.jpg",
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
        { label: "+91 85910 95691", href: "tel:+918591095691" },
        {
          label: "bhargovigems4445@gmail.com",
          href: "mailto:bhargovigems4445@gmail.com",
        },
        {
          heading: "Mumbai",
          label: "Bharat Diamond Bourse, BKC, Mumbai, India",
        },
        {
          heading: "Surat",
          label: "Manufacturing Facility, Surat, Gujarat, India",
        },
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

// export const officesSection = {
//   eyebrow: "Locations",
//   title: "Our Offices",
//   /* Exported straight from Figma with the Mumbai/Surat location pins
//      already composited in, so they stay pixel-accurate no matter how
//      the full-bleed image gets cropped by object-fit: cover. */
//   mapImage: "/images/offices-map-pins.png",
//   mapImageAlt: "World map highlighting the Mumbai and Surat office locations",
//   cta: { label: "Request a Quote", href: "/contact" },
//   offices: [
//     {
//       id: "mumbai",
//       name: "Mumbai (HQ)",
//       address: "Bharat Diamond Bourse, BKC, Mumbai, India",
//       icon: "/icons/office-mumbai.svg",
//     },
//     {
//       id: "surat",
//       name: "Surat",
//       address: "Manufacturing Facility, Surat, Gujarat, India",
//       icon: "/icons/office-surat.svg",
//     },
//   ],
// };

export const officesSection = {
  eyebrow: "Locations",
  title: "Our Offices",
  map: "/images/offices-map.svg",
  mapAlt: "World map highlighting the Mumbai and Surat office locations",
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
  cta: { label: "Request a Quote", href: "/contact" },
};

export const craftingSection = {
  title: "Crafting Beyond the Ordinary",
  body: "Every exceptional stone begins with careful hands and a clear vision. At Bhargovi Gems, we refine each creation through precision, patience, and an uncompromising eye for detail. From the first cut to the final polish, every step is guided by a commitment to enduring quality.",
  watermark: ["Precision", "Patience", "Perfection"],
  image: "/images/crafting-2.png",
  alt: "Close-up of a diamond being shaped on a precision cutting machine",
};

/* ------------------------------------------------------------------
   About page (/about)
------------------------------------------------------------------- */

export const aboutHeroSection = {
  titleLines: ["A Family Legacy", "Since 1971"],
  body: "Three generations of expertise in sourcing, cutting and polishing certified natural diamonds for the world's leading jewellery brands.",
  image: "/images/about/hero-legacy.jpg",
  alt: "A round brilliant diamond held in tweezers above a dark, sparkling surface",
};

export type SpecTableRow = {
  id: string;
  category: string;
  /* One value per column after "Category", in column order. */
  values: string[];
};

export const legacySection = {
  eyebrow: "About Us",
  /* Split so the trailing clause can carry the accent colour. */
  title: { lead: "Your Trusted Diamond Manufacturer ", accent: "Since 1971" },
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
  specTable: {
    columns: ["Category", "Clarity Range", "Colour Range", "Size Range"],
    rows: [
      {
        id: "round-brilliant",
        category: "Round Brilliant",
        values: ["VVS-VS", "D - E - F", "3 cents - 1.50 ct"],
      },
      {
        id: "fancy-shapes",
        category: "Fancy Shapes",
        values: ["VVS", "D – F - F", "30 cents - 1 ct"],
      },
    ] satisfies SpecTableRow[],
  },
};

export type WhyChooseUsItem = {
  id: string;
  icon: string;
  title: string;
  body: string;
};

export const whyChooseUsSection = {
  eyebrow: "Held to a Higher Cut",
  title: "Why Choose Us",
  body: "A brilliant is read facet by facet. So is a supplier. These are the five we are judged on, and the five we will not trade away.",
  /* Cut-out artwork with its own alpha — it bleeds off the left edge of
     the viewport, so it must stay transparent, not a boxed photo. */
  image: "/images/about/why-choose-us-ribbon.png",
  alt: "A solitaire diamond ring threaded onto a knotted blue silk ribbon",
  items: [
    {
      id: "budget",
      icon: "/icons/about/budget.png",
      title: "Easier on the Budget",
      body: "Advances in growing technology put a larger, higher-grade stone within the same budget.",
    },
    {
      id: "earth",
      icon: "/icons/about/earth.png",
      title: "Gentler on the Earth",
      body: "Our process leaves natural ecosystem undisturbed nothing dug, nothing displaced, nothing drained.",
    },
    {
      id: "purity",
      icon: "/icons/about/purity.png",
      title: "Purity as Standard",
      body: "Each lab-grown rough diamond is carefully evaluated for its size, shape, clarity and internal characteristics to determine its ideal cutting plan.",
    },
    {
      id: "conflict-free",
      icon: "/icons/about/conflict-free.png",
      title: "Guaranteed Conflict-Free",
      body: "Chemically, physically and optically identical to an earth-mined diamond and, unlike one, guaranteed free of conflict.",
    },
  ] satisfies WhyChooseUsItem[],
};

export const founderNoteSection = {
  eyebrow: "Our Founder",
  title: {
    lead: "A better way to bring ",
    accent: "brilliance",
    trail: " into the world.",
  },
  quote:
    "When I founded Bhargovi Gems in 1971, my vision was simple to build a diamond business rooted in trust, craftsmanship and integrity. As the industry has evolved, our commitment to quality and continuous improvement has remained unchanged.",
  name: "Bhagwanbhai Patel",
  role: "Founder, Bhargovi Gems",
  /* PLACEHOLDER — the Figma comp uses a watermarked Unsplash+ stock
     portrait. Swap for the real founder photograph before launch. */
  image: "/images/about/founder-portrait.jpg",
  alt: "Portrait of the founder of Bhargovi Gems",
};

export const visionSection = {
  eyebrow: "Our Vision",
  title: {
    lead: "Every stone we release should give back ",
    accent: "more light than it was asked for",
    trail: ".",
  },
  body: "Brilliance is not a grade on a certificate. It is what the light does when it leaves the table, and it is the only thing the customer ever really sees.",
  image: "/images/about/vision-hands.jpg",
  alt: "Several hands resting together on the trunk of an old tree",
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
      label: "Surat Office",
      body: "Opened Surat liaison office; 15+ countries served",
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

export const aboutValuesSection = {
  eyebrow: "Our Values",
  title: "Driven by Purpose",
  intro:
    "Ethics and integrity guide every stage of how we source, cut and deal.",
  steps: [
    {
      id: "ethical-sourcing",
      name: "Ethical Sourcing",
      description:
        "Absolute integrity as a foundational principle across every business activity — from sourcing through to the sale, with nothing compromised along the way.",
      image: "/images/about/ethical-sourcing.png",
      alt: "Finished diamond jewellery on display",
    },
    {
      id: "craftsmanship",
      name: "Craftsmanship",
      description:
        "Meticulous attention at every stage, backed by in-house Sarine 4D mapping and generations of expert craftsmanship, so each diamond meets the highest standard.",
      image: "/images/about/craftsmanship.png",
      alt: "Retail jewellery counter with a client reviewing stones",
    },
    {
      id: "transparency",
      name: "Transparency",
      description:
        "Every diamond traced from source to market, with GIA/IGI-backed grading and complete transparency on origin and quality for every parcel we ship.",
      image: "/images/about/transparency.png",
      alt: "A scatter of loose polished diamonds of varying cuts",
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

/* ------------------------------------------------------------------
   Sustainability page (/sustainability)
------------------------------------------------------------------- */

export const sustainabilityHeroSection = {
  breadcrumb: [{ label: "Home", href: "/" }, { label: "Sustainability" }],
  title: "Responsible by Design",
  body: "From lab to jewel, every stone we grow reflects our commitment to people and the planet.",
  image: "/images/sustainability/hero-bg.png",
  alt: "A lab-grown diamond suspended in a dark, softly lit field",
};

export const commitmentSection = {
  eyebrow: "Our Commitment",
  title: "Rooted in Responsibility",
  body: "We craft lab-grown gems with a fraction of mining's environmental impact, guided by ethics, transparency, and care at every step.",
};

export type PillarCard = { id: string; name: string; body: string; icon: string };

export const pillarsSection = {
  background: "/images/sustainability/commitment-bg.png",
  cards: [
    {
      id: "sustainable-growing",
      name: "Sustainable Growing",
      body: "Grown with energy-efficient technology that significantly cuts carbon and water impact.",
      icon: "/icons/sustainability/windmill.svg",
    },
    {
      id: "ethical-sourcing",
      name: "Ethical Sourcing",
      body: "Every stone is traceable from lab to market, backed by independent certification.",
      icon: "/icons/sustainability/ethical-sourcing.svg",
    },
    {
      id: "eco-responsibility",
      name: "Eco Responsibility",
      body: "We minimize waste, conserve energy, and work toward carbon neutrality across operations.",
      icon: "/icons/sustainability/recycle.svg",
    },
  ] satisfies PillarCard[],
};

export const commitmentsSection = {
  background: "/images/shapes-bg.png",
  blocks: [
    {
      id: "ethically-sourced",
      title: "Ethically Sourced",
      media: "/videos/ethically-sourced.mp4" as string | null,
      alt: "A polished diamond on handmade paper among raw minerals",
    },
    {
      id: "environment-friendly",
      title: "Environment Friendly",
      media: "/videos/environment-friendly.mp4" as string | null,
      alt: "A row of polished diamonds on a leaf beaded with water droplets",
      captionAbove: true,
    },
  ],
};

export const integritySection = {
  title: "Product Integrity & Traceability",
  body: "Every gem is independently certified and tracked from creation to consumer, so authenticity is never in question.",
  points: ["Certified Authenticity", "Full Traceability", "Ethical Craftsmanship"],
  images: [
    {
      src: "/images/sustainability/integrity-1.png",
      alt: "A loupe and tweezers used to inspect a polished diamond",
    },
    {
      src: "/images/sustainability/integrity-2.png",
      alt: "A rough diamond crystal beside cutting tools",
    },
  ],
};

export type CaringBand = {
  id: string;
  title: string;
  body: string;
  image: string;
  alt: string;
  theme: "dark" | "light";
  imageSide: "left" | "right";
  notch: "top-left" | "top-right";
};

export const caringSection = {
  bands: [
    {
      id: "people",
      title: "Caring for People",
      body: "Our people define who we are. We ensure fair treatment and safe workplaces for everyone.",
      image: "/images/sustainability/caring-people.png",
      alt: "A large group of colleagues gathered together outdoors",
      theme: "dark",
      imageSide: "left",
      notch: "top-right",
    },
    {
      id: "community",
      title: "Caring for Community",
      body: "We support education, health, and local development where we live and work.",
      image: "/images/sustainability/caring-community.png",
      alt: "Hands resting together on a moss-covered tree trunk",
      theme: "light",
      imageSide: "right",
      notch: "top-left",
    },
  ] satisfies CaringBand[],
};

export const planetSection = {
  title: "Caring for the Planet",
  body: "Grown, not mined — our gems use far less land and water, and we keep reducing our footprint.",
  image: "/images/sustainability/caring-planet.png",
  alt: "A cluster of polished diamonds resting on a green leaf",
};

/* ------------------------------------------------------------------
   Diamond Information page (/diamond-information)
------------------------------------------------------------------- */

export const diamondInfoHeroSection = {
  breadcrumb: [{ label: "Home", href: "/" }, { label: "Diamond Information" }],
  titleLines: ["Understanding Diamonds", "The Complete Buyer's Guide"],
  body: "From the 4Cs to shapes and lab-grown vs mined — everything our sourcing partners need to specify, verify and buy lab-grown diamonds with confidence.",
  image: "/images/diamond-info/hero-guide.jpg",
  alt: "Round, pear, emerald and marquise cut diamonds resting on a moss-covered stone beside a bare branch",
};

export type Chapter = { id: string; number: string; label: string };

export const chapterRailSection = {
  chapters: [
    { id: "the-4cs", number: "01", label: "The 4Cs" },
    { id: "shapes", number: "02", label: "Shapes" },
    { id: "lab-grown-vs-mined", number: "03", label: "Lab-Grown vs Mined" },
    { id: "glossary", number: "04", label: "Glossary" },
    { id: "faqs", number: "05", label: "FAQs" },
  ] satisfies Chapter[],
};

/* The note under each 4Cs card reads as one sentence with a single
   emphasised range in the middle — `accent` is the part rendered blue. */
export type FourCNote = { lead?: string; accent: string; trail?: string };

export type FourCItem = {
  id: string;
  label: string;
  /** loupe / carat cards: line-art SVG */
  icon?: string;
  /** colour card: warm overlay approximating body tone at that grade */
  tint?: string;
  /** carat card: rendered edge length at the 1440px reference width */
  size?: number;
};

export type FourCCard = {
  id: string;
  number: string;
  name: string;
  caption: string;
  /** which graphic the card renders — each has its own layout */
  kind: "scale" | "gems" | "loupes" | "carats";
  /** kind "scale" only */
  diagram?: string;
  ticks?: string[];
  /** fraction of the scale track covered by the highlight (0–1) */
  fill?: number;
  /** kind "gems" only — one photo, re-tinted per grade */
  photo?: string;
  items?: FourCItem[];
  note: FourCNote;
};

export const fourCsSection = {
  id: "the-4cs",
  eyebrow: "Diamond Education",
  titleLines: ["The Four C’s", "of a Diamond"],
  body: "Every stone we grade and export is assessed against these four universal standards.",
  cards: [
    {
      id: "cut",
      number: "01",
      name: "Cut",
      caption: "Facet brilliance",
      kind: "scale",
      diagram: "/images/diamond-info/4cs/cut-light-path.svg",
      ticks: ["EX", "VG", "G", "F", "P"],
      fill: 0.4,
      note: { lead: "Ships", accent: "EX–VG", trail: "only" },
    },
    {
      id: "colour",
      number: "02",
      name: "Colour",
      caption: "Body tone, D→Z",
      kind: "gems",
      photo: "/images/shapes/round-brilliant.png",
      items: [
        { id: "d", label: "D", tint: "rgba(255, 255, 255, 0)" },
        { id: "g", label: "G", tint: "rgba(246, 236, 196, 0.24)" },
        { id: "j", label: "J", tint: "rgba(243, 228, 166, 0.44)" },
        { id: "m", label: "M", tint: "rgba(238, 219, 148, 0.6)" },
        { id: "z", label: "Z", tint: "rgba(233, 209, 120, 0.74)" },
      ],
      note: { lead: "Standard range", accent: "D–M" },
    },
    {
      id: "clarity",
      number: "03",
      name: "Clarity",
      caption: "Inclusions, 10×",
      kind: "loupes",
      items: [
        { id: "fl", label: "FL", icon: "/images/diamond-info/4cs/clarity-fl.svg" },
        { id: "vvs", label: "VVS", icon: "/images/diamond-info/4cs/clarity-vvs.svg" },
        { id: "vs", label: "VS", icon: "/images/diamond-info/4cs/clarity-vs.svg" },
        { id: "si", label: "SI", icon: "/images/diamond-info/4cs/clarity-si.svg" },
        { id: "i1-3", label: "I1–3", icon: "/images/diamond-info/4cs/clarity-i1-3.svg" },
      ],
      note: { lead: "Certified", accent: "IF–SI2" },
    },
    {
      id: "carat",
      number: "04",
      name: "Carat",
      caption: "1ct = 200mg",
      kind: "carats",
      items: [
        { id: "025", label: ".25", icon: "/images/diamond-info/4cs/carat-025.svg", size: 22 },
        { id: "050", label: ".50", icon: "/images/diamond-info/4cs/carat-050.svg", size: 30 },
        { id: "100", label: "1.00", icon: "/images/diamond-info/4cs/carat-100.svg", size: 40 },
        { id: "150", label: "1.50", icon: "/images/diamond-info/4cs/carat-150.svg", size: 50 },
        { id: "200", label: "2.00+", icon: "/images/diamond-info/4cs/carat-200.svg", size: 64 },
      ],
      note: { accent: "0.005–3.00ct", trail: "melee to solitaire" },
    },
  ] satisfies FourCCard[],
};

export type ShapeStat = { label: string; value: string };

export type ShapeItem = {
  id: string;
  name: string;
  /** transparent PNG used both in the dock and on the stage */
  photo: string;
  alt: string;
  /** one line under the stage name */
  caption: string;
  featured?: boolean;
  tag?: string;
  /* Proportion bands quoted on our own grading sheets. Verify against the
     current spec sheet before publishing changes to these numbers. */
  stats: ShapeStat[];
};

const shapeStats = (table: string, depth: string): ShapeStat[] => [
  { label: "Table %", value: table },
  { label: "Depth %", value: depth },
  { label: "Girdle", value: "Thin – Sl. Thick" },
  { label: "Polish", value: "Ex / VG" },
];

export const shapesCutsSection = {
  id: "shapes",
  eyebrow: "Shapes We Cut",
  titleLines: ["Twelve Shapes,", "Cut & Polished In-House"],
  body: "From the classic round brilliant to fancy silhouettes, every shape is planned, sawn, bruted and polished on our own floor.",
  stageRings: {
    outer: "/images/diamond-info/stage-ring-outer.svg",
    inner: "/images/diamond-info/stage-ring-inner.svg",
  },
  shapes: [
    {
      id: "round",
      name: "Round Brilliant",
      photo: "/images/shapes/round-brilliant.png",
      alt: "A round brilliant cut diamond viewed from the crown",
      caption: "58 facets · the benchmark for light return",
      featured: true,
      tag: "Most Requested",
      stats: shapeStats("54 – 58", "59 – 63"),
    },
    {
      id: "princess",
      name: "Princess",
      photo: "/images/shapes/princess.png",
      alt: "A princess cut diamond viewed from above",
      caption: "76 facets · sharp, modern corners",
      stats: shapeStats("67 – 72", "64 – 75"),
    },
    {
      id: "emerald",
      name: "Emerald",
      photo: "/images/shapes/emerald.png",
      alt: "An emerald cut diamond viewed from above",
      caption: "57 facets · step-cut, hall-of-mirrors effect",
      stats: shapeStats("61 – 69", "61 – 67"),
    },
    {
      id: "oval",
      name: "Oval",
      photo: "/images/shapes/oval.png",
      alt: "An oval cut diamond viewed from above",
      caption: "58 facets · elongated, finger-lengthening",
      stats: shapeStats("53 – 63", "58 – 65"),
    },
    {
      id: "pear",
      name: "Pear",
      photo: "/images/shapes/pear.png",
      alt: "A pear cut diamond viewed from above",
      caption: "58 facets · brilliance with a single point",
      stats: shapeStats("53 – 65", "58 – 66"),
    },
    {
      id: "heart",
      name: "Heart",
      photo: "/images/shapes/heart.png",
      alt: "A heart cut diamond viewed from above",
      caption: "59 facets · the most demanding outline to cut",
      stats: shapeStats("53 – 63", "56 – 66"),
    },
    {
      id: "marquise",
      name: "Marquise",
      photo: "/images/shapes/marquise.png",
      alt: "A marquise cut diamond viewed from above",
      caption: "58 facets · maximum spread per carat",
      stats: shapeStats("53 – 63", "58 – 66"),
    },
    {
      id: "half-moon",
      name: "Half Moon",
      photo: "/images/shapes/half-moon.png",
      alt: "A half moon cut diamond viewed from above",
      caption: "16 facets · a side stone, cut in matched pairs",
      stats: shapeStats("55 – 65", "55 – 68"),
    },
    {
      id: "trillion",
      name: "Trillion",
      photo: "/images/shapes/trillian.png",
      alt: "A trillion cut diamond viewed from above",
      caption: "31 facets · triangular, shallow and bright",
      stats: shapeStats("55 – 70", "32 – 44"),
    },
    {
      id: "octagon",
      name: "Octagon",
      photo: "/images/shapes/octagon.png",
      alt: "An octagon cut diamond viewed from above",
      caption: "53 facets · step-cut with clipped corners",
      stats: shapeStats("60 – 70", "60 – 70"),
    },
    {
      id: "lozenge",
      name: "Lozenge",
      photo: "/images/shapes/lozenge.png",
      alt: "A lozenge cut diamond viewed from above",
      caption: "24 facets · a geometric accent stone",
      stats: shapeStats("55 – 68", "35 – 48"),
    },
    {
      id: "baguette",
      name: "Baguette",
      photo: "/images/shapes/baguette.png",
      alt: "A baguette cut diamond viewed from above",
      caption: "14 facets · clean steps for channel setting",
      stats: shapeStats("60 – 72", "38 – 52"),
    },
  ] satisfies ShapeItem[],
  catalogueLink: { label: "View the full shape catalogue", href: "/products" },
};

export type ComparisonRow = { id: string; label: string; values: [string, string] };

export const labGrownVsMinedSection = {
  id: "lab-grown-vs-mined",
  eyebrow: "Our Technology",
  title: "Grown in Weeks, Not Eons",
  body: "Buyers increasingly ask about origin. Here is how the two compare — and exactly where we stand.",
  background: "/images/diamond-info/lab-bench.jpg",
  backgroundAlt: "",
  columns: [
    {
      id: "lab-grown",
      tag: "Our Specialty",
      emphasis: true,
      title: "Lab-Grown Diamonds",
      subtitle: "HPHT & CVD · 100% of our output",
    },
    {
      id: "mined",
      tag: "For Reference",
      emphasis: false,
      title: "Mined (Natural) Diamonds",
      subtitle: "Not part of our current range",
    },
  ],
  rows: [
    {
      id: "formation",
      label: "Formation",
      values: [
        "Grown in 3–10 weeks under HPHT or CVD conditions",
        "Formed 1–3 billion years ago in the earth’s mantle",
      ],
    },
    {
      id: "composition",
      label: "Composition",
      values: [
        "Chemically, optically and physically identical to mined stone",
        "Chemically identical — same crystal structure, same carbon",
      ],
    },
    {
      id: "grading",
      label: "Grading",
      values: [
        "Graded on the same universal 4Cs, by the same laboratories",
        "Graded on exactly the same 4Cs, by the same laboratories",
      ],
    },
    {
      id: "supply",
      label: "Supply",
      values: [
        "Consistent supply, so repeat parcels stay true to spec",
        "Finite supply drives higher, more volatile price points",
      ],
    },
    {
      id: "sourcing",
      label: "Sourcing",
      values: [
        "Every Bhargovi stone graded, certified and supplied in-house",
        "Traceability depends on partners’ chain-of-custody, not in-house",
      ],
    },
  ] satisfies ComparisonRow[],
  disclaimer:
    "Bhargovi Gems manufactures lab-grown diamonds exclusively. This comparison is published for buyer education, not as a sales position.",
};

export type LabAccreditation = {
  id: string;
  code: string;
  name: string;
  blurb: string;
  logo?: string;
  badgeText?: string;
};

export const certificationVerificationSection = {
  id: "certification",
  eyebrow: "Trust & Verification",
  title: "No Stone Leaves Unverified",
  body: "Independent certification is non-negotiable. Here is what each accreditation on our paperwork actually guarantees.",
  labs: [
    {
      id: "gia",
      code: "GIA",
      name: "Gemological Institute of America",
      blurb: "Sets the global grading standard for the 4Cs.",
      logo: "/images/diamond-info/certs/gia.png",
    },
    {
      id: "igi",
      code: "IGI",
      name: "International Gemological Institute",
      blurb: "The world’s largest independent gem laboratory.",
      logo: "/images/diamond-info/certs/igi.png",
    },
    {
      id: "hrd",
      code: "HRD Antwerp",
      name: "European grading authority",
      blurb: "Antwerp-based grading and quality reports.",
      logo: "/images/diamond-info/certs/hrd.png",
    },
    {
      id: "kimberley",
      code: "Kimberley Process",
      name: "Conflict-free assurance",
      blurb: "Chain-of-custody warranty on every shipment.",
      logo: "/images/diamond-info/certs/kimberley.png",
    },
    {
      id: "scs",
      code: "SCS-007",
      name: "Sustainability certified",
      blurb: "Verified low-carbon, sustainable growing.",
      badgeText: "SCS",
    },
    {
      id: "rjc",
      code: "RJC Member",
      name: "Responsible Jewellery Council",
      blurb: "Audited chain-of-custody and ethics standard.",
      badgeText: "RJC",
    },
  ] satisfies LabAccreditation[],
};

export type RoughStage = {
  id: string;
  number: string;
  name: string;
  description: string;
  icon: "hex" | "outline" | "filled";
};

export const roughToPolishedSection = {
  id: "our-process",
  eyebrow: "Our Process",
  title: "From Rough to Certified Polish",
  body: "Eight stages, every one of them under our own roof — nothing leaves the floor until it is graded.",
  startLabel: "Rough",
  endLabel: "Certified Polish",
  stages: [
    {
      id: "growing",
      number: "01",
      name: "Growing",
      description: "Rough grown in-house under HPHT or CVD conditions.",
      icon: "hex",
    },
    {
      id: "planning-marking",
      number: "02",
      name: "Planning & Marking",
      description: "Sarine scanning maps each stone for maximum yield.",
      icon: "hex",
    },
    {
      id: "sawing-cleaving",
      number: "03",
      name: "Sawing & Cleaving",
      description: "Rough is divided along its natural crystal grain.",
      icon: "outline",
    },
    {
      id: "bruting",
      number: "04",
      name: "Bruting",
      description: "The stone is turned against another to shape its girdle.",
      icon: "outline",
    },
    {
      id: "faceting",
      number: "05",
      name: "Faceting",
      description: "Cutters place and polish each facet to angle tolerance.",
      icon: "outline",
    },
    {
      id: "grading-qc",
      number: "06",
      name: "Grading & QC",
      description: "In-house graders verify the 4Cs before submission.",
      icon: "filled",
    },
    {
      id: "certification",
      number: "07",
      name: "Certification",
      description: "Submitted to GIA or IGI for independent grading.",
      icon: "filled",
    },
    {
      id: "export",
      number: "08",
      name: "Export",
      description: "Sealed, documented and dispatched to partners worldwide.",
      icon: "filled",
    },
  ] satisfies RoughStage[],
};

export type GlossaryTerm = { id: string; term: string; definition: string };

export const anatomyGlossarySection = {
  id: "glossary",
  eyebrow: "Reference",
  titleLines: ["Anatomy of a", "Round Brilliant"],
  body: "The vocabulary that appears on every grading report — and on every conversation you will have with a cutter.",
  diagram: {
    image: "/images/diamond-info/anatomy/cross-section-labelled.png",
    alt: "Cross-section diagram of a round brilliant cut diamond labelled with table, crown, girdle, pavilion, culet, depth and diameter",
  },
  caption:
    "Cross-section of a 58-facet round brilliant. Table and depth percentages are quoted on every report we issue.",
  glossaryHeading: "Glossary of Terms",
  terms: [
    {
      id: "table",
      term: "Table",
      definition:
        "The flat top facet — quoted as a percentage of total diameter.",
    },
    {
      id: "crown",
      term: "Crown",
      definition: "The upper portion of the stone, sitting above the girdle.",
    },
    {
      id: "girdle",
      term: "Girdle",
      definition: "The thin outer edge that separates crown from pavilion.",
    },
    {
      id: "pavilion",
      term: "Pavilion",
      definition: "The lower portion, below the girdle, that returns light.",
    },
    {
      id: "culet",
      term: "Culet",
      definition: "The small facet or point at the very bottom of the stone.",
    },
    {
      id: "facet",
      term: "Facet",
      definition: "A single flat, polished surface on a cut diamond.",
    },
    {
      id: "depth",
      term: "Depth %",
      definition: "Total height divided by average diameter, as a percentage.",
    },
    {
      id: "brilliance",
      term: "Brilliance",
      definition: "The white light reflected straight back to the eye.",
    },
    {
      id: "scintillation",
      term: "Scintillation",
      definition: "The sparkle pattern seen as the stone or the light moves.",
    },
    {
      id: "fluorescence",
      term: "Fluorescence",
      definition: "A soft glow some diamonds emit under ultraviolet light.",
    },
    {
      id: "inclusion",
      term: "Inclusion",
      definition:
        "An internal characteristic formed during the stone’s growth.",
    },
    {
      id: "blemish",
      term: "Blemish",
      definition:
        "A surface characteristic, usually from polishing or handling.",
    },
  ] satisfies GlossaryTerm[],
};

export type FAQItem = { id: string; question: string; answer: string };

export const diamondInfoFaqSection = {
  id: "faqs",
  eyebrow: "Common Questions",
  titleLines: ["What Buyers", "Ask Us Most"],
  body: "Five things that come up in almost every first conversation with a new sourcing partner.",
  panelLabel: "Frequently Asked",
  background: "/images/diamond-info/faq-diamonds.jpg",
  items: [
    {
      id: "certified",
      question: "Are all Bhargovi Gems diamonds independently certified?",
      answer:
        "Every certified stone we ship carries a GIA or IGI report, quoted by number on the invoice and matched to a laser inscription on the girdle. Non-certified parcels are graded in-house against the same 4Cs and are always labelled as such — we never blur the two.",
    },
    {
      id: "custom-assortments",
      question:
        "Can we request custom parcel assortments by clarity, colour or size?",
      answer:
        "Yes. Custom assortments are assembled to order against the spec you send us — clarity, colour, size or shape — with minimums that depend on the band. Talk to sourcing and we will confirm lead time and minimum order for your parcel.",
    },
    {
      id: "certified-and-non-certified",
      question: "Do you supply both certified and non-certified goods?",
      answer:
        "We do. Certified goods are graded and reported by GIA or IGI; non-certified goods are graded in-house against the same 4Cs and priced accordingly. Every quote states clearly which category a parcel falls into.",
    },
    {
      id: "authenticity",
      question: "How is the authenticity of each stone verified before export?",
      answer:
        "Each certified stone carries a laser inscription on the girdle matched to its grading report number, and every shipment is documented under Kimberley Process and RJC chain-of-custody standards before it leaves our facility.",
    },
    {
      id: "moq",
      question: "What is the minimum order quantity for wholesale buyers?",
      answer:
        "Minimums vary by category and band — melee parcels start small, while certified goods are typically quoted per carat lot. Share your target spec with sourcing and we will confirm the minimum for that specific order.",
    },
  ] satisfies FAQItem[],
};

// export const processSection = {
//   eyebrow: "Our Process",
//   title: "From Rough Stone to Polish",
//   steps: [
//     {
//       id: "growing",
//       name: "Growing",
//       description:
//         "Cillum est sint exercitation occaecat sit eu et sint aute. Ipsum ad fugiat et irure et ullamco incididunt cillum.",
//       image: PLACEHOLDER_IMAGE,
//       alt: "Rough octahedral diamond crystal resting on dark stone",
//     },
//     {
//       id: "planning-marking",
//       name: "Planning & Marking",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
//       image: PLACEHOLDER_IMAGE,
//       alt: "Rough diamond mapped for planning and marking",
//     },
//     {
//       id: "sawing-cleaving",
//       name: "Sawing & Cleaving",
//       description:
//         "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis.",
//       image: PLACEHOLDER_IMAGE,
//       alt: "Diamond being sawn along its crystal plane",
//     },
//     {
//       id: "bruting",
//       name: "Bruting",
//       description:
//         "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.",
//       image: PLACEHOLDER_IMAGE,
//       alt: "Diamond girdle shaped on the bruting lathe",
//     },
//     {
//       id: "faceting",
//       name: "Faceting",
//       description:
//         "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi.",
//       image: PLACEHOLDER_IMAGE,
//       alt: "Fifty-seven facets polished onto a brilliant cut",
//     },
//     {
//       id: "grading",
//       name: "Grading and Quality Check",
//       description:
//         "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
//       image: PLACEHOLDER_IMAGE,
//       alt: "Finished stone under the loupe for grading",
//     },
//   ] satisfies ProcessStep[],
// };

export const processSection = {
  eyebrow: "Our Process",
  title: "From Rough Stone to Polish",
  steps: [
    {
      id: "selection",
      name: "Rough Diamond Selection",
      description:
        "Each lab-grown rough diamond is carefully evaluated for its size, shape, clarity and internal characteristics to determine its ideal cutting plan.",
      image: PLACEHOLDER_IMAGE,
      alt: "Rough octahedral diamond crystal resting on dark stone",
    },
    {
      id: "planning-mapping",
      name: "Planning & Mapping",
      description:
        "Advanced planning technology is used to analyse the rough and identify the optimal way to maximise beauty, proportions and yield.",
      image: PLACEHOLDER_IMAGE,
      alt: "Rough diamond mapped for planning and marking",
    },
    {
      id: "precision-cutting",
      name: "Precision Cutting",
      description:
        "The rough is precisely sawn and shaped to create the desired diamond form, with careful attention to proportions and symmetry.",
      image: PLACEHOLDER_IMAGE,
      alt: "Diamond being sawn along its crystal plane",
    },
    {
      id: "polishing",
      name: "Polishing",
      description:
        "Skilled craftsmen meticulously polish each facet, transforming the cut diamond into a smooth, highly reflective surface that enhances its brilliance.",
      image: PLACEHOLDER_IMAGE,
      alt: "Diamond girdle shaped on the bruting lathe",
    },
    {
      id: "final-nspection",
      name: "Final Inspection",
      description:
        "Every polished diamond undergoes detailed quality inspection for cut, symmetry, polish and overall finish before it is ready for certification or further use.",
      image: PLACEHOLDER_IMAGE,
      alt: "Fifty-seven facets polished onto a brilliant cut",
    }
  ] satisfies ProcessStep[],
};

/* ------------------------------------------------------------------
   Contact page (/contact)
------------------------------------------------------------------- */

export const contactHeroSection = {
  eyebrow: "Get in Touch",
  titleLines: ["We'd Love to Hear", "From You"],
  phone: { label: "+91 85910 95691", href: "tel:+918591095691" },
  email: {
    label: "bhargovigems4445@gmail.com",
    href: "mailto:bhargovigems4445@gmail.com",
  },
};

export type ContactFormField = {
  id: string;
  number: string;
  label: string;
  name: string;
  type: "text" | "email" | "tel" | "textarea";
  placeholder: string;
};

export const contactFormSection = {
  eyebrow: "Send a Message",
  title: "Tell Us What You're Looking For",
  fields: [
    {
      id: "full-name",
      number: "01",
      label: "Full Name",
      name: "fullName",
      type: "text",
      placeholder: "Jane Doe",
    },
    {
      id: "company-name",
      number: "02",
      label: "Company Name",
      name: "companyName",
      type: "text",
      placeholder: "Doe Jewellery Co.",
    },
    {
      id: "email-address",
      number: "03",
      label: "Email Address",
      name: "email",
      type: "email",
      placeholder: "jane@company.com",
    },
    {
      id: "phone-number",
      number: "04",
      label: "Phone Number",
      name: "phone",
      type: "tel",
      placeholder: "+1 (000) 000-0000",
    },
    {
      id: "message",
      number: "05",
      label: "Tell Us What You Need",
      name: "message",
      type: "textarea",
      placeholder: "Volume, specifications, timeline, or partnership details…",
    },
  ] satisfies ContactFormField[],
  submit: { label: "Submit Enquiry" },
  note: "Confidential enquiry · We respond within one business day",
  image: "/images/contact-form-tray.png",
  alt: "Loose polished diamonds scattered across a jewellery tray",
};
