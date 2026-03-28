import { Reveal } from "./reveal";
import { SectionShell } from "./section-shell";

export function ProblemSection() {
  return (
    <SectionShell
      eyebrow="Problema e oportunidade"
      title="Sem estrategia, o valor de um evento costuma desaparecer rapido demais."
      description="Muitas marcas investem na experiencia ao vivo, mas deixam passar a oportunidade de transformar esse momento em conteudo, repertorio e autoridade de longo prazo."
    >
      <div className="grid gap-5 sm:gap-6 lg:grid-cols-2">
        <Reveal>
          <article className="rounded-[1.7rem] border border-white/8 bg-white/[0.03] p-6 shadow-[0_14px_50px_rgba(0,0,0,0.2)] sm:rounded-[2rem] sm:p-8 lg:p-10">
            <p className="text-xs uppercase tracking-[0.24em] text-stone-500 sm:text-sm sm:tracking-[0.28em]">
              O que costuma acontecer
            </p>
            <h3 className="mt-4 text-xl font-semibold text-stone-100 sm:mt-5 sm:text-2xl">
              Muito esforco, pouco desdobramento
            </h3>
            <p className="mt-4 text-base leading-7 text-stone-300 sm:leading-8">
              O evento mobiliza equipe, publico e investimento, mas o registro final nao
              se converte em ativos consistentes de comunicacao, memoria ou posicionamento.
            </p>
          </article>
        </Reveal>
        <Reveal delay={0.1}>
          <article className="rounded-[1.7rem] border border-[var(--accent)]/20 bg-[linear-gradient(180deg,rgba(213,185,138,0.12),rgba(255,255,255,0.03))] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.24)] sm:rounded-[2rem] sm:p-8 lg:p-10">
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--accent)] sm:text-sm sm:tracking-[0.28em]">
              O que a Amplifica faz
            </p>
            <h3 className="mt-4 text-xl font-semibold text-stone-100 sm:mt-5 sm:text-2xl">
              Transforma presenca em ativo de marca
            </h3>
            <p className="mt-4 text-base leading-7 text-stone-200 sm:leading-8">
              Estruturamos a cobertura para que cada evento gere narrativa, conteudo,
              presenca digital e fortalecimento institucional muito alem do dia em que ele acontece.
            </p>
          </article>
        </Reveal>
      </div>
    </SectionShell>
  );
}
