import MainSection from "./components/MainSection";
import { Inter } from "next/font/google";

//types imports
import { Project } from "@/types";

const inter = Inter({ subsets: ["latin"] });

export default function ProjectsView({
  projects,
}: {
  projects: Project[] | null;
}) {
  return (
    <main>
      <MainSection projects={projects} />
    </main>
  );
}
