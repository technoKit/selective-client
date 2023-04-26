import { useForm } from "react-hook-form";

type MessageValues = {
  name: string;
  phone: number;
  email: string;
  subject: string;
  message: string;
};

export default function FormSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MessageValues>();

  const onSubmit = (data: {
    name: string;
    phone: number;
    email: string;
    subject: string;
    message: string;
  }) => {
    console.log("data :>> ", data);
    // if (!login) return;
    // login(data.email, data.password);
    // signUp(data.name, data.email, data.password);
  };

  return (
    <div className="bg-slate-100 flex flex-col justify-center- items-center">
      <h3 className="text-3xl sm:text-5xl font-bold tracking-tight text-primary sm:text-4xl ">
        Send us a message
      </h3>
      <p className="mt-4 text-2xl leading-8 text-primary mb-10">
        we will get back to you soon withing 48 hours
      </p>

      <div
        id="form"
        className="w-[60%] flex flex-col flex-wrap items-center justify-center"
      >
        <div className="flex flex-row flex-wrap items-center justify-center mt-1 w-[100%]">
          <div className="shadow-sm mx-5 my-1 flex flex-col lg:w-[40%] sm:w-[100%]">
            <label className="text-black mb-1">Your name</label>
            <input
              id="name"
              className="h-12 rounded-full border-0  pl-[30px] text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
              {...register("name", { required: true })}
            />
          </div>

          <div className="shadow-sm mx-5 my-1 flex flex-col lg:w-[40%] sm:w-[100%]">
            <label className="text-black mb-1">Phone Number</label>
            <input
              id="phone"
              className="h-12 rounded-full border-0  pl-[30px] text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
              {...register("phone", { required: true })}
            />
          </div>
        </div>

        <div className="flex flex-row flex-wrap items-center justify-center mt-1 w-[100%]">
          <div className="shadow-sm mx-5 my-1 flex flex-col lg:w-[40%] sm:w-[100%]">
            <label className="text-black mb-1">Email Address</label>
            <input
              id="email"
              className="h-12 rounded-full border-0  pl-[30px] text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
              {...register("email", { required: true })}
            />
          </div>

          <div className="shadow-sm mx-5 my-1 flex flex-col lg:w-[40%] sm:w-[100%]">
            <label className="text-black mb-1">Subject</label>
            <input
              id="subject"
              className="h-12 rounded-full border-0  pl-[30px] text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
              {...register("subject", { required: true })}
            />
          </div>
        </div>

        <div className="flex flex-row flex-wrap items-center justify-center mt-1 w-[100%]">
          <div className="shadow-sm m-5 flex flex-col lg:w-[85%] sm:w-[100%]">
            <label className="text-black mb-1">Write Message</label>
            <input
              id="message"
              className="h-40 rounded-3xl border-0  pl-[30px] text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
              {...register("message", { required: true })}
            />
          </div>
        </div>
        <div className="mt-2 rounded-3xl shadow-sm md:w-[50%] sm:w-[80%]">
          <button
            onClick={handleSubmit(onSubmit)}
            className="h-14 w-full rounded-full border-0 text-white ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary hover:bg-primary-light sm:text-sm sm:leading-6 bg-primary "
          >
            <div className="text-xl">Send Message</div>
          </button>
        </div>
      </div>
    </div>
  );
}
