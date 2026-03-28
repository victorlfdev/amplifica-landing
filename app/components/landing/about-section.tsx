import { SectionShell } from "./section-shell";

export function AboutSection() {
  return (
    <SectionShell
      id="quem-somos"
      eyebrow="Quem é a Amplifica"
      title="Placeholder para apresentar a marca com clareza institucional."
      description="Texto simples para marcar a seção que vai explicar quem é a Amplifica, como pensa e por que atua além do registro audiovisual."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <p className="rounded-3xl border border-white/10 bg-white/5 p-6 leading-7 text-neutral-300">
          Placeholder para uma visão resumida sobre a Amplifica como parceira
          estratégica de comunicação para marcas e organizações que realizam eventos.
        </p>
        <p className="rounded-3xl border border-white/10 bg-white/5 p-6 leading-7 text-neutral-300">
          Placeholder para reforçar a união entre audiovisual profissional, visão de
          marketing e direcionamento de conteúdo.
        </p>
      </div>
    </SectionShell>
  );
}
