"use client";

import { useState, type FormEvent } from "react";

const CONTACT_EMAIL = "info@atelierguised.com";

type FieldErrors = {
  name?: string;
  email?: string;
  emailConfirm?: string;
  message?: string;
};

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirm, setEmailConfirm] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next: FieldErrors = {};
    if (!name.trim()) next.name = "Required";
    if (!email.trim()) next.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      next.email = "Enter a valid address";
    if (!emailConfirm.trim()) next.emailConfirm = "Required";
    else if (email.trim().toLowerCase() !== emailConfirm.trim().toLowerCase())
      next.emailConfirm = "Addresses must match";
    if (!message.trim()) next.message = "Required";
    setErrors(next);
    if (Object.keys(next).length) return;

    const subject = encodeURIComponent(`Contact — ${name.trim()}`);
    const body = encodeURIComponent(
      `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`,
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const fieldClass =
    "font-body w-full border border-hygen-bg/15 bg-hygen-bg/[0.03] px-4 py-3.5 text-[16px] leading-[1.4] text-hygen-bg outline-none transition-[border-color,background-color] duration-300 placeholder:text-hygen-bg/40 focus:border-hygen-bg/40 focus:bg-hygen-bg/[0.05]";

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="mx-auto flex w-full max-w-[28rem] flex-col"
    >
      <p className="font-display m-0 mb-8 text-[11px] font-medium tracking-[0.18em] uppercase text-[#7a1717]">
        * Required fields
      </p>

      <div className="flex flex-col gap-4">
        <div>
          <label className="sr-only" htmlFor="contact-name">
            Your name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name *"
            aria-invalid={Boolean(errors.name)}
            className={fieldClass}
          />
          {errors.name ? (
            <p className="font-body mt-1.5 m-0 text-[13px] text-[#7a1717]">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label className="sr-only" htmlFor="contact-email">
            Mail address
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Mail Address *"
            aria-invalid={Boolean(errors.email)}
            className={fieldClass}
          />
          {errors.email ? (
            <p className="font-body mt-1.5 m-0 text-[13px] text-[#7a1717]">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label className="sr-only" htmlFor="contact-email-confirm">
            Mail address confirm
          </label>
          <input
            id="contact-email-confirm"
            name="emailConfirm"
            type="email"
            autoComplete="email"
            value={emailConfirm}
            onChange={(e) => setEmailConfirm(e.target.value)}
            placeholder="Mail Address (Confirm) *"
            aria-invalid={Boolean(errors.emailConfirm)}
            className={fieldClass}
          />
          {errors.emailConfirm ? (
            <p className="font-body mt-1.5 m-0 text-[13px] text-[#7a1717]">
              {errors.emailConfirm}
            </p>
          ) : null}
        </div>

        <div>
          <label className="sr-only" htmlFor="contact-message">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message *"
            aria-invalid={Boolean(errors.message)}
            className={`${fieldClass} min-h-[9.5rem] resize-y`}
          />
          {errors.message ? (
            <p className="font-body mt-1.5 m-0 text-[13px] text-[#7a1717]">
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-end gap-4">
        {sent ? (
          <p className="font-body m-0 text-[14px] text-hygen-bg/55">
            Opening your mail client…
          </p>
        ) : null}
        <button
          type="submit"
          className="font-display inline-flex items-center gap-4 bg-hygen-bg px-7 py-3.5 text-[12px] font-medium tracking-[0.22em] uppercase text-hygen-text transition-opacity duration-500 hover:opacity-70"
        >
          Confirm
          <span
            aria-hidden
            className="block h-px w-6 bg-hygen-text/70"
          />
        </button>
      </div>
    </form>
  );
}
