import MainSection from "./components/MainSection";

//types imports
import { Project } from "@/types";

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
