import { Reveal } from "./reveal";
import { SectionShell } from "./section-shell";

export function AboutSection() {
  return (
    <SectionShell
      id="quem-somos"
      eyebrow="Quem e a Amplifica"
      title="A Amplifica nao atua apenas na cobertura. Atua na construcao de percepcao."
      description="Somos uma parceira estrategica para marcas e instituicoes que desejam transformar eventos em conteudo relevante, memoria institucional e autoridade de marca."
    >
      <div className="grid gap-5 sm:gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <article className="rounded-[1.7rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6 shadow-[0_14px_50px_rgba(0,0,0,0.22)] sm:rounded-[2rem] sm:p-8 lg:p-10">
            <p className="text-xs uppercase tracking-[0.24em] text-stone-500 sm:text-sm sm:tracking-[0.28em]">
              Posicionamento
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-stone-200 sm:mt-5 sm:text-lg sm:leading-8">
              A Amplifica atende empresas, instituicoes culturais, projetos
              educacionais, igrejas e marcas que usam eventos como parte central da sua
              comunicacao e precisam parecer mais solidas, relevantes e bem posicionadas.
            </p>
          </article>
        </Reveal>
        <Reveal delay={0.1}>
          <article className="rounded-[1.7rem] border border-white/8 bg-white/[0.03] p-6 shadow-[0_14px_50px_rgba(0,0,0,0.2)] sm:rounded-[2rem] sm:p-8 lg:p-10">
            <p className="text-xs uppercase tracking-[0.24em] text-stone-500 sm:text-sm sm:tracking-[0.28em]">
              Como pensamos
            </p>
            <p className="mt-4 text-base leading-7 text-stone-300 sm:mt-5 sm:text-lg sm:leading-8">
              O trabalho comeca antes da execucao, passa por uma cobertura guiada por
              criterio e continua no pos-evento, quando o material captado precisa
              seguir gerando conteudo, posicionamento e impacto duradouro.
            </p>
          </article>
        </Reveal>
      </div>
    </SectionShell>
  );
}
