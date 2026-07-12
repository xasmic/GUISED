import Image from "next/image";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <a href={product.href} className="product-card__media">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 70vw, 280px"
        />
        {product.soldOut ? <span className="sold-out">Sold out</span> : null}
      </a>
      <div className="product-card__body">
        <h3>
          <a href={product.href}>{product.title}</a>
        </h3>
        <p>{product.price}</p>
        <a
          className="product-card__cta"
          href={product.href}
          aria-disabled={product.soldOut}
        >
          {product.soldOut ? "View" : "Add"}
        </a>
      </div>
    </article>
  );
}

export function ProductRail({
  title,
  products,
  viewAllHref,
}: {
  title: string;
  products: Product[];
  viewAllHref?: string;
}) {
  return (
    <section className="product-rail">
      <div className="section-head">
        <h2>{title}</h2>
        {viewAllHref ? (
          <a className="text-link" href={viewAllHref}>
            View all
          </a>
        ) : null}
      </div>
      <div className="product-rail__track">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
