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
        {visualProofItems.map((item, index) => (
          <article
            key={item.title}
            className="group flex min-h-64 items-end rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6 text-sm text-stone-400"
          >
            <div className="space-y-3">
              <p className="text-[11px] uppercase tracking-[0.3em] text-stone-500">
                Galeria 0{index + 1}
              </p>
              <h3 className="font-[family-name:var(--font-display)] text-3xl leading-none text-stone-100">
                {item.title}
              </h3>
              <p className="leading-7">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
