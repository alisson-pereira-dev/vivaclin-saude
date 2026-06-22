import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";

const SPECIALTIES = [
  {
    slug: "clinica-geral",
    title: "Clínica Geral",
    image: "/images/atuacao-clinica-geral.jpeg",
    excerpt:
      "A Clínica Geral é considerada o ponto de partida para o cuidado com a saúde.",
  },
  {
    slug: "reumatologia",
    title: "Reumatologia",
    image: "/images/atuacao-reumatologia.jpeg",
    excerpt:
      "As doenças reumatológicas englobam um conjunto de condições que afetam articulações, músculos, ossos e tecidos conjuntivos, além das chamadas doenças autoimunes sistêmicas.",
  },
  {
    slug: "saude-digestiva",
    title: "Saúde Digestiva",
    image: "/images/atuacao-saude-digestiva.jpeg",
    excerpt: "A Saúde Digestiva é uma das áreas mais importantes da medicina.",
  },
  {
    slug: "saude-do-idoso",
    title: "Saúde do Idoso",
    image: "/images/atuacao-saude-do-idoso.jpeg",
    excerpt:
      "A saúde do idoso é um segmento da medicina que acompanha as mudanças do envelhecimento, cuidando da saúde de pessoas na terceira idade de forma integral, contínua, preventiva e até paliativa.",
  },
  {
    slug: "nutricao",
    title: "Nutrição",
    image: "/images/atuacao-nutricao.jpeg",
    excerpt:
      "A nutrição clínica é uma área essencial da saúde que utiliza a alimentação como ferramenta terapêutica e preventiva.",
  },
  {
    slug: "clinica-geral",
    title: "Clínica Geral",
    image: "/images/atuacao-clinica-geral.jpeg",
    excerpt:
      "A Clínica Geral é considerada o ponto de partida para o cuidado com a saúde.",
  },
];

export default function EspecialidadesGrid() {
  return (
    <section
      id="areas-de-atuacao"
      className="scroll-mt-28 bg-bg-neutral px-6 py-20 sm:px-10 sm:py-24 lg:px-20"
    >
      <div className="mx-auto max-w-3xl text-center">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-soft bg-white/70 px-4 py-2 font-body text-sm text-brand-dark">
          <Heart className="h-4 w-4 fill-brand-primary text-brand-primary" />
          Cuidado Integral
        </span>

        <h2 className="text-3xl text-brand-dark sm:text-4xl lg:text-5xl">
          <span className="font-body font-bold">Áreas de Atuação para</span>
          <br />
          <span className="font-heading italic">cada necessidade</span>
        </h2>

        <p className="mx-auto mt-4 max-w-xl font-body text-base text-text-body/80 sm:text-lg">
          Conheça as áreas que a VivaClin atua oferecendo acompanhamento
          integral em saúde – contínuo e humanizado.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-[1536px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SPECIALTIES.map((specialty, index) => (
          <div
            key={`${specialty.slug}-${index}`}
            className="flex flex-col overflow-hidden rounded-xl bg-white shadow-sm"
          >
            <div className="relative aspect-[16/9]">
              <Image
                src={specialty.image}
                alt={specialty.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col gap-3 p-6 sm:p-8">
              <h3 className="font-body text-xl font-semibold text-brand-dark">
                {specialty.title}
              </h3>
              <p className="line-clamp-3 h-[4.5rem] font-body text-sm text-text-body/80">
                {specialty.excerpt}
              </p>
              <Link
                href={`/areas-de-atuacao/${specialty.slug}`}
                className="mt-auto inline-flex items-center gap-1 font-body text-sm font-semibold text-brand-primary"
              >
                Saiba mais
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
