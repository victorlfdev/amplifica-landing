import { navigationItems } from "./content";

export function Header() {
  return (
    <header className="border-b border-white/10 px-6 py-5 sm:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6">
        <a href="#top" className="text-lg font-semibold tracking-[0.18em] uppercase">
          Amplifica
        </a>

        <nav aria-label="Navegação principal" className="hidden gap-6 md:flex">
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-neutral-300">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium"
        >
          Solicitar proposta
        </a>
      </div>
    </header>
  );
}
