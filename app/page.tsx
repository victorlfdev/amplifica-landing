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
    <div className="bg-neutral-950 text-neutral-50">
      <Header />
      <main>
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
