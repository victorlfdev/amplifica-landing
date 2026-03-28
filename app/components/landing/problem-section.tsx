import { SectionShell } from "./section-shell";

export function ProblemSection() {
  return (
    <SectionShell
      eyebrow="Problema e oportunidade"
      title="Um evento não deveria gerar impacto apenas no momento em que acontece."
      description="Sem direção estratégica, boa parte do valor produzido ao vivo se perde. Com planejamento, o mesmo evento pode fortalecer percepção, ampliar alcance e sustentar a comunicação por mais tempo."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold">Sem estratégia</h3>
          <p className="mt-3 text-sm leading-6 text-neutral-300">
            O evento acontece, mobiliza pessoas e gera percepção no momento, mas o
            conteúdo produzido não é planejado para continuar comunicando depois.
          </p>
        </article>
        <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold">Com direção estratégica</h3>
          <p className="mt-3 text-sm leading-6 text-neutral-300">
            A cobertura deixa de ser apenas registro e passa a sustentar narrativa,
            presença digital, fortalecimento institucional e autoridade de marca.
          </p>
        </article>
      </div>
    </SectionShell>
  );
}
