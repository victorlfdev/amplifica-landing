import { heroHighlights } from "./content";

export function HeroSection() {
  return (
    <section id="top" className="border-b border-white/8 px-6 pb-18 pt-20 sm:px-10 sm:pb-24 sm:pt-24 lg:px-16 lg:pb-28 lg:pt-28">
      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:items-end lg:gap-10">
        <div className="space-y-10">
          <header className="max-w-4xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--accent)]">
              Audiovisual estratégico para eventos
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-5xl leading-[0.92] tracking-tight text-stone-100 sm:text-6xl lg:text-7xl">
              Transformamos experiências ao vivo em conteúdo, posicionamento e impacto
              duradouro.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-stone-300 sm:text-xl">
              A Amplifica atua ao lado de marcas, instituições e organizações que
              querem extrair mais valor estratégico dos seus eventos, com planejamento,
              cobertura audiovisual e desdobramento de conteúdo.
            </p>
          </header>

          <div className="flex flex-col gap-4 sm:flex-row" aria-label="Ações principais">
            <a
              href="#contato"
              className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-stone-950 transition hover:brightness-105"
            >
              Falar com a Amplifica
            </a>
            <a
              href="#solucoes"
              className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/4 px-6 py-3.5 text-sm font-semibold text-stone-100 transition hover:bg-white/8"
            >
              Ver soluções
            </a>
          </div>
        </div>

        <div
          className="grid gap-4 rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-4 shadow-[0_20px_80px_rgba(0,0,0,0.35)] sm:p-5"
          aria-label="Destaques da proposta"
        >
          {heroHighlights.map((item, index) => (
            <article
              key={item.title}
              className="rounded-[1.6rem] border border-white/8 bg-black/20 p-6"
            >
              <p className="text-[11px] uppercase tracking-[0.3em] text-stone-500">
                0{index + 1}
              </p>
              <h2 className="mt-3 text-xl font-semibold text-stone-100">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-stone-300">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
