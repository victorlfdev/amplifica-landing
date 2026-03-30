import { Reveal } from "./reveal";
import { solutionItems } from "./content";
import { SectionShell } from "./section-shell";

export function SolutionsSection() {
  return (
    <SectionShell
      id="solucoes"
      eyebrow="Soluções"
      title="Três frentes para transformar um evento em posicionamento."
      description="A Amplifica organiza sua atuação em etapas complementares, para que estratégia, execução e continuidade trabalhem juntas."
    >
      <div className="grid gap-5 sm:gap-6 lg:grid-cols-3">
        {solutionItems.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08}>
            <article className="premium-card h-full rounded-[1.7rem] p-6 sm:rounded-[2rem] sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)] sm:text-xs sm:tracking-[0.28em]">
                Solução 0{index + 1}
              </p>
              <h3 className="mt-4 text-[2rem] font-bold leading-[0.92] tracking-[-0.055em] text-stone-100 sm:text-[2.4rem]">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-stone-300 sm:leading-8">
                {item.description}
              </p>
              <ul className="mt-5 space-y-3 border-t border-white/8 pt-5 text-sm leading-6 text-stone-400 sm:mt-6 sm:pt-6 sm:leading-7">
                {item.items.map((entry) => (
                  <li key={entry} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                    <span>{entry}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
