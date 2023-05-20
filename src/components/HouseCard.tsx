import Link from "next/link";
import { Project } from "@/types";
import { useTranslation } from "next-i18next";

function HouseCard({ data }: { data: Project }) {
  let project = data.attributes;
  const { t } = useTranslation();

  const purchasedPercentage =
    ((project.sold_shares / project.shares) * 100 < 100
      ? Math.round((project.sold_shares / project.shares) * 100)
      : 100) + "%";
  const rounded = "30px";

  return (
    <article
      key={data.id}
      className="bg-white flex flex-col items-start justify-between w-full h-auto  ring-gray-100  shadow-3xl"
      style={{ borderRadius: rounded }}
    >
      <div className="relative w-full">
        <img
          src={
            project?.main_image?.data.attributes.url ||
            "/images/projects/house.jpg"
          }
          alt="house image"
          className={`aspect-[16/9] w-full rounded-t-[30px] bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[10/6]`}
          style={{
            borderTopLeftRadius: rounded,
            borderTopRightRadius: rounded,
          }}
        />
      </div>
      <div className="w-full py-7 px-9">
        <div className="group relative">
          <h3 className="text-lg font-semibold leading-6 text-black">
            {project.title}
          </h3>
          <h3 className="mt-1 line-clamp-3 text-md leading-6 text-primary flex flex-row items-center">
            <img
              src="/images/projects/location.svg"
              alt="location icon"
              className="w-3.5 ml-1 mr-2"
            />
            {project.location}
          </h3>
        </div>
        <div className="w-full  mt-8 flex ">
          <div className="w-[25%]">
            <div className="text-sm h-12 border-solid border-2 border-slate-400 rounded-xl mt-1 shadow-lg w-[80%] flex justify-center items-center text-slate-500 font-bold">
              {project?.gross_yield ?? "-"}
            </div>
            <div className="text-start text-sm text-slate-500 mt-1 w-[80%]">
              {t("project.gross_yield")}
            </div>
          </div>
          <div className="w-[25%]">
            <div className="text-sm h-12 border-solid border-2 border-slate-400 rounded-xl mt-1 shadow-lg w-[80%] flex justify-center items-center text-slate-500 font-bold">
              {project?.expected_return ?? "-"}
            </div>
            <div className="w-[80%] text-start text-sm text-slate-500 mt-1">
              {t("project.expected_return")}
            </div>
          </div>
          <div className="w-[25%]">
            <div className="text-sm h-12 border-solid border-2 border-slate-400 rounded-xl mt-1 shadow-lg w-[80%] flex justify-center items-center text-slate-500 font-bold">
              {project?.dividend_yield ?? "-"}
            </div>
            <div className="text-start text-sm text-slate-500 mt-1 w-[80%]">
              {t("project.dividend_yield")}
            </div>
          </div>
          <div className="w-[25%]">
            <div className="text-sm h-12 border-solid border-2 border-slate-400 rounded-xl mt-1 shadow-lg w-[80%] flex justify-center items-center text-slate-500 font-bold">
              {project?.rental_income ?? "-"}
            </div>
            <div className="w-[80%] text-start text-sm text-slate-500 mt-1">
              {t("project.rental_income")}
            </div>
          </div>
        </div>

        <div>
          <div className="mt-4 group relative flex flex-row justify-between items-center w-full">
            <h4 className="text-lg font-medium leading-6 text-black">
              {t("project.total")}
            </h4>
            <h4 className="text-lg font-medium leading-6 text-primary">
              {project.shares}
            </h4>
          </div>
          <div className="flex flex-row justify-between items-center mt-1">
            <div className="relative h-2.5 mt-2 rounded-full bg-primary-light w-[80%]">
              <div
                //SOLVE ISSUE of PROGRESS BAR
                className={`absolute top-0 left-0 h-full rounded-full bg-primary`}
                style={{ width: purchasedPercentage }}
              ></div>
            </div>
            <h5 className="font-light text-black">{purchasedPercentage}</h5>
          </div>
        </div>
        <div className="mt-6 flex flex-row justify-between items-center w-full">
          <div>
            <h4 className="text-lg font-medium text-black">
              {t("project.price")}
            </h4>
            <h4 className="text-lg font-light text-primary">
              {project.share_price} $
            </h4>
          </div>
          <Link href={`projects/${data.id}`}>
            <button className="bg-primary border-2 px-[20px] py-[0px] h-11 rounded-[40px] hover:bg-primary-light hover:border-primary-dark transition-colors duration-500 text-white font-bold shadow-xl">
              {t("project.cta")}
            </button>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default HouseCard;
