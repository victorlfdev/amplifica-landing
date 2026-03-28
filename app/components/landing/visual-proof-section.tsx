"use client";

import { motion } from "framer-motion";
import { visualProofItems } from "./content";
import { SectionShell } from "./section-shell";

export function VisualProofSection() {
  return (
    <SectionShell
      eyebrow="Prova visual"
      title="A estrutura da galeria ja prepara a prova visual da atuacao da Amplifica."
      description="Nesta primeira versao, os blocos simulam uma composicao editorial para palco, bastidores, equipe e conteudo de marca."
    >
      <div className="grid auto-rows-[190px] gap-4 sm:auto-rows-[220px] md:grid-cols-2 xl:grid-cols-4">
        {visualProofItems.map((item, index) => {
          const featured = index === 0;
          const tall = index === 1;

          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={[
                "group relative overflow-hidden rounded-[1.7rem] border border-white/10",
                "bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-5",
                "shadow-[0_18px_70px_rgba(0,0,0,0.28)] sm:rounded-[2rem] sm:p-6",
                featured ? "md:col-span-2" : "",
                tall ? "xl:row-span-2 xl:min-h-[456px]" : "",
              ].join(" ")}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(213,185,138,0.2),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(0,0,0,0.18))]" />
              <div
                className={[
                  "absolute inset-x-3 bottom-3 top-14 rounded-[1.35rem] border border-white/8 sm:inset-x-4 sm:bottom-4 sm:top-16 sm:rounded-[1.6rem]",
                  featured
                    ? "bg-[linear-gradient(135deg,rgba(213,185,138,0.2),rgba(255,255,255,0.05)_35%,rgba(0,0,0,0.2))]"
                    : "bg-[linear-gradient(160deg,rgba(255,255,255,0.12),rgba(0,0,0,0.18))]",
                ].join(" ")}
              />
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[10px] uppercase tracking-[0.26em] text-stone-500 sm:text-[11px] sm:tracking-[0.3em]">
                    Galeria 0{index + 1}
                  </p>
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]/70" />
                </div>
                <div className="max-w-sm space-y-3">
                  <h3
                    className={[
                      "font-[family-name:var(--font-display)] leading-[0.94] text-stone-100",
                      featured ? "text-[2.2rem] sm:text-5xl" : "text-[2rem] sm:text-3xl",
                    ].join(" ")}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm leading-6 text-stone-300 sm:leading-7">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </SectionShell>
  );
}
