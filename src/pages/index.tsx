import HomeView from "@/views/home";
import { Project } from "@/types";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home({ projects }: { projects: Project[] | null }) {
  return <HomeView projects={projects} />;
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
