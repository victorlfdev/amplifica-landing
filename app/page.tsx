import {
  AboutSection,
  AudienceSection,
  FinalCtaSection,
  Footer,
  Header,
  HeroSection,
  ProblemSection,
  SolutionsSection,
  StrategicDifferentialSection,
  VisualProofSection,
} from "@/app/components/landing";

export default function Home() {
  return (
    <div className="relative overflow-x-clip text-stone-50">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_56%)] sm:h-[42rem]" />
      <div className="pointer-events-none absolute left-[-10rem] top-[26rem] h-64 w-64 rounded-full bg-[var(--accent-soft)] blur-3xl sm:left-[-8rem] sm:top-[32rem] sm:h-80 sm:w-80" />
      <div className="pointer-events-none absolute right-[-12rem] top-[62rem] h-72 w-72 rounded-full bg-white/[0.03] blur-3xl sm:right-[-10rem] sm:top-[70rem] sm:h-96 sm:w-96" />
      <Header />
      <main className="relative">
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
    </div>
  );
}
