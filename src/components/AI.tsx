import {
  Bot,
  BrainCircuit,
  LineChart,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { AiIllustration } from "@/components/illustrations/AiIllustration";

const aiBenefits: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Automação inteligente",
    description: "Fluxos que reduzem tarefas manuais e aumentam a eficiência.",
    icon: Sparkles,
  },
  {
    title: "Análise preditiva",
    description: "Insights a partir dos seus dados para decisões mais seguras.",
    icon: LineChart,
  },
  {
    title: "Chatbots e assistentes",
    description: "Atendimento e suporte com IA integrada aos seus sistemas.",
    icon: Bot,
  },
  {
    title: "Modelos personalizados",
    description: "Soluções de IA sob medida para o contexto do seu negócio.",
    icon: BrainCircuit,
  },
];

export function AI() {
  return (
    <section
      id="ia"
      className="scroll-mt-20 overflow-hidden bg-brand-dark py-20 sm:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <AiIllustration className="order-2 lg:order-1" />

        <div className="order-1 lg:order-2">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-cyan">
            Inteligência Artificial
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            IA para transformar dados em decisões inteligentes
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
            Aplicamos inteligência artificial para automatizar processos,
            extrair insights e criar experiências mais inteligentes — sempre
            alinhadas às regras e objetivos do seu negócio.
          </p>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {aiBenefits.map((item) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                >
                  <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg gradient-icon text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-sm font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-400">
                    {item.description}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
