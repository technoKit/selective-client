import Image from "next/image";
import { Inter } from "next/font/google";
import ProjectsView from "@/views/projects";
const inter = Inter({ subsets: ["latin"] });

export default function Projects() {
  return <ProjectsView />;
}
