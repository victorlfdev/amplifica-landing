"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { visualProofItems } from "./content";
import { SectionShell } from "./section-shell";

export function VisualProofSection() {
  return (
    <SectionShell
      eyebrow="Prova visual"
      title="Imagens que reforçam presença, escala e valor percebido."
      description="A galeria apresenta recortes reais da atuação da Amplifica em eventos, com foco em atmosfera, operação, marca e força institucional."
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
                "bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]",
                "shadow-[0_18px_70px_rgba(0,0,0,0.28)] sm:rounded-[2rem]",
                featured ? "md:col-span-2" : "",
                tall ? "xl:row-span-2 xl:min-h-[456px]" : "",
              ].join(" ")}
            >
              <Image
                src={item.imageSrc}
                alt={item.imageAlt}
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.08),rgba(5,5,5,0.38)_42%,rgba(5,5,5,0.82)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(213,185,138,0.2),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(0,0,0,0.18))]" />
              <div
                className={[
                  "absolute inset-x-3 bottom-3 top-14 rounded-[1.35rem] border border-white/8 bg-transparent sm:inset-x-4 sm:bottom-4 sm:top-16 sm:rounded-[1.6rem]",
                  featured ? "shadow-[inset_0_0_0_1px_rgba(213,185,138,0.08)]" : "",
                ].join(" ")}
              />
              <div className="relative flex h-full flex-col justify-between p-5 sm:p-6">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[10px] uppercase tracking-[0.26em] text-stone-300/80 sm:text-[11px] sm:tracking-[0.3em]">
                    Galeria 0{index + 1}
                  </p>
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]/80" />
                </div>
                <div className="max-w-sm space-y-3">
                  <h3
                    className={[
                      "font-[family-name:var(--font-display)] leading-[0.94] text-stone-50",
                      featured ? "text-[2.2rem] sm:text-5xl" : "text-[2rem] sm:text-3xl",
                    ].join(" ")}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm leading-6 text-stone-200 sm:leading-7">
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
