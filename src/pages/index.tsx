import HomeView from "@/views/home";
import { Project } from "@/types";

export default function Home({ projects }: { projects: Project[] | null }) {
  return <HomeView projects={projects} />;
}
