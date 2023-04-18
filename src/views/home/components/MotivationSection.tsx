import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="lg:mt-[-100px]">
      <div className="relative isolate pt-5">
        <div className="mx-auto max-w-7xl px-6 py-4 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:pt-40">
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow  flex justify-center relative">
            <img
              className="block w-[500px] z-10"
              src="./images/motivation/Group 35.svg"
              alt="Your Company"
            />
          </div>
          <div className="ml-20 max-w-2xl lg:flex-auto ">
            <div className="relative">
              <h1 className="relative z-10 mt-10 max-w-lg text-4xl font-bold tracking-tight text-primary sm:text-6xl">
                {"It's just ABOUT time"}
              </h1>
            </div>
            <h2 className="mt-5 max-w-lg text-xl font-bold tracking-tight text-primary sm:text-2xl relative">
              Are you ready to join us?
            </h2>
            <h2 className="mt-1  text-lg  tracking-tight text-primary  relative">
              Our platform is designed to help you make the most of your assets.
            </h2>
            <div className="flex mt-6">
              <div>
                <img
                  className="block w-[20px] z-10"
                  src="./images/motivation/Group 6.svg"
                  alt="Your Company"
                />
              </div>
              <div className="text-lg leading-8 text-gray-600  ml-3">
                Browse our list of projects
              </div>
            </div>

            <div className="flex mt-4">
              <div>
                <img
                  className="block w-[20px] z-10"
                  src="./images/motivation/Group 6.svg"
                  alt="Your Company"
                />
              </div>
              <div className="text-lg leading-8 text-gray-600  ml-3">
                Contact us to participate in a project
              </div>
            </div>

            <div className="mt-10 flex items-center gap-x-6 justify-end">
              <div className="relative right-[-55px]">
                <img
                  className="block w-[60px] z-10"
                  src="./images/motivation/image 14.svg"
                  alt="Your Company"
                />
              </div>
              <div className="h-18 p-1 w-52 shadow-xl rounded-full flex flex-col items-center border-2 border-slate-200 text-sm">
                <div>Ahmed A. Sakr</div>
                <div>CEO & Founder</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
