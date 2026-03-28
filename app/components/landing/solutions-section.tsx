import { Reveal } from "./reveal";
import { solutionItems } from "./content";
import { SectionShell } from "./section-shell";

export function SolutionsSection() {
  return (
    <SectionShell
      id="solucoes"
      eyebrow="Solucoes"
      title="Tres frentes para transformar um evento em posicionamento."
      description="A Amplifica organiza sua atuacao em etapas complementares, para que estrategia, execucao e continuidade trabalhem juntas."
    >
      <div className="grid gap-5 sm:gap-6 lg:grid-cols-3">
        {solutionItems.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08}>
            <article className="h-full rounded-[1.7rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6 shadow-[0_16px_55px_rgba(0,0,0,0.22)] sm:rounded-[2rem] sm:p-8">
              <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--accent)] sm:text-xs sm:tracking-[0.28em]">
                Solucao 0{index + 1}
              </p>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-[2rem] leading-[0.94] text-stone-100 sm:text-3xl">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-stone-300 sm:leading-8">
                {item.description}
              </p>
              <ul className="mt-5 space-y-3 border-t border-white/8 pt-5 text-sm leading-6 text-stone-400 sm:mt-6 sm:pt-6 sm:leading-7">
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
