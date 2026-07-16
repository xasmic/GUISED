"use client";

import Image from "next/image";
import { useCallback, useEffect, useState, type FormEvent } from "react";
import {
  about,
  featuredProducts,
  heroCopy,
  heroVideo,
  navLinks,
  parallaxImages,
  seasons,
  stockistRegions,
} from "@/lib/site";
import { formatConvertedPrice } from "@/lib/currency";
import { CurrencyProvider, useCurrency } from "./CurrencyProvider";
import { CurrencySelector } from "./CurrencySelector";

function SectionSocial() {
  return (
    <div className="font-display absolute bottom-5 left-[45px] z-40 flex gap-4">
      <a
        href="https://www.instagram.com/"
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
      <a
        href="/"
        aria-label="GUISED home"
        className={`font-display fixed top-[26px] left-0 right-0 z-[10001] mx-auto w-max text-[13px] font-medium tracking-[0.32em] uppercase text-hygen-text transition-opacity duration-500 hover:opacity-50 min-[700px]:top-[28px] min-[700px]:text-[15px] min-[1025px]:top-[30px] ${
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
        className="fixed top-[28px] right-[28px] z-[10001] flex h-11 w-11 items-center justify-center mix-blend-difference min-[1025px]:hidden"
      >
        <span className="relative block h-[14px] w-[22px]" aria-hidden>
          <span className={`site-burger-line ${menuOpen ? "is-open" : ""}`} />
          <span className={`site-burger-line ${menuOpen ? "is-open" : ""}`} />
          <span className={`site-burger-line ${menuOpen ? "is-open" : ""}`} />
        </span>
      </button>

      <div
        className={`fixed top-[26px] right-[45px] z-[10001] hidden items-center gap-5 transition-[opacity,transform] duration-500 min-[1025px]:flex ${utilHidden}`}
      >
        <CurrencySelector />

        <div className="relative flex items-center mix-blend-difference">
          <form
            role="search"
            onSubmit={onSearch}
            className={`mr-3 overflow-hidden transition-[width,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              searchOpen ? "w-40 opacity-100" : "w-0 opacity-0"
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
              className="font-body w-full border-0 border-b border-white/40 bg-transparent pb-1 text-[13px] text-white outline-none placeholder:text-white/45"
            />
          </form>
          <button
            type="button"
            aria-label="Search"
            aria-expanded={searchOpen}
            onClick={() => setSearchOpen((o) => !o)}
            className="flex h-6 w-6 items-center justify-center text-white transition-opacity duration-500 hover:opacity-50"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <circle cx="11" cy="11" r="6.25" stroke="currentColor" strokeWidth="1.4" />
              <path
                d="M16.2 16.2L20.5 20.5"
                stroke="currentColor"
                strokeWidth="1.4"
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
          className="flex h-6 w-6 items-center justify-center text-white mix-blend-difference transition-opacity duration-500 hover:opacity-50"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <circle cx="12" cy="8" r="3.25" stroke="currentColor" strokeWidth="1.4" />
            <path
              d="M5.5 19.5c1.4-3.2 3.7-4.75 6.5-4.75s5.1 1.55 6.5 4.75"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        </a>

        <a
          href="https://atelierguised.com/cart"
          target="_blank"
          rel="noreferrer"
          aria-label="Bag"
          className="flex h-6 w-6 items-center justify-center text-white mix-blend-difference transition-opacity duration-500 hover:opacity-50"
        >
          <svg width="17" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M7.5 8.5V7a4.5 4.5 0 0 1 9 0v1.5"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            <path
              d="M6 8.5h12l-.7 11.2a1.5 1.5 0 0 1-1.5 1.4H8.2a1.5 1.5 0 0 1-1.5-1.4L6 8.5Z"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>

      <nav
        className={`font-display fixed top-0 left-0 z-[10000] flex items-start justify-start gap-5 px-4 pt-7 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] min-[700px]:gap-5 min-[700px]:px-[45px] min-[700px]:pt-8 ${
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
            href="https://www.instagram.com/"
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
  const season = seasons.find((s) => s.id === "culatta") ?? seasons[0];
  const [slideIndex, setSlideIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const slide = season.images[slideIndex] ?? season.images[0];

  const go = useCallback(
    (dir: -1 | 1) => {
      setSlideIndex((i) => {
        const len = season.images.length;
        return (i + dir + len) % len;
      });
    },
    [season.images.length],
  );

  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalOpen(false);
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalOpen, go]);

  return (
    <section
      id="collection"
      className="relative h-[1000px] w-full bg-hygen-bg text-hygen-text min-[1500px]:h-[1250px]"
    >
      <SectionSocial />

      <div className="absolute top-[123px] left-[100px] z-20 max-w-[300px] text-[17px] leading-[2.05] min-[1500px]:top-[150px]">
        <p className="font-display mb-6 text-[14px] font-medium tracking-[0.2em] uppercase text-hygen-text">
          Collection
        </p>
        <p className="font-body m-0 text-hygen-text">{season.label}</p>
      </div>

      <div className="absolute top-1/2 left-1/2 z-10 w-[467px] -translate-x-1/2 -translate-y-1/2 bg-hygen-surface min-[1500px]:w-[600px]">
        <div className="relative bg-hygen-media">
          <a href={slide.href} target="_blank" rel="noreferrer">
            <Image
              src={slide.src}
              alt={slide.alt}
              width={600}
              height={800}
              className="h-auto w-full object-cover"
              unoptimized
            />
          </a>

          <button
            type="button"
            aria-label="Previous look"
            onClick={() => go(-1)}
            className="absolute top-1/2 left-[-200px] z-[9999] hidden h-[116px] w-[61px] -translate-y-1/2 items-center justify-center text-[42px] text-hygen-text transition-opacity duration-200 hover:opacity-50 min-[1220px]:flex"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next look"
            onClick={() => go(1)}
            className="absolute top-1/2 right-[-200px] z-[9999] hidden h-[116px] w-[61px] -translate-y-1/2 items-center justify-center text-[42px] text-hygen-text transition-opacity duration-200 hover:opacity-50 min-[1220px]:flex"
          >
            ›
          </button>
        </div>

        <button
          type="button"
          onClick={() => setModalOpen(true)}
          className="font-display relative top-[-50px] left-full ml-2 text-[12px] font-medium tracking-[0.16em] uppercase text-hygen-text transition-opacity duration-500 hover:opacity-50"
        >
          Index
        </button>
      </div>

      {modalOpen ? (
        <div
          className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/70 p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Culatta lookbook index"
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setModalOpen(false)}
            className="font-display fixed top-5 right-5 z-[10000] text-[13px] font-medium tracking-[0.16em] text-white uppercase transition-opacity duration-200 hover:opacity-50"
          >
            Close
          </button>
          <div className="z-[10000] max-h-[90vh] max-w-[900px] overflow-auto bg-hygen-bg p-2">
            <div className="flex flex-wrap">
              {season.images.map((img, i) => (
                <button
                  key={`${img.src}-${i}`}
                  type="button"
                  className="p-[5px] transition-opacity duration-200 hover:opacity-50"
                  onClick={() => {
                    setSlideIndex(i);
                    setModalOpen(false);
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={120}
                    height={160}
                    className="h-[160px] w-[120px] object-cover"
                    unoptimized
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

function StockistSection() {
  return (
    <section
      id="stockist"
      className="relative min-h-[1000px] w-full bg-hygen-bg py-24 text-hygen-text min-[1220px]:h-[1672px] min-[1220px]:py-0"
    >
      <SectionSocial />

      <div className="relative mx-auto w-[min(720px,92vw)] min-[1220px]:absolute min-[1220px]:top-1/2 min-[1220px]:left-1/2 min-[1220px]:m-0 min-[1220px]:h-[1400px] min-[1220px]:w-[720px] min-[1220px]:-translate-x-1/2 min-[1220px]:-translate-y-1/2">
        <p className="mb-10 text-[18px] leading-[2]">
          <a
            href="https://atelierguised.com"
            target="_blank"
            rel="noreferrer"
            className="font-display text-[15px] font-medium tracking-[0.2em] uppercase transition-opacity duration-500 hover:opacity-40"
          >
            Online Store
          </a>
        </p>

        <div className="clearfix">
          {stockistRegions.slice(0, 2).map((region) => (
            <div key={region.region} className="mb-10 float-left w-full min-[700px]:mb-0 min-[700px]:w-[240px]">
              <h2 className="font-display mb-10 inline-block text-[20px] font-medium tracking-[0.14em] uppercase text-hygen-text">
                {region.region}
              </h2>
              <ul className="m-0 list-none p-0">
                {region.stores.map((store) => (
                  <li key={`${store.city}-${store.name}`} className="mb-6">
                    <p className="mb-[15px] text-[18px] text-hygen-muted">
                      {store.city}
                    </p>
                    {store.href ? (
                      <a
                        href={store.href}
                        className="block text-[17px] leading-[1.35] text-hygen-text transition-opacity duration-500 hover:opacity-40"
                      >
                        {store.name}
                      </a>
                    ) : (
                      <p className="text-[17px] leading-[1.35] text-hygen-text">
                        {store.name}
                      </p>
                    )}
                    {store.phone ? (
                      <p className="mt-1 text-[15px] text-hygen-muted">
                        {store.phone}
                      </p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="clear-both mt-20">
          {stockistRegions.slice(2).map((region) => (
            <div key={region.region} className="float-left w-full min-[700px]:w-[240px]">
              <h2 className="font-display mb-10 inline-block text-[20px] font-medium tracking-[0.14em] uppercase">
                {region.region}
              </h2>
              <ul className="m-0 list-none p-0">
                {region.stores.map((store) => (
                  <li key={`${store.city}-${store.name}`} className="mb-6">
                    <p className="mb-[15px] text-[18px] text-hygen-muted">
                      {store.city}
                    </p>
                    <p className="text-[17px] leading-[1.35] text-hygen-text">
                      {store.name}
                    </p>
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
