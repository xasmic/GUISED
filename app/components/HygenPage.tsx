"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import {
  about,
  concept,
  heroCopy,
  heroVideo,
  navLinks,
  parallaxImages,
  seasons,
  stockistRegions,
} from "@/lib/site";

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

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("concept");

  useEffect(() => {
    const ids = ["concept", "about", "collection", "stockist"];
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

  return (
    <>
      <button
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="site-menu"
        onClick={() => setMenuOpen((o) => !o)}
        className="fixed top-[28px] left-[28px] z-[10001] flex h-11 w-11 items-center justify-center mix-blend-difference min-[1025px]:top-[30px] min-[1025px]:left-[45px]"
      >
        <span className="relative block h-[14px] w-[22px]" aria-hidden>
          <span
            className={`absolute left-0 block h-[1.5px] w-full bg-white transition-transform duration-300 ease-out ${
              menuOpen ? "top-[6px] rotate-45" : "top-0"
            }`}
          />
          <span
            className={`absolute left-0 top-[6px] block h-[1.5px] w-full bg-white transition-opacity duration-200 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 block h-[1.5px] w-full bg-white transition-transform duration-300 ease-out ${
              menuOpen ? "top-[6px] -rotate-45" : "top-[12px]"
            }`}
          />
        </span>
      </button>

      <nav
        className={`font-display fixed top-0 right-0 z-[10000] flex items-start justify-end gap-5 px-4 pt-7 transition-opacity duration-300 min-[700px]:gap-5 min-[700px]:px-[45px] min-[700px]:pt-8 ${
          menuOpen ? "pointer-events-none opacity-0" : "opacity-100"
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
        className={`fixed inset-0 z-[10000] flex flex-col bg-hygen-bg/95 px-10 pt-28 pb-12 backdrop-blur-sm transition-[opacity,visibility] duration-300 ${
          menuOpen
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
      >
        <a
          href="#concept"
          onClick={() => setMenuOpen(false)}
          className="font-display mb-12 text-[28px] font-medium tracking-[0.28em] text-hygen-text"
        >
          GUISED
        </a>
        <nav className="font-display flex flex-col gap-6" aria-label="Menu">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              {...("external" in link && link.external
                ? { target: "_blank", rel: "noreferrer" }
                : undefined)}
              className={`text-[15px] font-medium tracking-[0.18em] uppercase text-hygen-text transition-opacity duration-500 hover:opacity-50 ${
                active === link.id ? "opacity-100" : "opacity-70"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="mt-auto flex gap-6">
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
      className="relative h-[700px] w-full bg-hygen-bg text-hygen-text"
    >
      <SectionSocial />
      <div className="absolute top-1/2 left-1/2 w-[min(620px,90vw)] -translate-x-1/2 -translate-y-1/2">
        <h1 className="font-display mb-8 text-center text-[34px] font-medium tracking-[0.22em] text-hygen-text min-[1320px]:text-[42px]">
          {concept.title}
        </h1>
        <p className="text-[20px] font-normal leading-[1.65] text-hygen-text">
          {concept.body}
        </p>
        <p className="mt-6 text-[17px] font-normal leading-[1.75] text-hygen-muted">
          {concept.bodySecondary}
        </p>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-[780px] w-full bg-hygen-bg text-hygen-text"
    >
      <SectionSocial />
      <div className="mx-auto grid min-h-[780px] w-[min(960px,92vw)] items-center gap-12 px-0 py-28 min-[900px]:grid-cols-2 min-[900px]:gap-16">
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-hygen-media">
          <Image
            src={parallaxImages.mid}
            alt="Atelier craft"
            fill
            sizes="(min-width: 900px) 40vw, 92vw"
            className="object-cover"
            unoptimized
          />
        </div>
        <div>
          <p className="font-display mb-4 text-[12px] font-medium tracking-[0.22em] uppercase text-hygen-muted">
            {about.eyebrow}
          </p>
          <h2 className="font-display mb-8 text-[28px] font-medium tracking-[0.2em] uppercase text-hygen-text min-[1320px]:text-[34px]">
            {about.title}
          </h2>
          <p className="text-[19px] font-normal leading-[1.7] text-hygen-text">
            {about.body}
          </p>
          <p className="mt-6 text-[17px] font-normal leading-[1.75] text-hygen-muted">
            {about.bodySecondary}
          </p>
          <dl className="mt-12 space-y-5 border-t border-white/10 pt-8">
            {about.details.map((row) => (
              <div key={row.label} className="grid gap-1 min-[500px]:grid-cols-[140px_1fr]">
                <dt className="font-display text-[11px] font-medium tracking-[0.18em] uppercase text-hygen-muted">
                  {row.label}
                </dt>
                <dd className="m-0 text-[17px] leading-[1.45] text-hygen-text">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
          <a
            href="https://atelierguised.com/pages/about-us"
            className="font-display mt-10 inline-block text-[12px] font-medium tracking-[0.18em] uppercase text-hygen-text transition-opacity duration-500 hover:opacity-50"
          >
            Read more
          </a>
        </div>
      </div>
    </section>
  );
}

function ParallaxBand({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-svh w-full overflow-hidden bg-hygen-media">
      <div
        className="absolute inset-0 bg-cover bg-center bg-scroll min-[1025px]:bg-fixed"
        style={{ backgroundImage: `url(${src})` }}
        role="img"
        aria-label={alt}
      />
    </div>
  );
}

function CollectionSection() {
  const [seasonIndex, setSeasonIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const season = seasons[seasonIndex];
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
    setSlideIndex(0);
  }, [seasonIndex]);

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
        <ul className="list-none p-0 m-0">
          {seasons.map((s, i) => (
            <li key={s.id} className="m-0">
              <button
                type="button"
                onClick={() => setSeasonIndex(i)}
                className={`inline-block text-hygen-text transition-[opacity] duration-500 hover:opacity-50 ${
                  i === seasonIndex ? "opacity-100" : "opacity-70"
                }`}
              >
                {s.label}
              </button>
            </li>
          ))}
        </ul>
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
          aria-label="Lookbook index"
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
    <main className="min-w-0 bg-hygen-media text-hygen-text min-[1220px]:min-w-[1220px]">
      <SiteHeader />
      <HeroBand />
      <ConceptSection />
      <AboutSection />
      <ParallaxBand src={parallaxImages.mid} alt="Craft" />
      <CollectionSection />
      <ParallaxBand src={parallaxImages.lower} alt="Collaboration" />
      <StockistSection />
    </main>
  );
}
