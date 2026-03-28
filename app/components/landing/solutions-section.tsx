import { solutionItems } from "./content";
import { SectionShell } from "./section-shell";

export function SolutionsSection() {
  return (
    <SectionShell
      id="solucoes"
      eyebrow="Soluções"
      title="A atuação da Amplifica se organiza em três frentes principais."
      description="Cada solução responde a uma etapa importante da comunicação de eventos: planejar, executar e transformar o material em presença contínua."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {solutionItems.map((item) => (
          <article
            key={item.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-neutral-300">{item.description}</p>
            <ul className="mt-5 space-y-2 text-sm leading-6 text-neutral-400">
              {item.items.map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
