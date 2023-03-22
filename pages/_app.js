import { Fragment, useEffect, useState } from "react";
import Preloader from "../src/layouts/Preloader";
import "../styles/globals.css";
import axios from "axios";

function MyApp({ Component, pageProps }) {
  const baseURL = `${process.env.NEXT_PUBLIC_BASE_URL}/projects?populate=*`;
  const [preloader, setPreloader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setPreloader(false);
    }, 1000);
  }, []);

  const [projects, setProjects] = useState(null);
  const [loadingProjects, setLoadingProjects] = useState(true);

  useEffect(() => {
    setLoadingProjects(true);
    axios.get(baseURL).then((response) => {
      if (response.data?.data.length > 0) {
        setLoadingProjects(false);
        setProjects(response.data.data);
        console.log("projects", response.data.data);
      }
    });
  }, []);

  return (
    <Fragment>
      {preloader && <Preloader />}
      <Component
        {...pageProps}
        loadingProjects={loadingProjects}
        projects={projects}
      />
    </Fragment>
  );
}

export default MyApp;
