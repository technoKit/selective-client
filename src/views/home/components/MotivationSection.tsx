import Link from "next/link";
import React from "react";
import { useTranslation } from "next-i18next";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <div className="lg:mt-[-100px]">
      <div className="relative isolate pt-5">
        <div className="mx-auto max-w-7xl px-6 py-4 sm:pt-32 sm:pb-20 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:pt-40">
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow  flex justify-center relative">
            <img
              className="block w-[500px] z-10"
              src="/images/motivation/Group 35.svg"
              alt="Your Company"
            />
          </div>
          <div className="ml-20 max-w-2xl lg:flex-auto ">
            <div className="relative">
              <h1 className="relative z-10 mt-10 max-w-lg text-4xl font-bold tracking-tight text-primary sm:text-6xl">
                {t("motivation.title")}
              </h1>
            </div>
            <h2 className="mt-5 max-w-lg text-xl font-bold tracking-tight text-primary sm:text-2xl relative">
              {t("motivation.subtitle")}
            </h2>
            <h2 className="mt-1  text-lg  tracking-tight text-primary  relative">
              {t("motivation.subtitle2")}
            </h2>
            <div className="flex mt-6">
              <div>
                <img
                  className="block w-[20px] min-w-[20px] z-10"
                  src="/images/motivation/Group 6.svg"
                  alt="Your Company"
                />
              </div>
              <div className="text-lg leading-8 text-gray-600  ltr:ml-3 rtl:mr-3">
                {t("motivation.point1")}
              </div>
            </div>

            <div className="flex mt-4">
              <div>
                <img
                  className="block w-[20px] min-w-[20px] z-10"
                  src="/images/motivation/Group 6.svg"
                  alt="Your Company"
                />
              </div>
              <div className="text-lg leading-8 text-gray-600  ltr:ml-3 rtl:mr-3">
                {t("motivation.point2")}
              </div>
            </div>

            <div className="mt-10 flex items-center gap-x-6 justify-end">
              <div className="relative ltr:right-[-55px] rtl:left-[-40px]">
                <img
                  className="block w-[60px] z-10"
                  src="/images/motivation/image 14.svg"
                  alt="Your Company"
                />
              </div>
              <div className="h-18 p-1 ltr:w-52 rtl:w-60 shadow-xl rounded-full flex flex-col items-center border-2 border-slate-200 text-sm">
                <div> {t("motivation.name")}</div>
                <div> {t("motivation.position")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
