"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { markets } from "@/lib/currency";
import { useCurrency } from "./CurrencyProvider";

export function CurrencySelector() {
  const { market, setCountry } = useCurrency();
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("");
  const [hoverCountry, setHoverCountry] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [panelPos, setPanelPos] = useState({ top: 0, right: 0 });
  const rootRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const filtered = useMemo(() => {
    const q = filter.trim().toLowerCase();
    const list = [...markets].sort((a, b) =>
      a.country.localeCompare(b.country),
    );
    if (!q) return list;
    return list.filter(
      (m) =>
        m.country.toLowerCase().includes(q) ||
        m.currency.toLowerCase().includes(q),
    );
  }, [filter]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open || !rootRef.current) return;

    const updatePos = () => {
      const rect = rootRef.current!.getBoundingClientRect();
      setPanelPos({
        top: rect.bottom + 14,
        right: window.innerWidth - rect.right,
      });
    };
    updatePos();

    searchRef.current?.focus();
    const onPointer = (e: MouseEvent) => {
      const target = e.target as Node;
      if (rootRef.current?.contains(target)) return;
      if ((target as Element).closest?.("[data-currency-panel]")) return;
      setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("resize", updatePos);
    window.addEventListener("scroll", updatePos, true);
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("resize", updatePos);
      window.removeEventListener("scroll", updatePos, true);
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const panel =
    open && mounted
      ? createPortal(
          <div
            data-currency-panel
            className="currency-panel fixed z-[10050] w-[272px] overflow-hidden rounded-[4px] bg-white text-[#111] shadow-[0_8px_28px_rgba(0,0,0,0.18)]"
            style={{ top: panelPos.top, right: panelPos.right }}
            role="listbox"
            aria-label="Select country"
          >
            <div className="px-3.5 pt-3.5 pb-2.5">
              <label className="relative flex items-center gap-2.5 border border-[#1a1a1a] bg-[#f2f2f2] px-3 py-2.5">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                  className="shrink-0 text-[#1a1a1a]/70"
                >
                  <circle
                    cx="11"
                    cy="11"
                    r="6.25"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M16.2 16.2L20.5 20.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="sr-only">Search countries</span>
                <input
                  ref={searchRef}
                  type="search"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  placeholder="Search"
                  className="font-body min-w-0 flex-1 border-0 bg-transparent text-[15px] leading-none text-[#111] outline-none placeholder:text-[#9a9a9a]"
                />
              </label>
            </div>

            <ul className="currency-panel__list m-0 max-h-[300px] list-none overflow-y-auto px-2 pb-2.5 pt-0.5">
              {filtered.map((item) => {
                const active = item.country === market.country;
                const hovered = item.country === hoverCountry;
                return (
                  <li key={item.country} className="m-0">
                    <button
                      type="button"
                      role="option"
                      aria-selected={active}
                      onMouseEnter={() => setHoverCountry(item.country)}
                      onMouseLeave={() => setHoverCountry(null)}
                      onClick={() => {
                        setCountry(item.country);
                        setOpen(false);
                        setFilter("");
                      }}
                      className={`font-body block w-full rounded-[6px] px-3 py-2.5 text-left text-[15px] leading-[1.4] text-[#111] transition-colors duration-150 ${
                        active || hovered ? "bg-[#eaeaea]" : "bg-transparent"
                      }`}
                    >
                      {item.country}
                    </button>
                  </li>
                );
              })}
              {filtered.length === 0 ? (
                <li className="font-body px-3 py-3 text-[14px] text-[#9a9a9a]">
                  No matches
                </li>
              ) : null}
            </ul>
          </div>,
          document.body,
        )
      : null;

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-label={`Currency ${market.currency}`}
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={() => {
          setOpen((o) => !o);
          setFilter("");
        }}
        className="font-body flex items-center gap-1.5 text-[13px] leading-none tracking-[0.04em] text-white mix-blend-difference transition-opacity duration-500 hover:opacity-50"
      >
        {market.currency}
        <svg
          width="8"
          height="5"
          viewBox="0 0 8 5"
          fill="none"
          aria-hidden
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        >
          <path
            d="M1 1L4 4L7 1"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {panel}
    </div>
  );
}
