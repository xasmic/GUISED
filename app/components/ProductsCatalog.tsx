"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import {
  allProducts,
  culattaProducts,
  productFilters,
  productStatus,
  type Product,
  type ProductFilterId,
} from "@/lib/products";
import { formatConvertedPrice } from "@/lib/currency";
import { CurrencyProvider, useCurrency } from "./CurrencyProvider";

const culattaIds = new Set(culattaProducts.map((p) => p.id));

function Price({ price }: { price: string }) {
  const { market } = useCurrency();
  const formatted = formatConvertedPrice(price, market);

  if (!formatted.cents) {
    return (
      <span>
        {market.symbol}
        {formatted.whole}
      </span>
    );
  }

  return (
    <span className="inline-flex items-start">
      <span>
        {market.symbol}
        {formatted.whole}
      </span>
      <span className="relative top-[0.05em] ml-px text-[0.65em] leading-none">
        .{formatted.cents}
      </span>
    </span>
  );
}

function statusLabel(product: Product) {
  const status = productStatus(product);
  if (status === "soldout") return "Out of Stock";
  if (status === "low") return "Low Quantity";
  return "Available";
}

function statusClass(product: Product) {
  const status = productStatus(product);
  if (status === "soldout" || status === "low") return "text-[#c4a35a]";
  return "text-hygen-muted";
}

function matchesFilter(product: Product, filter: ProductFilterId) {
  if (filter === "all") return true;
  if (filter === "available") return !product.soldOut;
  if (filter === "culatta")
    return product.category === "culatta" || culattaIds.has(product.id);
  return product.category === filter;
}

function isProductFilterId(value: string | null): value is ProductFilterId {
  return productFilters.some((item) => item.id === value);
}

function ProductsCatalogInner() {
  const searchParams = useSearchParams();
  const filterParam = searchParams.get("filter");
  const [filter, setFilter] = useState<ProductFilterId>(() =>
    isProductFilterId(filterParam) ? filterParam : "all",
  );

  const products = useMemo(
    () => allProducts.filter((p) => matchesFilter(p, filter)),
    [filter],
  );

  return (
    <>
      <nav
        className="font-display flex flex-wrap items-center gap-x-5 gap-y-3 border-b border-hygen-text/10 pb-6"
        aria-label="Product categories"
      >
        {productFilters.map((item) => {
          const active = filter === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setFilter(item.id)}
              className={`text-[11px] font-medium tracking-[0.18em] uppercase transition-opacity duration-500 min-[700px]:text-[12px] ${
                active
                  ? "text-hygen-text opacity-100"
                  : "text-hygen-muted hover:opacity-70"
              }`}
            >
              {active ? (
                <span className="mr-1.5 inline-block text-[8px] leading-none">
                  ●
                </span>
              ) : null}
              {item.label}
            </button>
          );
        })}
      </nav>

      <ul className="m-0 mt-10 grid list-none grid-cols-2 gap-x-3 gap-y-10 p-0 min-[700px]:mt-12 min-[700px]:grid-cols-3 min-[700px]:gap-x-4 min-[700px]:gap-y-12 min-[1100px]:grid-cols-5">
        {products.map((product) => (
          <li key={product.id} className="m-0 min-w-0">
            <a
              href={product.href}
              target="_blank"
              rel="noreferrer"
              className="group block transition-opacity duration-500 hover:opacity-50"
            >
              <div className="relative mb-4 aspect-[4/5] w-full overflow-hidden bg-hygen-media">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(min-width: 1100px) 18vw, (min-width: 700px) 30vw, 45vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  unoptimized
                />
              </div>
              <p className="font-display m-0 text-[11px] font-medium leading-[1.4] tracking-[0.12em] uppercase text-hygen-text min-[700px]:text-[12px]">
                {product.title}
              </p>
              <div className="mt-2 flex items-baseline justify-between gap-3">
                <p className="font-body m-0 text-[14px] leading-none tracking-[0.04em] text-hygen-text/85 min-[700px]:text-[15px]">
                  <Price price={product.price} />
                </p>
                <p
                  className={`font-display m-0 text-[9px] font-medium tracking-[0.14em] uppercase min-[700px]:text-[10px] ${statusClass(product)}`}
                >
                  {statusLabel(product)}
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>

      {products.length === 0 ? (
        <p className="font-body mt-16 m-0 text-center text-[17px] text-hygen-muted">
          No products in this category.
        </p>
      ) : null}
    </>
  );
}

export function ProductsCatalog() {
  return (
    <CurrencyProvider>
      <ProductsCatalogInner />
    </CurrencyProvider>
  );
}
