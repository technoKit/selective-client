import React, { useState } from "react";
import { useForm } from "react-hook-form";
import api from "@/utils/api";

type MessageValues = {
  email: string;
};

export default function Form() {
  const [success, setSuccess] = useState<boolean | null>(null);
  const [failure, setFailure] = useState<boolean | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MessageValues>();

  const onSubmit = (data: { email: string }) => {
    console.log("data :>> ", data);
    api
      .post(`${process.env.NEXT_PUBLIC_BASE_URL}/application-for-newsletters`, {
        data: {
          ...data,
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
    <div>
      {!success && (
        <div className="flex h-[40px] w-[300px] rounded-full border-2 border-solid border-secondary overflow-hidden">
          <input
            {...register("email", { required: true })}
            id="email"
            className="bg-primary w-[60%] text-white ml-2"
          />
          <button
            onClick={handleSubmit(onSubmit)}
            className="bg-secondary w-[40%] rounded-full"
          >
            Subscribe
          </button>
        </div>
      )}
      {success && (
        <div className=" flex justify-center items-center rounded-lg border-0 py-2 px-2 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6  w-full  ml-auto bg-green-200  text-green-600 ">
          <div className="text-lg text-center w-full">Subscribed</div>
        </div>
      )}
      {failure && (
        <div
          className="text-center mt-2"
          style={{
            color: "red",
          }}
        >
          failed to subscribe
        </div>
      )}
    </div>
  );
}
