import { motion } from "framer-motion";

export default function HowItWorks() {
  return (
    <div className="bg-slate-100">
      <section className="max-w-4xl mx-auto py-10 overflow-hidden ">
        <div className="mx-auto max-w-2xl text-center mb-28 mt-20">
          <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
            How It works
          </h2>
          <p className="mt-2 text-2xl leading-8 text-gray-600">
            Steps to gain income with selective capital
          </p>
        </div>
        <div>
          <div className="flex flex-row">
            <div className="hidden md:flex flex-col items-center">
              <div className="w-32 py-5 border border-gray-300 rounded  ltr:mr-4 rtl:ml-4  uppercase flex flex-col items-center justify-center">
                <div className="text-3xl font-black text-gray-500">Step 1</div>
                <div className="text-gray-500 text-sm">Register</div>
              </div>
              <div className="h-full  ltr:border-l-4 rtl:border-r-4 border-transparent">
                <div className=" ltr:border-l-4 rtl:border-r-4  ltr:mr-4 rtl:ml-4  h-full border-gray-300 border-dashed"></div>
              </div>
            </div>
            <motion.div
              initial={{ x: "25vw" }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1 }}
              className="flex-auto border rounded  border-gray-300  shadow-lg bg-white p-8 "
            >
              <div className="flex md:flex-row flex-col items-center">
                <div className="flex-auto">
                  <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500">
                    <span className="font-black">Step 1</span> - Idea
                  </div>
                  <div className="p-3 text-3xl text-gray-800 font">
                    Register
                  </div>
                  <div className="px-3 pb-6">
                    Sign up for a Selective Capital account to get access to
                    exclusive investment opportunities in the real estate sector
                    across different countries.
                  </div>
                </div>
                <div className="md:w-96 w-full p-5">
                  <img
                    src="/images/how_it_works/SignUp.png"
                    alt="step 1"
                    className="object-scale-down h-40 ml-auto"
                  />
                </div>
              </div>
            </motion.div>
          </div>
          <div className="flex items-start flex-row">
            <div className="border-t-4 ltr:border-r-4 border-transparent">
              <div className="w-16  ltr:ml-16 rtl:mr-16 h-16  ltr:border-l-4 rtl:border-r-4 border-gray-300 border-dashed border-b-4 ltr:rounded-bl-full rtl:rounded-br-full"></div>
            </div>
            <div className="border-t-4 border-transparent flex-auto">
              <div className="h-16 border-b-4 border-gray-300 border-dashed"></div>
            </div>
            <div className="w-16 mt-16 ltr:mr-16 rtl:ml-16 h-16 ltr:border-r-4 rtl:border-l-4 border-gray-300 border-dashed border-t-4 ltr:rounded-tr-full rtl:rounded-tl-full"></div>
          </div>
          <div className="flex flex-row-reverse">
            <div className="hidden md:flex flex-col items-center">
              <div className="w-32 py-5 border border-gray-300 rounded ltr:ml-4 rtl:mr-4 uppercase flex flex-col items-center justify-center">
                <div className="text-3xl font-black text-gray-500">Step 2</div>
                <div className="text-gray-500 text-sm">Select</div>
              </div>
              <div className="h-full ltr:border-r-4 rtl:border-l-4 border-transparent">
                <div className=" ltr:border-l-4 rtl:border-r-4 ltr:ml-4 rtl:mr-4 h-full border-gray-300 border-dashed"></div>
              </div>
            </div>
            <motion.div
              initial={{ x: "-25vw" }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1 }}
              className="flex-auto border rounded  border-gray-300  shadow-lg bg-white p-8"
            >
              <div className="flex md:flex-row flex-col items-center">
                <div className="flex-auto">
                  <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500">
                    <span className="font-black">Step 2</span> - Select
                  </div>
                  <div className="p-3 text-3xl text-gray-800 font">Select</div>
                  <div className="px-3 pb-6">
                    Browse and evaluate the available investment options in our
                    platform, which are managed and evaluated by our team of
                    experienced professionals to ensure maximum returns
                  </div>
                </div>
                <div className="md:w-96 w-full p-5">
                  <img
                    src="/images/how_it_works/select.png"
                    alt="step 2"
                    className="object-scale-down h-40 ml-auto"
                  />
                </div>
              </div>
            </motion.div>
          </div>
          <div className="flex items-start flex-row-reverse">
            <div className="border-t-4  ltr:border-l-4 rtl:border-r-4 border-transparent">
              <div className="w-16 ltr:mr-16 rtl:ml-16 h-16 ltr:border-r-4 rtl:border-l-4  border-gray-300 border-dashed border-b-4 ltr:rounded-br-full rtl:rounded-bl-full"></div>
            </div>
            <div className="border-t-4 border-transparent flex-auto">
              <div className="h-16 border-b-4 border-gray-300 border-dashed"></div>
            </div>
            <div className="w-16 mt-16  ltr:ml-16 rtl:mr-16 h-16  ltr:border-l-4 rtl:border-r-4 border-gray-300 border-dashed border-t-4  ltr:rounded-tl-full rtl:rounded-tr-full"></div>
          </div>
          <div className="flex flex-row">
            <div className="hidden md:flex flex-col items-center">
              <div className="w-32 py-5 border border-gray-300 rounded  ltr:mr-4 rtl:ml-4  uppercase flex flex-col items-center justify-center">
                <div className="text-3xl font-black text-gray-500">Step 3</div>
                <div className="text-gray-500 text-sm">Invest</div>
              </div>
              <div className="h-full  ltr:border-l-4 rtl:border-r-4 border-transparent">
                <div className=" ltr:border-l-4 rtl:border-r-4  ltr:mr-4 rtl:ml-4  h-full border-gray-300 border-dashed"></div>
              </div>
            </div>
            <motion.div
              initial={{ x: "25vw" }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1 }}
              className="flex-auto border rounded  border-gray-300  shadow-lg bg-white p-8"
            >
              <div className="flex md:flex-row flex-col items-center">
                <div className="flex-auto">
                  <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500">
                    <span className="font-black">Step 3</span> - Invest
                  </div>
                  <div className="p-3 text-3xl text-gray-800 font">Invest</div>
                  <div className="px-3 pb-6">
                    Once you have found an investment opportunity that fits your
                    goals and risk tolerance, you can easily invest through our
                    fully digital process, which is designed to be hassle-free,
                    transparent, and efficient.
                  </div>
                </div>
                <div className="md:w-96 w-full p-5">
                  <img
                    src="/images/how_it_works/invest.png"
                    alt="step 3"
                    className="object-scale-down h-40 ml-auto"
                  />
                </div>
              </div>
            </motion.div>
          </div>
          <div className="flex items-start flex-row">
            <div className="border-t-4 ltr:border-r-4 border-transparent">
              <div className="w-16  ltr:ml-16 rtl:mr-16 h-16  ltr:border-l-4 rtl:border-r-4 border-gray-300 border-dashed border-b-4 ltr:rounded-bl-full rtl:rounded-br-full"></div>
            </div>
            <div className="border-t-4 border-transparent flex-auto">
              <div className="h-16 border-b-4 border-gray-300 border-dashed"></div>
            </div>
            <div className="w-16 mt-16 ltr:mr-16 rtl:ml-16 h-16 ltr:border-r-4 rtl:border-l-4 border-gray-300 border-dashed border-t-4 ltr:rounded-tr-full rtl:rounded-tl-full"></div>
          </div>
          <div className="flex flex-row-reverse">
            <div className="hidden md:flex flex-col items-center">
              <div className="w-32 py-5 border border-gray-300 rounded ltr:ml-4 rtl:mr-4 uppercase flex flex-col items-center justify-center">
                <div className="text-3xl font-black text-gray-500">Step 4</div>
                <div className="text-gray-500 text-sm">Monitor</div>
              </div>
              <div className="h-full ltr:border-r-4 rtl:border-l-4 border-transparent">
                <div className=" ltr:border-l-4 rtl:border-r-4 ltr:ml-4 rtl:mr-4 h-full border-gray-300 border-dashed"></div>
              </div>
            </div>
            <motion.div
              initial={{ x: "-25vw" }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1 }}
              className="flex-auto border rounded  border-gray-300  shadow-lg bg-white p-8"
            >
              <div className="flex md:flex-row flex-col items-center">
                <div className="flex-auto">
                  <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500">
                    <span className="font-black">Step 2</span> - Monitor
                  </div>
                  <div className="p-3 text-3xl text-gray-800 font">
                    Monitor{" "}
                  </div>
                  <div className="px-3 pb-6">
                    {`Track the performance of your investments in real-time through
                      our platform's monitoring tools and regular updates from our
                      team`}
                  </div>
                </div>
                <div className="md:w-96 w-full p-5">
                  <img
                    src="/images/how_it_works/monitor.png"
                    alt="step 2"
                    className="object-scale-down h-40 ml-auto"
                  />
                </div>
              </div>
            </motion.div>
          </div>
          <div className="flex items-start flex-row-reverse">
            <div className="border-t-4  ltr:border-l-4 rtl:border-r-4 border-transparent">
              <div className="w-16 ltr:mr-16 rtl:ml-16 h-16 ltr:border-r-4 rtl:border-l-4  border-gray-300 border-dashed border-b-4 ltr:rounded-br-full rtl:rounded-bl-full"></div>
            </div>
            <div className="border-t-4 border-transparent flex-auto">
              <div className="h-16 border-b-4 border-gray-300 border-dashed"></div>
            </div>
            <div className="w-16 mt-16  ltr:ml-16 rtl:mr-16 h-16  ltr:border-l-4 rtl:border-r-4 border-gray-300 border-dashed border-t-4  ltr:rounded-tl-full rtl:rounded-tr-full"></div>
          </div>
          <div className="flex flex-row">
            <div className="hidden md:flex flex-col items-center">
              <div className="w-32 py-5 border border-gray-300 rounded  ltr:mr-4 rtl:ml-4  uppercase flex flex-col items-center justify-center">
                <div className="text-3xl font-black text-gray-500">Step 5</div>
                <div className="text-gray-500 text-sm">Exit</div>
              </div>
              <div className="h-full  ltr:border-l-4 rtl:border-r-4 border-transparent">
                <div className=" ltr:border-l-4 rtl:border-r-4  ltr:mr-4 rtl:ml-4  h-full border-gray-300 border-dashed"></div>
              </div>
            </div>
            <motion.div
              initial={{ x: "25vw" }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1 }}
              className="flex-auto border rounded  border-gray-300  shadow-lg bg-white p-8"
            >
              <div className="flex md:flex-row flex-col items-center">
                <div className="flex-auto">
                  <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500">
                    <span className="font-black">Step 3</span> - Exit
                  </div>
                  <div className="p-3 text-3xl text-gray-800 font">Exit</div>
                  <div className="px-3 pb-6">
                    Whether you choose to hold your investment for the
                    recommended period or sell it to another investor on our
                    platform, the process is quick and hassle-free.
                  </div>
                </div>
                <div className="md:w-96 w-full p-5">
                  <img
                    src="/images/how_it_works/exit.png"
                    alt="step 3"
                    className="object-scale-down h-40 ml-auto"
                  />
                </div>
              </div>
            </motion.div>
          </div>
          <div className="flex items-start flex-row">
            <div className="border-t-4 ltr:border-r-4 border-transparent">
              <div className="w-16  ltr:ml-16 rtl:mr-16 h-16  ltr:border-l-4 rtl:border-r-4 border-gray-300 border-dashed border-b-4 ltr:rounded-bl-full rtl:rounded-br-full"></div>
            </div>
            <div className="border-t-4 border-transparent flex-auto">
              <div className="h-16 border-b-4 border-gray-300 border-dashed"></div>
            </div>
            <div className="w-16 mt-16 ltr:mr-16 rtl:ml-16 h-16 ltr:border-r-4 rtl:border-l-4 border-gray-300 border-dashed border-t-4 ltr:rounded-tr-full rtl:rounded-tl-full"></div>
          </div>
          <div className="flex flex-row-reverse">
            <div className="hidden md:flex flex-col items-center">
              <div className="w-32 py-5 border border-gray-300 rounded ltr:ml-4 rtl:mr-4 uppercase flex flex-col items-center justify-center">
                <div className="text-3xl font-black text-gray-500">Step 6</div>
                <div className="text-gray-500 text-sm">Reinvest</div>
              </div>
            </div>
            <motion.div
              initial={{ x: "-25vw" }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1 }}
              className="flex-auto border rounded  border-gray-300  shadow-lg bg-white p-8"
            >
              <div className="flex md:flex-row flex-col items-center">
                <div className="flex-auto">
                  <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500">
                    <span className="font-black">Step 6</span> - Reinvest
                  </div>
                  <div className="p-3 text-3xl text-gray-800 font">
                    Reinvest
                  </div>
                  <div className="px-3 pb-6">
                    Once you have exited an investment, you can reinvest your
                    funds in new opportunities, or simply withdraw them to your
                    account.
                  </div>
                </div>
                <div className="md:w-96 w-full p-5">
                  <img
                    src="/images/how_it_works/reinvest.png"
                    alt="step 2"
                    className="object-scale-down h-40 ml-auto"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
