export type Product = {
  id: string;
  title: string;
  price: string;
  href: string;
  image: string;
  soldOut?: boolean;
  lowQuantity?: boolean;
  category?: "culatta" | "belts" | "wallets" | "bags";
};

const shop = (path: string) =>
  `https://atelierguised.com/cdn/shop/${path}`;

export const latestReleases: Product[] = [
  {
    id: "girded-tote",
    title: "Girded Tote",
    price: "$990.00",
    href: "https://atelierguised.com/products/girded-tote",
    image: shop(
      "files/96C0807F-1943-4BBB-BAF0-A94D7A686ABA.jpg?v=1768209753&width=1200",
    ),
    category: "bags",
  },
  {
    id: "culatta-long-wallet",
    title: "Culatta Long Wallet",
    price: "$420.00",
    href: "https://atelierguised.com/products/culatta-long-wallet",
    image: shop(
      "files/2721F6A0-63C4-46DE-B855-F5EB2CA238C8.jpg?v=1770042655&width=1200",
    ),
    category: "culatta",
    lowQuantity: true,
  },
  {
    id: "forager-satchel-black",
    title: "Forager Satchel (Black)",
    price: "$760.00",
    href: "https://atelierguised.com/products/forager-satchel-black",
    image: shop(
      "files/0BF22D3C-07CF-40B8-8F7E-D4D5F4D4CE42.jpg?v=1780573610&width=1200",
    ),
    category: "bags",
  },
  {
    id: "forager-satchel-dirty-white",
    title: "Forager Satchel (Dirty White)",
    price: "$760.00",
    href: "https://atelierguised.com/products/forager-satchel-dirty-white",
    image: shop(
      "files/FE132579-F3DB-4C72-9E16-8E2D47EBEBD2.jpg?v=1778824519&width=1200",
    ),
    soldOut: true,
    category: "bags",
  },
  {
    id: "clot-satchel",
    title: "Clot Satchel",
    price: "$460.00",
    href: "https://atelierguised.com/products/satchel",
    image: shop(
      "files/4059315F-FB0F-41ED-89CC-CAE32C93365B.jpg?v=1770042003&width=1200",
    ),
    soldOut: true,
    category: "bags",
  },
];

export const culattaProducts: Product[] = [
  latestReleases[1],
  latestReleases[2],
  latestReleases[3],
  latestReleases[0],
  {
    id: "horse-culatta-bifold",
    title: "Horse Culatta Bifold",
    price: "$290.00",
    href: "https://atelierguised.com/products/horse-culatta-bifold",
    image: shop(
      "files/72AAB699-775E-43B3-8DAF-CBE8BE5471A2.jpg?v=1770042139&width=1200",
    ),
    category: "culatta",
  },
];

export const heroSlides = [
  {
    id: "story",
    headline: "Leather goods that wear your story.",
    subline: "Evolving through imperfections.",
    cta: "Shop now",
    href: "https://atelierguised.com/collections/all",
    type: "video" as const,
    src: "https://atelierguised.com/cdn/shop/videos/c/vp/f500300d62c1401c9ff39fb3b45c7c8b/f500300d62c1401c9ff39fb3b45c7c8b.HD-1080p-7.2Mbps-61322588.mp4?v=0",
    poster: shop("files/Guised_Faye_1.jpg?v=1761817444&width=1920"),
  },
  {
    id: "crafted",
    headline: "Slowly & obsessively crafted",
    subline: "Evolving through imperfections.",
    cta: "Shop now",
    href: "https://atelierguised.com/collections/all",
    type: "image" as const,
    src: shop("files/Guised_Faye_1.jpg?v=1761817444&width=2400"),
  },
  {
    id: "catalogue",
    headline: "Shop our new catalogue",
    subline: "Evolving through imperfections.",
    cta: "Shop now",
    href: "https://atelierguised.com/collections/all",
    type: "image" as const,
    src: shop("files/Guised-02087_SHOPIFY_CROP.jpg?v=1761817097&width=2400"),
  },
];

export const categories = [
  {
    title: "Belts",
    href: "https://atelierguised.com/collections/belts",
    image: "/images/hygen/belts-look.png",
  },
  {
    title: "Wallets",
    href: "https://atelierguised.com/collections/wallets",
    image: "/images/hygen/craft-atelier.png",
  },
];

/** Local editorial stills — used outside hero + featured product grid */
export const images = {
  aboutLeft: "/images/hygen/about-left.png",
  aboutRight: "/images/hygen/about-right.png",
  parallaxMid: "/images/hygen/parallax-mid.png",
  parallaxLower: "/images/hygen/parallax-lower.png",
  craft: "/images/hygen/craft-atelier.png",
  contactPanel: "/images/hygen/contact-panel.png",
  collab: "/images/hygen/campaign-2.png",
  campaign: [
    "/images/hygen/campaign-1.png",
    "/images/hygen/campaign-2.png",
    "/images/hygen/campaign-3.png",
    "/images/hygen/campaign-4.png",
    "/images/hygen/campaign-5.png",
    "/images/hygen/belts-hang.png",
    "/images/hygen/field-atmosphere.png",
  ] as const,
};

/** Featured row after hero — layout matches atelier product-grid style */
export const featuredProducts: Product[] = [
  {
    id: "soot-belt",
    title: "Soot Belt",
    price: "$180.00",
    href: "https://atelierguised.com/products/soot-belt",
    image:
      "https://cdn.shopify.com/s/files/1/0696/4533/6812/files/B5BD8FE3-26C0-41FA-B5E4-817314E6A776.jpg?v=1770042305&width=1200",
    category: "belts",
    lowQuantity: true,
  },
  {
    id: "rei-gloom-belt-abstract",
    title: "Guised x Rei Gloom Belt (Abstract)",
    price: "$360.00",
    href: "https://atelierguised.com/products/guised-x-rei-gloom-belt-tan",
    image:
      "https://cdn.shopify.com/s/files/1/0696/4533/6812/files/74715193-EE59-42D1-AF02-00B58DA0FB48.jpg?v=1724904754&width=1200",
    category: "belts",
  },
  {
    id: "forager-satchel-black",
    title: "Forager Satchel (Black)",
    price: "$760.00",
    href: "https://atelierguised.com/products/forager-satchel-black",
    image:
      "https://cdn.shopify.com/s/files/1/0696/4533/6812/files/0BF22D3C-07CF-40B8-8F7E-D4D5F4D4CE42.jpg?v=1780573610&width=1200",
    category: "bags",
  },
  {
    id: "girded-tote",
    title: "Girded Tote",
    price: "$990.00",
    href: "https://atelierguised.com/products/untitled-jan12_14-09",
    image:
      "https://cdn.shopify.com/s/files/1/0696/4533/6812/files/96C0807F-1943-4BBB-BAF0-A94D7A686ABA.jpg?v=1768209753&width=1200",
    category: "bags",
  },
];

const catalogExtras: Product[] = [
  {
    id: "horse-culatta-bifold",
    title: "Horse Culatta Bifold",
    price: "$290.00",
    href: "https://atelierguised.com/products/horse-culatta-bifold",
    image: shop(
      "files/72AAB699-775E-43B3-8DAF-CBE8BE5471A2.jpg?v=1770042139&width=1200",
    ),
    category: "culatta",
  },
  {
    id: "culatta-card-sleeve",
    title: "Culatta Card Sleeve",
    price: "$160.00",
    href: "https://atelierguised.com/collections/all",
    image: shop(
      "files/72AAB699-775E-43B3-8DAF-CBE8BE5471A2.jpg?v=1770042139&width=1200",
    ),
    category: "wallets",
    lowQuantity: true,
  },
];

/** Deduped catalogue for the products page */
export const allProducts: Product[] = (() => {
  const map = new Map<string, Product>();
  for (const product of [
    ...featuredProducts,
    ...latestReleases,
    ...catalogExtras,
  ]) {
    const existing = map.get(product.id);
    map.set(product.id, {
      ...existing,
      ...product,
      category: product.category ?? existing?.category,
      soldOut: product.soldOut ?? existing?.soldOut,
      lowQuantity: product.lowQuantity ?? existing?.lowQuantity,
    });
  }
  return Array.from(map.values());
})();

export const productFilters = [
  { id: "all", label: "Shop All" },
  { id: "culatta", label: "Culatta" },
  { id: "belts", label: "Belts" },
  { id: "wallets", label: "Wallets" },
  { id: "bags", label: "Bags" },
  { id: "available", label: "Available" },
] as const;

export type ProductFilterId = (typeof productFilters)[number]["id"];

export function productStatus(
  product: Product,
): "available" | "low" | "soldout" {
  if (product.soldOut) return "soldout";
  if (product.lowQuantity) return "low";
  return "available";
}
