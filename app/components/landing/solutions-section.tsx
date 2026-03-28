import { solutionItems } from "./content";
import { SectionShell } from "./section-shell";

export function SolutionsSection() {
  return (
    <SectionShell
      id="solucoes"
      eyebrow="Soluções"
      title="Estrutura inicial para as três frentes principais da Amplifica."
      description="Os blocos abaixo já separam as soluções que depois receberão copy definitiva e refinamento visual."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {solutionItems.map((item) => (
          <article
            key={item.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-neutral-300">{item.description}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
