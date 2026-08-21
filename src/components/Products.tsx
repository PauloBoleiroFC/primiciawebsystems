import { ArrowUpRight } from "lucide-react";
import { ProductLogo } from "@/components/illustrations/ProductLogo";

const products: {
  name: string;
  description: string;
  url?: string;
}[] = [
  {
    name: "DataTrade.com",
    description:
      "Sistema para gestão financeira e acompanhamento de investimentos.",
    url: "https://datatrade.com.br",
  },
  {
    name: "PrimiciaFlex.com",
    description:
      "Plataforma inteligente para gestão de empresas prestadoras de serviços e assistências técnicas.",
    url: "https://primiciaflex.com.br",
  },
  {
    name: "TripSuno.com",
    description:
      "Sistema completo para gestão e organização de viagens, roteiros e despesas.",
    url: "https://tripsuno.com",
  },
];

export function Products() {
  return (
    <section id="solucoes" className="scroll-mt-20 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-violet">
            Portfólio
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Produtos desenvolvidos pela PrimiciaWebSystems
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-violet/30 hover:bg-white hover:shadow-lg sm:p-8"
            >
              {/* Troque ProductLogo por Image com /logos/{produto}.svg quando disponível */}
              <ProductLogo name={product.name} />
              <h3 className="mt-5 text-xl font-semibold text-slate-900">
                {product.name}
              </h3>
              {product.url ? (
                <p className="mt-1 text-sm font-medium text-brand-violet">
                  {product.url.replace("https://", "")}
                </p>
              ) : null}
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                {product.description}
              </p>
              <a
                href={product.url ?? "#contato"}
                {...(product.url
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-brand-violet bg-white px-4 py-2.5 text-sm font-semibold text-brand-violet transition-all hover:bg-brand-violet hover:text-white"
              >
                Conhecer
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
