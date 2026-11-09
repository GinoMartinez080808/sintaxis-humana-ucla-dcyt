import { HeroSection } from "@/components/sections/hero-section";
import { TeamSection } from "@/components/sections/team-section";
import { HabitsSection } from "@/components/sections/habits-section";
import { ResearchSection } from "@/components/sections/research-section";
import { ResultsSection } from "@/components/sections/results-section";
import { ProgressSection } from "@/components/sections/progress-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TeamSection />
      <HabitsSection />
      <ResearchSection />
      <ResultsSection />
      <ProgressSection />
    </>
  );
}
