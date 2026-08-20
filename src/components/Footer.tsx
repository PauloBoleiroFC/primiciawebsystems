import { Mail, Phone } from "lucide-react";
import {
  COMPANY,
  NAV_LINKS,
  SOCIAL_LINKS,
  WHATSAPP_URL,
} from "@/lib/constants";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from "@/components/icons/SocialIcons";

const socialIcons = {
  LinkedIn: LinkedInIcon,
  GitHub: GitHubIcon,
  Instagram: InstagramIcon,
  "E-mail": Mail,
} as const;

export function Footer() {
  return (
    <footer className="bg-brand-dark text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-xl font-semibold text-white">{COMPANY.name}</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              {COMPANY.tagline}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = socialIcons[social.label];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={
                      social.href.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    aria-label={social.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-colors hover:border-brand-violet hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navegação
            </h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contato
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-400 transition-colors hover:text-whatsapp"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp: {COMPANY.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`tel:+${COMPANY.phoneRaw}`}
                  className="inline-flex items-center gap-2 text-slate-400 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4" />
                  {COMPANY.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="inline-flex items-center gap-2 text-slate-400 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4" />
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Empresa
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>{COMPANY.name}</li>
              <li>CNPJ: {COMPANY.cnpj}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-slate-500 sm:text-left">
          © 2024 {COMPANY.name}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
