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

export default function VespersVersion() {
  return (
    <div data-gothic="vespers">
      <VersionChrome current="vespers" />
      <GothicHeader mark="GUISED" />
      <main>
        <GothicHero
          eyebrow="Evening rite · Singapore"
          headlines={[
            "Leather goods that wear your story.",
            "Slowly & obsessively crafted",
            "Shop the dusk catalogue",
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
          image={images.collab}
          body={[
            "Every piece is a quiet devotion — cut, stitched, and finished by hand.",
            "Trusted tanneries. Rare horse culatta. Gold-hour patience.",
            "Built to endure, and to accompany you through time.",
          ]}
        />
      </main>
      <GothicFooter />
    </div>
  );
}
