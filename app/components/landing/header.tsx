import { navigationItems } from "./content";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/8 bg-black/45 px-6 py-5 backdrop-blur-xl sm:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6">
        <a href="#top" className="space-y-1">
          <span className="block text-[11px] uppercase tracking-[0.34em] text-[var(--accent)]">
            Amplifica
          </span>
          <span className="block font-[family-name:var(--font-display)] text-2xl leading-none text-stone-100">
            Estratégia em cena
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-8 md:flex">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-stone-300 transition hover:text-stone-100"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="rounded-full border border-white/12 bg-white/4 px-5 py-2.5 text-sm font-medium text-stone-100 transition hover:border-[var(--accent)]/40 hover:bg-white/8"
        >
          Solicitar proposta
        </a>
      </div>
    </header>
  );
}
