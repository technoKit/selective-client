import Link from "next/dist/client/link";
import PageBanner from "../../src/components/PageBanner";
import Layout from "../../src/layouts/Layout";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import ReactMarkdown from "react-markdown";
import SimpleMap from "../../src/components/SimpleMap";
import ImageGallery from "react-image-gallery";
import ProjectForm from "../../src/components/ProjectForm";
import { useAuth } from "../../src/contexts/auth";

const ProjectDetails = (props) => {
  const router = useRouter();
  const { id } = router.query;

  //project state logic
  const [project, setProject] = useState(null);
  console.log("the_project :>> ", project);
  useEffect(() => {
    if (props?.projects?.length > 0) {
      let project = props?.projects.find((project) => project.id == id);
      setProject(project);
    }
  }, [id]);

  const { login, loginError, loginLoading, user, isAuthenticated } = useAuth();

  //gallery images states logic
  const [images, setImages] = useState([]);
  useEffect(() => {
    if (project) {
      const images = project?.attributes?.gallery?.data.map((image) => ({
        original: image.attributes.url,
        thumbnail: image.attributes.url,
        originalHeight: "400px",
        thumbnailHeight: "60px",
      }));
      setImages(images);
      console.log("images", images);
    }
  }, [project]);

  return (
    <Layout>
      <PageBanner pageName="Project Details" />
      {props.loading ? (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            margin: "100px 0",
          }}
        >
          <Spinner
            style={{ width: "6rem", height: "6rem" }}
            as="span"
            animation="border"
            role="status"
            aria-hidden="true"
          />
        </div>
      ) : (
        <section className="project-details-area section-gap-extra-bottom">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 col-md-10">
                <div className="project-thumb mb-md-50">
                  <img
                    style={{
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    }}
                    src={project?.attributes?.main_image?.data?.attributes?.url}
                    alt="Image"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="project-summery">
                  <a className="category">Project</a>

                  <h3 className="project-title">
                    {project?.attributes?.title}
                  </h3>
                  <div className="meta">
                    <div className="author">
                      <img
                        src="/assets/img/location.png"
                        alt="Thumb"
                        style={{ width: "50px", marginRight: "10px" }}
                      />
                      {project?.attributes?.location}
                    </div>
                    {/* <a href="#" className="date">
                      <i className="far fa-calendar-alt" />
                      25 Feb 2021
                    </a> */}
                  </div>
                  <div className="project-funding-info">
                    <div className="info-box">
                      <span>{project?.attributes?.shares}</span>
                      <span className="info-title">Total Shares</span>
                    </div>
                    <div className="info-box">
                      <span>
                        {project?.attributes?.shares -
                          project?.attributes?.sold_shares}
                      </span>
                      <span className="info-title">Remaining</span>
                    </div>
                    <div className="info-box">
                      <span>{project?.attributes?.share_price + " EGP"} </span>
                      <span className="info-title">Share Price</span>
                    </div>
                  </div>
                  <div className="project-raised clearfix">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="raised-label">
                        {" "}
                        <span className="value-title">
                          Sold Shares{" "}
                          <span className="value">
                            {project?.attributes?.sold_shares}
                          </span>
                        </span>
                      </div>
                      <div className="percent-raised">
                        {" "}
                        {Math.round(
                          (project?.attributes?.sold_shares /
                            project?.attributes?.shares) *
                            100 *
                            100
                        ) / 100}
                        %
                      </div>
                    </div>
                    <div
                      className="stats-bar"
                      data-value={
                        Math.round(
                          (project?.attributes?.sold_shares /
                            project?.attributes?.shares) *
                            100 *
                            100
                        ) / 100
                      }
                    >
                      <div className="bar-line" />
                    </div>
                  </div>
                  <div className="project-form">
                    <form onSubmit={(e) => e.preventDefault()} action="#">
                      <ul className="donation-amount">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                      <button type="submit" className="main-btn">
                        Apply for your Share Now{" "}
                        <i className="far fa-arrow-right" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="project-details-tab">
                  <div className="tab-content" id="projectTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="description"
                      role="tabpanel"
                    >
                      <div className="row justify-content-center">
                        <div className="col-lg-8">
                          <div className="description-content">
                            <ReactMarkdown>
                              {project?.attributes?.description}
                            </ReactMarkdown>
                          </div>
                          <div
                            style={{
                              marginTop: "100px",
                              backgroundColor: "#EDF9F3",
                            }}
                          >
                            <ImageGallery items={images} />
                          </div>
                        </div>
                        <div
                          className="col-lg-4 col-md-12 col-sm-12"
                          style={{
                            position: "relative",
                          }}
                        >
                          {project?.attributes?.map_location && (
                            <SimpleMap
                              location={JSON.parse(
                                project.attributes.map_location
                              )}
                            />
                          )}
                        </div>
                      </div>
                      {isAuthenticated && user?.canBuy && (
                        <ProjectForm project={project} />
                      )}
                      {isAuthenticated && !user?.canBuy && (
                        <div style={{ marginTop: "100px" }}>
                          <div className="contact-form">
                            <h3 className="form-title">
                              You are on our waiting list
                            </h3>
                            <h6
                              style={{
                                marginBottom: "50px",
                                marginTop: "-20px",
                              }}
                            >
                              Thank you for joining our waiting list. We will
                              inform you shortly once you have access to buy
                              shares.
                            </h6>
                          </div>
                        </div>
                      )}
                      {!isAuthenticated && (
                        <div style={{ marginTop: "100px" }}>
                          <div className="contact-form">
                            <h3 className="form-title">
                              Sign up to be able to buy shares
                            </h3>
                            <h6
                              style={{
                                marginBottom: "50px",
                                marginTop: "-20px",
                              }}
                            >
                              By logging in you will join our waiting list for
                              active users. We will notify you once you can buy
                              shares.
                            </h6>
                            <div className="navbar-extra d-flex align-items-center">
                              <Link href="/login">
                                <a
                                  className="main-btn nav-btn d-none d-sm-inline-block mr-2"
                                  style={{
                                    backgroundColor: "transparent",
                                    color: "black",
                                    border: "1px solid black",
                                    paddingRight: "19px",
                                    paddingLeft: "19px",
                                  }}
                                >
                                  Log in <i className="far fa-user" />
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="tab-pane fade" id="update" role="tabpanel">
                      Update
                    </div>
                    <div
                      className="tab-pane fade"
                      id="bascker-list"
                      role="tabpanel"
                    >
                      Bascker List
                    </div>
                    <div className="tab-pane fade" id="reviews" role="tabpanel">
                      Reviews
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ProjectDetails;
