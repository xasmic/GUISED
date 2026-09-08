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
  { id: "terms", label: "Terms of Service", href: "/terms-of-service" },
  { id: "about", label: "About", href: "/about" },
  { id: "contact", label: "Contact", href: "/contact" },
  {
    id: "customs",
    label: "Customs",
    href: "/pages/customs",
  },
  {
    id: "collaborations",
    label: "Collaborations",
    href: "/collaborations",
  },
  { id: "products", label: "Online Store", href: "/products" },
] as const;

export const concept = {
  title: "GUISED",
  body: "A product has a concept that gives you a feeling of tension — reconsidered from the basic style. Leather goods that wear your story. Slowly and obsessively crafted, evolving through imperfections.",
  bodySecondary:
    "Handcrafted in Singapore. Culatta, belts, wallets, bags — arranged as an archive.",
};

export const about = {
  title: "About",
  headline: "Redefining Leathercraft",
  paragraphs: [
    "At Guised, leather is a medium of expression. Every piece is obsessively crafted by hand with the intention of challenging conventional ideas of traditional leathercraft.. No two pieces are ever the same, designed to evolve with their owner and reflect their story.",
  ],
  cta: "Read our story",
  ctaHref: "/about",
  leftImage: images.aboutLeft,
  rightImage: images.aboutRight,
  leftAlt: "Atelier craft",
  rightAlt: "Leather in wear",
};

export const aboutPage = {
  eyebrow: "Studio",
  title: "About",
  paragraphs: [
    "Born from a quiet corner of a Singapore bedroom in September 2022, Guised began as an exploration of what leather could become beyond its traditional boundaries. It was created from a desire to challenge the familiar perception of leathercraft, transforming a material often associated with heritage and function into something expressive, unexpected, and emotionally driven. Through experimentation and constant refinement, Guised seeks to create pieces that make people question what leather is truly capable of.",
    "At its core, Guised explores the tension between who we present to the world and who we truly are beneath the surface. Our pieces reflect the quiet struggles of identity, self expression, and the ways we adapt, conceal, and transform ourselves over time. We believe leather is more than just a material. It is a medium for storytelling, capable of carrying emotions, experiences, and personal meaning.",
    "We work exclusively with horse culatta, a rare and character rich leather taken from the horse rump. Known for its dense fibres, deep texture, and natural markings, every hide carries its own story, making each piece impossible to replicate. No two Guised creations are ever identical. Every order preserves the raw integrity of the leather, allowing the natural patterns and imperfections of the hide to define the final piece. Custom cuts are available upon request, but otherwise, each selection is guided by the character of the material itself.",
    "Every product is meticulously handcrafted and fully handsewn, embracing a slower and more intentional approach to leatherwork. Our materials are ethically sourced from trusted tanneries that share our commitment to transparency, quality, and responsible craftsmanship.",
    "Designed to age alongside you, each piece carries the marks of use, becoming a personal record of your journey. Guised is not about achieving perfection. It is about embracing authenticity through material, craftsmanship, and self expression.",
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
  instagramHref?: string;
  stores: {
    city?: string;
    name: string;
    address?: string;
    note?: string;
    href?: string;
  }[];
};

export const stockistRegions: StockistRegion[] = [
  {
    region: "Singapore",
    stores: [
      {
        name: "Upstairs Garments",
        address: "75 Tanjong Pagar Road",
        city: "Singapore",
      },
    ],
  },
  {
    region: "Online",
    instagramHref: "https://www.instagram.com/___guised",
    stores: [
      {
        name: "atelierguised.com",
        note: "Worldwide shipping",
        href: "https://atelierguised.com",
      },
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
  ctaHref: "/products",
};

export const parallaxImages = {
  mid: images.parallaxMid,
  lower: images.parallaxLower,
};

export const brandValues = [
  {
    title: "Handcrafted with intention",
    body: "Every piece is entirely handmade. Cut, stitched, and finished by hand.",
  },
  {
    title: "Ethically sourced materials",
    body: "We work exclusively with ethically sourced leathers from trusted tanneries overseas. Every hide is chosen for its raw character, texture, and the stories within its scars.",
  },
  {
    title: "Built to endure",
    body: "Our pieces are made to age gracefully, designed to accompany you through time",
  },
] as const;
