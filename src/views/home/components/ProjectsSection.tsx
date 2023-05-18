import HouseCard from "../../../components/HouseCard";
import Link from "next/link";

import { Project } from "@/types";

//https://source.unsplash.com/featured/?house
const cards = [
  {
    id: 1,
    title: "Giza flat",
    href: "#",
    location: "Giza",
    imageUrl:
      "https://images.unsplash.com/photo-1633683914992-ded93eb8b18a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aG91c2V8fHx8fHwxNjgxOTA4NzI5&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    shares: 250,
    sharesPurchased: 187,
    sharePrice: 200,
  },
  {
    id: 2,
    title: "Giza flat",
    href: "#",
    location: "Giza",
    imageUrl:
      "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aG91c2V8fHx8fHwxNjgxOTA4NzY2&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    shares: 300,
    sharesPurchased: 42,
    sharePrice: 150,
  },
  {
    id: 3,
    title: "Giza flat",
    href: "#",
    location: "Giza",
    imageUrl:
      "https://images.unsplash.com/photo-1518733057094-95b53143d2a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aG91c2V8fHx8fHwxNjgxOTA4ODUz&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    shares: 450,
    sharesPurchased: 175,
    sharePrice: 100,
  },
  // More posts...
];

export default function ProjectsSection({
  projects,
}: {
  projects: Project[] | null;
}) {
  return (
    <div className="bg-slate-100 py-24 pb-20 sm:py-32 sm:pb-10 overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative flex flex-col justify-center items-center">
        <div className="text-center flex flex-col items-center">
          <img
            src="/images/projects/sphinx.svg"
            alt="location icon"
            className=" w-20 ml-1 mr-2 mb-[-14px] mt-[-45px]"
          />
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary sm:text-4xl ">
            Popular Projects
          </h2>
          <p className="mt-3 text-2xl leading-8 text-black">
            Explore our projects
          </p>
        </div>

        <img
          src="/images/projects/temple.svg"
          alt="location icon"
          className="absolute top-24 left-[-25px] w-20 ml-1 mr-2"
        />

        <img
          src="/images/projects/waves.svg"
          alt="location icon"
          className="absolute top-72 right-[-25px] w-24 ml-1 mr-2"
        />

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects?.length &&
            projects?.length > 0 &&
            projects.map((project) => (
              <HouseCard data={project} key={project.id} />
            ))}
        </div>
        <button className="bg-primary border-2 border-primary text-white mt-10 px-[32px] py-[13px] rounded-[40px] hover:bg-primary-light transition-colors duration-500">
          <Link href="/projects">Explore All Projects</Link>
        </button>
      </div>
    </div>
  );
}
