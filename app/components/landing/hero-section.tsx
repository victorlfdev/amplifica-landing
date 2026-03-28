"use client";

import { motion } from "framer-motion";
import { heroHighlights } from "./content";

const spotlightMotion = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
};

export function HeroSection() {
  return (
    <section className="border-b border-white/8 px-5 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-20 lg:px-16 lg:pb-28 lg:pt-28">
      <div
        id="top"
        className="mx-auto grid w-full max-w-6xl gap-10 sm:gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)] lg:items-center lg:gap-14"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="space-y-8 sm:space-y-10"
        >
          <motion.header variants={spotlightMotion} className="max-w-4xl space-y-5 sm:space-y-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--accent)] sm:text-xs sm:tracking-[0.34em]">
              Audiovisual estrategico para eventos
            </p>
            <h1 className="max-w-[12ch] font-[family-name:var(--font-display)] text-[3.1rem] leading-[0.92] tracking-tight text-stone-100 sm:text-[4.1rem] lg:text-[5.35rem]">
              Eventos que nao terminam no palco.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-stone-300 sm:text-lg sm:leading-8 lg:text-xl">
              A Amplifica transforma experiencias ao vivo em conteudo, posicionamento e
              impacto duradouro para marcas, instituicoes e organizacoes que precisam
              comunicar com mais autoridade.
            </p>
          </motion.header>

          <motion.div
            variants={spotlightMotion}
            className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
            aria-label="Acoes principais"
          >
            <a
              href="#contato"
              className="inline-flex w-full items-center justify-center rounded-full bg-[var(--accent)] px-5 py-3.5 text-sm font-semibold text-stone-950 transition hover:brightness-105 sm:w-auto sm:px-6"
            >
              Solicitar proposta
            </a>
            <a
              href="#solucoes"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/12 bg-white/4 px-5 py-3.5 text-sm font-semibold text-stone-100 transition hover:bg-white/8 sm:w-auto sm:px-6"
            >
              Conhecer as solucoes
            </a>
          </motion.div>

          <motion.dl
            variants={spotlightMotion}
            className="grid gap-4 border-t border-white/8 pt-5 text-sm text-stone-400 sm:grid-cols-3 sm:pt-6"
          >
            <div className="space-y-2">
              <dt className="text-[11px] uppercase tracking-[0.24em] text-stone-500">
                Para quem
              </dt>
              <dd className="text-sm leading-6 text-stone-200 sm:text-base sm:leading-7">
                Marcas e instituicoes que constroem autoridade por meio de eventos.
              </dd>
            </div>
            <div className="space-y-2">
              <dt className="text-[11px] uppercase tracking-[0.24em] text-stone-500">
                O que entregamos
              </dt>
              <dd className="text-sm leading-6 text-stone-200 sm:text-base sm:leading-7">
                Direcao, cobertura e desdobramento estrategico do material captado.
              </dd>
            </div>
            <div className="space-y-2">
              <dt className="text-[11px] uppercase tracking-[0.24em] text-stone-500">
                Resultado
              </dt>
              <dd className="text-sm leading-6 text-stone-200 sm:text-base sm:leading-7">
                Mais presenca, mais clareza institucional e mais valor percebido.
              </dd>
            </div>
          </motion.dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.95, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -right-4 bottom-4 h-20 w-20 rounded-full bg-white/8 blur-3xl sm:-right-6 sm:bottom-6 sm:h-24 sm:w-24" />
          <div className="absolute -left-8 top-8 hidden h-28 w-28 rounded-full bg-[var(--accent-soft)] blur-3xl lg:block xl:h-36 xl:w-36" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-3 shadow-[0_22px_80px_rgba(0,0,0,0.36)] sm:rounded-[2.4rem] sm:p-4 lg:p-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(213,185,138,0.24),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_28%)]" />
            <div className="relative grid gap-3 sm:gap-4">
              <div className="overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#0b0b0d] p-5 sm:rounded-[2rem] sm:p-6 lg:p-7">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[10px] uppercase tracking-[0.26em] text-[var(--accent)] sm:text-[11px] sm:tracking-[0.32em]">
                    Antes, durante e depois
                  </p>
                  <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-stone-400 sm:px-3 sm:text-[11px] sm:tracking-[0.24em]">
                    Amplifica
                  </span>
                </div>

                <div className="mt-6 space-y-5 sm:mt-8 sm:space-y-6">
                  <div className="space-y-3">
                    <p className="text-xs uppercase tracking-[0.24em] text-stone-500 sm:text-sm sm:tracking-[0.28em]">
                      Visao estrategica
                    </p>
                    <p className="max-w-[13ch] font-[family-name:var(--font-display)] text-[2.5rem] leading-[0.94] text-stone-100 sm:text-[3.25rem]">
                      Cada evento pode render muito mais do que registro.
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-[1.1fr_0.9fr]">
                    <div className="rounded-[1.3rem] border border-white/8 bg-white/[0.04] p-4 sm:rounded-[1.5rem] sm:p-5">
                      <p className="text-[11px] uppercase tracking-[0.22em] text-stone-500 sm:text-xs sm:tracking-[0.26em]">
                        Planejamento
                      </p>
                      <p className="mt-3 text-sm leading-6 text-stone-200 sm:text-base sm:leading-7">
                        Definimos o que precisa ser captado para sustentar narrativa e valor de marca.
                      </p>
                    </div>
                    <div className="rounded-[1.3rem] border border-[var(--accent)]/16 bg-[linear-gradient(180deg,rgba(213,185,138,0.14),rgba(255,255,255,0.03))] p-4 sm:rounded-[1.5rem] sm:p-5">
                      <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent)] sm:text-xs sm:tracking-[0.26em]">
                        Pos-evento
                      </p>
                      <p className="mt-3 text-sm leading-6 text-stone-200 sm:text-base sm:leading-7">
                        Transformamos o material em conteudo que continua comunicando autoridade.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 sm:gap-4" aria-label="Destaques da proposta">
                {heroHighlights.map((item, index) => (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.3 + index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="rounded-[1.4rem] border border-white/8 bg-black/25 p-4 backdrop-blur-sm sm:rounded-[1.6rem] sm:p-5"
                  >
                    <p className="text-[10px] uppercase tracking-[0.26em] text-stone-500 sm:text-[11px] sm:tracking-[0.3em]">
                      0{index + 1}
                    </p>
                    <h2 className="mt-3 text-base font-semibold text-stone-100 sm:text-lg">
                      {item.title}
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-stone-300 sm:leading-7">
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
