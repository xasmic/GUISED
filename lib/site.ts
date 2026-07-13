import {
  categories,
  culattaProducts,
  heroSlides,
  images,
  latestReleases,
} from "./products";

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
  eyebrow: "The atelier",
  body: "GUISED is a Singapore leather atelier making goods meant to be lived in — cut, burnished, and finished by hand so each piece carries the marks of its making.",
  bodySecondary:
    "We work slowly: culatta, belts, wallets, bags. Made to order when needed. Built to age with you, not against you.",
  details: [
    { label: "Based in", value: "Singapore" },
    { label: "Practice", value: "Handcrafted leather goods" },
    { label: "Ethos", value: "Evolving through imperfections" },
  ],
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
        src:
          heroSlides[0].type === "video"
            ? heroSlides[0].poster
            : heroSlides[0].src,
        alt: heroSlides[0].headline,
        href: heroSlides[0].href,
      },
      {
        src: heroSlides[1].type === "image" ? heroSlides[1].src : "",
        alt: heroSlides[1].headline,
        href: heroSlides[1].href,
      },
      {
        src: heroSlides[2].type === "image" ? heroSlides[2].src : "",
        alt: heroSlides[2].headline,
        href: heroSlides[2].href,
      },
      {
        src: images.craft,
        alt: "Craft",
        href: "https://atelierguised.com/collections/all",
      },
      {
        src: images.collab,
        alt: "Guised × Rei.Gloom",
        href: "https://atelierguised.com/collections/guised-x-rei-gloom",
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
      ...latestReleases.map((p) => ({
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

export const parallaxImages = {
  mid: images.craft,
  lower: images.collab,
};
