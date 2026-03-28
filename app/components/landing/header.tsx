import { contactLinks, navigationItems } from "./content";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/8 bg-black/45 px-5 py-4 backdrop-blur-xl sm:px-8 sm:py-5 lg:px-16">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 sm:gap-6">
        <a href="#top" className="min-w-0 flex-1 space-y-1 md:flex-none">
          <span className="block text-[10px] uppercase tracking-[0.28em] text-[var(--accent)] sm:text-[11px] sm:tracking-[0.34em]">
            Amplifica
          </span>
          <span className="block truncate font-[family-name:var(--font-display)] text-xl leading-none text-stone-100 sm:text-2xl">
            Estratégia em cena
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-6 lg:flex">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm text-stone-300 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-[var(--accent)] after:transition-[width] after:duration-200 hover:text-stone-100 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={contactLinks.instagram.href}
            target="_blank"
            rel="noreferrer"
            className="hidden text-sm text-stone-300 hover:text-stone-100 xl:inline-flex"
          >
            Instagram
          </a>
          <a
            href={contactLinks.whatsapp.href}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 rounded-full border border-white/12 bg-white/4 px-3.5 py-2 text-xs font-medium text-stone-100 hover:border-[var(--accent)]/50 hover:bg-white/8 hover:text-white sm:px-5 sm:py-2.5 sm:text-sm"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
