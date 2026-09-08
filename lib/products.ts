export type Product = {
  id: string;
  title: string;
  price: string;
  href: string;
  image: string;
  soldOut?: boolean;
  lowQuantity?: boolean;
  category?: "culatta" | "belts" | "wallets" | "bags" | "accessories";
};

const shop = (path: string) =>
  `https://atelierguised.com/cdn/shop/${path}`;

/** Catalog aligned to https://atelierguised.com/collections/all */
export const allProducts: Product[] = [
  {
    id: "clot-satchel",
    title: "Clot Satchel",
    price: "$367.00",
    href: "/products/clot-satchel",
    image: shop(
      "files/4059315F-FB0F-41ED-89CC-CAE32C93365B.jpg?v=1770042003",
    ),
    soldOut: true,
    category: "bags",
  },
  {
    id: "culatta-long-wallet",
    title: "Culatta Long Wallet",
    price: "$351.00",
    href: "/products/culatta-long-wallet",
    image: shop(
      "files/2721F6A0-63C4-46DE-B855-F5EB2CA238C8.jpg?v=1770042655",
    ),
    category: "wallets",
  },
  {
    id: "forager-satchel",
    title: "Forager Satchel",
    price: "$607.00",
    href: "/products/forager-satchel",
    image: shop(
      "files/0BF22D3C-07CF-40B8-8F7E-D4D5F4D4CE42.jpg?v=1780573610",
    ),
    category: "bags",
  },
  {
    id: "girded-tote",
    title: "Girded Tote",
    price: "$790.00",
    href: "/products/girded-tote",
    image: shop(
      "files/96C0807F-1943-4BBB-BAF0-A94D7A686ABA.jpg?v=1768209753",
    ),
    category: "bags",
  },
  {
    id: "guised-x-rei-gloom-barb-handbag",
    title: "Guised x Rei Gloom Barb Handbag",
    price: "$296.00",
    href: "/products/guised-x-rei-gloom-barb-handbag",
    image: shop(
      "files/8CE82A20-344A-4DCE-A933-29C8175890AC.jpg?v=1725548648",
    ),
    category: "bags",
  },
  {
    id: "guised-x-rei-gloom-belt-abstract",
    title: "Guised x Rei Gloom Belt (Abstract)",
    price: "$288.00",
    href: "/products/guised-x-rei-gloom-belt-abstract",
    image: shop(
      "files/74715193-EE59-42D1-AF02-00B58DA0FB48.jpg?v=1724904754",
    ),
    category: "belts",
  },
  {
    id: "guised-x-rei-gloom-belt-floral",
    title: "Guised x Rei Gloom Belt (Floral)",
    price: "$288.00",
    href: "/products/guised-x-rei-gloom-belt-floral",
    image: shop(
      "files/900B9ABD-B0D2-4A0A-8DEE-2BAC1DB33F73.jpg?v=1724904899",
    ),
    soldOut: true,
    category: "belts",
  },
  {
    id: "guised-x-rei-gloom-floral-cardholder",
    title: "Guised x Rei Gloom Floral Cardholder",
    price: "$156.00",
    href: "/products/guised-x-rei-gloom-floral-cardholder",
    image: shop(
      "files/C50C4C16-0B2D-4A23-935D-749CE510FAA4.jpg?v=1725548752",
    ),
    soldOut: true,
    category: "wallets",
  },
  {
    id: "horse-culatta-bifold",
    title: "Horse Culatta Bifold",
    price: "$232.00",
    href: "/products/culatta-bifold",
    image: shop(
      "files/72AAB699-775E-43B3-8DAF-CBE8BE5471A2.jpg?v=1770042139",
    ),
    category: "wallets",
  },
  {
    id: "horse-culatta-cardholder",
    title: "Horse Culatta Cardholder",
    price: "$156.00",
    href: "/products/horse-culatta-cardholder",
    image: shop(
      "files/692915C1-12CA-4A88-99ED-28C91D06D005.jpg?v=1770042893",
    ),
    category: "wallets",
  },
  {
    id: "military-tactical-keyfob",
    title: "Military Tactical Keyfob",
    price: "$84.00",
    href: "/products/military-keyfob",
    image: shop(
      "files/94C298D4-7CFD-451A-B86C-4A180989736E.jpg?v=1770042857",
    ),
    category: "accessories",
  },
  {
    id: "soot-belt",
    title: "Soot Belt",
    price: "$144.00",
    href: "/products/soot-belt",
    image: shop(
      "files/B5BD8FE3-26C0-41FA-B5E4-817314E6A776.jpg?v=1770042305",
    ),
    category: "belts",
  },
  {
    id: "tassel-carabiner",
    title: "Tassel Carabiner",
    price: "$116.00",
    href: "/products/tassel-carabiner",
    image: shop(
      "files/AE5B1EF0-F908-4E1A-9492-4274AAE84DFE.jpg?v=1763909524",
    ),
    category: "accessories",
  },
];

export const latestReleases: Product[] = [
  allProducts.find((p) => p.id === "girded-tote")!,
  allProducts.find((p) => p.id === "culatta-long-wallet")!,
  allProducts.find((p) => p.id === "forager-satchel")!,
  allProducts.find((p) => p.id === "clot-satchel")!,
];

export const culattaProducts: Product[] = [
  allProducts.find((p) => p.id === "culatta-long-wallet")!,
  allProducts.find((p) => p.id === "forager-satchel")!,
  allProducts.find((p) => p.id === "girded-tote")!,
  allProducts.find((p) => p.id === "horse-culatta-bifold")!,
];

export const featuredProducts: Product[] = [
  allProducts.find((p) => p.id === "soot-belt")!,
  allProducts.find((p) => p.id === "guised-x-rei-gloom-belt-abstract")!,
  allProducts.find((p) => p.id === "forager-satchel")!,
  allProducts.find((p) => p.id === "girded-tote")!,
];

export const heroSlides = [
  {
    id: "story",
    headline: "Leather goods that wear your story.",
    subline: "Evolving through imperfections.",
    cta: "Shop now",
    href: "/products",
    type: "video" as const,
    src: "https://atelierguised.com/cdn/shop/videos/c/vp/f500300d62c1401c9ff39fb3b45c7c8b/f500300d62c1401c9ff39fb3b45c7c8b.HD-1080p-7.2Mbps-61322588.mp4?v=0",
    poster: shop("files/Guised_Faye_1.jpg?v=1761817444&width=1920"),
  },
  {
    id: "crafted",
    headline: "Slowly & obsessively crafted",
    subline: "Evolving through imperfections.",
    cta: "Shop now",
    href: "/products",
    type: "image" as const,
    src: shop("files/Guised_Faye_1.jpg?v=1761817444&width=2400"),
  },
  {
    id: "catalogue",
    headline: "Shop our new catalogue",
    subline: "Evolving through imperfections.",
    cta: "Shop now",
    href: "/products",
    type: "image" as const,
    src: shop("files/Guised-02087_SHOPIFY_CROP.jpg?v=1761817097&width=2400"),
  },
];

export const categories = [
  {
    title: "Belts",
    href: "/products?filter=belts",
    image: "/images/hygen/belts-look.png",
  },
  {
    title: "Wallets",
    href: "/products?filter=wallets",
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

export const productFilters = [
  { id: "all", label: "Shop All" },
  { id: "culatta", label: "Culatta" },
  { id: "belts", label: "Belts" },
  { id: "wallets", label: "Wallets" },
  { id: "bags", label: "Bags" },
  { id: "accessories", label: "Keychains & Accessories" },
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
