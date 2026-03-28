import { Reveal } from "./reveal";
import { solutionItems } from "./content";
import { SectionShell } from "./section-shell";

export function SolutionsSection() {
  return (
    <SectionShell
      id="solucoes"
      eyebrow="Solucoes"
      title="A atuacao da Amplifica se organiza em tres frentes principais."
      description="Cada solucao responde a uma etapa importante da comunicacao de eventos: planejar, executar e transformar o material em presenca continua."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {solutionItems.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08}>
            <article className="h-full rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-8 shadow-[0_16px_55px_rgba(0,0,0,0.22)]">
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
                Solucao 0{index + 1}
              </p>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-3xl leading-none text-stone-100">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-8 text-stone-300">{item.description}</p>
              <ul className="mt-6 space-y-3 border-t border-white/8 pt-6 text-sm leading-7 text-stone-400">
                {item.items.map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
