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
        {differentialItems.map((item) => (
          <article
            key={item.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-neutral-300">{item.description}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
