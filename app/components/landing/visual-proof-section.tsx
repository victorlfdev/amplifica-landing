import { visualProofItems } from "./content";
import { SectionShell } from "./section-shell";

export function VisualProofSection() {
  return (
    <SectionShell
      eyebrow="Prova visual"
      title="Espaço reservado para a galeria inicial da landing page."
      description="Nesta etapa, a seção existe apenas para organizar a estrutura e indicar o local das imagens ou vídeos."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {visualProofItems.map((item) => (
          <div
            key={item}
            className="flex min-h-48 items-end rounded-3xl border border-dashed border-white/15 bg-white/5 p-5 text-sm text-neutral-400"
          >
            {item}
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
