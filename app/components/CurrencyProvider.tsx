"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  CURRENCY_STORAGE_KEY,
  DEFAULT_MARKET,
  findMarketByCountry,
  type Market,
} from "@/lib/currency";

type CurrencyContextValue = {
  market: Market;
  setCountry: (country: string) => void;
};

const CurrencyContext = createContext<CurrencyContextValue | null>(null);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [market, setMarket] = useState<Market>(DEFAULT_MARKET);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(CURRENCY_STORAGE_KEY);
      if (saved) setMarket(findMarketByCountry(saved));
    } catch {
      /* ignore */
    }
  }, []);

  const setCountry = (country: string) => {
    const next = findMarketByCountry(country);
    setMarket(next);
    try {
      localStorage.setItem(CURRENCY_STORAGE_KEY, next.country);
    } catch {
      /* ignore */
    }
  };

  return (
    <CurrencyContext.Provider value={{ market, setCountry }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) {
    throw new Error("useCurrency must be used within CurrencyProvider");
  }
  return ctx;
}
