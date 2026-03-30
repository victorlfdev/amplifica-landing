import {
  AboutSection,
  AudienceSection,
  FinalCtaSection,
  Footer,
  Header,
  HeroSection,
  MobileBottomNav,
  ProblemSection,
  ScrollVideoHero,
  SolutionsSection,
  StrategicDifferentialSection,
  VisualProofSection,
} from "@/app/components/landing";

export default function Home() {
  return (
    <div className="relative overflow-x-clip text-stone-50">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[38rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent_54%)] sm:h-[46rem]" />
      <div className="pointer-events-none absolute left-[-10rem] top-[22rem] h-64 w-64 rounded-full bg-[var(--accent-soft)] blur-3xl sm:left-[-8rem] sm:top-[28rem] sm:h-80 sm:w-80" />
      <div className="pointer-events-none absolute right-[-12rem] top-[58rem] h-72 w-72 rounded-full bg-white/[0.04] blur-3xl sm:right-[-10rem] sm:top-[68rem] sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute inset-x-0 top-[78rem] h-[26rem] bg-[linear-gradient(180deg,transparent,rgba(213,185,138,0.06),transparent)]" />
      <Header />
      <main className="relative">
        <ScrollVideoHero />
        <HeroSection />
        <VisualProofSection />
        <AboutSection />
        <ProblemSection />
        <SolutionsSection />
        <StrategicDifferentialSection />
        <AudienceSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}
