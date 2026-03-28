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
    <section className="border-b border-white/8 px-6 pb-18 pt-20 sm:px-10 sm:pb-24 sm:pt-24 lg:px-16 lg:pb-28 lg:pt-28">
      <div id="top" className="mx-auto grid w-full max-w-6xl gap-14 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)] lg:items-center">
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
          className="space-y-10"
        >
          <motion.header variants={spotlightMotion} className="max-w-4xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--accent)]">
              Audiovisual estrategico para eventos
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-5xl leading-[0.9] tracking-tight text-stone-100 sm:text-6xl lg:text-[5.35rem]">
              Transformamos experiencias ao vivo em conteudo, posicionamento e impacto
              duradouro.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-stone-300 sm:text-xl">
              A Amplifica atua ao lado de marcas, instituicoes e organizacoes que
              querem extrair mais valor estrategico dos seus eventos, com planejamento,
              cobertura audiovisual e desdobramento de conteudo.
            </p>
          </motion.header>

          <motion.div
            variants={spotlightMotion}
            className="flex flex-col gap-4 sm:flex-row"
            aria-label="Acoes principais"
          >
            <a
              href="#contato"
              className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-stone-950 transition hover:brightness-105"
            >
              Falar com a Amplifica
            </a>
            <a
              href="#solucoes"
              className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/4 px-6 py-3.5 text-sm font-semibold text-stone-100 transition hover:bg-white/8"
            >
              Ver solucoes
            </a>
          </motion.div>

          <motion.dl
            variants={spotlightMotion}
            className="grid gap-4 border-t border-white/8 pt-6 text-sm text-stone-400 sm:grid-cols-3"
          >
            <div className="space-y-2">
              <dt className="uppercase tracking-[0.26em] text-stone-500">Foco</dt>
              <dd className="text-base leading-7 text-stone-200">Eventos com valor institucional e de marca.</dd>
            </div>
            <div className="space-y-2">
              <dt className="uppercase tracking-[0.26em] text-stone-500">Entrega</dt>
              <dd className="text-base leading-7 text-stone-200">Direcao, cobertura e conteudo de longo prazo.</dd>
            </div>
            <div className="space-y-2">
              <dt className="uppercase tracking-[0.26em] text-stone-500">Abordagem</dt>
              <dd className="text-base leading-7 text-stone-200">Sobriedade, clareza e presenca premium.</dd>
            </div>
          </motion.dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.95, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -left-10 top-8 hidden h-36 w-36 rounded-full bg-[var(--accent-soft)] blur-3xl lg:block" />
          <div className="absolute -right-6 bottom-6 h-24 w-24 rounded-full bg-white/8 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-4 shadow-[0_28px_100px_rgba(0,0,0,0.42)] sm:p-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(213,185,138,0.24),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_28%)]" />
            <div className="relative grid gap-4">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0b0d] p-6 sm:p-7">
                <div className="flex items-center justify-between">
                  <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--accent)]">
                    Cobertura com direcao
                  </p>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-stone-400">
                    Amplifica
                  </span>
                </div>

                <div className="mt-8 space-y-6">
                  <div className="space-y-3">
                    <p className="text-sm uppercase tracking-[0.28em] text-stone-500">
                      Antes, durante e depois
                    </p>
                    <p className="font-[family-name:var(--font-display)] text-4xl leading-none text-stone-100 sm:text-[3.25rem]">
                      O evento nao termina quando as luzes se apagam.
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-[1.1fr_0.9fr]">
                    <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.04] p-5">
                      <p className="text-xs uppercase tracking-[0.26em] text-stone-500">
                        Narrativa
                      </p>
                      <p className="mt-3 text-base leading-7 text-stone-200">
                        Planejamento do que importa captar para fortalecer posicionamento.
                      </p>
                    </div>
                    <div className="rounded-[1.5rem] border border-[var(--accent)]/16 bg-[linear-gradient(180deg,rgba(213,185,138,0.14),rgba(255,255,255,0.03))] p-5">
                      <p className="text-xs uppercase tracking-[0.26em] text-[var(--accent)]">
                        Pos-evento
                      </p>
                      <p className="mt-3 text-base leading-7 text-stone-200">
                        Conteudo desenhado para continuar comunicando valor.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3" aria-label="Destaques da proposta">
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
                    className="rounded-[1.6rem] border border-white/8 bg-black/25 p-5 backdrop-blur-sm"
                  >
                    <p className="text-[11px] uppercase tracking-[0.3em] text-stone-500">
                      0{index + 1}
                    </p>
                    <h2 className="mt-3 text-lg font-semibold text-stone-100">{item.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-stone-300">{item.description}</p>
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
