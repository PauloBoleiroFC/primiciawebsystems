import { Phone } from "lucide-react";
import { COMPANY, WHATSAPP_URL } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function CTA() {
  return (
    <section id="contato" className="scroll-mt-20 gradient-cta py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Vamos transformar sua ideia em um sistema?
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-indigo-100 sm:text-lg">
            Entre em contato e solicite um orçamento sem compromisso. Vamos
            entender seu projeto e propor a melhor solução tecnológica para o
            seu negócio.
          </p>
        </div>

        <div className="flex flex-col items-start gap-5 lg:items-end">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-whatsapp px-8 py-4 text-base font-bold text-white shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:bg-whatsapp-dark sm:w-auto"
          >
            <WhatsAppIcon className="h-6 w-6" />
            Falar pelo WhatsApp
          </a>

          <a
            href={`tel:+${COMPANY.phoneRaw}`}
            className="inline-flex items-center gap-3 text-white/90 transition-colors hover:text-white"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
              <Phone className="h-5 w-5" />
            </span>
            <span className="text-lg font-semibold">{COMPANY.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
