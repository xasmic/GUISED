import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ProductsCatalog } from "@/app/components/ProductsCatalog";

export const metadata: Metadata = {
  title: "Online Store — GUISED",
  description:
    "Shop all Guised leather goods — Culatta, belts, wallets, and bags. Slowly and obsessively crafted.",
};

export default function ProductsPage() {
  return (
    <div className="min-h-svh bg-hygen-bg text-hygen-text">
      <header className="border-b border-hygen-text/10">
        <div className="mx-auto px-6 py-7 min-[700px]:px-10 min-[700px]:py-8">
          <Link
            href="/"
            className="font-display text-[15px] font-medium tracking-[0.32em] uppercase text-hygen-text transition-opacity duration-500 hover:opacity-50"
          >
            GUISED
          </Link>
        </div>
      </header>

      <main className="mx-auto w-[min(1400px,94vw)] py-10 min-[700px]:py-14">
        <div className="mb-8 min-[700px]:mb-10">
          <p className="font-display m-0 mb-3 text-[12px] font-medium tracking-[0.24em] uppercase text-hygen-muted">
            Archive
          </p>
          <h1 className="font-display m-0 text-[28px] font-medium tracking-[0.1em] uppercase min-[700px]:text-[34px]">
            Online Store
          </h1>
        </div>

        <Suspense
          fallback={
            <p className="font-body m-0 text-[17px] text-hygen-muted">
              Loading products…
            </p>
          }
        >
          <ProductsCatalog />
        </Suspense>
      </main>
    </div>
  );
}
