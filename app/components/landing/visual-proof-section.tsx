import { visualProofItems } from "./content";
import { SectionShell } from "./section-shell";

export function VisualProofSection() {
  return (
    <SectionShell
      eyebrow="Prova visual"
      title="A estrutura da galeria já prepara a prova visual da atuação da Amplifica."
      description="Nesta primeira versão, os cards abaixo indicam os tipos de imagem e contexto que a landing deve valorizar."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {visualProofItems.map((item) => (
          <article
            key={item.title}
            className="flex min-h-48 items-end rounded-3xl border border-dashed border-white/15 bg-white/5 p-5 text-sm text-neutral-400"
          >
            <div className="space-y-2">
              <h3 className="text-base font-semibold text-neutral-200">{item.title}</h3>
              <p className="leading-6">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
