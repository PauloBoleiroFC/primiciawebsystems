import {
  Code2,
  Globe,
  Link2,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

const services: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Sistemas sob encomenda",
    description:
      "Desenvolvimento de sistemas web personalizados para atender exatamente às regras de negócio da sua empresa.",
    icon: Code2,
  },
  {
    title: "Sites profissionais",
    description:
      "Criação de sites modernos para divulgar produtos, serviços e fortalecer a presença digital da sua marca.",
    icon: Globe,
  },
  {
    title: "Integrações e APIs",
    description:
      "Integração entre ERPs, CRMs, gateways de pagamento, APIs e sistemas de terceiros para automatizar processos.",
    icon: Link2,
  },
  {
    title: "Aplicativos para celular",
    description:
      "Desenvolvimento de aplicativos Android e iOS com foco em usabilidade, desempenho e integração com sistemas web.",
    icon: Smartphone,
  },
];

export function Services() {
  return (
    <section id="servicos" className="scroll-mt-20 bg-white pb-20 sm:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-violet">
            Nossos Serviços
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Soluções completas para o seu negócio
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="gradient-border group rounded-2xl p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl gradient-icon text-white shadow-md shadow-brand-violet/20">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
