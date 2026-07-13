export type VersionMeta = {
  slug: string;
  title: string;
  subtitle: string;
  tone: string;
  href: string;
  accent: string;
  preserved?: boolean;
};

export const versions: VersionMeta[] = [
  {
    slug: "classic",
    title: "Classic",
    subtitle: "The preserved atelier look — light parchment, raw leather honesty.",
    tone: "Original",
    href: "/versions/classic",
    accent: "#c15045",
    preserved: true,
  },
  {
    slug: "reliquary-v1",
    title: "Reliquary I",
    subtitle: "First oxblood gothic pass — preserved as the original Reliquary.",
    tone: "Gothic · Archive",
    href: "/versions/reliquary-v1",
    accent: "#7a1717",
    preserved: true,
  },
  {
    slug: "reliquary",
    title: "Reliquary II",
    subtitle: "Elevated relic layout — centered brand rite, altar rails, blood frame.",
    tone: "Gothic · Blood",
    href: "/versions/reliquary",
    accent: "#9a1c1c",
  },
  {
    slug: "maison",
    title: "Maison",
    subtitle:
      "Louis Vuitton–inspired editorial maison: stacked campaigns, centered wordmark, creation tiles.",
    tone: "Luxury · Editorial",
    href: "/versions/maison",
    accent: "#111111",
  },
  {
    slug: "maison-reliquary-v1",
    title: "Maison Reliquary I",
    subtitle:
      "Preserved first pass — Maison editorial with Reliquary II oxblood.",
    tone: "Gothic · Archive",
    href: "/versions/maison-reliquary-v1",
    accent: "#7a1717",
    preserved: true,
  },
  {
    slug: "maison-reliquary",
    title: "Maison Reliquary",
    subtitle:
      "Working gothic maison — iterate here. Same structure as I, open to refinement.",
    tone: "Gothic · Editorial",
    href: "/versions/maison-reliquary",
    accent: "#9a1c1c",
  },
];
