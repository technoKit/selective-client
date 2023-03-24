import Link from "next/dist/client/link";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Spinner from "react-bootstrap/Spinner";

const Project1 = (props) => {
  const renderProjects = (projects) => {
    return projects.map((project) => {
      return (
        <div className="col-lg-4 col-md-6 col-sm-10">
          <div className="project-item mb-30">
            <div
              className="thumb"
              style={{
                backgroundImage: `url(${project?.attributes?.main_image?.data?.attributes?.url})`,
              }}
            />
            <div className="content">
              <div className="cats">
                <Link href={`projects/${project.id}`}>Learn More</Link>
              </div>
              <div className="author">
                <img src="assets/img/location.png" alt="Thumb" />
                {project?.attributes?.location}
              </div>
              <h5 className="title">
                <Link href={`projects/${project.id}`}>
                  <a>{project?.attributes?.title}</a>
                </Link>
              </h5>
              <div className="project-stats">
                <div className="stats-value">
                  <span className="value-title">
                    Total Shares{" "}
                    <span className="value">{project?.attributes?.shares}</span>
                  </span>
                  <span className="stats-percentage">
                    {Math.round(
                      (project?.attributes?.sold_shares /
                        project?.attributes?.shares) *
                        100 *
                        100
                    ) / 100}
                    %
                  </span>
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
              <span className="date">
                share price: {project?.attributes?.share_price}
              </span>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <Layout>
      <PageBanner pageName="Latest Project" />
      <section className="project-section section-gap-extra-bottom primary-soft-bg">
        <div className="container">
          <div className="row project-items justify-content-center project-style-one">
            {props.loading ? (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
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
              props?.projects?.length > 0 && renderProjects(props.projects)
            )}
            {/* <div className="col-12">
              <div className="view-more-btn text-center mt-40">
                <Link href="/project-details">
                  <a className="main-btn bordered-btn">
                    View More Project <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Project1;
