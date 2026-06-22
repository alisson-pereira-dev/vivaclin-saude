import Image from "next/image";
import { WHATSAPP_URL } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Início", href: "/" },
  { label: "Especialidades", href: "#areas-de-atuacao" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Consultório", href: "#consultorio" },
];

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=R.+Sete+de+Setembro%2C+863+-+Nacional%2C+Contagem%2FMG";

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/vivaclin.saude",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/vivaclin.saude",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 8.5h-1.5a2 2 0 0 0-2 2V13H8v2h2.5v6h2v-6h2l.5-2h-2.5v-2a.5.5 0 0 1 .5-.5H15z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@vivaclin.saude",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 8.3a4.3 4.3 0 0 1-4-4.3v10.2a3.3 3.3 0 1 1-3.3-3.3" />
        <path d="M16 8.3a4.3 4.3 0 0 0 4 1.6V6.6a4.3 4.3 0 0 1-4-4.1" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer id="footer" className="scroll-mt-28 bg-brand-dark px-6 py-16 sm:px-10 lg:px-20">
      <div className="mx-auto grid max-w-[1536px] grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-start gap-4 lg:col-span-2">
          <Image
            src="/images/logo_vivaclin_white.svg"
            alt="VivaClin Saúde"
            width={2027}
            height={776}
            className="h-12 w-auto self-start object-contain"
          />
          <p className="max-w-xs font-body text-sm text-white/70">
            Mais que cuidados – confiança para viver mais e melhor
          </p>
          <div className="mt-2 flex items-center gap-3">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-bg-neutral text-brand-primary transition-colors hover:bg-white"
              >
                <span className="h-4 w-4">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-body text-sm font-semibold text-white">
            Navegação
          </h3>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-body text-sm font-semibold text-white">
            Contato
          </h3>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-white/70 transition-colors hover:text-white"
          >
            (31) 92009-0831
          </a>
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-white/70 transition-colors hover:text-white"
          >
            R. Sete de Setembro, 863 - Nacional, Contagem/MG
          </a>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-[1536px] border-t border-white/10 pt-6">
        <div className="flex flex-wrap items-center gap-2 font-body text-xs text-white/50">
          <span>VivaClin © 2026. Todos os Direitos Reservados.</span>
          <span className="text-white/30">·</span>
          <a
            href="/politica-de-privacidade"
            className="transition-colors hover:text-white"
          >
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
}
