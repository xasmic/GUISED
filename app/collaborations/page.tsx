import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  collaborations,
  collaborationsIntro,
  collaborationsNote,
  type Collaboration,
} from "@/lib/collaborations";

export const metadata: Metadata = {
  title: "Collaborations — GUISED",
  description:
    "Guised × Rei Gloom Belt (Abstract) and forthcoming collaborations.",
};

function DetailSections({ collab }: { collab: Collaboration }) {
  const hasDetail =
    collab.about ||
    collab.production ||
    collab.specifications ||
    collab.features ||
    collab.materialNotes ||
    collab.care;

  if (!hasDetail) return null;

  return (
    <div className="mx-auto w-[min(760px,92vw)] border-t border-hygen-text/10 py-14 min-[700px]:py-20">
      {collab.about?.length ? (
        <section className="mb-14 last:mb-0 min-[700px]:mb-16">
          <h3 className="font-display m-0 mb-6 text-[12px] font-medium tracking-[0.24em] uppercase text-hygen-muted">
            About
          </h3>
          <div className="font-body space-y-5 text-[17px] leading-[1.85] text-hygen-text/85 min-[700px]:text-[18px]">
            {collab.about.map((p) => (
              <p key={p.slice(0, 48)} className="m-0">
                {p}
              </p>
            ))}
          </div>
        </section>
      ) : null}

      {collab.production?.length ? (
        <section className="mb-14 last:mb-0 min-[700px]:mb-16">
          <h3 className="font-display m-0 mb-6 text-[12px] font-medium tracking-[0.24em] uppercase text-hygen-muted">
            Production
          </h3>
          <div className="font-body space-y-5 text-[17px] leading-[1.85] text-hygen-text/85 min-[700px]:text-[18px]">
            {collab.production.map((p) => (
              <p key={p.slice(0, 48)} className="m-0">
                {p}
              </p>
            ))}
          </div>
        </section>
      ) : null}

      {collab.specifications?.length ? (
        <section className="mb-14 last:mb-0 min-[700px]:mb-16">
          <h3 className="font-display m-0 mb-6 text-[12px] font-medium tracking-[0.24em] uppercase text-hygen-muted">
            Specifications
          </h3>
          <dl className="m-0 grid gap-0 border-t border-hygen-text/10">
            {collab.specifications.map((spec) => (
              <div
                key={spec.label}
                className="grid gap-1 border-b border-hygen-text/10 py-4 min-[600px]:grid-cols-[11rem_1fr] min-[600px]:gap-6 min-[600px]:py-5"
              >
                <dt className="font-display m-0 text-[11px] font-medium tracking-[0.18em] uppercase text-hygen-muted">
                  {spec.label}
                </dt>
                <dd className="font-body m-0 text-[16px] leading-[1.7] text-hygen-text/85 min-[700px]:text-[17px]">
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      ) : null}

      {collab.features?.length ? (
        <section className="mb-14 last:mb-0 min-[700px]:mb-16">
          <h3 className="font-display m-0 mb-6 text-[12px] font-medium tracking-[0.24em] uppercase text-hygen-muted">
            Features
          </h3>
          <ul className="font-body m-0 list-none space-y-3 p-0 text-[17px] leading-[1.7] text-hygen-text/85 min-[700px]:text-[18px]">
            {collab.features.map((item) => (
              <li key={item} className="relative pl-5 before:absolute before:left-0 before:content-['—']">
                {item}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {collab.materialNotes?.length ? (
        <section className="mb-14 last:mb-0 min-[700px]:mb-16">
          <h3 className="font-display m-0 mb-6 text-[12px] font-medium tracking-[0.24em] uppercase text-hygen-muted">
            Material notes
          </h3>
          <div className="font-body space-y-5 text-[17px] leading-[1.85] text-hygen-text/85 min-[700px]:text-[18px]">
            {collab.materialNotes.map((p) => (
              <p key={p.slice(0, 48)} className="m-0">
                {p}
              </p>
            ))}
          </div>
        </section>
      ) : null}

      {collab.care?.length ? (
        <section className="mb-0">
          <h3 className="font-display m-0 mb-6 text-[12px] font-medium tracking-[0.24em] uppercase text-hygen-muted">
            Care &amp; maintenance
          </h3>
          <ul className="font-body m-0 list-none space-y-3 p-0 text-[17px] leading-[1.7] text-hygen-text/85 min-[700px]:text-[18px]">
            {collab.care.map((item) => (
              <li key={item} className="relative pl-5 before:absolute before:left-0 before:content-['—']">
                {item}
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}

export default function CollaborationsPage() {
  const live = collaborations.filter((c) => c.status === "live");
  const coming = collaborations.filter((c) => c.status === "coming");

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

      <main>
        <section className="mx-auto w-[min(1120px,92vw)] pt-14 pb-10 min-[700px]:pt-20 min-[700px]:pb-14">
          <p className="font-display m-0 mb-5 text-[12px] font-medium tracking-[0.24em] uppercase text-hygen-muted">
            {collaborationsIntro.eyebrow}
          </p>
          <h1 className="font-display m-0 max-w-[18ch] text-[32px] font-medium leading-[1.15] tracking-[0.08em] uppercase min-[700px]:text-[44px]">
            {collaborationsIntro.title}
          </h1>
          <p className="font-body mt-8 m-0 max-w-[36rem] text-[18px] leading-[1.75] text-hygen-text/80 min-[700px]:text-[20px]">
            {collaborationsIntro.lede}
          </p>
        </section>

        {live.map((collab) => (
          <section key={collab.id} className="border-t border-hygen-text/10">
            <div className="mx-auto grid w-[min(1120px,92vw)] gap-10 py-14 min-[900px]:grid-cols-2 min-[900px]:gap-16 min-[900px]:py-20">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-hygen-media min-[900px]:aspect-auto min-[900px]:min-h-[32rem]">
                <Image
                  src={collab.image}
                  alt={collab.imageAlt}
                  fill
                  priority
                  sizes="(min-width: 900px) 46vw, 92vw"
                  className="object-cover object-center"
                />
              </div>

              <div className="flex flex-col justify-center min-[900px]:py-8">
                {collab.season ? (
                  <p className="font-display m-0 mb-4 text-[11px] font-medium tracking-[0.22em] uppercase text-hygen-muted">
                    {collab.season}
                  </p>
                ) : null}
                <h2 className="font-display m-0 text-[22px] font-medium leading-[1.3] tracking-[0.1em] uppercase min-[700px]:text-[28px]">
                  {collab.partners}
                </h2>
                <p className="font-display mt-3 m-0 text-[13px] font-medium tracking-[0.16em] uppercase text-hygen-text/70">
                  {collab.title}
                </p>
                <p className="font-body mt-8 m-0 max-w-[28rem] text-[17px] leading-[1.8] text-hygen-text/80 min-[700px]:text-[18px]">
                  {collab.summary}
                </p>
                {collab.warranty ? (
                  <p className="font-display mt-6 m-0 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-[12px] font-medium tracking-[0.14em] uppercase text-hygen-text/75">
                    <span className="text-hygen-muted">Warranty</span>
                    {collab.warranty}
                  </p>
                ) : null}
                {collab.href && collab.cta ? (
                  <a
                    href={collab.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-display mt-10 inline-flex w-fit items-center gap-4 border border-hygen-text/25 px-7 py-3.5 text-[11px] font-medium tracking-[0.2em] uppercase text-hygen-text transition-[border-color,opacity] duration-500 hover:border-hygen-text/55 hover:opacity-80"
                  >
                    {collab.cta}
                    <span
                      aria-hidden
                      className="block h-px w-6 bg-hygen-text/70"
                    />
                  </a>
                ) : null}
              </div>
            </div>

            <DetailSections collab={collab} />
          </section>
        ))}

        <section className="border-t border-hygen-text/10">
          <div className="mx-auto w-[min(1120px,92vw)] py-14 min-[700px]:py-20">
            <p className="font-display m-0 mb-3 text-[12px] font-medium tracking-[0.24em] uppercase text-hygen-muted">
              Forthcoming
            </p>
            <h2 className="font-display m-0 text-[22px] font-medium tracking-[0.1em] uppercase min-[700px]:text-[26px]">
              Coming soon
            </h2>
            <p className="font-body mt-5 m-0 max-w-[34rem] text-[17px] leading-[1.75] text-hygen-text/75 min-[700px]:text-[18px]">
              Further chapters are in motion. Names stay quiet until the work
              can speak for itself.
            </p>

            <ul className="m-0 mt-12 grid list-none gap-8 p-0 min-[700px]:mt-16 min-[700px]:grid-cols-2 min-[700px]:gap-10">
              {coming.map((collab) => (
                <li key={collab.id} className="m-0 min-w-0">
                  <div className="relative mb-6 aspect-[16/10] w-full overflow-hidden bg-hygen-media">
                    <Image
                      src={collab.image}
                      alt=""
                      fill
                      sizes="(min-width: 700px) 45vw, 92vw"
                      className="object-cover object-center opacity-35 grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-hygen-bg/80 via-hygen-bg/20 to-transparent" />
                    <p className="font-display absolute bottom-5 left-5 m-0 text-[11px] font-medium tracking-[0.2em] uppercase text-hygen-text/85">
                      {collab.season}
                    </p>
                  </div>
                  <p className="font-display m-0 text-[14px] font-medium tracking-[0.16em] uppercase text-hygen-text/55">
                    {collab.partners}
                  </p>
                  <p className="font-body mt-4 m-0 max-w-[28rem] text-[16px] leading-[1.75] text-hygen-text/70">
                    {collab.summary}
                  </p>
                </li>
              ))}
            </ul>

            <p className="font-body mt-16 m-0 max-w-[36rem] border-t border-hygen-text/10 pt-10 text-[16px] leading-[1.75] text-hygen-muted min-[700px]:text-[17px]">
              {collaborationsNote.includes("atelierguise@gmail.com") ? (
                <>
                  {collaborationsNote.split("atelierguise@gmail.com")[0]}
                  <a
                    href="mailto:atelierguise@gmail.com"
                    className="text-hygen-text/80 underline decoration-hygen-text/25 underline-offset-2 transition-opacity duration-500 hover:opacity-70"
                  >
                    atelierguise@gmail.com
                  </a>
                  {collaborationsNote.split("atelierguise@gmail.com")[1]}
                </>
              ) : (
                collaborationsNote
              )}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
