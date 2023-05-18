import Image from "next/image";

import SingleProjectView from "@/views/projects/singleProject";

//types imports
import { Project } from "@/types";

export default function Projects({ projects }: { projects: Project[] | null }) {
  return <SingleProjectView projects={projects} />;
}
