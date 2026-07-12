import Image from "next/image";
import { categories } from "@/lib/products";

export function CategoryTiles() {
  return (
    <section className="category-tiles" aria-label="Shop by category">
      {categories.map((category) => (
        <a key={category.title} href={category.href} className="category-tile">
          <Image
            src={category.image}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="category-tile__copy">
            <h2>{category.title}</h2>
            <span>Shop now</span>
          </div>
        </a>
      ))}
    </section>
  );
}
