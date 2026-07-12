import Link from "next/link";
import { versions } from "@/lib/versions";

export function VersionChrome({ current }: { current: string }) {
  return (
    <div className="version-chrome">
      <Link href="/" className="version-chrome__hub">
        All versions
      </Link>
      <nav className="version-chrome__nav" aria-label="Design versions">
        {versions.map((v) => (
          <Link
            key={v.slug}
            href={v.href}
            className={v.slug === current ? "is-active" : undefined}
            style={{ ["--v-accent" as string]: v.accent }}
          >
            {v.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
