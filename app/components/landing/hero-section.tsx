import { heroHighlights } from "./content";

export function HeroSection() {
  return (
    <section id="top" className="border-b border-white/10 px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-8">
          <header className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
              Audiovisual estratégico para eventos
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Transformamos experiências ao vivo em conteúdo, posicionamento e impacto
              duradouro.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-neutral-300">
              A Amplifica atua ao lado de marcas, instituições e organizações que
              querem extrair mais valor estratégico dos seus eventos, com planejamento,
              cobertura audiovisual e desdobramento de conteúdo.
            </p>
          </header>

          <div className="flex flex-col gap-4 sm:flex-row" aria-label="Ações principais">
            <a
              href="#contato"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950"
            >
              Falar com a Amplifica
            </a>
            <a
              href="#solucoes"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold"
            >
              Ver soluções
            </a>
          </div>
        </div>

        <div className="grid gap-4" aria-label="Destaques da proposta">
          {heroHighlights.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-neutral-300">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
