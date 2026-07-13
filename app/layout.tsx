import type { Metadata } from "next";
import {
  Baskervville,
  Bodoni_Moda,
  Cinzel,
  Cormorant_Garamond,
  IBM_Plex_Serif,
  Outfit,
  Roboto_Serif,
} from "next/font/google";
import "./globals.css";

const robotoSerif = Roboto_Serif({
  variable: "--font-roboto-serif",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const baskervville = Baskervville({
  variable: "--font-baskervville",
  subsets: ["latin"],
  weight: "400",
});

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm-plex-serif",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "GUISED — Design Versions",
  description:
    "Classic, gothic, and maison editorial design variations of the GUISED leather atelier homepage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${robotoSerif.variable} ${baskervville.variable} ${ibmPlexSerif.variable} ${cinzel.variable} ${cormorant.variable} ${bodoni.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
