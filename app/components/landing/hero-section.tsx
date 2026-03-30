"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { heroHighlights } from "./content";

const spotlightMotion = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
};

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [18, -20]);
  const panelY = useTransform(scrollYProgress, [0, 1], [24, 18]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.4, 1], [0.45, 1, 0.4]);

  return (
    <section
      ref={sectionRef}
      className="relative border-b border-white/8 px-5 pb-20 pt-14 sm:px-8 sm:pb-24 sm:pt-16 lg:px-16 lg:pb-32 lg:pt-20"
    >
      <div
        id="top"
        className="mx-auto grid w-full max-w-6xl gap-12 sm:gap-14 lg:grid-cols-[minmax(0,1.04fr)_minmax(360px,0.96fr)] lg:items-center lg:gap-16"
      >
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          style={prefersReducedMotion ? undefined : { y: contentY }}
          className="space-y-10 sm:space-y-12"
        >
          <motion.header variants={spotlightMotion} className="max-w-4xl space-y-6 sm:space-y-7">
            <div className="flex items-center gap-3 sm:gap-4">
              <Image
                src="/images/AmplificaIconeBranco.webp"
                alt="Ícone da Amplifica"
                width={56}
                height={56}
                priority
                className="h-12 w-12 object-contain opacity-95 sm:h-14 sm:w-14"
              />
              <Image
                src="/images/TipografiaAbranco.png"
                alt="Tipografia da Amplifica"
                width={120}
                height={32}
                priority
                className="mt-2.5 h-8 w-auto object-contain opacity-95 sm:h-11"
              />
            </div>
            <p className="section-kicker">Audiovisual estratégico para eventos</p>
            <h2 className="max-w-[11ch] text-[3.35rem] font-extrabold leading-[0.88] tracking-[-0.07em] text-stone-100 sm:text-[4.7rem] lg:text-[6.5rem]">
              Eventos que não terminam no palco.
            </h2>
            <p className="max-w-2xl text-[1.03rem] leading-8 text-stone-300 sm:text-[1.12rem] sm:leading-9 lg:text-[1.24rem]">
              A Amplifica transforma experiências ao vivo em conteúdo,
              posicionamento e impacto duradouro para marcas, instituições e
              organizações que precisam comunicar com mais autoridade.
            </p>
          </motion.header>

          <motion.div
            variants={spotlightMotion}
            className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4 lg:items-center"
            aria-label="Ações principais"
          >
            <a
              href="#contato"
              className="button-primary inline-flex w-full items-center justify-center rounded-full px-6 py-4 text-[0.78rem] font-bold uppercase tracking-[0.18em] transition-all duration-300 sm:w-auto"
            >
              Solicitar proposta
            </a>
            <a
              href="#solucoes"
              className="button-secondary inline-flex w-full items-center justify-center rounded-full px-6 py-4 text-[0.78rem] font-bold uppercase tracking-[0.18em] transition-all duration-300 sm:w-auto"
            >
              Conhecer as soluções
            </a>
          </motion.div>

          <motion.dl
            variants={spotlightMotion}
            className="grid gap-4 border-t border-white/8 pt-6 text-sm text-stone-400 sm:grid-cols-3 sm:pt-7"
          >
            <div className="space-y-2">
              <dt className="text-[10px] font-semibold uppercase tracking-[0.26em] text-stone-500">
                Para quem
              </dt>
              <dd className="text-sm leading-7 text-stone-200 sm:text-base sm:leading-8">
                Marcas e instituições que constroem autoridade por meio de eventos.
              </dd>
            </div>
            <div className="space-y-2">
              <dt className="text-[10px] font-semibold uppercase tracking-[0.26em] text-stone-500">
                O que entregamos
              </dt>
              <dd className="text-sm leading-7 text-stone-200 sm:text-base sm:leading-8">
                Direção, cobertura e desdobramento estratégico do material captado.
              </dd>
            </div>
            <div className="space-y-2">
              <dt className="text-[10px] font-semibold uppercase tracking-[0.26em] text-stone-500">
                Resultado
              </dt>
              <dd className="text-sm leading-7 text-stone-200 sm:text-base sm:leading-8">
                Mais presença, mais clareza institucional e mais valor percebido.
              </dd>
            </div>
          </motion.dl>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: 36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 0.95, delay: 0.15, ease: [0.22, 1, 0.36, 1] }
          }
          style={prefersReducedMotion ? undefined : { y: panelY }}
          className="relative md:mx-auto md:w-full md:max-w-3xl lg:max-w-none"
        >
          <motion.div
            style={prefersReducedMotion ? undefined : { opacity: glowOpacity }}
            className="absolute -right-4 bottom-4 h-20 w-20 rounded-full bg-white/8 blur-3xl sm:-right-6 sm:bottom-6 sm:h-24 sm:w-24"
          />
          <motion.div
            style={prefersReducedMotion ? undefined : { opacity: glowOpacity }}
            className="absolute -left-8 top-8 hidden h-28 w-28 rounded-full bg-[var(--accent-soft)] blur-3xl lg:block xl:h-36 xl:w-36"
          />

          <div className="premium-card relative overflow-hidden rounded-[2rem] p-3 sm:rounded-[2.4rem] sm:p-4 md:p-5 lg:p-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(213,185,138,0.22),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.07),transparent_28%)]" />
            <div className="relative grid gap-3 sm:gap-4 md:gap-5">
              <div className="overflow-hidden rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,#111214,#090909)] p-5 sm:rounded-[2rem] sm:p-6 md:p-7 lg:p-7">
                <div className="flex items-center justify-between gap-4">
                  <p className="section-kicker text-[10px] sm:text-[11px]">Antes, durante e depois</p>
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-stone-300 sm:px-3 sm:text-[11px] sm:tracking-[0.24em]">
                    Amplifica
                  </span>
                </div>

                <div className="mt-6 space-y-5 sm:mt-8 sm:space-y-6 md:mt-7 md:space-y-7">
                  <div className="space-y-3 md:space-y-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500 sm:text-sm sm:tracking-[0.28em]">
                      Visão estratégica
                    </p>
                    <p className="max-w-[13ch] text-[2.55rem] font-bold leading-[0.9] tracking-[-0.055em] text-stone-100 sm:text-[3.25rem] md:max-w-[15ch] md:text-[3rem] lg:text-[3.35rem]">
                      Cada evento pode render muito mais do que registro.
                    </p>
                  </div>

                  <div
                    className="grid gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-1 lg:gap-5"
                    aria-label="Destaques da visão estratégica"
                  >
                    <div className="rounded-[1.3rem] border border-white/8 bg-white/[0.04] p-4 transition-colors duration-300 hover:border-white/12 hover:bg-white/[0.06] sm:rounded-[1.5rem] sm:p-5 md:flex md:min-h-[188px] md:flex-col md:justify-between md:p-5 lg:min-h-[172px]">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-500 sm:text-xs sm:tracking-[0.26em]">
                        Planejamento
                      </p>
                      <p className="mt-3 text-sm leading-6 text-stone-200 sm:text-base sm:leading-7 md:mt-5 md:max-w-[24ch] md:text-[0.96rem] md:leading-6 lg:max-w-none lg:text-base lg:leading-7">
                        Definimos o que precisa ser captado para sustentar narrativa e valor de marca.
                      </p>
                    </div>
                    <div className="rounded-[1.3rem] border border-[var(--accent)]/16 bg-[linear-gradient(180deg,rgba(213,185,138,0.14),rgba(255,255,255,0.03))] p-4 transition-colors duration-300 hover:border-[var(--accent)]/28 hover:bg-[linear-gradient(180deg,rgba(213,185,138,0.18),rgba(255,255,255,0.04))] sm:rounded-[1.5rem] sm:p-5 md:flex md:min-h-[188px] md:flex-col md:justify-between md:p-5 lg:min-h-[172px]">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--accent)] sm:text-xs sm:tracking-[0.26em]">
                        Pós-evento
                      </p>
                      <p className="mt-3 text-sm leading-6 text-stone-200 sm:text-base sm:leading-7 md:mt-5 md:max-w-[23ch] md:text-[0.94rem] md:leading-6 lg:max-w-none lg:text-base lg:leading-7">
                        Transformamos o material em conteúdo que continua comunicando autoridade.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="grid gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-1 md:gap-3 lg:grid-cols-1 lg:gap-4"
                aria-label="Destaques da proposta"
              >
                {heroHighlights.map((item, index) => (
                  <motion.article
                    key={item.title}
                    initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={
                      prefersReducedMotion
                        ? { duration: 0 }
                        : {
                            duration: 0.5,
                            delay: 0.1 + index * 0.08,
                            ease: [0.22, 1, 0.36, 1],
                          }
                    }
                    className="rounded-[1.4rem] border border-white/8 bg-black/25 p-4 backdrop-blur-sm transition-colors duration-300 hover:border-white/12 hover:bg-black/30 sm:rounded-[1.6rem] sm:p-5 md:flex md:min-h-[212px] md:flex-col md:justify-between md:px-4 md:py-5 lg:min-h-[184px] lg:p-5"
                  >
                    <div className="space-y-3 md:space-y-3.5">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-stone-500 sm:text-[11px] sm:tracking-[0.3em]">
                        0{index + 1}
                      </p>
                      <h2 className="text-base font-bold leading-5 tracking-[-0.03em] text-stone-100 sm:text-lg md:text-[0.98rem] md:leading-5 lg:text-[1.02rem] lg:leading-6">
                        {item.title}
                      </h2>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-stone-300 sm:leading-7 md:mt-5 md:text-[0.89rem] md:leading-5 lg:text-[0.92rem] lg:leading-6">
                      {item.description}
                    </p>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
