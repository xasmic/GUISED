"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { heroSlides } from "@/lib/products";

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, 6500);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="hero" aria-label="Featured">
      {heroSlides.map((slide, i) => (
        <div
          key={slide.id}
          className={`hero-slide ${i === index ? "is-active" : ""}`}
          aria-hidden={i !== index}
        >
          {slide.type === "video" ? (
            <video
              className="hero-media"
              autoPlay
              muted
              loop
              playsInline
              poster={slide.poster}
            >
              <source src={slide.src} type="video/mp4" />
            </video>
          ) : (
            <Image
              className="hero-media"
              src={slide.src}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
            />
          )}
          <div className="hero-veil" />
          <div className="hero-copy">
            <p className="hero-brand">GUISED</p>
            <h1>{slide.headline}</h1>
            <p className="hero-sub">{slide.subline}</p>
            <a className="btn btn-light" href={slide.href}>
              {slide.cta}
            </a>
          </div>
        </div>
      ))}

      <div className="hero-dots" role="tablist" aria-label="Hero slides">
        {heroSlides.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Slide ${i + 1}`}
            className={i === index ? "is-active" : ""}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}
