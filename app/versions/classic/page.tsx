import { CategoryTiles } from "../../components/CategoryTiles";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { ProductRail } from "../../components/ProductRail";
import { CollabBanner, CraftSection, Footer } from "../../components/Sections";
import { VersionChrome } from "../../components/VersionChrome";
import { culattaProducts, latestReleases } from "@/lib/products";
import "../../styles/classic.css";

export default function ClassicVersion() {
  return (
    <div className="theme-classic">
      <VersionChrome current="classic" />
      <div className="page">
        <Header />
        <main>
          <Hero />
          <CategoryTiles />
          <ProductRail title="Latest Releases" products={latestReleases} />
          <ProductRail
            title="Culatta"
            products={culattaProducts}
            viewAllHref="https://atelierguised.com/collections/culatta"
          />
          <CollabBanner />
          <CraftSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
