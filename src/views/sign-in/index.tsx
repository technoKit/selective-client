import { EnvelopeIcon } from "@heroicons/react/20/solid";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useAuth } from "@/contexts/auth";
import { useTranslation } from "next-i18next";

import { useForm } from "react-hook-form";
import Router, { useRouter } from "next/router";

type FormValues = {
  email: string;
  password: string;
};

export default function SignInView() {
  const { t } = useTranslation();

  const { login, loginError, loginLoading, user } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: { email: string; password: string }) => {
    console.log("data :>> ", data);
    if (!login) return;
    login(data.email, data.password);
    // signUp(data.name, data.email, data.password);
  };

  if (user) {
    Router.push("/");
  }

  return (
    <main>
      <div className="bg-slate-100  pb-20 pt-10 sm:pb-10 overflow-x-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative ">
          <div className="grid grid-cols-1  md:grid-cols-2 gap-4">
            <div className="flex justify-center">
              <img
                src="/images/sign-in/Group 60.svg"
                alt="location icon"
                className=""
              />
            </div>
            <div className="flex justify-center items-center flex-col">
              <div className="w-[80%]">
                <div className="w-ful">
                  <h5 className="relative z-10 mb-5 max-w-lg text-4xl font-bold tracking-tight text-primary sm:text-5xl text-start w-full ">
                    {t("sign_in.sign_in")}
                  </h5>
                  <div className="flex">
                    <h1 className="relative z-10 max-w-lg text-lg tracking-tight text-slate-400 sm:text-xl text-start ">
                      {t("sign_in.no_account")}
                    </h1>
                    <span>
                      <Link href={"/sign-up"}>
                        <h1 className=" ml-3 relative z-10 max-w-lg text-lg tracking-tight text-secondary sm:text-xl text-start ">
                          {t("sign_in.sign_up")}
                        </h1>
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
              <div id="form" className="w-[80%]">
                <div className="relative mt-5 rounded-3xl shadow-sm ">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-8">
                    <EnvelopeIcon
                      className="h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    type="email"
                    id="email"
                    className="h-16 block w-full rounded-full border-0 py-1.5 pl-[70px] text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                    placeholder="Email"
                    {...register("email", { required: true })}
                  />
                </div>
                <div className="relative mt-5 rounded-3xl shadow-sm ">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-8">
                    <LockClosedIcon
                      className="h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    type="password"
                    id="password"
                    className="h-16 block w-full rounded-full border-0 py-1.5 pl-[66px] text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                    placeholder="Password"
                    {...register("password", { required: true })}
                  />
                </div>
                <div className="relative mt-5 rounded-3xl shadow-sm ">
                  <div className="relative mt-5 rounded-3xl shadow-sm ">
                    <button
                      onClick={handleSubmit(onSubmit)}
                      className="h-16 block w-full rounded-full border-0 py-1.5 text-white ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary hover:bg-primary-light sm:text-sm sm:leading-6 bg-primary "
                    >
                      <div className="text-2xl"> {t("sign_in.sign_in")}</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
