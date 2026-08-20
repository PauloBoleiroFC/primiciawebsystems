import { Building2, FileText } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { AboutIllustration } from "@/components/illustrations/AboutIllustration";

export function About() {
  return (
    <section id="sobre" className="scroll-mt-20 bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-violet">
            Sobre a empresa
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Tecnologia que resolve problemas reais
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            <p>
              A PrimiciaWebSystems é uma empresa especializada no desenvolvimento
              de soluções tecnológicas sob medida. Atuamos criando plataformas
              web, sistemas empresariais, aplicativos móveis e integrações
              inteligentes que automatizam processos e aumentam a eficiência das
              empresas.
            </p>
            <p>
              Cada projeto é desenvolvido de forma personalizada, respeitando as
              necessidades e objetivos de cada cliente.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl gradient-icon text-sm font-bold text-white">
                PWS
              </span>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Building2 className="mt-0.5 h-4 w-4 text-brand-violet" />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                      Empresa
                    </p>
                    <p className="font-semibold text-slate-900">
                      {COMPANY.name}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <FileText className="mt-0.5 h-4 w-4 text-brand-violet" />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                      CNPJ
                    </p>
                    <p className="font-semibold text-slate-900">{COMPANY.cnpj}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <AboutIllustration className="mx-auto w-full max-w-md lg:max-w-none" />
      </div>
    </section>
  );
}
