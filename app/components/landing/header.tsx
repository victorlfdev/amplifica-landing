import Image from "next/image";
import { contactLinks, navigationItems } from "./content";

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.25" />
      <circle cx="12" cy="12" r="4.25" />
      <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
    >
      <path d="M19.05 4.93A9.85 9.85 0 0 0 12.02 2C6.6 2 2.2 6.4 2.2 11.82c0 1.73.45 3.42 1.31 4.92L2 22l5.42-1.42a9.77 9.77 0 0 0 4.6 1.17h.01c5.42 0 9.82-4.4 9.82-9.82 0-2.62-1.02-5.08-2.8-6.98Zm-7.03 15.16h-.01a8.13 8.13 0 0 1-4.14-1.13l-.3-.18-3.22.84.86-3.14-.2-.32a8.15 8.15 0 0 1-1.25-4.34c0-4.5 3.66-8.16 8.17-8.16 2.17 0 4.21.84 5.74 2.38a8.1 8.1 0 0 1 2.39 5.78c0 4.5-3.66 8.17-8.04 8.27Zm4.48-6.12c-.24-.12-1.43-.71-1.65-.78-.22-.08-.38-.12-.54.12-.16.23-.62.77-.76.93-.14.15-.28.17-.52.06-.24-.12-1-.37-1.9-1.18-.7-.62-1.17-1.38-1.31-1.62-.14-.23-.01-.35.1-.47.1-.1.24-.27.36-.4.12-.14.16-.23.24-.39.08-.15.04-.29-.02-.4-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.4h-.46c-.16 0-.4.06-.62.29-.22.23-.84.82-.84 1.99 0 1.17.86 2.3.98 2.46.12.15 1.68 2.57 4.06 3.6.57.25 1.02.39 1.37.5.58.18 1.1.15 1.52.09.46-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.09-.22-.15-.46-.27Z" />
    </svg>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/8 bg-[rgba(10,10,10,0.62)] px-5 py-4 backdrop-blur-2xl sm:px-8 sm:py-5 lg:px-16">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 sm:gap-6">
        <a href="#top" className="min-w-0 flex-1 md:flex-none">
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            <Image
              src="/images/AmplificaIconeBranco.webp"
              alt="Ícone da Amplifica"
              width={44}
              height={44}
              priority
              className="h-9 w-9 object-contain drop-shadow-[0_0_14px_rgba(232,165,0,0.5)] sm:h-11 sm:w-11"
            />
            <Image
              src="/images/TipografiaAbranco.png"
              alt="Amplifica"
              width={180}
              height={48}
              priority
              className="mt-1 h-7 w-auto object-contain opacity-95 sm:h-9"
            />
          </div>
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-6 lg:flex">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-[0.8rem] font-medium uppercase tracking-[0.18em] text-stone-300/88 after:absolute after:-bottom-1.5 after:left-1/2 after:h-px after:w-0 after:-translate-x-1/2 after:bg-[var(--accent)] after:transition-[width] after:duration-300 hover:text-stone-100 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 lg:min-w-[280px] lg:justify-end">
          <a
            href={contactLinks.instagram.href}
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir Instagram da Amplifica"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-stone-300 transition-colors duration-300 hover:border-white/20 hover:bg-white/8 hover:text-stone-100"
          >
            <InstagramIcon />
          </a>
          <a
            href={contactLinks.whatsapp.href}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar com a Amplifica no WhatsApp"
            className="button-primary inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-full px-3 text-[0.72rem] font-bold uppercase tracking-[0.16em] transition-all duration-300 sm:px-4"
          >
            <WhatsAppIcon />
            <span className="hidden sm:inline">Solicitar proposta</span>
          </a>
        </div>
      </div>
    </header>
  );
}
