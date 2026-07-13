import Link from "next/link";
import { versions } from "@/lib/versions";

export default function VersionsHub() {
  return (
    <main className="hub">
      <div className="hub__intro">
        <p>GUISED atelier</p>
        <h1>Versions</h1>
        <p>
          Classic, Reliquary I, and Maison Reliquary I are preserved. We&apos;re
          iterating on Maison Reliquary — open it from here or the floating
          switcher.
        </p>
      </div>

      <div className="hub__grid">
        {versions.map((version) => (
          <Link
            key={version.slug}
            href={version.href}
            className={`hub-card ${version.preserved ? "is-preserved" : ""}`}
            style={{ ["--card-accent" as string]: version.accent }}
          >
            <p className="hub-card__tone">{version.tone}</p>
            <h2>{version.title}</h2>
            <p>{version.subtitle}</p>
            <span className="hub-card__cta">Open version</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
