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
