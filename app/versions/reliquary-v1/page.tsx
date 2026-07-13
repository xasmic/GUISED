import { VersionChrome } from "../../components/VersionChrome";
import {
  GothicCategories,
  GothicFooter,
  GothicHeader,
  GothicHero,
  GothicManifesto,
  GothicRail,
} from "../../components/gothic/GothicShell";
import { culattaProducts, images, latestReleases } from "@/lib/products";

export default function ReliquaryV1Version() {
  return (
    <div data-gothic="reliquary">
      <VersionChrome current="reliquary-v1" />
      <GothicHeader />
      <main>
        <GothicHero
          eyebrow="Relic · Hide · Blood"
          headlines={[
            "Leather goods that wear your story.",
            "Slowly & obsessively crafted",
            "Offerings from the new catalogue",
          ]}
        />
        <GothicCategories />
        <GothicRail title="Latest Releases" products={latestReleases} />
        <GothicRail
          title="Culatta"
          products={culattaProducts}
          viewAllHref="https://atelierguised.com/collections/culatta"
        />
        <GothicManifesto
          title="Handcrafted with intention"
          image={images.craft}
          body={[
            "Every piece is entirely handmade. Cut, stitched, and finished by hand — a quiet rite of tension and hide.",
            "We work exclusively with ethically sourced leathers. Every scar is kept. Every irregularity is the story.",
            "Built to endure. Designed to accompany you through time.",
          ]}
        />
      </main>
      <GothicFooter />
    </div>
  );
}
