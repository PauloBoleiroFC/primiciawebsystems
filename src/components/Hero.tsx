import { ArrowRight, Cpu, Lightbulb, Target } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { HeroIllustration } from "@/components/illustrations/HeroIllustration";

const benefits = [
  { label: "Soluções Personalizadas", icon: Lightbulb },
  { label: "Tecnologia e Inovação", icon: Cpu },
  { label: "Foco em Resultados", icon: Target },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-brand-deep pt-28 pb-16 sm:pt-32 sm:pb-24"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(124,58,237,0.35), transparent 40%), radial-gradient(circle at 85% 15%, rgba(59,130,246,0.2), transparent 35%), radial-gradient(circle at 60% 80%, rgba(34,197,94,0.12), transparent 40%)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
        <div className="text-center lg:text-left">
          <h1 className="animate-fade-up text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            Soluções Web sob Medida para Impulsionar o seu Negócio
          </h1>
          <p className="animate-fade-up animation-delay-100 mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg lg:mx-0">
            A PrimiciaWebSystems desenvolve sistemas personalizados, sites
            profissionais, integrações entre plataformas e aplicativos para
            empresas que buscam inovação, produtividade e crescimento.
          </p>

          <div className="animate-fade-up animation-delay-200 mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#contato"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-brand-deep transition-all hover:-translate-y-0.5 hover:bg-slate-100 sm:w-auto"
            >
              Solicitar orçamento
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-whatsapp/25 transition-all hover:-translate-y-0.5 hover:bg-whatsapp-dark sm:w-auto"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Falar no WhatsApp
            </a>
          </div>

          <ul className="animate-fade-up animation-delay-300 mt-10 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
            {benefits.map((item) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.label}
                  className="flex items-center gap-2 text-sm font-medium text-slate-200"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg gradient-icon text-white">
                    <Icon className="h-4 w-4" />
                  </span>
                  {item.label}
                </li>
              );
            })}
          </ul>
        </div>

        <HeroIllustration className="mx-auto w-full max-w-lg lg:max-w-none" />
      </div>
    </section>
  );
}
