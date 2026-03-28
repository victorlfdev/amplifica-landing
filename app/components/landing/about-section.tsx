import { SectionShell } from "./section-shell";

export function AboutSection() {
  return (
    <SectionShell
      id="quem-somos"
      eyebrow="Quem é a Amplifica"
      title="A Amplifica une audiovisual profissional com visão estratégica de comunicação."
      description="Mais do que registrar um evento, a marca estrutura a captação para gerar conteúdo relevante, presença digital e autoridade institucional."
    >
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-8 sm:p-10">
          <p className="text-sm uppercase tracking-[0.28em] text-stone-500">Posicionamento</p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-200">
            A Amplifica se posiciona como parceira estratégica para marcas, empresas,
            instituições culturais, projetos educacionais, igrejas e organizações que
            usam eventos como parte importante da sua comunicação.
          </p>
        </article>
        <article className="rounded-[2rem] border border-white/8 bg-white/[0.03] p-8 sm:p-10">
          <p className="text-sm uppercase tracking-[0.28em] text-stone-500">Abordagem</p>
          <p className="mt-5 text-base leading-8 text-stone-300 sm:text-lg">
            Seu trabalho começa antes da execução audiovisual, passa pela cobertura do
            evento e continua no uso inteligente do material no pós-evento, com foco em
            posicionamento, clareza de mensagem e valor de marca.
          </p>
        </article>
      </div>
    </SectionShell>
  );
}
