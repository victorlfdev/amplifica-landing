"use client";

import { useEffect, useRef, useState } from "react";
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
  const tickRef = useRef<(time: number) => void>(() => {});
  const lastUpdateRef = useRef(0);
  const [isMobile, setIsMobile] = useState(false);

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
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const sync = () => setIsMobile(mediaQuery.matches);

    sync();
    mediaQuery.addEventListener("change", sync);

    return () => mediaQuery.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }

    const syncDuration = () => {
      durationRef.current = video.duration || 0;
    };

    video.addEventListener("loadedmetadata", syncDuration);

    // Cached videos can already have metadata before the listener is attached.
    syncDuration();

    if (isMobile) {
      targetTimeRef.current = 0;
      currentTimeRef.current = 0;
      video.loop = true;
      video.autoplay = true;
      video.muted = true;
      video.currentTime = 0;
      void video.play().catch(() => {});

      return () => {
        video.pause();
        video.removeEventListener("loadedmetadata", syncDuration);
      };
    }

    const prime = async () => {
      try {
        video.loop = false;
        video.autoplay = false;
        video.muted = true;
        await video.play();
        video.pause();
      } catch {}
    };

    prime();

    const tick = (time: number) => {
      const videoEl = videoRef.current;
      if (!videoEl || !durationRef.current) {
        rafRef.current = null;
        return;
      }

      const diff = targetTimeRef.current - currentTimeRef.current;
      if (Math.abs(diff) < 0.016) {
        currentTimeRef.current = targetTimeRef.current;
      } else {
        const smoothing = Math.abs(diff) > 0.35 ? 0.28 : 0.18;
        currentTimeRef.current += diff * smoothing;
      }

      const elapsed = time - lastUpdateRef.current;
      if (elapsed >= 33 && Math.abs(videoEl.currentTime - currentTimeRef.current) > 0.033) {
        videoEl.currentTime = currentTimeRef.current;
        lastUpdateRef.current = time;
      }

      if (Math.abs(targetTimeRef.current - currentTimeRef.current) > 0.02) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        rafRef.current = null;
      }
    };

    tickRef.current = tick;

    return () => {
      tickRef.current = () => {};
      video.removeEventListener("loadedmetadata", syncDuration);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isMobile]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (isMobile) return;
    if (!durationRef.current) return;
    targetTimeRef.current = latest * durationRef.current;
    if (!rafRef.current) {
      rafRef.current = requestAnimationFrame(tickRef.current);
    }
  });

  return (
    <section
      ref={sectionRef}
      className="relative h-[100svh] bg-black sm:h-[235svh] lg:h-[250vh]"
    >
      <div className="relative sticky top-0 h-[100svh] overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          muted
          playsInline
          preload="auto"
          loop={isMobile}
          autoPlay={isMobile}
        >
          <source src="/hero-output-v4.mp4" type="video/mp4" />
        </video>

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
              Transformando{" "}
              <span
                className="text-[var(--accent)] italic"
                style={{ fontWeight: 200, fontVariationSettings: '"wght" 200' }}
              >
                ruído em sinal.
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
