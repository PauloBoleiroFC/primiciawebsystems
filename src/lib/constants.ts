export const COMPANY = {
  name: "PrimiciaWebSystems",
  cnpj: "35.808.049/0001-50",
  phoneDisplay: "(11) 93027-3040",
  phoneRaw: "5511930273040",
  email: "contato@primiciawebsystems.com.br",
  tagline: "Desenvolvimento de soluções web, aplicativos e integrações.",
} as const;

export const WHATSAPP_MESSAGE =
  "Olá! Gostaria de solicitar um orçamento para um projeto.";

export const WHATSAPP_URL = `https://wa.me/${COMPANY.phoneRaw}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#ia", label: "IA" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#contato", label: "Contato" },
] as const;

export const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
  },
  {
    label: "GitHub",
    href: "https://github.com/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
  },
  {
    label: "E-mail",
    href: `mailto:${COMPANY.email}`,
  },
] as const;
