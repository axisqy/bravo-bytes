import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { MissionSection } from "@/components/MissionSection";
import { ShowcaseSection } from "@/components/ShowcaseSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background font-['Inter']">
      <HeroSection />
      <StatsSection />
      <MissionSection />
      <ShowcaseSection />
      <Footer />
    </main>
  );
};

export default Index;
