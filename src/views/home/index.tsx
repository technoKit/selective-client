import Image from "next/image";
import { Inter } from "next/font/google";
import HeroSection from "./components/HeroSection";
import WelcomeSection from "./components/WelcomeSection";
import MotivationSection from "./components/MotivationSection";
import ProjectsSection from "./components/ProjectsSection";
import CompetitiveAdvantageSection from "./components/CompetitiveAdvantageSection";

const inter = Inter({ subsets: ["latin"] });

export default function HomeView() {
  return (
    <main>
      <div className="bg-slate-100 pb-5">
        <HeroSection />
        <WelcomeSection />
      </div>
      <MotivationSection />
      <ProjectsSection />
      <CompetitiveAdvantageSection />
    </main>
  );
}
