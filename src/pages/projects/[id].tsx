import Image from "next/image";

import SingleProjectView from "@/views/projects/singleProject";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
//types imports
import { Project } from "@/types";

export default function Projects({ projects }: { projects: Project[] | null }) {
  return <SingleProjectView projects={projects} />;
}

export async function getStaticProps(context: any) {
  // extract the locale identifier from the URL
  const { locale } = context;

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale)),
    },
  };
}
