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

export default function ScarredVersion() {
  return (
    <div data-gothic="scarred">
      <VersionChrome current="scarred" />
      <GothicHeader />
      <main>
        <GothicHero
          eyebrow="Imperfection as doctrine"
          headlines={[
            "Wear the wound. Keep the grain.",
            "Slowly & obsessively crafted",
            "Scarred catalogue, open",
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
          title="Ethically sourced materials"
          image={images.craft}
          body={[
            "Hides chosen for raw character — texture, scarring, the stories already written in the fibre.",
            "Fully handsewn. Unlined where the leather should breathe and bruise into patina.",
            "GUISED isn’t about perfection. It’s honesty in form, texture, and self.",
          ]}
        />
      </main>
      <GothicFooter />
    </div>
  );
}
