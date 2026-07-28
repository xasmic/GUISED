"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
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

type SortId =
  | "manual"
  | "title-ascending"
  | "title-descending"
  | "price-ascending"
  | "price-descending";

const sortOptions: { id: SortId; label: string }[] = [
  { id: "manual", label: "Featured" },
  { id: "title-ascending", label: "Alphabetically, A–Z" },
  { id: "title-descending", label: "Alphabetically, Z–A" },
  { id: "price-ascending", label: "Price, low to high" },
  { id: "price-descending", label: "Price, high to low" },
];

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

function priceValue(price: string) {
  const n = Number(price.replace(/[^0-9.]/g, ""));
  return Number.isFinite(n) ? n : 0;
}

function sortProducts(products: Product[], sort: SortId) {
  if (sort === "manual") return products;
  const next = [...products];
  if (sort === "title-ascending") {
    next.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sort === "title-descending") {
    next.sort((a, b) => b.title.localeCompare(a.title));
  } else if (sort === "price-ascending") {
    next.sort((a, b) => priceValue(a.price) - priceValue(b.price));
  } else if (sort === "price-descending") {
    next.sort((a, b) => priceValue(b.price) - priceValue(a.price));
  }
  return next;
}

function ProductsCatalogInner() {
  const searchParams = useSearchParams();
  const filterParam = searchParams.get("filter");
  const [filter, setFilter] = useState<ProductFilterId>(() =>
    isProductFilterId(filterParam) ? filterParam : "all",
  );
  const [sort, setSort] = useState<SortId>("manual");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const products = useMemo(
    () =>
      sortProducts(
        allProducts.filter((p) => matchesFilter(p, filter)),
        sort,
      ),
    [filter, sort],
  );

  useEffect(() => {
    if (!drawerOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDrawerOpen(false);
    };

    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.documentElement.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [drawerOpen]);

  return (
    <>
      <div className="border-b border-hygen-text/10 pb-6">
        <div className="flex flex-wrap items-stretch gap-2.5">
          <button
            type="button"
            onClick={() => setDrawerOpen((open) => !open)}
            aria-expanded={drawerOpen}
            aria-controls="products-filter-drawer"
            className={`inline-flex min-h-11 items-center justify-center gap-2.5 border px-4 py-3 font-display text-[11px] font-medium tracking-[0.18em] uppercase transition-[background-color,border-color,opacity] duration-500 min-[700px]:px-5 min-[700px]:text-[12px] ${
              drawerOpen
                ? "border-hygen-text/40 bg-hygen-text/20 text-hygen-text"
                : "border-hygen-text/20 bg-hygen-text/10 text-hygen-text hover:border-hygen-text/35 hover:bg-hygen-text/[0.18]"
            }`}
          >
            <span>Filter</span>
            <span aria-hidden="true">{drawerOpen ? "−" : "+"}</span>
          </button>

          <label className="relative inline-flex min-h-11 min-w-[min(220px,100%)] items-center">
            <span className="sr-only">Sort by</span>
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value as SortId)}
              aria-label="Sort products"
              className="h-full w-full min-h-11 appearance-none border border-hygen-text/30 bg-transparent bg-[linear-gradient(45deg,transparent_50%,#9a8f86_50%),linear-gradient(135deg,#9a8f86_50%,transparent_50%)] bg-size-[6px_6px,6px_6px] bg-position-[calc(100%-18px)_calc(50%-2px),calc(100%-12px)_calc(50%-2px)] bg-no-repeat px-4 py-3 pr-9 font-display text-[11px] font-medium tracking-[0.18em] uppercase text-hygen-text transition-[border-color,opacity] duration-500 hover:border-hygen-text/50 focus:outline focus:outline-1 focus:outline-offset-2 focus:outline-hygen-text/45 min-[700px]:text-[12px]"
            >
              {sortOptions.map((option) => (
                <option
                  key={option.id}
                  value={option.id}
                  className="bg-hygen-bg text-hygen-text"
                >
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <p className="font-body mt-3.5 m-0 text-[15px] tracking-[0.04em] text-hygen-muted">
          {products.length} {products.length === 1 ? "product" : "products"}
        </p>
      </div>

      {drawerOpen ? (
        <div
          id="products-filter-drawer"
          className="fixed inset-0 z-[10020]"
          role="presentation"
        >
          <button
            type="button"
            aria-label="Close filters"
            onClick={() => setDrawerOpen(false)}
            className="absolute inset-0 border-0 bg-[rgba(16,14,16,0.5)]"
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Filter products"
            className="absolute top-0 right-0 bottom-0 flex w-[min(340px,88vw)] flex-col border-l border-hygen-text/10 bg-hygen-bg px-7 pt-7 pb-10 shadow-[-18px_0_40px_rgba(0,0,0,0.35)]"
          >
            <div className="mb-7 flex items-center justify-between gap-4">
              <p className="font-display m-0 text-[12px] font-medium tracking-[0.2em] uppercase text-hygen-text">
                Filter
              </p>
              <button
                type="button"
                aria-label="Close filters"
                onClick={() => setDrawerOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center text-[24px] leading-none text-hygen-muted transition-colors duration-500 hover:text-hygen-text"
              >
                ×
              </button>
            </div>

            <nav
              className="flex flex-col items-start gap-[18px]"
              aria-label="Product categories"
            >
              {productFilters.map((item) => {
                const active = filter === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setFilter(item.id);
                      setDrawerOpen(false);
                    }}
                    className={`font-display text-[12px] font-medium tracking-[0.18em] uppercase transition-colors duration-500 min-[700px]:text-[13px] ${
                      active
                        ? "text-hygen-text"
                        : "text-hygen-muted hover:text-hygen-text/85"
                    }`}
                  >
                    {active ? (
                      <span className="mr-2 inline-block text-[8px] leading-none">
                        ●
                      </span>
                    ) : null}
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      ) : null}

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
