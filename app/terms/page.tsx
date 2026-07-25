import type { Metadata } from "next";
import { termsOfService } from "@/lib/terms";

export const metadata: Metadata = {
  title: "Terms of Service — GUISED",
  description:
    "Terms and conditions for Guised — orders, shipping, refunds, warranty, and use of our website and services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-svh bg-hygen-bg text-hygen-text">
      <main className="mx-auto w-[min(760px,92vw)] py-16 min-[700px]:py-20">
        <div className="mb-14 border-b border-hygen-text/10 pb-12">
          <p className="font-display m-0 mb-5 text-[12px] font-medium tracking-[0.24em] uppercase text-hygen-muted">
            Legal
          </p>
          <h1 className="font-display m-0 text-[32px] font-medium leading-[1.2] tracking-[0.06em] min-[700px]:text-[40px]">
            {termsOfService.title}
          </h1>
          <p className="font-body mt-5 m-0 text-[18px] leading-[1.5] text-hygen-text/85 min-[700px]:text-[20px]">
            {termsOfService.subtitle}
          </p>
          <p className="font-body mt-8 m-0 max-w-[42rem] text-[17px] leading-[1.8] text-hygen-text/80 min-[700px]:text-[18px]">
            {termsOfService.intro}
          </p>
        </div>

        <div className="space-y-12 min-[700px]:space-y-14">
          {termsOfService.sections.map((section) => (
            <section
              key={section.number}
              className="border-t border-hygen-text/10 pt-10 first:border-t-0 first:pt-0"
            >
              <div className="mb-6 flex items-baseline gap-4">
                <span className="font-display shrink-0 text-[12px] font-medium tracking-[0.2em] text-hygen-muted">
                  {String(section.number).padStart(2, "0")}
                </span>
                <h2 className="font-display m-0 text-[20px] font-medium leading-[1.35] tracking-[0.08em] min-[700px]:text-[22px]">
                  {section.title}
                </h2>
              </div>
              <div className="space-y-5 min-[700px]:pl-10">
                {section.paragraphs?.map((p) => (
                  <p
                    key={p}
                    className="font-body m-0 text-[16px] leading-[1.85] text-hygen-text/85 min-[700px]:text-[17px]"
                  >
                    {p.includes("atelierguise@gmail.com") ? (
                      <>
                        {p.split("atelierguise@gmail.com")[0]}
                        <a
                          href="mailto:atelierguise@gmail.com"
                          className="underline decoration-hygen-text/30 underline-offset-2 transition-opacity duration-500 hover:opacity-70"
                        >
                          atelierguise@gmail.com
                        </a>
                        {p.split("atelierguise@gmail.com")[1]}
                      </>
                    ) : (
                      p
                    )}
                  </p>
                ))}
                {section.items ? (
                  <ul className="m-0 list-none space-y-2.5 p-0">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="relative pl-5 text-[16px] leading-[1.75] text-hygen-text/85 before:absolute before:left-0 before:top-[0.72em] before:h-px before:w-2.5 before:bg-hygen-muted min-[700px]:text-[17px]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
