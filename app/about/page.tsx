import type { Metadata } from "next";
import Link from "next/link";
import { aboutPage } from "@/lib/site";

export const metadata: Metadata = {
  title: "About — GUISED",
  description:
    "Born in Singapore in 2022, Guised explores horse culatta, identity, and leather as a medium for storytelling.",
};

export default function AboutPage() {
  return (
    <div className="min-h-svh bg-hygen-bg text-hygen-text">
      <header className="border-b border-hygen-text/10">
        <div className="mx-auto px-6 py-7 min-[700px]:px-10 min-[700px]:py-8">
          <Link
            href="/"
            className="font-display text-[15px] font-medium tracking-[0.32em] uppercase text-hygen-text transition-opacity duration-500 hover:opacity-50"
          >
            GUISED
          </Link>
        </div>
      </header>

      <main className="mx-auto w-[min(760px,92vw)] py-[104px] min-[700px]:py-[112px]">
        <p className="font-display m-0 mb-5 text-[12px] font-medium tracking-[0.24em] uppercase text-hygen-muted">
          {aboutPage.eyebrow}
        </p>
        <h1 className="font-display m-0 mb-12 border-b border-hygen-text/10 pb-10 text-[32px] font-medium tracking-[0.1em] uppercase min-[700px]:mb-14 min-[700px]:pb-12 min-[700px]:text-[40px]">
          {aboutPage.title}
        </h1>

        <div className="font-body space-y-7 text-[17px] leading-[1.85] text-hygen-text/85 min-[700px]:space-y-8 min-[700px]:text-[18px]">
          {aboutPage.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="m-0">
              {paragraph}
            </p>
          ))}
        </div>
      </main>
    </div>
  );
}
