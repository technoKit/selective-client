import Image from "next/image";

import ProjectsView from "@/views/projects";

//types imports
import { Project } from "@/types";

export default function Projects({ projects }: { projects: Project[] | null }) {
  return <ProjectsView projects={projects} />;
}
