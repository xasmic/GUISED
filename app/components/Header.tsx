"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "https://atelierguised.com/collections/all" },
  { label: "Contact", href: "https://atelierguised.com/pages/contact" },
  { label: "About", href: "https://atelierguised.com/pages/about-us" },
  {
    label: "Terms of Service",
    href: "https://atelierguised.com/pages/terms-of-service",
  },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="site-header__inner">
        <button
          type="button"
          className="icon-btn menu-btn"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>

        <a href="/" className="brand" aria-label="GUISED home">
          GUISED
        </a>

        <nav className="desktop-nav" aria-label="Primary">
          {links.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <span className="currency">SGD</span>
          <a
            className="icon-btn"
            href="https://atelierguised.com/search"
            aria-label="Search"
          >
            <SearchIcon />
          </a>
          <a
            className="icon-btn"
            href="https://atelierguised.com/cart"
            aria-label="Cart"
          >
            <BagIcon />
          </a>
        </div>
      </div>

      <div className={`mobile-nav ${open ? "is-open" : ""}`} hidden={!open}>
        <nav aria-label="Mobile">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M16.5 16.5L21 21"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 8h12l-.8 12.2a1 1 0 0 1-1 .8H7.8a1 1 0 0 1-1-.8L6 8Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M9 8V7a3 3 0 0 1 6 0v1"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}
