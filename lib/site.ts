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
  headline: "ABOUT",
  paragraphs: [
    "Born from a small corner of a Singapore bedroom in September 2022, Guised began as a quiet obsession with leathercraft. A place to experiment, to study material, and to reshape what traditional leatherwork could look and feel like. What started as a hobby grew into a philosophy carried forward in every piece we make today.",
    "We work exclusively with horse culatta, a rare and unpredictable leather taken from the horse rump. Its fibres are dense, textured, and naturally marked, making each cut impossible to replicate. That means no two Guised items ever look the same. Every order receives the full integrity of culatta leather. One continuous piece, unique in its own patterning. Custom cuts are available, but unless requested, the selection is shaped entirely by the nature of the hide.",
    "Each product is meticulously handcrafted and fully handsewn. The process is slow, intentional, and rooted in respect for craft. The materials we use are ethically sourced from trusted tanneries, chosen for their transparency and their commitment to responsible practices.",
    "Guised is built around the tension between who we show and who we really are. The brand reflects the quiet struggle of trying to feel comfortable in one's own skin and the ways we hide, reshape, or harden ourselves to navigate the world. Our pieces are designed to age with you, scar with you, and become a companion through those internal shifts.",
    "Guised isn't about perfection. It's about honesty in form, texture, and self.",
  ],
  leftImage: images.craft,
  rightImage: images.collab,
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

export const heroCopy = {
  brand: "GUISED",
  tagline: "obsessively crafted",
  cta: "Explore",
  ctaHref: "#concept",
};

export const parallaxImages = {
  mid: images.craft,
  lower: images.collab,
};
