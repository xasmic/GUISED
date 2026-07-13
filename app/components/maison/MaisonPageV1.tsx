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

const campaigns = [
  {
    id: "fw",
    eyebrow: "Atelier Presentation",
    title: "Leather goods that wear your story",
    cta: "Discover",
    href: "https://atelierguised.com/collections/all",
    media: heroSlides[0],
  },
  {
    id: "ss",
    eyebrow: "New Catalogue",
    title: "Slowly & obsessively crafted",
    cta: "Explore the collection",
    href: "https://atelierguised.com/collections/latest-releases",
    media: heroSlides[2],
  },
];

const services = [
  {
    title: "Made to order",
    body: "Each piece is crafted individually after the order is placed.",
  },
  {
    title: "Care guidance",
    body: "Condition lightly. Keep away from heat. Let the hide age with you.",
  },
  {
    title: "Client services",
    body: "Questions on lead times, custom cuts, or sizing — reach the atelier.",
  },
];

export function MaisonPageV1() {
  const [open, setOpen] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => {
      setHeroIndex((i) => (i + 1) % 2);
    }, 8000);
    return () => window.clearInterval(id);
  }, []);

  const gothic = true;
  const campaignCopy = gothic
    ? [
        {
          ...campaigns[0],
          eyebrow: "Relic Presentation",
          title: "Leather goods that wear your story",
          cta: "Discover",
        },
        {
          ...campaigns[1],
          eyebrow: "The Culatta Offering",
          title: "Slowly & obsessively crafted",
          cta: "Enter the catalogue",
        },
      ]
    : campaigns;

  return (
    <div className="maison maison--gothic-v1">
      <header className="m-header">
        <button
          type="button"
          className="m-icon-btn"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <a href="/" className="m-logo" aria-label="GUISED home">
          GUISED
        </a>

        <div className="m-header__right">
          <a href="https://atelierguised.com/search" aria-label="Search">
            Search
          </a>
          <a href="https://atelierguised.com/cart" aria-label="Cart">
            Bag
          </a>
        </div>
      </header>

      {open ? (
        <div className="m-drawer">
          <nav>
            {[
              ["Shop", "https://atelierguised.com/collections/all"],
              ["Culatta", "https://atelierguised.com/collections/culatta"],
              ["Belts", "https://atelierguised.com/collections/belts"],
              ["Wallets", "https://atelierguised.com/collections/wallets"],
              ["About", "https://atelierguised.com/pages/about-us"],
              ["Contact", "https://atelierguised.com/pages/contact"],
            ].map(([label, href]) => (
              <a key={label} href={href} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}

      <main>
        {campaignCopy.map((campaign, i) => {
          const media =
            i === 0 ? heroSlides[heroIndex === 0 ? 0 : 1] : campaign.media;
          return (
            <section key={campaign.id} className="m-campaign">
              <div className="m-campaign__media">
                {media.type === "video" ? (
                  <video autoPlay muted loop playsInline poster={media.poster}>
                    <source src={media.src} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={media.src}
                    alt=""
                    fill
                    priority={i === 0}
                    sizes="100vw"
                  />
                )}
              </div>
              <div className="m-campaign__copy">
                <p>{campaign.eyebrow}</p>
                <h1>{campaign.title}</h1>
                <a href={campaign.href}>{campaign.cta}</a>
              </div>
            </section>
          );
        })}

        <section className="m-selection">
          <div className="m-selection__intro">
            <h2>
              {gothic
                ? "Explore a selection of relics from the atelier"
                : "Explore a selection of the atelier\u2019s creations"}
            </h2>
          </div>
          <div className="m-selection__grid">
            {[
              {
                title: "Bags",
                href: "https://atelierguised.com/collections/bags",
                image: latestReleases[0].image,
              },
              {
                title: "Wallets",
                href: categories[1].href,
                image: categories[1].image,
              },
              {
                title: "Belts",
                href: categories[0].href,
                image: categories[0].image,
              },
              {
                title: "Culatta",
                href: "https://atelierguised.com/collections/culatta",
                image: culattaProducts[0].image,
              },
            ].map((item) => (
              <a key={item.title} href={item.href} className="m-tile">
                <div className="m-tile__media">
                  <Image src={item.image} alt="" fill sizes="25vw" />
                </div>
                <span>{item.title}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="m-campaign m-campaign--short">
          <div className="m-campaign__media">
            <Image src={images.collab} alt="" fill sizes="100vw" />
          </div>
          <div className="m-campaign__copy">
            <p>Collaboration</p>
            <h2>Guised × Rei.Gloom</h2>
            <a href="https://atelierguised.com/collections/guised-x-rei-gloom">
              Discover
            </a>
          </div>
        </section>

        <section className="m-products">
          <div className="m-selection__intro">
            <h2>Latest releases</h2>
            <a href="https://atelierguised.com/collections/latest-releases">
              View all
            </a>
          </div>
          <div className="m-products__track">
            {latestReleases.map((product) => (
              <a key={product.id} href={product.href} className="m-product">
                <div className="m-product__media">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="240px"
                  />
                  {product.soldOut ? <span>Sold out</span> : null}
                </div>
                <h3>{product.title}</h3>
                <p>{product.price}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="m-services">
          <h2>{gothic ? "Rites of service" : "GUISED services"}</h2>
          <div className="m-services__grid">
            {services.map((service) => (
              <article key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.body}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="m-footer">
        <p className="m-logo">GUISED</p>
        <p>Singapore · Leather goods that wear your story.</p>
        <div className="m-footer__links">
          <a href="https://atelierguised.com/pages/contact">Contact</a>
          <a href="https://atelierguised.com/pages/about-us">About</a>
          <a href="https://atelierguised.com/pages/terms-of-service">
            Terms of Service
          </a>
        </div>
      </footer>
    </div>
  );
}
