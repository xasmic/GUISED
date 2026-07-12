"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { heroSlides, categories, type Product } from "@/lib/products";

export function GothicHero({
  brand = "GUISED",
  eyebrow,
  headlines,
}: {
  brand?: string;
  eyebrow?: string;
  headlines?: string[];
}) {
  const [index, setIndex] = useState(0);
  const copy = headlines ?? heroSlides.map((s) => s.headline);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, 7000);
    return () => window.clearInterval(id);
  }, []);

  const slide = heroSlides[index];

  return (
    <section className="g-hero">
      {heroSlides.map((s, i) => (
        <div
          key={s.id}
          className={`g-hero__slide ${i === index ? "is-active" : ""}`}
          aria-hidden={i !== index}
        >
          {s.type === "video" ? (
            <video className="g-hero__media" autoPlay muted loop playsInline poster={s.poster}>
              <source src={s.src} type="video/mp4" />
            </video>
          ) : (
            <Image className="g-hero__media" src={s.src} alt="" fill sizes="100vw" priority={i === 0} />
          )}
        </div>
      ))}
      <div className="g-hero__veil" />
      <div className="g-hero__frame" aria-hidden />
      <div className="g-hero__copy">
        {eyebrow ? <p className="g-eyebrow">{eyebrow}</p> : null}
        <p className="g-brand">{brand}</p>
        <h1>{copy[index] ?? slide.headline}</h1>
        <p className="g-sub">Evolving through imperfections.</p>
        <a className="g-btn" href={slide.href}>
          Enter the atelier
        </a>
      </div>
      <div className="g-hero__dots">
        {heroSlides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            aria-label={`Slide ${i + 1}`}
            className={i === index ? "is-active" : ""}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}

export function GothicHeader({ mark = "GUISED" }: { mark?: string }) {
  return (
    <header className="g-header">
      <a href="/" className="g-header__mark">
        {mark}
      </a>
      <nav>
        <a href="https://atelierguised.com/collections/all">Shop</a>
        <a href="https://atelierguised.com/pages/about-us">About</a>
        <a href="https://atelierguised.com/pages/contact">Contact</a>
      </nav>
    </header>
  );
}

export function GothicCategories() {
  return (
    <section className="g-cats">
      {categories.map((c) => (
        <a key={c.title} href={c.href} className="g-cat">
          <Image src={c.image} alt="" fill sizes="50vw" />
          <div>
            <h2>{c.title}</h2>
            <span>Shop now</span>
          </div>
        </a>
      ))}
    </section>
  );
}

export function GothicRail({
  title,
  products,
  viewAllHref,
}: {
  title: string;
  products: Product[];
  viewAllHref?: string;
}) {
  return (
    <section className="g-rail">
      <div className="g-rail__head">
        <h2>{title}</h2>
        {viewAllHref ? <a href={viewAllHref}>View all</a> : null}
      </div>
      <div className="g-rail__track">
        {products.map((p) => (
          <article key={p.id} className="g-card">
            <a href={p.href} className="g-card__media">
              <Image src={p.image} alt={p.title} fill sizes="280px" />
              {p.soldOut ? <span>Sold out</span> : null}
            </a>
            <h3>
              <a href={p.href}>{p.title}</a>
            </h3>
            <p>{p.price}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function GothicManifesto({
  title,
  body,
  image,
}: {
  title: string;
  body: string[];
  image: string;
}) {
  return (
    <section className="g-manifesto">
      <div className="g-manifesto__copy">
        <h2>{title}</h2>
        {body.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <div className="g-manifesto__media">
        <Image src={image} alt="" fill sizes="50vw" />
      </div>
    </section>
  );
}

export function GothicFooter() {
  return (
    <footer className="g-footer">
      <p className="g-brand">GUISED</p>
      <p>Leather goods that wear your story.</p>
      <p className="g-copy">© {new Date().getFullYear()} GUISED</p>
    </footer>
  );
}
