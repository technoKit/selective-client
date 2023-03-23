import Link from "next/dist/client/link";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";

const Contact = () => {
  return (
    <Layout>
      <PageBanner pageName="Confirm Email" />
      <section className="contact-section section-gap-extra-bottom">
        <div className="container">
          {/* Contact Info Start */}
          <div className="row align-items-center justify-content-center">
            <div className="col-lx-4 col-lg-5 col-sm-10">
              <div className="contact-info-text mb-md-70">
                <div className="common-heading mb-30">
                  <span className="tagline">
                    <i className="fas fa-plus" /> Confirm your email
                    <span className="heading-shadow-text">Confirm</span>
                  </span>
                  <h2 className="title">
                    We have sent you a confirmation email.{" "}
                  </h2>
                </div>
                <p>Check your inbox to activate your account.</p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7 offset-xl-1"></div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
