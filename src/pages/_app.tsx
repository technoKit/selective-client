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
  const baseURL = `${process.env.NEXT_PUBLIC_BASE_URL}/projects?populate=*`;

  const [projects, setProjects] = useState<Project[] | null>(null);
  const [loadingProjects, setLoadingProjects] = useState(true);

  useEffect(() => {
    setLoadingProjects(true);
    axios.get(baseURL).then((response) => {
      if (response.data?.data.length > 0) {
        setLoadingProjects(false);
        setProjects(response.data.data);
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

  return (
    <main className={`${inter.variable} font-sans overflow-hidden`}>
      <AuthProvider>
        <Layout>
          <Component
            {...pageProps}
            loadingProjects={loadingProjects}
            projects={projects}
          />
        </Layout>
      </AuthProvider>
    </main>
  );
}

export default appWithTranslation(App);
