"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

const GALLERY = [
  {
    src: "/images/consultorio_faxada_01.webp",
    alt: "Fachada da VivaClin Saúde",
  },
  {
    src: "/images/consultorio_interno_02.webp",
    alt: "Sala de espera da VivaClin Saúde",
  },
  {
    src: "/images/consultorio_interno_03.webp",
    alt: "Sala de atendimento da VivaClin Saúde",
  },
  {
    src: "/images/consultorio_interno_04.webp",
    alt: "Sala de consulta da VivaClin Saúde",
  },
];

export default function Consultorio() {
  const [index, setIndex] = useState(0);

  const goTo = (next: number) => {
    setIndex((next + GALLERY.length) % GALLERY.length);
  };

  return (
    <section
      id="consultorio"
      className="scroll-mt-28 bg-bg-neutral px-6 py-20 sm:px-10 sm:py-24 lg:px-20"
    >
      <div className="flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-soft bg-white/70 px-4 py-2 font-body text-sm text-brand-dark">
          <Heart className="h-4 w-4 fill-brand-primary text-brand-primary" />
          Nosso Espaço
        </span>
      </div>

      <h2 className="mx-auto mt-6 max-w-2xl text-center text-3xl text-brand-dark sm:text-4xl">
        <span className="font-body font-bold">
          Mais do que um local de atendimento, a VivaClin é um lugar de
          confiança,
        </span>
        <br />
        <span className="font-heading italic">
          acolhimento e vínculo verdadeiro.
        </span>
      </h2>

      <div className="mx-auto mt-10 max-w-4xl">
        <div className="relative aspect-video overflow-hidden rounded-2xl">
          <div
            className="flex h-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {GALLERY.map((photo) => (
              <div key={photo.src} className="relative h-full w-full shrink-0">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Foto anterior"
            className="absolute top-1/2 left-4 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-brand-dark shadow-md transition hover:bg-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Próxima foto"
            className="absolute top-1/2 right-4 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-brand-dark shadow-md transition hover:bg-white"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-4 flex justify-center gap-2">
          {GALLERY.map((photo, i) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Ir para foto ${i + 1}`}
              className={`h-2 w-2 rounded-full transition-colors ${
                i === index ? "bg-brand-primary" : "bg-brand-dark/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
