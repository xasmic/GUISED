"use client";

import Image from "next/image";
import { useEffect, useState, type FormEvent } from "react";
import {
  about,
  featuredProducts,
  heroCopy,
  heroVideo,
  navLinks,
  parallaxImages,
  stockistRegions,
} from "@/lib/site";
import { culattaProducts } from "@/lib/products";
import { formatConvertedPrice } from "@/lib/currency";
import { CurrencyProvider, useCurrency } from "./CurrencyProvider";
import { CurrencySelector } from "./CurrencySelector";

function SectionSocial() {
  return (
    <div className="font-display absolute bottom-5 left-[45px] z-40 flex gap-4">
      <a
        href="https://www.instagram.com/___guised"
        target="_blank"
        rel="noreferrer"
        className="text-[11px] tracking-[0.16em] text-hygen-text uppercase transition-[opacity] duration-500 hover:opacity-50"
      >
        IG
      </a>
      <a
        href="mailto:info@atelierguised.com"
        className="text-[11px] tracking-[0.16em] text-hygen-text uppercase transition-[opacity] duration-500 hover:opacity-50"
      >
        Mail
      </a>
    </div>
  );
}

function ProductPrice({ price }: { price: string }) {
  const { market } = useCurrency();
  const formatted = formatConvertedPrice(price, market);

  if (!formatted.cents) {
    return (
      <span className="inline-flex items-start">
        <span>
          {market.symbol}
          {formatted.whole}
        </span>
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

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("about");
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["about", "collection", "stockist"];
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.documentElement.classList.add("overflow-hidden");
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!searchOpen) return;
    const input = document.getElementById("site-search");
    input?.focus();
  }, [searchOpen]);

  const onSearch = (e: FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    window.open(
      `https://atelierguised.com/search?q=${encodeURIComponent(q)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const utilHidden = menuOpen
    ? "pointer-events-none -translate-y-1 opacity-0"
    : "translate-y-0 opacity-100";

  return (
    <>
      <header
        className={`pointer-events-none fixed inset-x-0 top-0 z-[10000] transition-[background-color,backdrop-filter,-webkit-backdrop-filter] duration-500 ease-out ${
          scrolled
            ? "bg-hygen-bg/55 backdrop-blur-md supports-[backdrop-filter]:bg-hygen-bg/40"
            : "bg-transparent backdrop-blur-none"
        }`}
      >
        <div className="pointer-events-auto relative flex items-start justify-between px-4 pt-7 pb-5 min-[700px]:px-[45px] min-[700px]:pt-8 min-[1025px]:pt-[30px]">
          <nav
            className={`font-display flex flex-wrap items-start justify-start gap-5 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              menuOpen
                ? "pointer-events-none -translate-y-1 opacity-0"
                : "translate-y-0 opacity-100"
            }`}
            aria-label="Primary"
            aria-hidden={menuOpen}
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                {...("external" in link && link.external
                  ? { target: "_blank", rel: "noreferrer" }
                  : undefined)}
                className={`text-[11px] font-medium tracking-[0.14em] uppercase leading-none text-white mix-blend-difference transition-[opacity] duration-500 hover:opacity-50 min-[700px]:text-[13px] ${
                  active === link.id ? "opacity-100" : "opacity-75"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="/"
            aria-label="GUISED home"
            className={`font-display absolute top-7 left-1/2 z-[1] -translate-x-1/2 text-[25px] font-medium tracking-[0.32em] uppercase text-hygen-text transition-opacity duration-500 hover:opacity-50 min-[700px]:top-8 min-[1025px]:top-[30px] ${
              menuOpen ? "pointer-events-none opacity-0" : "opacity-100"
            }`}
          >
            <span className="block pr-[0.32em]">GUISED</span>
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            onClick={() => setMenuOpen((o) => !o)}
            className="relative z-[1] -mr-2 -mt-1.5 flex h-11 w-11 shrink-0 items-center justify-center mix-blend-difference min-[1025px]:hidden"
          >
            <span className="relative block h-[14px] w-[22px]" aria-hidden>
              <span className={`site-burger-line ${menuOpen ? "is-open" : ""}`} />
              <span className={`site-burger-line ${menuOpen ? "is-open" : ""}`} />
              <span className={`site-burger-line ${menuOpen ? "is-open" : ""}`} />
            </span>
          </button>

          <div
            className={`relative z-[1] hidden shrink-0 items-center gap-6 transition-[opacity,transform] duration-500 min-[1025px]:flex ${utilHidden}`}
          >
            <CurrencySelector />

            <div className="relative flex items-center mix-blend-difference">
              <form
                role="search"
                onSubmit={onSearch}
                className={`mr-3 overflow-hidden transition-[width,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  searchOpen ? "w-44 opacity-100" : "w-0 opacity-0"
                }`}
              >
                <label className="sr-only" htmlFor="site-search">
                  Search
                </label>
                <input
                  id="site-search"
                  type="search"
                  name="q"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search"
                  className="font-body w-full border-0 border-b border-white/40 bg-transparent pb-1 text-[14px] text-white outline-none placeholder:text-white/45"
                />
              </form>
              <button
                type="button"
                aria-label="Search"
                aria-expanded={searchOpen}
                onClick={() => setSearchOpen((o) => !o)}
                className="flex h-7 w-7 items-center justify-center text-white transition-opacity duration-500 hover:opacity-50"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <circle cx="11" cy="11" r="6.25" stroke="currentColor" strokeWidth="1.6" />
                  <path
                    d="M16.2 16.2L20.5 20.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <a
              href="https://atelierguised.com/account"
              target="_blank"
              rel="noreferrer"
              aria-label="Account"
              className="flex h-7 w-7 items-center justify-center text-white mix-blend-difference transition-opacity duration-500 hover:opacity-50"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                <circle cx="12" cy="8" r="3.25" stroke="currentColor" strokeWidth="1.6" />
                <path
                  d="M5.5 19.5c1.4-3.2 3.7-4.75 6.5-4.75s5.1 1.55 6.5 4.75"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </a>

            <a
              href="https://atelierguised.com/cart"
              target="_blank"
              rel="noreferrer"
              aria-label="Bag"
              className="flex h-7 w-7 items-center justify-center text-white mix-blend-difference transition-opacity duration-500 hover:opacity-50"
            >
              <svg width="21" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M7.5 8.5V7a4.5 4.5 0 0 1 9 0v1.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <path
                  d="M6 8.5h12l-.7 11.2a1.5 1.5 0 0 1-1.5 1.4H8.2a1.5 1.5 0 0 1-1.5-1.4L6 8.5Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </header>

      <div
        id="site-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`site-menu-panel fixed inset-0 z-[10000] flex flex-col bg-hygen-bg/95 px-10 pt-28 pb-12 backdrop-blur-md ${
          menuOpen
            ? "is-open visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
      >
        <a
          href="#concept"
          onClick={() => setMenuOpen(false)}
          className="site-menu-item font-display mb-12 text-[28px] font-medium tracking-[0.28em] text-hygen-text"
          style={{ animationDelay: menuOpen ? "80ms" : undefined }}
        >
          GUISED
        </a>
        <nav className="font-display flex flex-col gap-6" aria-label="Menu">
          {navLinks.map((link, i) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              {...("external" in link && link.external
                ? { target: "_blank", rel: "noreferrer" }
                : undefined)}
              style={{ animationDelay: menuOpen ? `${140 + i * 55}ms` : undefined }}
              className={`site-menu-item text-[15px] font-medium tracking-[0.18em] uppercase text-hygen-text transition-opacity duration-500 hover:opacity-50 ${
                active === link.id ? "opacity-100" : "opacity-70"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div
          className="site-menu-item mt-auto flex gap-6"
          style={{ animationDelay: menuOpen ? "480ms" : undefined }}
        >
          <a
            href="https://www.instagram.com/___guised"
            target="_blank"
            rel="noreferrer"
            className="font-display text-[12px] tracking-[0.16em] text-hygen-text uppercase transition-opacity duration-500 hover:opacity-50"
          >
            IG
          </a>
          <a
            href="mailto:info@atelierguised.com"
            className="font-display text-[12px] tracking-[0.16em] text-hygen-text uppercase transition-opacity duration-500 hover:opacity-50"
          >
            Mail
          </a>
        </div>
      </div>
    </>
  );
}

function HeroBand() {
  return (
    <section className="relative min-h-svh w-full bg-hygen-media">
      <video
        className="absolute inset-0 z-0 hidden h-full w-full object-cover min-[1025px]:block"
        autoPlay
        muted
        loop
        playsInline
        poster={heroVideo.poster}
      >
        <source src={heroVideo.src} type="video/mp4" />
      </video>
      <Image
        src={heroVideo.poster}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover min-[1025px]:hidden"
        unoptimized
      />
      <div className="absolute inset-0 z-[1] bg-black/35" />

      <div className="absolute inset-x-0 top-[42%] z-10 flex -translate-y-1/2 flex-col items-center px-6 text-center text-white">
        <h1 className="font-display animate-[heroFade_1.1s_ease-out_both] text-[42px] font-medium tracking-[0.32em] min-[700px]:text-[56px] min-[1320px]:text-[68px]">
          {heroCopy.brand}
        </h1>
        <p className="font-body mt-5 max-w-[30rem] animate-[heroFade_1.1s_ease-out_0.2s_both] text-[20px] leading-[1.5] tracking-[0.05em] text-white/85 min-[700px]:text-[24px] min-[1320px]:text-[26px]">
          {heroCopy.tagline}
        </p>
        <a
          href={heroCopy.ctaHref}
          className="font-display mt-10 animate-[heroFade_1.1s_ease-out_0.4s_both] text-[12px] font-medium tracking-[0.28em] uppercase text-white transition-opacity duration-500 hover:opacity-50"
        >
          {heroCopy.cta}
        </a>
      </div>

      <a
        href="#concept"
        className="absolute bottom-[30px] left-1/2 z-10 -ml-5 animate-[heroFade_1.1s_ease-out_0.6s_both] transition-[bottom] duration-200 hover:bottom-10"
        aria-label="Scroll to concept"
      >
        <span className="block h-10 w-10 text-center text-[28px] leading-10 text-white">
          ↓
        </span>
      </a>
    </section>
  );
}

function ConceptSection() {
  return (
    <section
      id="concept"
      className="relative min-h-[700px] w-full bg-hygen-bg text-hygen-text"
    >
      <SectionSocial />
      <div className="mx-auto flex min-h-[700px] w-full max-w-[1400px] items-center px-6 py-24 min-[700px]:px-10 min-[1100px]:px-14">
        <ul className="m-0 grid w-full list-none grid-cols-1 gap-x-8 gap-y-14 p-0 min-[600px]:grid-cols-2 min-[1100px]:grid-cols-4">
          {featuredProducts.map((product) => (
            <li key={product.id} className="m-0 min-w-0">
              <a
                href={product.href}
                target="_blank"
                rel="noreferrer"
                className="group block transition-opacity duration-500 hover:opacity-50"
              >
                <div className="relative mb-5 aspect-[4/5] w-full overflow-hidden bg-hygen-media">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(min-width: 1100px) 22vw, (min-width: 600px) 40vw, 85vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    unoptimized
                  />
                </div>
                <p className="font-display m-0 text-[12px] font-medium leading-[1.35] tracking-[0.14em] uppercase text-hygen-text min-[700px]:text-[13px]">
                  {product.title}
                </p>
                <p className="font-body mt-2 m-0 text-[15px] leading-none tracking-[0.04em] text-hygen-muted min-[700px]:text-[16px]">
                  <ProductPrice price={product.price} />
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-[100svh] w-full overflow-hidden bg-hygen-media text-white"
    >
      <div className="absolute inset-0 grid grid-cols-1 min-[800px]:grid-cols-2">
        <div className="relative min-h-[42svh] min-[800px]:min-h-full">
          <Image
            src={about.leftImage}
            alt={about.leftAlt}
            fill
            sizes="(min-width: 800px) 50vw, 100vw"
            className="object-cover grayscale"
            unoptimized
          />
        </div>
        <div className="relative min-h-[42svh] min-[800px]:min-h-full">
          <Image
            src={about.rightImage}
            alt={about.rightAlt}
            fill
            sizes="(min-width: 800px) 50vw, 100vw"
            className="object-cover"
            unoptimized
          />
        </div>
      </div>

      <div className="absolute inset-0 z-[1] bg-black/55" />

      <div className="absolute inset-0 z-10 flex items-center justify-center overflow-y-auto px-6 py-20 text-center min-[800px]:px-12">
        <div className="max-w-[40rem] text-left min-[800px]:max-w-[36rem]">
          <h2 className="font-display mb-6 text-[22px] font-medium leading-[1.35] tracking-[0.08em] text-white min-[700px]:mb-8 min-[700px]:text-[28px]">
            {about.headline}
          </h2>
          <div className="space-y-4">
            {about.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="font-body m-0 text-[14px] font-normal leading-[1.65] text-white/85 min-[700px]:text-[15px]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ParallaxBand({
  src,
  alt,
  videoSrc,
}: {
  src?: string;
  alt: string;
  videoSrc?: string;
}) {
  return (
    <div className="relative h-svh w-full overflow-hidden bg-hygen-media">
      {videoSrc ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label={alt}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center bg-scroll min-[1025px]:bg-fixed"
          style={{ backgroundImage: `url(${src})` }}
          role="img"
          aria-label={alt}
        />
      )}
    </div>
  );
}

function CollectionSection() {
  return (
    <section
      id="collection"
      className="relative w-full bg-hygen-bg text-hygen-text"
    >
      <SectionSocial />

      <div className="mx-auto w-full max-w-[1400px] px-6 py-24 min-[700px]:px-10 min-[1100px]:px-14">
        <div className="mb-10 flex items-end justify-between gap-6 min-[700px]:mb-14">
          <div>
            <p className="font-display m-0 mb-3 text-[12px] font-medium tracking-[0.24em] uppercase text-hygen-muted">
              Collection
            </p>
            <h2 className="font-display m-0 text-[20px] font-medium tracking-[0.14em] uppercase text-hygen-text min-[700px]:text-[22px]">
              Culatta
            </h2>
          </div>
          <a
            href="/products"
            className="font-display shrink-0 pb-1 text-[12px] font-medium tracking-[0.16em] uppercase text-hygen-text transition-opacity duration-500 hover:opacity-50"
          >
            View all
          </a>
        </div>

        <ul className="m-0 grid w-full list-none grid-cols-1 gap-x-8 gap-y-14 p-0 min-[600px]:grid-cols-2 min-[1100px]:grid-cols-3 min-[1320px]:grid-cols-5">
          {culattaProducts.map((product) => (
            <li key={product.id} className="m-0 min-w-0">
              <a
                href={product.href}
                target="_blank"
                rel="noreferrer"
                className="group block transition-opacity duration-500 hover:opacity-50"
              >
                <div className="relative mb-5 aspect-[4/5] w-full overflow-hidden bg-hygen-media">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(min-width: 1320px) 18vw, (min-width: 1100px) 28vw, (min-width: 600px) 40vw, 85vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    unoptimized
                  />
                  {product.soldOut ? (
                    <span className="font-display absolute top-3 right-3 z-[1] bg-[#7a1717] px-2.5 py-1 text-[10px] font-medium tracking-[0.14em] uppercase text-hygen-text">
                      Sold out
                    </span>
                  ) : null}
                </div>
                <p className="font-display m-0 text-[12px] font-medium leading-[1.35] tracking-[0.14em] uppercase text-hygen-text min-[700px]:text-[13px]">
                  {product.title}
                </p>
                <p className="font-body mt-2 m-0 text-[15px] leading-none tracking-[0.04em] text-hygen-muted min-[700px]:text-[16px]">
                  {product.soldOut ? (
                    <span className="opacity-60">Sold out</span>
                  ) : (
                    <ProductPrice price={product.price} />
                  )}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function StockistSection() {
  return (
    <section
      id="stockist"
      className="relative w-full bg-hygen-bg py-24 text-hygen-text min-[700px]:py-32"
    >
      <SectionSocial />

      <div className="mx-auto w-full max-w-[1100px] px-6 min-[700px]:px-10 min-[1100px]:px-14">
        <div className="mb-14 max-w-[36rem] min-[700px]:mb-20">
          <p className="font-display m-0 mb-4 text-[15px] font-medium tracking-[0.22em] uppercase text-hygen-text min-[700px]:text-[16px]">
            Stockists
          </p>
          <h2 className="font-display m-0 text-[28px] font-medium leading-[1.2] tracking-[0.08em] uppercase min-[700px]:text-[34px]">
            Where to find us
          </h2>
          <p className="font-body mt-5 m-0 text-[17px] leading-[1.7] text-hygen-text/80 min-[700px]:text-[19px]">
            Visit our Singapore stockist, or order online for international
            shipping.
          </p>
        </div>

        <div className="grid gap-14 border-t border-hygen-text/10 pt-12 min-[800px]:grid-cols-2 min-[800px]:gap-16 min-[800px]:pt-16">
          {stockistRegions.map((region) => (
            <div key={region.region}>
              <div className="mb-8 flex items-center gap-3">
                <h3 className="font-display m-0 text-[14px] font-medium tracking-[0.2em] uppercase text-hygen-text min-[700px]:text-[15px]">
                  {region.region}
                </h3>
                {region.instagramHref ? (
                  <a
                    href={region.instagramHref}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GUISED on Instagram"
                    className="inline-flex text-hygen-text transition-opacity duration-500 hover:opacity-50"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                    >
                      <rect
                        x="3.5"
                        y="3.5"
                        width="17"
                        height="17"
                        rx="4.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        r="4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
                    </svg>
                  </a>
                ) : null}
              </div>
              <ul className="m-0 list-none space-y-8 p-0">
                {region.stores.map((store) => (
                  <li key={store.name} className="m-0">
                    {store.href ? (
                      <a
                        href={store.href}
                        target="_blank"
                        rel="noreferrer"
                        className="font-display block text-[18px] font-medium leading-[1.35] tracking-[0.06em] text-hygen-text transition-opacity duration-500 hover:opacity-50 min-[700px]:text-[20px]"
                      >
                        {store.name}
                      </a>
                    ) : (
                      <p className="font-display m-0 text-[18px] font-medium leading-[1.35] tracking-[0.06em] text-hygen-text min-[700px]:text-[20px]">
                        {store.name}
                      </p>
                    )}
                    {store.address ? (
                      <p className="font-body mt-2 m-0 text-[16px] leading-[1.55] text-hygen-muted min-[700px]:text-[17px]">
                        {store.address}
                      </p>
                    ) : null}
                    {store.city ? (
                      <p className="font-body mt-1 m-0 text-[15px] leading-[1.5] text-hygen-muted/80 min-[700px]:text-[16px]">
                        {store.city}
                      </p>
                    ) : null}
                    {store.note ? (
                      <p className="font-body mt-2 m-0 text-[15px] leading-[1.5] text-hygen-muted min-[700px]:text-[16px]">
                        {store.note}
                      </p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HygenPage() {
  return (
    <CurrencyProvider>
      <main className="min-w-0 bg-hygen-media text-hygen-text min-[1220px]:min-w-[1220px]">
        <SiteHeader />
        <HeroBand />
        <ConceptSection />
        <AboutSection />
        <CollectionSection />
        <ParallaxBand videoSrc="/GuisedVideo.mp4" alt="Craft" />
        <ParallaxBand src={parallaxImages.lower} alt="Collaboration" />
        <StockistSection />
      </main>
    </CurrencyProvider>
  );
}
