import Image from "next/image";
import { images } from "@/lib/products";

export function CollabBanner() {
  return (
    <section className="collab-banner">
      <a href="https://atelierguised.com/collections/guised-x-rei-gloom">
        <Image
          src={images.collab}
          alt="Guised x Rei.Gloom"
          fill
          sizes="100vw"
        />
        <div className="collab-banner__copy">
          <h2>
            Guised x Rei.Gloom <sup>4</sup>
          </h2>
        </div>
      </a>
    </section>
  );
}

export function CraftSection() {
  return (
    <section className="craft-section">
      <div className="craft-section__copy">
        <h2>Handcrafted with intention</h2>
        <p>
          Every piece is entirely handmade. Cut, stitched, and finished by hand.
        </p>

        <h3>Ethically sourced materials</h3>
        <p>
          We work exclusively with ethically sourced leathers from trusted
          tanneries overseas. Every hide is chosen for its raw character,
          texture, and the stories within its scars.
        </p>

        <h2>Built to endure</h2>
        <p>
          Our pieces are made to age gracefully, designed to accompany you
          through time.
        </p>
      </div>
      <div className="craft-section__media">
        <Image
          src={images.craft}
          alt="Handcrafted leather goods"
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
        />
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__brand">GUISED</div>
      <div className="newsletter">
        <label htmlFor="email">Email</label>
        <div className="newsletter__row">
          <input id="email" name="email" type="email" placeholder="Email" />
          <a className="newsletter__submit" href="https://atelierguised.com/">
            Sign up
          </a>
        </div>
      </div>
      <ul className="payments" aria-label="Payment methods">
        {[
          "American Express",
          "Apple Pay",
          "Google Pay",
          "Mastercard",
          "PayPal",
          "Shop Pay",
          "Union Pay",
          "Visa",
        ].map((method) => (
          <li key={method}>{method}</li>
        ))}
      </ul>
      <p className="copyright">
        © {new Date().getFullYear()} GUISED. Leather goods that wear your story.
      </p>
    </footer>
  );
}
