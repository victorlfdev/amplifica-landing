import { differentialItems } from "./content";
import { SectionShell } from "./section-shell";

export function StrategicDifferentialSection() {
  return (
    <SectionShell
      id="diferencial"
      eyebrow="Diferencial estratégico"
      title="O diferencial da Amplifica está em pensar estrategicamente antes da execução."
      description="A cobertura audiovisual faz parte de um raciocínio maior: o que comunicar, o que captar e como transformar esse material em valor de marca."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {differentialItems.map((item, index) => (
          <article
            key={item.title}
            className="rounded-[2rem] border border-white/8 bg-white/[0.03] p-8"
          >
            <p className="text-xs uppercase tracking-[0.28em] text-stone-500">
              Pilar 0{index + 1}
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-stone-100">{item.title}</h3>
            <p className="mt-4 text-base leading-8 text-stone-300">{item.description}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
