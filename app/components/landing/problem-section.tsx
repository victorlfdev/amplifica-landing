import { SectionShell } from "./section-shell";

export function ProblemSection() {
  return (
    <SectionShell
      eyebrow="Problema e oportunidade"
      title="Um evento não deveria gerar impacto apenas no momento em que acontece."
      description="Sem direção estratégica, boa parte do valor produzido ao vivo se perde. Com planejamento, o mesmo evento pode fortalecer percepção, ampliar alcance e sustentar a comunicação por mais tempo."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-[2rem] border border-white/8 bg-white/[0.03] p-8 sm:p-10">
          <p className="text-sm uppercase tracking-[0.28em] text-stone-500">Cenário comum</p>
          <h3 className="mt-5 text-2xl font-semibold text-stone-100">Sem estratégia</h3>
          <p className="mt-4 text-base leading-8 text-stone-300">
            O evento acontece, mobiliza pessoas e gera percepção no momento, mas o
            conteúdo produzido não é planejado para continuar comunicando depois.
          </p>
        </article>
        <article className="rounded-[2rem] border border-[var(--accent)]/20 bg-[linear-gradient(180deg,rgba(213,185,138,0.12),rgba(255,255,255,0.03))] p-8 sm:p-10">
          <p className="text-sm uppercase tracking-[0.28em] text-[var(--accent)]">
            Oportunidade estratégica
          </p>
          <h3 className="mt-5 text-2xl font-semibold text-stone-100">
            Com direção estratégica
          </h3>
          <p className="mt-4 text-base leading-8 text-stone-200">
            A cobertura deixa de ser apenas registro e passa a sustentar narrativa,
            presença digital, fortalecimento institucional e autoridade de marca.
          </p>
        </article>
      </div>
    </SectionShell>
  );
}
