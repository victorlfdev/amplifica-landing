import { Reveal } from "./reveal";
import { SectionShell } from "./section-shell";

export function ProblemSection() {
  return (
    <SectionShell
      eyebrow="Problema e oportunidade"
      title="Um evento nao deveria gerar impacto apenas no momento em que acontece."
      description="Sem direcao estrategica, boa parte do valor produzido ao vivo se perde. Com planejamento, o mesmo evento pode fortalecer percepcao, ampliar alcance e sustentar a comunicacao por mais tempo."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <article className="rounded-[2rem] border border-white/8 bg-white/[0.03] p-8 shadow-[0_14px_50px_rgba(0,0,0,0.2)] sm:p-10">
            <p className="text-sm uppercase tracking-[0.28em] text-stone-500">Cenario comum</p>
            <h3 className="mt-5 text-2xl font-semibold text-stone-100">Sem estrategia</h3>
            <p className="mt-4 text-base leading-8 text-stone-300">
              O evento acontece, mobiliza pessoas e gera percepcao no momento, mas o
              conteudo produzido nao e planejado para continuar comunicando depois.
            </p>
          </article>
        </Reveal>
        <Reveal delay={0.1}>
          <article className="rounded-[2rem] border border-[var(--accent)]/20 bg-[linear-gradient(180deg,rgba(213,185,138,0.12),rgba(255,255,255,0.03))] p-8 shadow-[0_18px_60px_rgba(0,0,0,0.24)] sm:p-10">
            <p className="text-sm uppercase tracking-[0.28em] text-[var(--accent)]">
              Oportunidade estrategica
            </p>
            <h3 className="mt-5 text-2xl font-semibold text-stone-100">
              Com direcao estrategica
            </h3>
            <p className="mt-4 text-base leading-8 text-stone-200">
              A cobertura deixa de ser apenas registro e passa a sustentar narrativa,
              presenca digital, fortalecimento institucional e autoridade de marca.
            </p>
          </article>
        </Reveal>
      </div>
    </SectionShell>
  );
}
