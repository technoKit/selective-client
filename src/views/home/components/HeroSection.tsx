import Link from "next/link";
import { AnimatedSequence } from "@/components/AnimatedSequence";
export default function HeroSection() {
  return (
    <div className="lg:mt-[-100px]">
      <div className="relative isolate pt-5">
        <div className="mx-auto max-w-7xl px-6 py-4 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:pt-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <AnimatedSequence />
            <div className="relative">
              <h1 className="relative z-10 mt-2 max-w-lg text-4xl font-bold tracking-tight text-primary sm:text-6xl">
                Selective Capital
              </h1>
              <div className="absolute top-[-20px] left-[-40px] z-0">
                <img
                  className="block w-[100px] z-0"
                  src="./images/hero/Group 3.svg"
                  alt="Your Company"
                />
              </div>
              <div className="absolute bottom-[-500px] left-[-250px] z-0">
                <img
                  className="block w-[200px] z-0"
                  src="./images/hero/Group 13.svg"
                  alt="Your Company"
                />
              </div>
            </div>
            <h2 className="mt-5 max-w-lg text-xl font-bold tracking-tight text-primary sm:text-2xl relative">
              Real Estate Investment
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Esse id magna consectetur fugiat non dolor in ad laboris magna
              laborum ea consequat. Nisi irure aliquip nisi adipisicing veniam
              voluptate id. In veniam incididunt ex veniam adipisicing sit.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="/projects"
                className="rounded-3xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Explore Projects
              </Link>
              <Link
                href="/contact-us"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Contact us<span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow  flex justify-center relative">
            <img
              className="block w-[600px] z-10"
              src="./images/hero/heroImage.png"
              alt="Your Company"
            />
            <div className="absolute bottom-[20px] left-[-20px] z-0">
              <img
                className="block w-[100px] z-0"
                src="./images/hero/temple.png"
                alt="Your Company"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
