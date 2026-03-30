"use client";

import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";

const DESKTOP_BREAKPOINT = "(min-width: 768px)";
const SNAP_THRESHOLD = 0.45;
const SEEK_EPSILON = 1 / 60;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export default function ScrollVideoHero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const progressRef = useRef(0);
  const currentTimeRef = useRef(0);
  const durationRef = useRef(0);
  const isReadyRef = useRef(false);

  const [isDesktop, setIsDesktop] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(DESKTOP_BREAKPOINT);
    const syncViewport = () => setIsDesktop(mediaQuery.matches);

    syncViewport();
    mediaQuery.addEventListener("change", syncViewport);

    return () => mediaQuery.removeEventListener("change", syncViewport);
  }, []);

  useEffect(() => {
    if (!isDesktop) {
      isReadyRef.current = false;
      durationRef.current = 0;
      currentTimeRef.current = 0;

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }

      return;
    }

    const video = videoRef.current;
    if (!video) return;

    const syncDuration = () => {
      if (!Number.isFinite(video.duration) || video.duration <= 0) return;

      durationRef.current = video.duration;
      isReadyRef.current = true;
    };

    const syncCurrentTime = () => {
      currentTimeRef.current = video.currentTime || 0;
    };

    const prime = async () => {
      try {
        video.muted = true;
        video.playsInline = true;
        await video.play();
        video.pause();
        syncDuration();
        syncCurrentTime();
      } catch {}
    };

    video.addEventListener("loadedmetadata", syncDuration);
    video.addEventListener("loadeddata", syncDuration);
    video.addEventListener("canplay", syncDuration);
    video.addEventListener("seeked", syncCurrentTime);

    syncDuration();
    syncCurrentTime();
    void prime();

    const tick = () => {
      const videoEl = videoRef.current;

      if (!videoEl || !isReadyRef.current || durationRef.current <= 0) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      const maxTime = Math.max(durationRef.current - 0.001, 0);
      const targetTime = clamp(progressRef.current * durationRef.current, 0, maxTime);
      const diff = targetTime - currentTimeRef.current;

      let nextTime = currentTimeRef.current;

      if (Math.abs(diff) > SNAP_THRESHOLD) {
        nextTime = targetTime;
      } else if (Math.abs(diff) > SEEK_EPSILON) {
        const smoothing = diff < 0 ? 0.26 : 0.18;
        nextTime = currentTimeRef.current + diff * smoothing;
      }

      nextTime = clamp(nextTime, 0, maxTime);

      if (Math.abs(videoEl.currentTime - nextTime) > SEEK_EPSILON) {
        videoEl.currentTime = nextTime;
      }

      currentTimeRef.current = nextTime;
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      video.removeEventListener("loadedmetadata", syncDuration);
      video.removeEventListener("loadeddata", syncDuration);
      video.removeEventListener("canplay", syncDuration);
      video.removeEventListener("seeked", syncCurrentTime);

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [isDesktop]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    progressRef.current = clamp(latest, 0, 1);
  });

  return (
    <>
      <section className="relative h-[72svh] min-h-[30rem] bg-black md:hidden">
        <div className="absolute inset-0 overflow-hidden">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/Galeria01.webp"
          >
            <source src="/output.mp4" type="video/mp4" />
          </video>
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.22),rgba(0,0,0,0.1)_38%,rgba(0,0,0,0.5)_100%)]" />
        </div>
      </section>

      <section ref={sectionRef} className="relative hidden h-[250vh] bg-black md:block">
        <div className="sticky top-0 h-screen overflow-hidden">
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            muted
            playsInline
            preload="auto"
            poster="/images/Galeria01.webp"
          >
            <source src="/output.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    </>
  );
}
