import "@/styles/globals.css";
import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import Layout from "@/components/layout";
import { AuthProvider } from "@/contexts/auth";

//third party imports
import axios from "axios";

//types imports
import { Project } from "@/types";

export default function App({ Component, pageProps }: AppProps) {
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

  return (
    <AuthProvider>
      <Layout>
        <Component
          {...pageProps}
          loadingProjects={loadingProjects}
          projects={projects}
        />
      </Layout>
    </AuthProvider>
  );
}
