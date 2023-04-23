import { EnvelopeIcon } from "@heroicons/react/20/solid";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useAuth } from "@/contexts/auth";

import { useForm } from "react-hook-form";
import Router, { useRouter } from "next/router";

type FormValues = {
  email: string;
  password: string;
  name: string;
};

export default function SignUpView() {
  const { signupError, signupLoading, signUp, user } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: {
    email: string;
    password: string;
    name: string;
  }) => {
    if (!signUp) return;
    signUp(data.name, data.email, data.password);
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
                    Sign up
                  </h5>
                  <div className="flex">
                    <h1 className="relative z-10 max-w-lg text-lg tracking-tight text-slate-400 sm:text-xl text-start ">
                      {"Already have an account?"}
                    </h1>
                    <span>
                      <Link href={"/sign-in"}>
                        <h1 className=" ml-3 relative z-10 max-w-lg text-lg tracking-tight text-secondary sm:text-xl text-start ">
                          {"Sign in"}
                        </h1>
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
              <div id="form" className="w-[80%]">
                <div className="relative mt-5 rounded-3xl shadow-sm ">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-8">
                    <UserCircleIcon
                      className="h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    type="text"
                    id="name"
                    className="h-16 block w-full rounded-full border-0 py-1.5 pl-[70px] text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                    placeholder="Name"
                    {...register("name", { required: true })}
                  />
                </div>

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
                <div className="relative mt-5 rounded-3xl shadow-sm flex justify-center">
                  {signupLoading ? (
                    <div role="status" className="mt-3">
                      <svg
                        aria-hidden="true"
                        className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : (
                    <>
                      <div className="relative mt-5 rounded-3xl shadow-sm w-full">
                        <button
                          onClick={handleSubmit(onSubmit)}
                          className="h-16 block w-full rounded-full border-0 py-1.5  text-white ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary hover:bg-primary-light sm:text-sm sm:leading-6 bg-primary "
                        >
                          <div className="text-2xl">Sign Up</div>
                        </button>
                      </div>
                    </>
                  )}
                </div>
                {signupError && (
                  <div style={{ color: "red" }} className="mt-3 ml-4">
                    {signupError}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
