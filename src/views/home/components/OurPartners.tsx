import { useTranslation } from "next-i18next";

const cards = [
  {
    id: 1,
    imageURL: "/images/our_partners/getGround.svg",
  },
  {
    id: 2,
    imageURL: "/images/our_partners/infinity.svg",
  },
  {
    id: 3,
    imageURL: "/images/our_partners/atai.svg",
  },
];

export default function OurPartnersSection() {
  const { t } = useTranslation();

  return (
    <div className=" py-20 sm:pb-24 overflow-x-hidden	">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative flex flex-col justify-between items-center md:flex-row">
        <div className="flex flex-col md:items-start items-center justify-center">
          <img
            src="/images/our_partners/pyramids.svg"
            alt="location icon"
            className="w-16 mb-[-27px] mt-[-30px] ml-[-33px]"
          />
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary sm:text-4xl z-10">
            {t("partners.title")}
          </h2>
          <p className="mt-4 text-2xl  leading-8 text-black z-10">
            {t("partners.subtitle")}
          </p>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 md:gap-y-10 gap-y-10 md:mx-0 md:max-w-none md:grid-cols-3 sm:flex sm:justify-center sm:items-center sm:flex-wrap z-10 mt-10 md:mt-0">
          {cards.map((card) => (
            <div
              key={card.id}
              className="py-6 px-5 rounded-[40px] bg-white shadow-md shadow-gray-100 flex items-center justify-center w-52 "
            >
              <img src={card.imageURL} alt="icon" className="h-24" />
            </div>
          ))}
        </div>
        <img
          src="/images/our_partners/waves.svg"
          alt="location icon"
          className="w-24 absolute z-0 right-[-45px] top-[250px] md:top-[-40px]"
        />
      </div>
    </div>
  );
}
