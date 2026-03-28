import { SectionShell } from "./section-shell";

export function AboutSection() {
  return (
    <SectionShell
      id="quem-somos"
      eyebrow="Quem é a Amplifica"
      title="A Amplifica une audiovisual profissional com visão estratégica de comunicação."
      description="Mais do que registrar um evento, a marca estrutura a captação para gerar conteúdo relevante, presença digital e autoridade institucional."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <p className="rounded-3xl border border-white/10 bg-white/5 p-6 leading-7 text-neutral-300">
          A Amplifica se posiciona como parceira estratégica para marcas, empresas,
          instituições culturais, projetos educacionais, igrejas e organizações que
          usam eventos como parte importante da sua comunicação.
        </p>
        <p className="rounded-3xl border border-white/10 bg-white/5 p-6 leading-7 text-neutral-300">
          Seu trabalho começa antes da execução audiovisual, passa pela cobertura do
          evento e continua no uso inteligente do material no pós-evento, com foco em
          posicionamento, clareza de mensagem e valor de marca.
        </p>
      </div>
    </SectionShell>
  );
}
