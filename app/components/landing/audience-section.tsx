import { audienceItems } from "./content";
import { SectionShell } from "./section-shell";

export function AudienceSection() {
  return (
    <SectionShell
      eyebrow="Quem mais se beneficia"
      title="A Amplifica faz mais sentido para organizações que usam eventos como ferramenta de posicionamento."
      description="A comunicação da landing foi estruturada para dialogar com públicos que dependem de autoridade, clareza institucional e consistência na presença digital."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {audienceItems.map((item) => (
          <article
            key={item.title}
            className="rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-8"
          >
            <h3 className="font-[family-name:var(--font-display)] text-3xl leading-none text-stone-100">
              {item.title}
            </h3>
            <p className="mt-4 text-base leading-8 text-stone-300">{item.description}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
