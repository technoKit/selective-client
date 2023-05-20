import Link from "next/link";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { AtSymbolIcon } from "@heroicons/react/24/outline";
import Form from "./components/Form";
import { useTranslation } from "next-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="w-full min-h-[200px] bg-[url('/images/footer/Vector.png')] bg-slate-100"></div>
      <div className="w-full">
        <div className="md:grid md:grid-cols-6 gap-4 bg-primary min-h-[400px]">
          <div className="flex justify-center items-start  col-span-2">
            <img
              className="block w-[130px] z-0 mt-8"
              src="/images/footer/logo.svg"
              alt="Your Company"
            />
          </div>
          <div className="flex items-center flex-col mt-20 md:items-start">
            <div>
              <Link
                href={"/"}
                className="text-white hover:text-secondary  text-lg mt-5"
              >
                {t("footer.home")}
              </Link>
            </div>
            <div className="mt-2">
              <Link
                href={"/projects"}
                className="text-white hover:text-secondary  text-lg mt-10"
              >
                {t("footer.projects")}
              </Link>
            </div>
            <div className="mt-2">
              <Link
                href={"/contact-us"}
                className="text-white hover:text-secondary  text-lg mt-10"
              >
                {t("footer.contact")}
              </Link>
            </div>
          </div>
          <div className="flex items-center flex-col mt-20 md:items-start">
            <div>
              <Link
                href={"#"}
                className="text-white hover:text-secondary  text-lg mt-5"
              >
                {t("footer.privacy")}
              </Link>
            </div>
            <div className="mt-2">
              <Link
                href={"#"}
                className="text-white hover:text-secondary  text-lg mt-10"
              >
                {t("footer.conditions")}
              </Link>
            </div>
            <div className="mt-2">
              <Link
                href={"#"}
                className="text-white hover:text-secondary  text-lg mt-10"
              >
                {t("footer.company")}
              </Link>
            </div>
            <div className="mt-2">
              <Link
                href={"#"}
                className="text-white hover:text-secondary  text-lg mt-10"
              >
                {t("footer.faq")}
              </Link>
            </div>
            <div className="mt-2">
              <Link
                href={"/"}
                className="text-white hover:text-secondary  text-lg mt-10"
              >
                {t("footer.contact")}
              </Link>
            </div>
          </div>
          <div className="flex items-center flex-col mt-20 md:col-span-2 md:items-start">
            <div className="flex">
              <div className="rounded-full border-solid border-2 border-secondary p-2 ">
                <PhoneIcon className="text-white w-[15px] h-[15px]" />
              </div>
              <div className="text-white mt-2 ml-5 rtl:mr-5">+201146466964</div>
            </div>
            <div className="flex mt-4">
              <div className="rounded-full border-solid border-2 border-secondary p-2 ">
                <AtSymbolIcon className="text-white w-[15px] h-[15px]" />
              </div>
              <div className="text-white mt-2 ml-5 rtl:mr-5">
                webmaster@selective.capital
              </div>
            </div>
            <div className="flex mt-10 w-full justify-center pb-20 md:justify-start">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
