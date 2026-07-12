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
    slug: "reliquary",
    title: "Reliquary",
    subtitle: "Oxblood sacrament. Bone text on void black. Leather as holy remnant.",
    tone: "Gothic · Blood",
    href: "/versions/reliquary",
    accent: "#8f1d1d",
  },
  {
    slug: "nocturne",
    title: "Nocturne",
    subtitle: "Moonlit cathedral. Cold silver against charcoal hide.",
    tone: "Gothic · Night",
    href: "/versions/nocturne",
    accent: "#a8b4c4",
  },
  {
    slug: "scarred",
    title: "Scarred",
    subtitle: "Wound-deep burgundy. Imperfections as the main character.",
    tone: "Gothic · Raw",
    href: "/versions/scarred",
    accent: "#b84a3a",
  },
  {
    slug: "vespers",
    title: "Vespers",
    subtitle: "Incense gold at dusk. Ecclesiastical quiet, handstitched devotion.",
    tone: "Gothic · Sacred",
    href: "/versions/vespers",
    accent: "#c4a35a",
  },
];
