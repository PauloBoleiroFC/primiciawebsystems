import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "PrimiciaWebSystems | Soluções Web sob Medida",
    template: "%s | PrimiciaWebSystems",
  },
  description:
    "A PrimiciaWebSystems desenvolve sistemas personalizados, sites profissionais, integrações entre plataformas, aplicativos e soluções de IA para empresas que buscam inovação e crescimento.",
  keywords: [
    "desenvolvimento web",
    "sistemas sob medida",
    "aplicativos",
    "integrações",
    "inteligência artificial",
    "PrimiciaWebSystems",
  ],
  authors: [{ name: "PrimiciaWebSystems" }],
  openGraph: {
    title: "PrimiciaWebSystems | Soluções Web sob Medida",
    description:
      "Sistemas personalizados, sites, integrações, apps e IA para impulsionar o seu negócio.",
    type: "website",
    locale: "pt_BR",
    siteName: "PrimiciaWebSystems",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
