export type Market = {
  country: string;
  currency: string;
  /** Multiply SGD base amount by this rate */
  rateFromSgd: number;
  symbol: string;
};

/** Approximate display rates from SGD — for archive preview, not live FX. */
export const markets: Market[] = [
  { country: "Singapore", currency: "SGD", rateFromSgd: 1, symbol: "S$" },
  { country: "Australia", currency: "AUD", rateFromSgd: 1.12, symbol: "A$" },
  { country: "Austria", currency: "EUR", rateFromSgd: 0.68, symbol: "€" },
  { country: "Belgium", currency: "EUR", rateFromSgd: 0.68, symbol: "€" },
  { country: "Bulgaria", currency: "BGN", rateFromSgd: 1.33, symbol: "лв" },
  { country: "Canada", currency: "CAD", rateFromSgd: 1.02, symbol: "C$" },
  { country: "China", currency: "CNY", rateFromSgd: 5.35, symbol: "¥" },
  { country: "Croatia", currency: "EUR", rateFromSgd: 0.68, symbol: "€" },
  { country: "Cyprus", currency: "EUR", rateFromSgd: 0.68, symbol: "€" },
  { country: "Czechia", currency: "CZK", rateFromSgd: 16.8, symbol: "Kč" },
  { country: "Denmark", currency: "DKK", rateFromSgd: 5.07, symbol: "kr" },
  { country: "Finland", currency: "EUR", rateFromSgd: 0.68, symbol: "€" },
  { country: "France", currency: "EUR", rateFromSgd: 0.68, symbol: "€" },
  { country: "Germany", currency: "EUR", rateFromSgd: 0.68, symbol: "€" },
  { country: "Hong Kong", currency: "HKD", rateFromSgd: 5.78, symbol: "HK$" },
  { country: "Ireland", currency: "EUR", rateFromSgd: 0.68, symbol: "€" },
  { country: "Italy", currency: "EUR", rateFromSgd: 0.68, symbol: "€" },
  { country: "Japan", currency: "JPY", rateFromSgd: 110, symbol: "¥" },
  { country: "Malaysia", currency: "MYR", rateFromSgd: 3.45, symbol: "RM" },
  { country: "Netherlands", currency: "EUR", rateFromSgd: 0.68, symbol: "€" },
  { country: "New Zealand", currency: "NZD", rateFromSgd: 1.22, symbol: "NZ$" },
  { country: "Norway", currency: "NOK", rateFromSgd: 7.85, symbol: "kr" },
  { country: "Poland", currency: "PLN", rateFromSgd: 2.9, symbol: "zł" },
  { country: "Portugal", currency: "EUR", rateFromSgd: 0.68, symbol: "€" },
  { country: "South Korea", currency: "KRW", rateFromSgd: 1020, symbol: "₩" },
  { country: "Spain", currency: "EUR", rateFromSgd: 0.68, symbol: "€" },
  { country: "Sweden", currency: "SEK", rateFromSgd: 7.55, symbol: "kr" },
  { country: "Switzerland", currency: "CHF", rateFromSgd: 0.65, symbol: "CHF" },
  { country: "Taiwan", currency: "TWD", rateFromSgd: 23.5, symbol: "NT$" },
  { country: "Thailand", currency: "THB", rateFromSgd: 25.5, symbol: "฿" },
  { country: "United Kingdom", currency: "GBP", rateFromSgd: 0.58, symbol: "£" },
  { country: "United States", currency: "USD", rateFromSgd: 0.74, symbol: "$" },
];

export const DEFAULT_MARKET =
  markets.find((m) => m.country === "Singapore") ?? markets[0];

export const CURRENCY_STORAGE_KEY = "guised-market-country";

export function findMarketByCountry(country: string): Market {
  return markets.find((m) => m.country === country) ?? DEFAULT_MARKET;
}

/** Parse a base SGD price string like "$990.00" into a number. */
export function parseBasePrice(price: string): number | null {
  const match = price.replace(/,/g, "").match(/(\d+(?:\.\d{1,2})?)/);
  if (!match) return null;
  return Number(match[1]);
}

export function formatConvertedPrice(
  basePrice: string,
  market: Market,
): { whole: string; cents: string | null; display: string } {
  const amount = parseBasePrice(basePrice);
  if (amount == null) {
    return { whole: basePrice, cents: null, display: basePrice };
  }

  const converted = amount * market.rateFromSgd;
  const noCents = market.currency === "JPY" || market.currency === "KRW";

  if (noCents) {
    const rounded = Math.round(converted).toLocaleString("en-US");
    return {
      whole: rounded,
      cents: null,
      display: `${market.symbol}${rounded}`,
    };
  }

  const fixed = converted.toFixed(2);
  const [whole, cents] = fixed.split(".");
  const wholeFmt = Number(whole).toLocaleString("en-US");
  return {
    whole: wholeFmt,
    cents,
    display: `${market.symbol}${wholeFmt}.${cents}`,
  };
}
