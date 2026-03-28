import { SectionShell } from "./section-shell";

export function ProblemSection() {
  return (
    <SectionShell
      eyebrow="Problema e oportunidade"
      title="Placeholder para mostrar que um evento pode gerar muito mais do que registro."
      description="Esta seção prepara a narrativa estratégica da landing e destaca a oportunidade de transformar presença ao vivo em ativos de comunicação."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold">Sem estratégia</h3>
          <p className="mt-3 text-sm leading-6 text-neutral-300">
            Placeholder para explicar como o valor do evento se perde quando não existe
            planejamento de conteúdo.
          </p>
        </article>
        <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold">Com direção estratégica</h3>
          <p className="mt-3 text-sm leading-6 text-neutral-300">
            Placeholder para mostrar como a Amplifica prolonga impacto, narrativa e
            autoridade depois do evento.
          </p>
        </article>
      </div>
    </SectionShell>
  );
}
