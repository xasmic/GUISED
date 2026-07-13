"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  categories,
  culattaProducts,
  heroSlides,
  images,
  latestReleases,
} from "@/lib/products";

export function ReliquaryPage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, 7200);
    return () => window.clearInterval(id);
  }, []);

  const slide = heroSlides[index];

  return (
    <div className="reliquary2">
      <header className="r2-header">
        <button type="button" className="r2-menu" aria-label="Menu">
          <span />
          <span />
          <span />
        </button>
        <a href="/" className="r2-mark">
          GUISED
        </a>
        <div className="r2-actions">
          <a href="https://atelierguised.com/search">Search</a>
          <a href="https://atelierguised.com/cart">Bag</a>
        </div>
      </header>

      <section className="r2-hero">
        {heroSlides.map((s, i) => (
          <div
            key={s.id}
            className={`r2-hero__slide ${i === index ? "is-active" : ""}`}
            aria-hidden={i !== index}
          >
            {s.type === "video" ? (
              <video autoPlay muted loop playsInline poster={s.poster}>
                <source src={s.src} type="video/mp4" />
              </video>
            ) : (
              <Image src={s.src} alt="" fill priority={i === 0} sizes="100vw" />
            )}
          </div>
        ))}
        <div className="r2-hero__veil" />
        <div className="r2-hero__ornament" aria-hidden>
          <span />
          <span />
        </div>
        <div className="r2-hero__copy">
          <p className="r2-kicker">Reliquary · II</p>
          <h1>GUISED</h1>
          <p className="r2-line">{slide.headline}</p>
          <p className="r2-sub">Leather kept like a remnant. Worn like a vow.</p>
          <a className="r2-cta" href={slide.href}>
            Discover
          </a>
        </div>
      </section>

      <section className="r2-campaign">
        <div className="r2-campaign__media">
          <Image src={images.craft} alt="" fill sizes="100vw" />
        </div>
        <div className="r2-campaign__copy">
          <p className="r2-kicker">The Culatta Offering</p>
          <h2>Slowly & obsessively crafted</h2>
          <p>
            Dense horse culatta, hand-cut and fully handsewn. Every scar stays.
            Every irregularity becomes the relic.
          </p>
          <a
            className="r2-cta r2-cta--ghost"
            href="https://atelierguised.com/collections/culatta"
          >
            Explore Culatta
          </a>
        </div>
      </section>

      <section className="r2-relics">
        <div className="r2-section-head">
          <h2>Relics of the atelier</h2>
          <p>Latest releases kept under glass.</p>
        </div>
        <div className="r2-relics__grid">
          {latestReleases.slice(0, 4).map((product) => (
            <a key={product.id} href={product.href} className="r2-relic">
              <div className="r2-relic__media">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 900px) 50vw, 25vw"
                />
                {product.soldOut ? <span>Sold out</span> : null}
              </div>
              <h3>{product.title}</h3>
              <p>{product.price}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="r2-split">
        {categories.map((cat) => (
          <a key={cat.title} href={cat.href} className="r2-split__panel">
            <Image src={cat.image} alt="" fill sizes="50vw" />
            <div>
              <h2>{cat.title}</h2>
              <span>Shop now</span>
            </div>
          </a>
        ))}
      </section>

      <section className="r2-altar">
        <div className="r2-altar__copy">
          <p className="r2-kicker">Handcrafted with intention</p>
          <h2>Built to endure the rite of wear</h2>
          <p>
            Ethically sourced hides. One continuous piece of culatta where
            possible. A companion meant to scar with you.
          </p>
          <a
            className="r2-cta"
            href="https://atelierguised.com/pages/about-us"
          >
            About the maison
          </a>
        </div>
        <div className="r2-altar__rail">
          {culattaProducts.slice(0, 3).map((product) => (
            <a key={product.id} href={product.href} className="r2-altar__item">
              <Image src={product.image} alt={product.title} fill sizes="200px" />
            </a>
          ))}
        </div>
      </section>

      <footer className="r2-footer">
        <p className="r2-mark">GUISED</p>
        <p>Leather goods that wear your story.</p>
      </footer>
    </div>
  );
}
