import { Reveal } from "./reveal";
import { SectionShell } from "./section-shell";

export function AboutSection() {
  return (
    <SectionShell
      id="quem-somos"
      eyebrow="Quem e a Amplifica"
      title="A Amplifica une audiovisual profissional com visao estrategica de comunicacao."
      description="Mais do que registrar um evento, a marca estrutura a captacao para gerar conteudo relevante, presenca digital e autoridade institucional."
    >
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <article className="rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-8 shadow-[0_14px_50px_rgba(0,0,0,0.22)] sm:p-10">
            <p className="text-sm uppercase tracking-[0.28em] text-stone-500">Posicionamento</p>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-200">
              A Amplifica se posiciona como parceira estrategica para marcas, empresas,
              instituicoes culturais, projetos educacionais, igrejas e organizacoes que
              usam eventos como parte importante da sua comunicacao.
            </p>
          </article>
        </Reveal>
        <Reveal delay={0.1}>
          <article className="rounded-[2rem] border border-white/8 bg-white/[0.03] p-8 shadow-[0_14px_50px_rgba(0,0,0,0.2)] sm:p-10">
            <p className="text-sm uppercase tracking-[0.28em] text-stone-500">Abordagem</p>
            <p className="mt-5 text-base leading-8 text-stone-300 sm:text-lg">
              Seu trabalho comeca antes da execucao audiovisual, passa pela cobertura do
              evento e continua no uso inteligente do material no pos-evento, com foco em
              posicionamento, clareza de mensagem e valor de marca.
            </p>
          </article>
        </Reveal>
      </div>
    </SectionShell>
  );
}
