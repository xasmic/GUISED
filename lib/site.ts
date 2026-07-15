import {
  categories,
  culattaProducts,
  featuredProducts,
  heroSlides,
  images,
  latestReleases,
} from "./products";

export { featuredProducts };

export const navLinks = [
  { id: "concept", label: "Concept", href: "#concept" },
  { id: "about", label: "About", href: "#about" },
  { id: "collection", label: "Collection", href: "#collection" },
  { id: "stockist", label: "Stockist", href: "#stockist" },
  {
    id: "contact",
    label: "Contact",
    href: "https://atelierguised.com/pages/contact",
  },
  {
    id: "online",
    label: "Online Store",
    href: "https://atelierguised.com",
    external: true,
  },
] as const;

export const concept = {
  title: "GUISED",
  body: "A product has a concept that gives you a feeling of tension — reconsidered from the basic style. Leather goods that wear your story. Slowly and obsessively crafted, evolving through imperfections.",
  bodySecondary:
    "Handcrafted in Singapore. Culatta, belts, wallets, bags — arranged as an archive.",
};

export const about = {
  title: "About",
  headline: "Buy a piece for a lifetime",
  paragraphs: [
    "All of our leathers are hides taken with intent, never exploitation — sourced from tanneries we know, trust, and hold to the same standard we hold ourselves.",
    "Each Guised piece begins as horse culatta: a dense, unruly hide scarred by the life it once carried. No two panels share a memory.",
    "Pale and waxen at first, it darkens the longer it is touched — its fibres swelling, compressing, hardening into a second skin shaped by your habits alone. This is not leather that resists wear. It feeds on it. Every crease is a record. Every mark, a quiet confession between you and the hide.",
  ],
  leftImage: images.aboutLeft,
  rightImage: images.aboutRight,
  leftAlt: "Atelier craft",
  rightAlt: "Leather in wear",
};

export type Season = {
  id: string;
  label: string;
  images: { src: string; alt: string; href: string }[];
};

export const seasons: Season[] = [
  {
    id: "latest",
    label: "GUISED  Latest Releases",
    images: latestReleases.map((p) => ({
      src: p.image,
      alt: p.title,
      href: p.href,
    })),
  },
  {
    id: "culatta",
    label: "GUISED  Culatta",
    images: culattaProducts.map((p) => ({
      src: p.image,
      alt: p.title,
      href: p.href,
    })),
  },
  {
    id: "belts",
    label: "GUISED  Belts",
    images: [
      {
        src: categories[0].image,
        alt: categories[0].title,
        href: categories[0].href,
      },
      ...latestReleases.slice(0, 3).map((p) => ({
        src: p.image,
        alt: p.title,
        href: p.href,
      })),
    ],
  },
  {
    id: "wallets",
    label: "GUISED  Wallets",
    images: [
      {
        src: categories[1].image,
        alt: categories[1].title,
        href: categories[1].href,
      },
      ...culattaProducts.slice(0, 4).map((p) => ({
        src: p.image,
        alt: p.title,
        href: p.href,
      })),
    ],
  },
  {
    id: "campaign",
    label: "GUISED  Campaign",
    images: [
      {
        src: images.campaign[0],
        alt: "Campaign look",
        href: "https://atelierguised.com/collections/all",
      },
      {
        src: images.campaign[1],
        alt: "Leather in the field",
        href: "https://atelierguised.com/collections/all",
      },
      {
        src: images.campaign[2],
        alt: "Worn leather",
        href: "https://atelierguised.com/collections/all",
      },
      {
        src: images.campaign[3],
        alt: "Studio portrait",
        href: "https://atelierguised.com/collections/all",
      },
      {
        src: images.campaign[4],
        alt: "Outdoor campaign",
        href: "https://atelierguised.com/collections/all",
      },
      {
        src: images.campaign[5],
        alt: "Belts archive",
        href: "https://atelierguised.com/collections/belts",
      },
      {
        src: images.campaign[6],
        alt: "Field atmosphere",
        href: "https://atelierguised.com/collections/all",
      },
    ],
  },
  {
    id: "collab",
    label: "Guised × Rei.Gloom",
    images: [
      {
        src: images.collab,
        alt: "Guised × Rei.Gloom",
        href: "https://atelierguised.com/collections/guised-x-rei-gloom",
      },
      {
        src: images.campaign[0],
        alt: "Collaboration campaign",
        href: "https://atelierguised.com/collections/guised-x-rei-gloom",
      },
      {
        src: images.aboutRight,
        alt: "Leather in wear",
        href: "https://atelierguised.com/collections/guised-x-rei-gloom",
      },
      ...latestReleases.slice(0, 3).map((p) => ({
        src: p.image,
        alt: p.title,
        href: p.href,
      })),
    ],
  },
];

export type StockistRegion = {
  region: string;
  stores: { city: string; name: string; phone?: string; href?: string }[];
};

export const stockistRegions: StockistRegion[] = [
  {
    region: "Singapore",
    stores: [
      {
        city: "Singapore",
        name: "Atelier Guised",
        phone: "By appointment",
        href: "https://atelierguised.com/pages/contact",
      },
    ],
  },
  {
    region: "Online",
    stores: [
      {
        city: "Worldwide",
        name: "atelierguised.com",
        href: "https://atelierguised.com",
      },
    ],
  },
  {
    region: "International",
    stores: [
      { city: "Enquire", name: "Archive request" },
      { city: "Wholesale", name: "info via contact" },
    ],
  },
];

export const heroVideo = {
  src: heroSlides[0].src,
  poster:
    heroSlides[0].type === "video"
      ? heroSlides[0].poster
      : heroSlides[0].src,
};

export const heroCopy = {
  brand: "GUISED",
  tagline: "obsessively crafted",
  cta: "Explore",
  ctaHref: "#concept",
};

export const parallaxImages = {
  mid: images.parallaxMid,
  lower: images.parallaxLower,
};
