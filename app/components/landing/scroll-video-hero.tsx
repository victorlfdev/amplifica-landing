"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";

export default function ScrollVideoHero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const targetTimeRef = useRef(0);
  const currentTimeRef = useRef(0);
  const durationRef = useRef(0);

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

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const syncDuration = () => {
      durationRef.current = video.duration || 0;
    };

    video.addEventListener("loadedmetadata", syncDuration);

    // Cached videos can already have metadata before the listener is attached.
    syncDuration();

    const prime = async () => {
      try {
        video.muted = true;
        await video.play();
        video.pause();
      } catch {}
    };

    prime();

    const tick = () => {
      const videoEl = videoRef.current;
      if (!videoEl || !durationRef.current) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      const diff = targetTimeRef.current - currentTimeRef.current;
      currentTimeRef.current += diff * 0.12;

      if (Math.abs(videoEl.currentTime - currentTimeRef.current) > 0.01) {
        videoEl.currentTime = currentTimeRef.current;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      video.removeEventListener("loadedmetadata", syncDuration);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!durationRef.current) return;
    targetTimeRef.current = latest * durationRef.current;
  });

  return (
    <section
      ref={sectionRef}
      className="relative h-[220svh] bg-black sm:h-[235svh] lg:h-[250vh]"
    >
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          muted
          playsInline
          preload="auto"
        >
          <source src="/output.mp4" type="video/mp4" />
        </video>

        <motion.div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />

        <div className="relative z-10 flex h-full items-center justify-center px-5 sm:px-6 md:px-8">
          <motion.div
            className="w-full max-w-5xl text-center"
            style={{ opacity: textOpacity, y: textY }}
          >
            <span className="inline-flex max-w-full items-center justify-center rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/8 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)] sm:px-4 sm:text-[10px] sm:tracking-[0.24em]">
              Amplifica | Audiovisual estratégico para eventos
            </span>
            <h1 className="mb-6 mt-6 font-headline text-4xl font-extrabold leading-[0.95] tracking-tight text-white sm:mt-8 sm:text-5xl md:mb-8 md:text-7xl lg:text-8xl xl:text-9xl">
              Criando Masterpieces{" "}
              <span className="text-[#D5B98A] italic font-light text-shadow-[0_0_10px_rgba(213,185,138,0.2)]">
                Audiovisuais.
              </span>
            </h1>
            <p className="mx-auto max-w-xl font-body text-base leading-relaxed text-zinc-400 sm:max-w-2xl sm:text-lg md:text-xl">
              Produção Audiovisual Premium para Marcas Visionárias.
              Transformamos complexas narrativas em experiências visuais
              impressionantes que captam a atenção.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:mt-10 sm:gap-5 md:mt-12 md:flex-row md:gap-6">
              <button className="w-full rounded-full bg-primary px-7 py-4 font-headline text-xs font-bold uppercase tracking-[0.22em] text-on-primary transition-transform duration-500 hover:scale-105 sm:w-auto sm:px-10 sm:py-5 sm:text-sm sm:tracking-widest">
                Ver Showcase
              </button>
              <button className="w-full rounded-full border border-outline-variant/30 px-7 py-4 font-headline text-xs font-bold uppercase tracking-[0.22em] text-white transition-colors hover:bg-white/5 sm:w-auto sm:px-10 sm:py-5 sm:text-sm sm:tracking-widest">
                Nossos Serviços
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
