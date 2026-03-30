import { Reveal } from "./reveal";
import { SectionShell } from "./section-shell";

export function AboutSection() {
  return (
    <SectionShell
      id="quem-somos"
      eyebrow="Quem é a Amplifica"
      title="A Amplifica não atua apenas na cobertura. Atua na construção de percepção."
      description="Somos uma parceira estratégica para marcas e instituições que desejam transformar eventos em conteúdo relevante, memória institucional e autoridade de marca."
    >
      <div className="grid gap-5 sm:gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <article className="premium-card rounded-[1.7rem] p-6 sm:rounded-[2rem] sm:p-8 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500 sm:text-sm sm:tracking-[0.28em]">
              Posicionamento
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-stone-200 sm:mt-5 sm:text-lg sm:leading-8">
              A Amplifica atende empresas, instituições culturais, projetos educacionais,
              igrejas e marcas que usam eventos como parte central da sua comunicação e
              precisam parecer mais sólidas, relevantes e bem posicionadas.
            </p>
          </article>
        </Reveal>
        <Reveal delay={0.1}>
          <article className="premium-card rounded-[1.7rem] p-6 sm:rounded-[2rem] sm:p-8 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500 sm:text-sm sm:tracking-[0.28em]">
              Como pensamos
            </p>
            <p className="mt-4 text-base leading-7 text-stone-300 sm:mt-5 sm:text-lg sm:leading-8">
              O trabalho começa antes da execução, passa por uma cobertura guiada por
              critério e continua no pós-evento, quando o material captado precisa seguir
              gerando conteúdo, posicionamento e impacto duradouro.
            </p>
          </article>
        </Reveal>
      </div>
    </SectionShell>
  );
}
