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
    partners: "GUISED × REI.GLOOM",
    title: "Abstract Belt Series",
    season: "Chapter I",
    summary:
      "A limited belt collaboration with Rei.Gloom — abstract mark-making cut into horse culatta, finished by hand in the atelier. Scar, ink, and hide speaking in one register.",
    image: images.collab,
    imageAlt: "GUISED × REI.GLOOM collaboration",
    href: "https://atelierguised.com/collections/guised-x-rei-gloom",
    cta: "Shop the collection",
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
