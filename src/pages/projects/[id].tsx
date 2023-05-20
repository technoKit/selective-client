import Image from "next/image";

import SingleProjectView from "@/views/projects/singleProject";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
//types imports
import { Project } from "@/types";

export default function Projects({ projects }: { projects: Project[] | null }) {
  return <SingleProjectView projects={projects} />;
}

// a dummy getstaticpaths that returns only one path with a fallback true to enable ISR
// I need this because I need getstaticProps for loading translation on the server
export async function getStaticPaths() {
  const paths = [
    {
      params: { id: "1" },
    },
  ];
  return { paths, fallback: true };
}

export async function getStaticProps(context: any) {
  const { locale } = context;
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}
