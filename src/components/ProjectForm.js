import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

function ProjectForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [success, setSuccess] = useState(null);
  const [failure, setFailure] = useState(null);

  const onSubmit = async (data) => {
    console.log({
      ...data,
      projectId: props?.project?.id,
      projectTitle: props?.project?.attributes?.title,
    });
    axios
      .post(`${process.env.NEXT_PUBLIC_BASE_URL}/application-for-projects`, {
        data: {
          ...data,
          projectId: props?.project?.id.toString(),
          projectTitle: props?.project?.attributes?.title,
        },
      })
      .then(function (response) {
        setSuccess(true);
        setFailure(false);
      })
      .catch(function (error) {
        setSuccess(false);
        setFailure(true);
      });
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <div className="contact-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="form-title">Apply for shares in this project</h3>
          <h6 style={{ marginBottom: "50px", marginTop: "-20px" }}>
            To get shares in this project fill in the form and we will contact
            you shortly
          </h6>

          <div className="row">
            <div className="col-lg-6">
              <div className="form-field mb-25">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  placeholder="Willie M. Stanley"
                  id="name"
                  {...register("name", { required: true })}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-field mb-25">
                <label htmlFor="phone-number">Phone Number</label>
                <input
                  type="text"
                  placeholder="Willie M. Stanley"
                  id="phone-number"
                  {...register("phone", { required: true })}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-field mb-25">
                <label htmlFor="email">Email Address</label>
                <input
                  type="text"
                  placeholder="support@gmail.com"
                  id="email"
                  {...register("email", { required: true })}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-field mb-25">
                <label htmlFor="subject">Number of shares you want</label>
                <input
                  type="text"
                  placeholder="I would like to"
                  id="subject"
                  {...register("shares", { required: true })}
                />
              </div>
            </div>
            <div className="col-12">
              {!success ? (
                <div className="form-field">
                  <button className="main-btn">
                    Apply for shares <i className="far fa-arrow-right" />
                  </button>
                </div>
              ) : (
                <div>Application sent successfully </div>
              )}
            </div>
            <div className="col-12">
              {failure && (
                <div
                  style={{
                    color: "red",
                    marginLeft: "20px",
                    marginTop: "10px",
                  }}
                >
                  failed to send message
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProjectForm;
