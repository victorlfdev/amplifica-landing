import { contactLinks } from "./content";

export function Footer() {
  return (
    <footer className="px-5 pb-28 pt-8 sm:px-8 sm:pb-10 sm:pt-10 lg:px-16 lg:py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 border-t border-white/8 pt-6 text-sm text-stone-400 sm:pt-8 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--accent)] sm:text-[11px] sm:tracking-[0.34em]">
            Amplifica
          </p>
          <p className="font-[family-name:var(--font-display)] text-xl leading-none text-stone-100 sm:text-2xl">
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
            className="hover:text-stone-100"
          >
            WhatsApp
          </a>
          <a
            href={contactLinks.instagram.href}
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir Instagram da Amplifica"
            className="hover:text-stone-100"
          >
            Instagram
          </a>
          <a
            href={contactLinks.email.href}
            aria-label="Enviar e-mail para a Amplifica"
            className="hover:text-stone-100"
          >
            amplifica@usd21.org
          </a>
        </nav>
      </div>
    </footer>
  );
}
