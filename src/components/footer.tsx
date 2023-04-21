import Link from "next/link";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { AtSymbolIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <div>
      <div className="w-full min-h-[200px] bg-[url('/images/footer/Vector.png')] "></div>
      <div className="w-full">
        <div className="md:grid md:grid-cols-6 gap-4 bg-primary min-h-[400px]">
          <div className="flex justify-center items-start  col-span-2">
            <img
              className="block w-[130px] z-0 mt-8"
              src="./images/footer/logo.svg"
              alt="Your Company"
            />
          </div>
          <div className="flex items-center flex-col mt-20 md:items-start">
            <div>
              <Link
                href={"/"}
                className="text-white hover:text-secondary  text-lg mt-5"
              >
                Home
              </Link>
            </div>
            <div className="mt-2">
              <Link
                href={"/projects"}
                className="text-white hover:text-secondary  text-lg mt-10"
              >
                Projects
              </Link>
            </div>
            <div className="mt-2">
              <Link
                href={"/contact-us"}
                className="text-white hover:text-secondary  text-lg mt-10"
              >
                Contact us
              </Link>
            </div>
          </div>
          <div className="flex items-center flex-col mt-20 md:items-start">
            <div>
              <Link
                href={"#"}
                className="text-white hover:text-secondary  text-lg mt-5"
              >
                Privacy policy
              </Link>
            </div>
            <div className="mt-2">
              <Link
                href={"#"}
                className="text-white hover:text-secondary  text-lg mt-10"
              >
                Conditions
              </Link>
            </div>
            <div className="mt-2">
              <Link
                href={"#"}
                className="text-white hover:text-secondary  text-lg mt-10"
              >
                Company
              </Link>
            </div>
            <div className="mt-2">
              <Link
                href={"#"}
                className="text-white hover:text-secondary  text-lg mt-10"
              >
                FAQ
              </Link>
            </div>
            <div className="mt-2">
              <Link
                href={"/"}
                className="text-white hover:text-secondary  text-lg mt-10"
              >
                Contact us
              </Link>
            </div>
          </div>
          <div className="flex items-center flex-col mt-20 md:col-span-2 md:items-start">
            <div className="flex">
              <div className="rounded-full border-solid border-2 border-secondary p-2 ">
                <PhoneIcon className="text-white w-[15px] h-[15px]" />
              </div>
              <div className="text-white mt-2 ml-5">+201146466964</div>
            </div>
            <div className="flex mt-4">
              <div className="rounded-full border-solid border-2 border-secondary p-2 ">
                <AtSymbolIcon className="text-white w-[15px] h-[15px]" />
              </div>
              <div className="text-white mt-2 ml-5">
                webmaster@selective.capital
              </div>
            </div>
            <div className="flex mt-10">
              <div className="flex h-[40px] w-[300px] rounded-full border-2 border-solid border-secondary overflow-hidden">
                <input className="bg-primary w-[60%] text-white ml-2" />
                <button className="bg-secondary w-[40%] rounded-full">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
