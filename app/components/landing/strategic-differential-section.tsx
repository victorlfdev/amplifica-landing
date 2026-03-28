import { Reveal } from "./reveal";
import { differentialItems } from "./content";
import { SectionShell } from "./section-shell";

export function StrategicDifferentialSection() {
  return (
    <SectionShell
      id="diferencial"
      eyebrow="Diferencial estrategico"
      title="O diferencial da Amplifica esta em pensar estrategicamente antes da execucao."
      description="A cobertura audiovisual faz parte de um raciocinio maior: o que comunicar, o que captar e como transformar esse material em valor de marca."
    >
      <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
        {differentialItems.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08}>
            <article className="h-full rounded-[1.7rem] border border-white/8 bg-white/[0.03] p-6 shadow-[0_14px_50px_rgba(0,0,0,0.2)] sm:rounded-[2rem] sm:p-8">
              <p className="text-[11px] uppercase tracking-[0.24em] text-stone-500 sm:text-xs sm:tracking-[0.28em]">
                Pilar 0{index + 1}
              </p>
              <h3 className="mt-4 text-xl font-semibold text-stone-100 sm:text-2xl">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-stone-300 sm:leading-8">
                {item.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
