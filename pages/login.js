import Link from "next/dist/client/link";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import { useAuth } from "../src/contexts/auth";
import { useForm } from "react-hook-form";
import Router, { useRouter } from "next/router";

const Contact = () => {
  const { login, loginError, loginLoading, user } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("data :>> ", data);
    login(data.email, data.password);
    // signUp(data.name, data.email, data.password);
  };
  if (user) {
    Router.push("/");
  }
  return (
    <Layout>
      <PageBanner pageName="Login" />
      <section className="contact-section section-gap-extra-bottom">
        <div className="container">
          {/* Contact Info End */}
          <div className="contact-from-area" id="contact-form">
            <div className="row no-gutters">
              <div className="col-lg-5">
                <div className="contact-maps">
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src="/assets/img/ss.jpg"
                    alt="contact-maps"
                  />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="contact-form" style={{ height: "100%" }}>
                  <form onSubmit={(e) => e.preventDefault()} action="#">
                    <h3 className="form-title">Login to your account</h3>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-field mb-25">
                          <label htmlFor="email">Email Address</label>
                          <input
                            type="email"
                            placeholder="support@gmail.com"
                            id="email"
                            {...register("email", { required: true })}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-field mb-25">
                          <label htmlFor="password">password</label>
                          <input
                            type="password"
                            id="password"
                            {...register("password", { required: true })}
                          />
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-field">
                          <button
                            className="main-btn"
                            onClick={handleSubmit(onSubmit)}
                          >
                            Send Us Message <i className="far fa-arrow-right" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
