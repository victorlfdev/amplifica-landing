"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function ScrollVideoHero() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 0.6]);
  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [1, 1, 0.3, 0],
  );
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[100svh] bg-black sm:h-[235svh] lg:h-[250vh]"
    >
      <div className="relative sticky top-0 h-[100svh] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#000000_0%,#080808_45%,#111111_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(232,165,0,0.18),transparent_38%),radial-gradient(circle_at_82%_84%,rgba(232,165,0,0.1),transparent_42%)]" />

        <motion.div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />

        <div className="relative z-10 flex h-full mt-14 sm:mt-20 justify-center px-5 sm:px-6 md:px-8">
          <motion.div
            className="w-full max-w-5xl text-center"
            style={{ opacity: textOpacity, y: textY }}
          >
            <span className="inline-flex max-w-full items-center justify-center rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/8 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)] sm:px-4 sm:text-[10px] sm:tracking-[0.3em]">
              Amplifica — Audiovisual estratégico
            </span>
            <h1 className="mb-6 mt-4 font-headline text-[2.4rem] font-extrabold leading-[0.92] tracking-[-0.04em] text-white sm:mt-8 sm:text-5xl md:mb-8 md:text-6xl lg:text-[6rem] xl:text-[7.5rem]">
              Transformando
              <span
                className="block text-[var(--accent)] italic"
                style={{ fontWeight: 200, fontVariationSettings: '"wght" 200' }}
              >
                ruído em sinal
              </span>
            </h1>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:mt-12 sm:gap-5 md:mt-14 md:flex-row md:gap-6">
              <a
                href="#portfolio"
                className="button-primary inline-flex w-full items-center justify-center rounded-full px-7 py-4 text-center text-xs sm:w-auto sm:px-10 sm:py-5 sm:text-sm"
              >
                Ver portfólio
              </a>
              <a
                href="#solucoes"
                className="button-gold-outline inline-flex w-full items-center justify-center rounded-full px-7 py-4 text-center text-xs sm:w-auto sm:px-10 sm:py-5 sm:text-sm"
              >
                Soluções
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
