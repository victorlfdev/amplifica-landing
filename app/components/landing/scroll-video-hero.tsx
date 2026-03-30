"use client";

import { useEffect, useRef } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";

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

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const syncDuration = () => {
      durationRef.current = video.duration || 0;
    };

    video.addEventListener("loadedmetadata", syncDuration);
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
    <section ref={sectionRef} className="relative h-[250vh] bg-black">
      <div className="sticky top-0 h-screen overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          muted
          playsInline
          preload="auto"
        >
          <source src="/output.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
