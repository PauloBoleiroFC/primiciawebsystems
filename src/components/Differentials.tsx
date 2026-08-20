import {
  CheckCircle2,
  Database,
  Layers,
  MonitorSmartphone,
  Plug,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

const differentials: { title: string; icon: LucideIcon }[] = [
  { title: "Desenvolvimento 100% personalizado", icon: Sparkles },
  { title: "Código moderno e escalável", icon: Layers },
  { title: "APIs REST e integrações", icon: Plug },
  { title: "Aplicações responsivas", icon: MonitorSmartphone },
  { title: "Banco de dados e arquitetura robusta", icon: Database },
  { title: "Suporte e evolução contínua", icon: CheckCircle2 },
];

export function Differentials() {
  return (
    <section
      id="diferenciais"
      className="scroll-mt-20 bg-white pb-20 sm:pb-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-violet">
            Diferenciais
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Por que escolher a PrimiciaWebSystems?
          </h2>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.title}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:border-brand-violet/30 hover:bg-white hover:shadow-md"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl gradient-icon text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-base font-semibold text-slate-900">
                  {item.title}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
