import Link from "next/dist/client/link";
import Slider from "react-slick";
import Counter from "../src/components/Counter";
import Layout from "../src/layouts/Layout";
import { projectSliderOne, projectSliderTwo } from "../src/sliderProps";
import Spinner from "react-bootstrap/Spinner";

const Index = (props) => {
  const renderProjects = (projects) => {
    return projects.map((project) => {
      return [
        <div className="col">
          <div className="project-item">
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
                <Link href={`projects/${project.id}`}>
                  {project?.attributes?.location}
                </Link>
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
        </div>,
      ];
    });
  };

  return (
    <Layout transparentHeader transparentTop footerSolidBg>
      <section className="hero-area-one">
        <div className="hero-text">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <span className="tagline wow fadeInUp" data-wow-delay="0.3s">
                  Real Estate Investment
                </span>
                <h1 className="title wow fadeInUp" data-wow-delay="0.4s">
                  Selective Capital
                </h1>
                <Link href="/projects">
                  <a className="main-btn wow fadeInUp" data-wow-delay="0.5s">
                    Explore Projects <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="hero-shapes">
            <div className="hero-line-one">
              <img src="assets/img/hero/hero-line.png" alt="Line" />
            </div>
            <div className="hero-line-two">
              <img src="assets/img/hero/hero-line-2.png" alt="Line" />
            </div>
            <div className="dot-one" />
            <div className="dot-two" />
          </div>
        </div>
        <div className="hero-images">
          <div
            className="hero-img image-small fancy-bottom wow fadeInLeft"
            data-wow-delay="0.6s"
          >
            <img src="assets/img/hero/hero-one-small.jpg" alt="Image" />
          </div>
          <div className="hero-img main-img wow fadeInUp" data-wow-delay="0.5s">
            <img src="assets/img/hero/hero-one-big.jpg" alt="Image" />
          </div>
          <div
            className="hero-img image-small fancy-top wow fadeInRight"
            data-wow-delay="0.7s"
          >
            <img src="assets/img/hero/hero-one-small-2.jpg" alt="Image" />
          </div>
        </div>
      </section>
      {/*====== Hero Area End ======*/}
      {/*====== Categories Section Start ======*/}
      <section className="popular-categories section-gap">
        <div className="container">
          <div className="categories-header">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto">
                <div className="common-heading mb-30">
                  <span className="tagline">
                    <i className="fas fa-plus" /> Who Are We
                    <span className="heading-shadow-text">Slogans</span>
                  </span>
                  <h2 className="title">Welcome to Selective Capital Where:</h2>
                </div>
              </div>
              {/* <div className="col-auto">
                <Link href="/project-1">
                  <a className="main-btn mb-30">
                    View All Category <i className="far fa-angle-right" />
                  </a>
                </Link>
              </div> */}
            </div>
          </div>
          <div className="row justify-content-center fancy-icon-boxes">
            <div
              className="col-xl-12 col-md-12 col-sm-12 wow fadeInUp"
              data-wow-delay="0s"
            >
              <div className="fancy-box-item mt-30">
                <div className="icon">
                  <img
                    style={{ width: "80px" }}
                    src="assets/img/art.png"
                    alt="Image"
                  />
                </div>
                <div className="content">
                  <h4 className="title">
                    Building your real estate wealth is an art form.
                  </h4>
                  <p>
                    Done by the most experienced experts in the field of real
                    estate
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-12 col-md-12 col-sm-12 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="fancy-box-item mt-30">
                <div className="icon">
                  <img
                    style={{ width: "80px" }}
                    src="assets/img/picking.png"
                    alt="Image"
                  />{" "}
                </div>
                <div className="content">
                  <h4 className="title">We're picky about the opportunities</h4>
                  <p>
                    We bring to our intelligent investors, ensuring that every
                    investment is a masterpiece.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-12 col-md-12 col-sm-12 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="fancy-box-item mt-30">
                <div className="icon">
                  <img
                    style={{ width: "80px" }}
                    src="assets/img/loan.png"
                    alt="Image"
                  />
                </div>
                <div className="content">
                  <h4 className="title">You can make selective investments</h4>
                  <p>
                    With our platform, and paint a beautiful future for yourself
                    in the world of real estate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Categories Section End ======*/}
      {/*====== About Section Start ======*/}
      <section className="about-section-one">
        <div className="container">
          <div className="row align-items-center justify-content-lg-start justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-9">
              <div className="about-img">
                <img src="assets/img/about/about-one.jpg" alt="Image" />
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 col-md-10 offset-xl-1">
              <div className="about-text mt-md-70 mb-md-50">
                <div className="common-heading mb-30">
                  <span className="tagline">
                    <i className="fas fa-plus" /> it's just about time
                    <span className="heading-shadow-text">Ready</span>
                  </span>
                  <h2 className="title">Are you ready to join us?</h2>
                </div>
                <p>
                  Our platform is designed to help you make the most of your
                  assets.
                </p>
                <div className="author-note wow fadeInUp">
                  <ul>
                    <li>
                      <i className="far fa-check" /> Browse our list of projects
                    </li>
                    <li>
                      <i className="far fa-check" /> Contact us to participate
                      in a project.
                    </li>
                  </ul>
                  <div className="author-info">
                    <div className="author-img">
                      <img
                        src="assets/img/author-thumbs/sakr.png"
                        alt="Image"
                      />
                    </div>
                    <h5 className="name">Ahmed A. Sakr</h5>
                    <span className="title">CEO &amp; Founder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== About Section End ======*/}
      {/*====== Project Section Start ======*/}
      <section className="project-section project-section-extra-gap secondary-bg">
        <div className="container-fluid fluid-extra-padding">
          <div className="common-heading text-center color-version-white mb-60">
            <span className="tagline">
              <i className="fas fa-plus" /> Popular Projects
              <span className="heading-shadow-text">Our Projects</span>
            </span>
            <h2 className="title">Explore Our Projects</h2>
          </div>
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
            <Slider
              {...projectSliderOne}
              className="row project-slider-one project-items project-style-one no-shadow"
            >
              {props?.projects?.length > 0 && renderProjects(props.projects)}
            </Slider>
          )}
        </div>
      </section>
      {/*====== Project Section End ======*/}
      {/*====== Counter Area Start ======*/}
      {/* <section className="counter-section-one mt-negative">
        <div className="container primary-bg">
          <div className="row counter-boxes justify-content-xl-between justify-content-center">
            <div className="col-xl-auto col-lg-5 col-md-5 col-sm-6">
              <div className="counter-box mb-40 icon-left">
                <div className="icon white-color">
                  <i className="flaticon-crowdfunding" />
                </div>
                <div className="content white-color">
                  <div className="count-wrap">
                    <Counter end={3598} />
                    <span className="suffix">+</span>
                  </div>
                  <h6 className="title">We’ve Project Complate</h6>
                </div>
              </div>
            </div>
            <div className="col-xl-auto col-lg-5 col-md-5 col-sm-6">
              <div className="counter-box mb-40 icon-left">
                <div className="icon white-color">
                  <i className="flaticon-crowdfunding" />
                </div>
                <div className="content white-color">
                  <div className="count-wrap">
                    <Counter end={9634} />
                    <span className="suffix">+</span>
                  </div>
                  <h6 className="title">Global Partners</h6>
                </div>
              </div>
            </div>
            <div className="col-xl-auto col-lg-5 col-md-5 col-sm-6">
              <div className="counter-box mb-40 icon-left">
                <div className="icon white-color">
                  <i className="flaticon-crowdfunding" />
                </div>
                <div className="content white-color">
                  <div className="count-wrap">
                    <Counter end={8565} />
                    <span className="suffix">+</span>
                  </div>
                  <h6 className="title">Awards Winning</h6>
                </div>
              </div>
            </div>
            <div className="col-xl-auto col-lg-5 col-md-5 col-sm-6">
              <div className="counter-box mb-40 icon-left">
                <div className="icon white-color">
                  <i className="flaticon-crowdfunding" />
                </div>
                <div className="content white-color">
                  <div className="count-wrap">
                    <Counter end={4756} />
                    <span className="suffix">+</span>
                  </div>
                  <h6 className="title">Active Volunteer</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*====== Counter Area End ======*/}
      {/*====== Testimonials Start ======*/}
      <section className="testimonials-section section-gap">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-4 col-lg-6 col-md-8 col-sm-10">
              <div className="testimonials-content mb-lg-50">
                <div className="common-heading mb-30">
                  <span className="tagline">
                    <i className="fas fa-plus" /> Competitive Advantages
                    <span className="heading-shadow-text">Proposition</span>
                  </span>
                  <h2 className="title">Why Invest With Us</h2>
                </div>
                <p>Reasons to trust Selective Capital</p>
              </div>
            </div>
            <div className="col-xl-8 col-lg-10">
              <div className="testimonial-boxes square-shape">
                <div className="row  justify-content-center">
                  <div className="col-lg-6 col-md-6 col-sm-10">
                    <div
                      className="testimonial-box-one wow fadeInUp"
                      data-wow-delay="0s"
                    >
                      <div className="author-info">
                        <div className="author-img">
                          <img
                            src="assets/img/author-thumbs/opportunity.png"
                            alt="Thumb"
                          />
                        </div>
                        <div>
                          <h5 className="name">Exclusive opportunities</h5>
                          {/* <p className="position">Web Developer</p> */}
                        </div>
                      </div>
                      <p className="testimonial-desc">
                        Our selective approach means we offer exclusive access
                        to real estate investment opportunities that provide
                        unmatched potential for building long-term wealth.
                      </p>
                      <div className="rating-wrap"></div>
                    </div>
                    <div
                      className="testimonial-box-one mt-30 wow fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      <div className="author-info">
                        <div className="author-img">
                          <img
                            src="assets/img/author-thumbs/profits.png"
                            alt="Thumb"
                          />
                        </div>
                        <div>
                          <h5 className="name">
                            Transparent and hassle-free investing
                          </h5>
                        </div>
                      </div>
                      <p className="testimonial-desc">
                        Our platform operates with full transparency and
                        compliance, ensuring that investors can confidently
                        invest in international real estate opportunities
                        without worrying about legal or regulatory hurdles.
                      </p>
                      <div className="rating-wrap"></div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-10">
                    <div
                      className="testimonial-box-one mt-30 wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <div className="author-info">
                        <div className="author-img">
                          <img
                            src="assets/img/author-thumbs/secure-shield.png"
                            alt="Thumb"
                          />
                        </div>
                        <div>
                          <h5 className="name">Secure and efficient Process</h5>
                        </div>
                      </div>
                      <p className="testimonial-desc">
                        Our platform utilizes cutting-edge security measures and
                        efficient investment processes, ensuring that investors
                        can confidently invest in real estate opportunities from
                        anywhere in the world with ease and security.
                      </p>
                      <div className="rating-wrap"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Testimonials End ======*/}
      {/*====== Emergency Project & CTA Start ======*/}

      {/*====== Emergency Project & CTA End ======*/}
      {/*====== Partners Section Start ======*/}
      <section className="partners-section section-gap section-border-bottom">
        <div className="container">
          <div className="common-heading mb-30">
            <span className="tagline">
              <i className="fas fa-plus" /> Our Partners
              <span className="heading-shadow-text">Partners</span>
            </span>
            <h2 className="title">Trusted Partners</h2>
          </div>
          <div className="row partners-logos-one">
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="logo mt-30">
                <Link href="https://www.getground.co.uk/">
                  <a>
                    <img
                      style={{ height: "90px" }}
                      src="assets/img/partners/getground.png"
                      alt="Image"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="logo mt-30">
                <Link href="https://infinityt.net/">
                  <a>
                    <img
                      style={{ height: "100px" }}
                      src="assets/img/partners/tower1.png"
                      alt="Image"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="logo mt-30">
                <Link href="https://www.elattal.com/">
                  <a>
                    <img
                      style={{ height: "90px" }}
                      src="assets/img/partners/atal.png"
                      alt="Image"
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Partners Section End ======*/}
      {/*====== Latest News Start ======*/}
      {/* <section className="latest-blog-section section-gap">
        <div className="container">
          <div className="common-heading text-center mb-30">
            <span className="tagline">
              <i className="fas fa-plus" /> Latest News &amp; Blog
              <span className="heading-shadow-text">News Blog</span>
            </span>
            <h2 className="title">Get Every Single Update</h2>
          </div>
          <div className="row justify-content-center latest-blog-posts style-one">
            <div
              className="col-lg-4 col-md-6 col-sm-9 col-11 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="latest-post-box mt-30">
                <div className="post-thumb">
                  <img src="assets/img/latest-news/01.jpg" alt="Image" />
                </div>
                <div className="post-content">
                  <a href="#" className="post-date">
                    <i className="far fa-calendar-alt" /> 25 February 2021
                  </a>
                  <h6 className="title">
                    <Link href="/news-details">
                      <a>Standing Out From Crowds mproving Mobile Experience</a>
                    </Link>
                  </h6>
                  <Link href="/news-details">
                    <a className="post-link">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-9 col-11 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="latest-post-box mt-30">
                <div className="post-thumb">
                  <img src="assets/img/latest-news/02.jpg" alt="Image" />
                </div>
                <div className="post-content">
                  <a href="#" className="post-date">
                    <i className="far fa-calendar-alt" /> 25 February 2021
                  </a>
                  <h6 className="title">
                    <Link href="/news-details">
                      <a>
                        Five Rules Of App Localization China Money Dating And
                        App Store
                      </a>
                    </Link>
                  </h6>
                  <Link href="/news-details">
                    <a className="post-link">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-9 col-11 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="latest-post-box mt-30">
                <div className="post-thumb">
                  <img src="assets/img/latest-news/03.jpg" alt="Image" />
                </div>
                <div className="post-content">
                  <a href="#" className="post-date">
                    <i className="far fa-calendar-alt" /> 25 February 2021
                  </a>
                  <h6 className="title">
                    <Link href="/news-details">
                      <a>How To Use Underlined Text Improve User Experience</a>
                    </Link>
                  </h6>
                  <Link href="/news-details">
                    <a className="post-link">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </Layout>
  );
};

export default Index;
