"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { COMPANY, NAV_LINKS, WHATSAPP_URL } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-brand-dark/95 backdrop-blur-md"
          : "bg-brand-deep/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a
          href="#inicio"
          className="shrink-0 text-base font-semibold tracking-tight text-white sm:text-lg"
        >
          {COMPANY.name}
        </a>

        <nav
          className="hidden items-center gap-6 lg:flex xl:gap-8"
          aria-label="Principal"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-200 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-whatsapp/20 transition-all hover:bg-whatsapp-dark hover:shadow-xl md:inline-flex"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Falar no WhatsApp
        </a>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`border-t border-white/10 bg-brand-dark lg:hidden ${
          open ? "block animate-fade-in" : "hidden"
        }`}
      >
        <nav
          className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4"
          aria-label="Mobile"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-3 text-base font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-white"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-3 py-3 text-base font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            <WhatsAppIcon className="h-5 w-5" />
            Falar no WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
