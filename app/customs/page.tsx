import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/products";

export const metadata: Metadata = {
  title: "Customs — GUISED",
  description:
    "Enquire about a custom Guised piece — made slowly in the atelier, one hide at a time.",
};

const mailSubject = encodeURIComponent("Custom order enquiry");
const mailBody = encodeURIComponent(
  `Hi Guised,

I would like to enquire about a custom order.

Piece type:
Dimensions / size:
Leather or finish preferences:
Timeline:
Additional notes:
`,
);

export default function CustomsPage() {
  const mailto = `mailto:[company email]?subject=${mailSubject}&body=${mailBody}`;

  return (
    <div className="min-h-svh bg-hygen-bg text-hygen-text">
      <main className="grid min-h-svh min-[900px]:grid-cols-2">
        <section className="relative flex min-h-[52svh] flex-col justify-center overflow-hidden bg-hygen-bg px-8 py-28 min-[700px]:px-14 min-[900px]:min-h-svh min-[900px]:px-16">
          <Image
            src={images.craft}
            alt=""
            fill
            priority
            sizes="(min-width: 900px) 50vw, 100vw"
            className="object-cover object-center opacity-[0.42]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(16,14,16,0.92)_0%,rgba(16,14,16,0.72)_48%,rgba(16,14,16,0.5)_100%)]" />
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[min(70vw,28rem)] w-[min(70vw,22rem)] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-hygen-text/[0.08]"
            aria-hidden
          />

          <Link
            href="/"
            className="font-display absolute top-7 left-6 z-20 text-[15px] font-medium tracking-[0.32em] uppercase text-hygen-text transition-opacity duration-500 hover:opacity-50 min-[700px]:top-8 min-[700px]:left-10"
          >
            GUISED
          </Link>

          <h1 className="font-display absolute top-1/2 left-4 z-10 -translate-y-1/2 [writing-mode:vertical-rl] rotate-180 text-[13px] font-medium tracking-[0.42em] uppercase text-hygen-text/90 min-[700px]:left-7 min-[700px]:text-[15px] min-[900px]:left-9">
            Customs
          </h1>

          <div className="relative z-10 mx-auto max-w-[18rem] pl-8 text-center min-[700px]:pl-10">
            <p className="font-body m-0 text-[18px] leading-[1.7] tracking-[0.03em] text-hygen-text/85 min-[700px]:text-[20px]">
              Custom pieces are made slowly in the atelier — one hide, one wearer,
              one set of habits. Tell us what you have in mind and we will reply
              by email.
            </p>
            <p className="font-display mt-10 m-0 text-[11px] font-medium tracking-[0.2em] uppercase text-hygen-muted">
              Atelier · Singapore
            </p>
          </div>
        </section>

        <section className="relative flex min-h-[60svh] items-center bg-hygen-text px-8 py-16 text-hygen-bg min-[700px]:px-14 min-[900px]:min-h-svh min-[900px]:px-16 min-[900px]:py-24">
          <div className="w-full max-w-md">
            <p className="font-display m-0 mb-4 text-[11px] font-medium tracking-[0.24em] uppercase text-hygen-bg/55">
              Enquiry
            </p>
            <h2 className="font-display m-0 mb-5 text-[24px] font-medium tracking-[0.08em] min-[700px]:text-[28px]">
              Start a custom order
            </h2>
            <p className="font-body m-0 mb-6 text-[17px] leading-[1.7] text-hygen-bg/78">
              Email us with the piece you want, approximate dimensions, leather
              preferences, and your timeline. We will follow up with availability
              and next steps.
            </p>
            <ul className="font-body m-0 mb-8 list-none space-y-2.5 p-0 text-[16px] leading-[1.6] text-hygen-bg/72">
              <li>What you would like made</li>
              <li>Size or fit notes</li>
              <li>Leather, colour, or hardware preferences</li>
              <li>When you need it by</li>
            </ul>
            <a
              href={mailto}
              className="font-display inline-flex items-center gap-4 bg-hygen-bg px-7 py-3.5 text-[12px] font-medium tracking-[0.2em] uppercase text-hygen-text transition-opacity duration-500 hover:opacity-70"
            >
              Email us
              <span className="block h-px w-6 bg-hygen-text/70" aria-hidden />
            </a>
            <p className="font-display mt-4 m-0 text-[11px] tracking-[0.14em] uppercase text-hygen-bg/55">
              [company email]
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
