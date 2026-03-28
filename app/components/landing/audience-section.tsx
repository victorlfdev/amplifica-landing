import { Reveal } from "./reveal";
import { audienceItems } from "./content";
import { SectionShell } from "./section-shell";

export function AudienceSection() {
  return (
    <SectionShell
      eyebrow="Quem mais se beneficia"
      title="A Amplifica faz mais sentido para organizacoes que usam eventos como ferramenta de posicionamento."
      description="A comunicacao da landing foi estruturada para dialogar com publicos que dependem de autoridade, clareza institucional e consistencia na presenca digital."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {audienceItems.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08}>
            <article className="h-full rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-8 shadow-[0_16px_55px_rgba(0,0,0,0.22)]">
              <h3 className="font-[family-name:var(--font-display)] text-3xl leading-none text-stone-100">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-8 text-stone-300">{item.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
