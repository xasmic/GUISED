export type Product = {
  id: string;
  title: string;
  price: string;
  href: string;
  image: string;
  soldOut?: boolean;
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
  },
  {
    id: "culatta-long-wallet",
    title: "Culatta Long Wallet",
    price: "$420.00",
    href: "https://atelierguised.com/products/culatta-long-wallet",
    image: shop(
      "files/2721F6A0-63C4-46DE-B855-F5EB2CA238C8.jpg?v=1770042655&width=1200",
    ),
  },
  {
    id: "forager-satchel-black",
    title: "Forager Satchel (Black)",
    price: "$760.00",
    href: "https://atelierguised.com/products/forager-satchel-black",
    image: shop(
      "files/0BF22D3C-07CF-40B8-8F7E-D4D5F4D4CE42.jpg?v=1780573610&width=1200",
    ),
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
    image: shop("files/Guised-01380.jpg?v=1761908067&width=1600"),
  },
  {
    title: "Wallets",
    href: "https://atelierguised.com/collections/wallets",
    image: shop("files/bifoldculattagreyflatlay.png?v=1711951376&width=1600"),
  },
];

export const images = {
  collab: shop(
    "collections/C3D43191-4BEE-44D3-8E07-B58AE4E95CD9.jpg?v=1765362909&width=2000",
  ),
  craft: shop("files/Guised-02087_SHOPIFY_CROP.jpg?v=1761817097&width=2000"),
};
