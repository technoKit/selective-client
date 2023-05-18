import HeroSection from "./components/HeroSection";
import WelcomeSection from "./components/WelcomeSection";
import MotivationSection from "./components/MotivationSection";
import ProjectsSection from "./components/ProjectsSection";
import CompetitiveAdvantageSection from "./components/CompetitiveAdvantageSection";
import OurPartnersSection from "./components/OurPartners";

import { Project } from "@/types";

export default function HomeView({ projects }: { projects: Project[] | null }) {
  console.log("projects :>> ", projects);
  if (projects) {
    projects = projects.slice(0, 3);
  }

  return (
    <main>
      <div className="bg-slate-100 pb-5">
        <HeroSection />
        <WelcomeSection />
      </div>
      <MotivationSection />
      <ProjectsSection projects={projects} />
      <CompetitiveAdvantageSection />
      <OurPartnersSection />
    </main>
  );
}
