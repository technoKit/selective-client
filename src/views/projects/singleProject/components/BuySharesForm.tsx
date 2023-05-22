import React, { useState } from "react";
import { EnvelopeIcon } from "@heroicons/react/20/solid";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import { Bars4Icon } from "@heroicons/react/20/solid";
import { PhoneIcon } from "@heroicons/react/20/solid";
import { useForm } from "react-hook-form";
import { useTranslation } from "next-i18next";

import api from "@/utils/api";

import { Project } from "@/types";

type FormValues = {
  email: string;
  phone: string;
  name: string;
  shares: string;
};

function BuySharesForm(props: { project: Project }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const [success, setSuccess] = useState<boolean | null>(null);
  const [failure, setFailure] = useState<boolean | null>(null);
  const { t } = useTranslation();

  const onSubmit = async (data: {
    email: string;
    phone: string;
    name: string;
    shares: string;
  }) => {
    console.log({
      ...data,
      projectId: props?.project?.id,
      projectTitle: props?.project?.attributes?.title,
    });
    api
      .post(`${process.env.NEXT_PUBLIC_BASE_URL}/application-for-projects`, {
        data: {
          ...data,
          projectId: props?.project?.id.toString(),
          projectTitle: props?.project?.attributes?.title,
        },
      })
      .then(function (response: any) {
        setSuccess(true);
        setFailure(false);
      })
      .catch(function (error: any) {
        setSuccess(false);
        setFailure(true);
      });
  };

  return (
    <div className="bg-white shadow-2xl p-8 rounded-2xl">
      <div className="text-center text-4xl text-primary font-bold">
        {t("project.buy_form_title")}
      </div>
      <div className="text-center text-xl text-slate-500 mt-2 mb-4">
        {t("project.buy_form_subtitle")}
      </div>
      <div id="form" className="grid grid-cols-2 gap-4">
        <div className="relative mt-1 rounded-3xl shadow-sm ">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-8">
            <UserCircleIcon
              className="h-6 w-6 text-gray-400"
              aria-hidden="true"
            />
          </div>
          <input
            type="text"
            id="name"
            className="h-12 block w-full rounded-full border-0 py-1.5 pl-[70px] text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
            placeholder="Name"
            {...register("name", { required: true })}
          />
        </div>
        <div className="relative mt-1 rounded-3xl shadow-sm ">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-8">
            <PhoneIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
          </div>
          <input
            type="text"
            id="phone"
            className="h-12 block w-full rounded-full border-0 py-1.5 pl-[66px] text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
            placeholder="Phone"
            {...register("phone", { required: true })}
          />
        </div>
        <div className="relative mt-1 rounded-3xl shadow-sm ">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-8">
            <EnvelopeIcon
              className="h-6 w-6 text-gray-400"
              aria-hidden="true"
            />
          </div>
          <input
            type="email"
            id="email"
            className="h-12 block w-full rounded-full border-0 py-1.5 pl-[70px] text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
            placeholder="Email"
            {...register("email", { required: true })}
          />
        </div>
        <div className="relative mt-1 rounded-3xl shadow-sm ">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-8">
            <Bars4Icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
          </div>
          <input
            type="text"
            id="shares"
            className="h-12 block w-full rounded-full border-0 py-1.5 pl-[66px] text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
            placeholder="shares"
            {...register("shares", { required: true })}
          />
        </div>
        <div></div>
        <div className="relative mt-1 rounded-3xl shadow-sm ">
          <div className="relative mt-5 rounded-3xl shadow-sm ">
            {!success && (
              <button
                onClick={handleSubmit(onSubmit)}
                className="h-12 block rounded-full border-0 py-1.5  text-white ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary hover:bg-primary-light sm:text-sm sm:leading-6 bg-primary w-full md:w-1/3 ml-auto"
              >
                <div className="text-xl ">{t("project.form_cta")}</div>
              </button>
            )}
            {success && (
              <div className="h-12 flex justify-center items-center rounded-full border-0 py-1.5 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6  w-full  ml-auto bg-green-200  text-green-600 ">
                <div className="text-xl ">
                  Request sent successfully. we will contact you soon
                </div>
              </div>
            )}
            {failure && (
              <div
                style={{
                  color: "red",
                  marginLeft: "auto",
                  marginTop: "10px",
                }}
              >
                failed to send message
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuySharesForm;
