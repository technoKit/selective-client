import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import SimpleMap from "./components/SimpleMap";
import ReactMarkdown from "react-markdown";
import { useAuth } from "@/contexts/auth";
import BuySharesForm from "./components/BuySharesForm";
//types imports
import { Project } from "@/types";
import Link from "next/link";
import { AnyARecord } from "dns";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const inter = Inter({ subsets: ["latin"] });

export default function SingleProjectsView({
  projects,
}: {
  projects: Project[] | null;
}) {
  const router = useRouter();
  const { id } = router.query;

  const [project, setProject] = useState<Project | null>(null);
  useEffect(() => {
    if (projects?.length && projects?.length > 0) {
      let project = projects.find((project) => project.id.toString() == id);
      if (!project) {
        return;
      }
      setProject(project);
    }
  }, [id, projects]);

  //gallery images states logic
  const [images, setImages] = useState<ReactImageGalleryItem[]>([]);
  const [fullScreen, setFullScreen] = useState<boolean>(false);
  console.log("fullScreen :>> ", fullScreen);

  useEffect(() => {
    if (project) {
      const images = project?.attributes?.gallery?.data.map((image) => ({
        original: image.attributes.url,
        thumbnail: image.attributes.url,
        originalHeight: 400,
        originalWidth: 400,
        originalClass: `w-full ${
          !fullScreen ? "h-[400px]" : "h-[100vh]"
        } object-cover overflow-hidden rounded-3xl`,
        thumbnailClass:
          "w-[100px] h-[60px] object-cover overflow-hidden rounded-xl mt-3",
      }));
      if (!images) return;
      setImages(images);
    }
  }, [project, fullScreen]);

  const rounded = "30px";

  const { login, loginError, loginLoading, user, isAuthenticated } = useAuth();

  return (
    <main>
      <div className="bg-slate-100  pb-20 pt-10 sm:pb-10 overflow-x-hidden">
        <div
          className={`mx-auto max-w-7xl px-6 lg:px-8 relative min-h-[100vh]`}
        >
          <div className="flex ">
            <Link href="/projects" className="text-primary text-xl">
              Projects
            </Link>
            <ChevronRightIcon className="w-7 text-secondary" />
            <div className="text-black text-xl">
              {project?.attributes.title}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-4">
            {project && (
              <ImageGallery
                items={images}
                onScreenChange={(value) => {
                  setFullScreen(value);
                }}
              />
            )}
            {project && (
              <div
                key={project.id}
                className="bg-white flex flex-col items-start justify-between w-full h-[400px] ring-2 ring-gray-100 shadow-md shadow-gray-200"
                style={{ borderRadius: rounded }}
              >
                <div className="w-full py-7 px-9">
                  <div className="group relative">
                    <h3 className="text-lg font-semibold leading-6 text-black">
                      {project?.attributes.title}
                    </h3>
                    <h3 className="mt-1 line-clamp-3 text-md leading-6 text-primary flex flex-row items-center">
                      <img
                        src="/images/projects/location.svg"
                        alt="location icon"
                        className="w-3.5 ml-1 mr-2"
                      />
                      {project?.attributes.location}
                    </h3>
                  </div>

                  <div>
                    <div className="mt-4 group relative flex flex-row justify-between items-center w-full">
                      <div className="mt-3  w-[50%]">
                        <h4 className="text-lg font-medium leading-6 text-black">
                          Total shares
                        </h4>
                        <h4 className="text-lg font-medium leading-6 text-primary">
                          {project?.attributes.shares}
                        </h4>
                      </div>
                      <div className="mt-3  w-[50%]">
                        <h4 className="text-lg font-medium leading-6 text-black text-end">
                          Remaining Shares
                        </h4>
                        <h4 className="text-lg font-medium leading-6 text-primary text-end">
                          {project?.attributes.shares -
                            project?.attributes.sold_shares}
                        </h4>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between items-center mt-1">
                      <div className="relative h-2.5 mt-2 rounded-full bg-secondary-light w-[100%] mt-6">
                        <div
                          //SOLVE ISSUE of PROGRESS BAR
                          className={`absolute top-0 left-0 h-full rounded-full bg-secondary`}
                          style={{
                            width:
                              ((project.attributes.sold_shares /
                                project.attributes.shares) *
                                100 <
                              100
                                ? Math.round(
                                    (project.attributes.sold_shares /
                                      project.attributes.shares) *
                                      100
                                  )
                                : 100) + "%",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-row justify-between items-center w-full">
                    <div>
                      <h4 className="text-lg font-medium text-black">
                        Share price
                      </h4>
                      <h4 className="text-lg font-light text-primary">
                        {project.attributes.share_price} $
                      </h4>
                    </div>
                  </div>
                  <div className="w-full flex justify-center">
                    <ScrollLink
                      to={`app-section`}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      activeClass="active"
                    >
                      <button className="bg-secondary border-2 text-primary px-[32px] py-[0px] h-11 rounded-[40px] hover:bg-secondary-light hover:border-secondary-dark transition-colors duration-500 mt-10 ">
                        Apply for your shares now
                      </button>
                    </ScrollLink>
                  </div>
                </div>
              </div>
            )}
          </div>
          {project && (
            <SimpleMap location={JSON.parse(project.attributes.map_location)} />
          )}
          {project && project?.attributes?.description && (
            <div className="mt-8 bg-white p-8 rounded-2xl shadow-xl">
              <ReactMarkdown className="whitespace-pre-wrap">
                {project?.attributes?.description}
              </ReactMarkdown>
            </div>
          )}
          <div id="app-section">
            {project && !isAuthenticated && (
              <div className="mt-8 bg-primary p-8 rounded-2xl shadow-xl mb-16">
                <div className="text-secondary font-bold text-2xl">
                  Sign up to be able to buy shares
                </div>
                <div className="text-white text-xl mt-2">
                  By logging in you will join our waiting list for active users.
                  We will notify you once you can buy shares.
                </div>
                <div className="flex justify-end">
                  <button className="bg-secondary border-2 text-primary px-[32px] py-[0px] h-11 rounded-[40px] hover:bg-secondary-light hover:border-secondary-dark transition-colors duration-500 mt-5 ">
                    <Link href={`/sign-up`}>Sign Up</Link>
                  </button>
                </div>
              </div>
            )}
            {project && isAuthenticated && !user?.canBuy && (
              <div className="mt-8 bg-primary p-8 rounded-2xl shadow-xl mb-16">
                <div className="text-secondary font-bold text-2xl">
                  You are on our waiting list
                </div>
                <div className="text-white text-xl mt-2">
                  Thank you for joining our waiting list. We will inform you
                  shortly once you have access to buy shares.
                </div>
              </div>
            )}
            {project && isAuthenticated && user?.canBuy && (
              <div className="mt-8 mb-16">
                <BuySharesForm project={project} />
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
