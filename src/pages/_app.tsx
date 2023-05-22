import "@/styles/globals.css";
import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import Layout from "@/components/layout";
import { AuthProvider } from "@/contexts/auth";
import { useRouter } from "next/router";

//third party imports
import { appWithTranslation } from "next-i18next";
import axios from "axios";
import { Inter } from "@next/font/google";

//types imports
import { Project } from "@/types";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

function App({ Component, pageProps }: AppProps) {
  const baseURL = `${process.env.NEXT_PUBLIC_BASE_URL}/projects?populate=deep`;

  const [projects, setProjects] = useState<Project[] | null>(null);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [translatedProjects, setTranslatedProjects] = useState<
    Project[] | null
  >(null);

  useEffect(() => {
    setLoadingProjects(true);
    axios.get(baseURL).then((response) => {
      if (response.data?.data.length > 0) {
        setLoadingProjects(false);
        setProjects(response.data.data);
        console.log(response.data.data);
      }
    });
  }, []);

  const router = useRouter();

  useEffect(() => {
    if (document && document?.querySelector("html")) {
      let dir = router.locale === "ar" ? "rtl" : "ltr";
      let lang = router.locale === "ar" ? "ar" : "en";

      document.querySelector("html")?.setAttribute("dir", dir);
      document.querySelector("html")?.setAttribute("lang", lang);
    }
  }, [router.locale]);

  //a useEffect to change the projects when the locale changes
  useEffect(() => {
    //set the translated projects to the projects fetched (in english)
    let translatedProjects = projects;
    // if locale is arabic and there are projects fetched change the translated projects to the arabic ones
    if (router.locale === "ar" && projects?.length) {
      translatedProjects = projects?.map((project) => {
        if (project?.attributes?.localizations?.data?.length) {
          let translatedProject = {
            attributes: {
              ...project?.attributes?.localizations?.data[0].attributes,
              gallery: project.attributes.gallery, //populate gallery from the main project
              main_image: project.attributes.main_image, //populate main_image from the main project
            },
            id: project.id, //set the id as the main project id
          };
          return translatedProject;
        } else {
          return project;
        }
      });
    }
    //set the translated projects state to the translated projects
    setTranslatedProjects(translatedProjects);
  }, [router.locale, projects]);

  return (
    <main className={`${inter.variable} font-sans `}>
      <AuthProvider>
        <Layout>
          <Component
            className={"overflow-hidden"}
            {...pageProps}
            loadingProjects={loadingProjects}
            projects={translatedProjects}
          />
        </Layout>
      </AuthProvider>
    </main>
  );
}

export default appWithTranslation(App);
