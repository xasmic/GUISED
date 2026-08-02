import { images } from "./products";

export type Collaboration = {
  id: string;
  status: "live" | "coming";
  partners: string;
  title: string;
  season?: string;
  summary: string;
  image: string;
  imageAlt: string;
  href?: string;
  cta?: string;
  warranty?: string;
  about?: string[];
  production?: string[];
  specifications?: { label: string; value: string }[];
  features?: string[];
  materialNotes?: string[];
  care?: string[];
};

export const collaborationsIntro = {
  eyebrow: "Archive",
  title: "Collaborations",
  lede:
    "Occasional pairings between Guised and artists who share a language of material, shadow, and wear. Each chapter is finite — made slowly, released once.",
};

export const collaborations: Collaboration[] = [
  {
    id: "rei-gloom",
    status: "live",
    partners: "GUISED × REI GLOOM",
    title: "Belt (Abstract)",
    season: "Chapter I",
    summary:
      "A one-of-one statement piece combining handcrafted leatherwork with the expressive language of tattoo artistry.",
    image: images.collab,
    imageAlt: "Guised × Rei Gloom Belt (Abstract)",
    href: "https://atelierguised.com/collections/guised-x-rei-gloom",
    cta: "Shop the collection",
    warranty: "1-year craftsmanship coverage",
    about: [
      "The Guised × Rei Gloom Belt is a one-of-one statement piece combining handcrafted leatherwork with the expressive language of tattoo artistry.",
      "Featuring a hand-tattooed abstract design by Rei Gloom, each belt transforms traditional leather into a wearable canvas of expression. Its intentionally extended silhouette allows for draping, wrapping, and layered styling, creating a piece that evolves with the wearer.",
      "Handmade in Singapore, this collaboration celebrates the meeting point between craftsmanship, individuality, and personal expression.",
    ],
    production: [
      "Each Guised × Rei Gloom Belt is individually handcrafted with careful attention throughout the cutting, tattooing, finishing, and assembly process.",
      "Created through a collaboration between traditional leathercraft and tattoo artistry, every piece reflects the time, precision, and individuality behind its creation.",
      "Due to the handmade nature of the leather and artwork, natural variations in texture, grain, and tattoo application are embraced as part of each piece’s identity.",
    ],
    specifications: [
      {
        label: "Material",
        value: "Full grain Italian natural vegetable-tanned leather",
      },
      { label: "Dimensions", value: "130 × 4 cm" },
      {
        label: "Artwork",
        value: "Hand-tattooed abstract design by Rei Gloom",
      },
      { label: "Finish", value: "Protective gloss coating" },
      {
        label: "Includes",
        value: "Signature Guised box packaging & dust bag",
      },
    ],
    features: [
      "Hand-tattooed abstract artwork created by Rei Gloom",
      "Protective gloss coating applied to preserve tattoo clarity and longevity",
      "Extended length designed for natural draping, wrapping, and versatile styling",
      "Hand-cut, burnished, and assembled in-house",
      "Combines traditional leathercraft with contemporary tattoo artistry",
      "Each belt is unique due to natural leather variation and handmade artwork",
    ],
    materialNotes: [
      "Italian Buttero cowhide is known for its smooth surface, durability, and ability to develop a rich patina through use.",
      "Over time, the leather softens and the tattooed surface evolves alongside the natural aging process, creating a unique relationship between the artwork and the material.",
      "Each belt matures differently, ensuring every piece becomes a personal and one-of-one object.",
    ],
    care: [
      "Avoid prolonged exposure to water.",
      "If the leather becomes damp, allow it to air dry naturally.",
      "Keep away from direct heat and prolonged sunlight.",
      "Apply a neutral leather balm occasionally to maintain the leather’s condition.",
      "Avoid applying products directly onto the tattooed surface.",
      "Store the belt in the provided dust bag when not in use.",
      "Handle with clean hands to preserve the artwork and leather patina.",
    ],
  },
  {
    id: "chapter-ii",
    status: "coming",
    partners: "Guised × —",
    title: "Untitled",
    season: "Chapter II",
    summary:
      "A forthcoming exchange with a Singapore-based maker. Details withheld until the hides are ready.",
    image: images.campaign[2],
    imageAlt: "",
  },
  {
    id: "chapter-iii",
    status: "coming",
    partners: "Guised × —",
    title: "Untitled",
    season: "Chapter III",
    summary:
      "An overseas collaboration in early conversation. Expect quieter hardware, denser leather, and a longer lead.",
    image: images.campaign[4],
    imageAlt: "",
  },
];

export const collaborationsNote =
  "Future chapters will appear here as they open. For collaboration enquiries, write to atelierguise@gmail.com.";
