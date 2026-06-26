import Image from "next/image";
import { ArrowRight, Heart } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export default function CTAFinal() {
  return (
    <section className="bg-[#FAFAF8] px-6 py-20 sm:px-10 sm:py-24 lg:px-20">
      <div className="relative mx-auto min-h-[490px] max-w-[1536px] overflow-hidden rounded-3xl sm:aspect-[3210/1427] sm:min-h-0">
        <Image
          src="/images/banner_cta_clin.png"
          alt="Médica e paciente da VivaClin Saúde"
          fill
          sizes="(min-width: 1024px) 1536px, 100vw"
          className="object-cover"
        />

        <div className="absolute inset-x-6 top-1/2 z-10 flex max-w-sm -translate-y-1/2 flex-col items-start gap-4 rounded-2xl bg-brand-dark px-8 py-10 sm:inset-x-auto sm:left-10 sm:px-10 lg:left-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-4 py-2 font-body text-sm text-white">
            <Heart className="h-4 w-4 fill-white text-white" />
            Pronta para agendar?
          </span>

          <h2 className="text-2xl text-white sm:text-3xl">
            <span className="font-body font-bold">Acolhimento e cuidado</span>
            <br />
            <span className="font-heading italic">que você merece</span>
          </h2>

          <p className="font-body text-sm text-white/80">
            Marque sua consulta com quem entende de cuidado, humanização e
            confiança.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-3 rounded-full bg-[#e60023] py-2 pl-5 pr-2 font-body text-sm font-semibold text-white transition-colors hover:bg-[#cc001f]"
          >
            Agende sua consulta
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#e60023]">
              <ArrowRight className="h-4 w-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
