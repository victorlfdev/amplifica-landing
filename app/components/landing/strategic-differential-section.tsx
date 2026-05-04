import { Reveal } from "./reveal";
import { differentialItems } from "./content";
import { SectionShell } from "./section-shell";

export function StrategicDifferentialSection() {
  return (
    <SectionShell
      id="diferencial"
      eyebrow="Diferencial estratégico"
      title="O diferencial da Amplifica está na inteligência que antecede a captação."
      description="Não registramos apenas o que acontece. Definimos o que precisa ser preservado, ampliado e reutilizado para fortalecer a marca depois do evento."
    >
      <div className="grid gap-4 sm:gap-5 lg:grid-cols-3">
        {differentialItems.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08}>
            <article className="premium-card h-full rounded-[1.7rem] p-6 sm:rounded-[2rem] sm:p-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--accent)]/60 sm:text-[11px]">
                Pilar 0{index + 1}
              </p>
              <h3 className="mt-3 text-lg font-bold tracking-[-0.04em] text-stone-100 sm:text-xl">
                {item.title}
              </h3>
              <p className="mt-3 text-[0.87rem] leading-[1.75] text-stone-400 sm:text-base sm:leading-[1.8]">
                {item.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
