import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/app/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — GUISED",
  description:
    "Get in touch with Guised — custom orders, stockists, and atelier enquiries.",
};

export default function ContactPage() {
  return (
    <div className="min-h-svh bg-hygen-media text-hygen-text">
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="flex items-center justify-between px-6 py-7 min-[700px]:px-10 min-[700px]:py-8">
          <Link
            href="/"
            className="font-display text-[15px] font-medium tracking-[0.32em] uppercase text-hygen-text transition-opacity duration-500 hover:opacity-50"
          >
            GUISED
          </Link>
          <Link
            href="/"
            className="font-display text-[11px] font-medium tracking-[0.18em] uppercase text-hygen-muted transition-opacity duration-500 hover:opacity-70 min-[900px]:text-hygen-shop-text/55 min-[900px]:hover:text-hygen-shop-text"
          >
            ← Home
          </Link>
        </div>
      </header>

      <main className="grid min-h-svh min-[900px]:grid-cols-2">
        <section className="relative flex min-h-[52svh] flex-col justify-center overflow-hidden bg-hygen-media px-8 py-28 min-[700px]:px-14 min-[900px]:min-h-svh min-[900px]:px-16">
          <Image
            src="/images/hygen/contact-panel.png"
            alt=""
            fill
            priority
            sizes="(min-width: 900px) 50vw, 100vw"
            className="object-cover object-[35%_center] opacity-45"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-hygen-media via-hygen-media/80 to-hygen-media/55" />
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[min(70vw,28rem)] w-[min(70vw,22rem)] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-hygen-text/[0.07]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute left-1/2 top-[18%] h-[min(55vh,22rem)] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-hygen-text/15 to-transparent"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute left-[18%] top-1/2 h-px w-[min(40vw,14rem)] -translate-y-1/2 bg-gradient-to-r from-transparent via-hygen-text/15 to-transparent"
            aria-hidden
          />

          <h1 className="font-display absolute top-1/2 left-4 z-10 -translate-y-1/2 [writing-mode:vertical-rl] rotate-180 text-[13px] font-medium tracking-[0.42em] uppercase text-hygen-text/90 min-[700px]:left-7 min-[700px]:text-[15px] min-[900px]:left-9">
            Contact
          </h1>

          <div className="relative z-10 mx-auto max-w-[18rem] pl-8 text-center min-[700px]:pl-10">
            <p className="font-body m-0 text-[18px] leading-[1.7] tracking-[0.03em] text-hygen-text/85 min-[700px]:text-[20px]">
              If you have any questions, please contact us from the contact
              form.
            </p>
            <p className="font-display mt-10 m-0 text-[11px] font-medium tracking-[0.2em] uppercase text-hygen-muted">
              Atelier · Singapore
            </p>
          </div>
        </section>

        <section className="relative flex min-h-[60svh] items-center bg-[#f3eee6] px-8 py-16 text-hygen-shop-text min-[700px]:px-14 min-[900px]:min-h-svh min-[900px]:px-16 min-[900px]:py-24">
          <div className="w-full">
            <ContactForm />
          </div>
        </section>
      </main>
    </div>
  );
}
