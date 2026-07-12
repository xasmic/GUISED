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

export default function NocturneVersion() {
  return (
    <div data-gothic="nocturne">
      <VersionChrome current="nocturne" />
      <GothicHeader mark="GUISED · NIGHT" />
      <main>
        <GothicHero
          eyebrow="After dark · Culatta"
          headlines={[
            "Goods that keep the night on them.",
            "Slowly & obsessively crafted",
            "Catalogue under moonlight",
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
          title="Built to endure"
          image={images.collab}
          body={[
            "Silvered silence. Dense horse culatta chosen for grain that catches low light.",
            "No two cuts are alike — the hide decides the silhouette.",
            "Pieces meant to age in the dark corners of a life lived honestly.",
          ]}
        />
      </main>
      <GothicFooter />
    </div>
  );
}
