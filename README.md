# PrimiciaWebSystems — Landing Page

Landing page moderna da **PrimiciaWebSystems**, com tema escuro/roxo, seções de serviços, IA, produtos e conversão via WhatsApp.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4 (`@theme` em `globals.css` — configuração CSS-first)
- lucide-react

> **Nota Tailwind 4:** a paleta e tokens ficam em `src/app/globals.css` via `@theme inline`. Não usamos `tailwind.config.ts` legado do TW3.

## Como executar

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Estrutura

```
src/
  app/                 # layout, page, globals.css
  components/          # seções da landing
    illustrations/     # SVGs isométricos (fáceis de trocar por PNGs)
  lib/constants.ts     # empresa, WhatsApp, navegação
public/
  illustrations/       # placeholders para imagens finais
```

## Trocar ilustrações

Os componentes em `src/components/illustrations/` podem ser substituídos por:

```tsx
import Image from "next/image";

<Image
  src="/illustrations/hero-laptop.png"
  alt="Laptop com painel de controle"
  width={560}
  height={460}
  className="h-auto w-full"
  priority
/>
```

## Scripts

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Desenvolvimento |
| `npm run build` | Build de produção |
| `npm run start` | Servidor de produção |
| `npm run lint` | ESLint |
