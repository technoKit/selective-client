import Image from "next/image";
import { Inter } from "next/font/google";
import SingleProjectView from "@/views/projects/singleProject";

const inter = Inter({ subsets: ["latin"] });

//types imports
import { Project } from "@/types";

export default function Projects({ projects }: { projects: Project[] | null }) {
  return <SingleProjectView projects={projects} />;
}
