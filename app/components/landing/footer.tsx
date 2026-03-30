import { contactLinks } from "./content";

export function Footer() {
  return (
    <footer className="px-5 pb-28 pt-10 sm:px-8 sm:pb-10 sm:pt-12 lg:px-16 lg:py-14">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 border-t border-white/8 pt-8 text-sm text-stone-400 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <p className="section-kicker text-[10px] sm:text-[11px]">Amplifica</p>
          <p className="text-xl font-bold leading-none tracking-[-0.05em] text-stone-100 sm:text-[1.9rem]">
            Audiovisual estratégico
          </p>
          <p className="max-w-md leading-7">
            Transformamos eventos em conteúdo, posicionamento e impacto duradouro.
          </p>
        </div>

        <nav aria-label="Canais de contato" className="flex flex-col gap-2 text-sm text-stone-300">
          <a
            href={contactLinks.whatsapp.href}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar com a Amplifica no WhatsApp"
            className="uppercase tracking-[0.16em] hover:text-stone-100"
          >
            WhatsApp
          </a>
          <a
            href={contactLinks.instagram.href}
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir Instagram da Amplifica"
            className="uppercase tracking-[0.16em] hover:text-stone-100"
          >
            Instagram
          </a>
          <a
            href={contactLinks.email.href}
            aria-label="Enviar e-mail para a Amplifica"
            className="uppercase tracking-[0.12em] hover:text-stone-100"
          >
            amplifica@usd21.org
          </a>
        </nav>
      </div>
    </footer>
  );
}
