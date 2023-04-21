import Link from "next/link";

interface cardData {
  id: number;
  title: string;
  href: string;
  location: string;
  imageUrl: string;
  shares: number;
  sharesPurchased: number;
  sharePrice: number;
}

function HouseCard({ data }: { data: cardData }) {
  // console.log(Math.round((data.sharesPurchased / data.shares) * 100));
  const purchasedPercentage =
    ((data.sharesPurchased / data.shares) * 100 < 100
      ? Math.round((data.sharesPurchased / data.shares) * 100)
      : 100) + "%";
  // const purchasedPercentage = `${data.sharesPurchased}%`;
  console.log(purchasedPercentage);
  const rounded = "30px";

  return (
    <article
      key={data.id}
      className="bg-white flex flex-col items-start justify-between w-full h-auto ring-2 ring-gray-100 shadow-md shadow-gray-200"
      style={{ borderRadius: rounded }}
    >
      <div className="relative w-full">
        <img
          src={data.imageUrl}
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
            {data.title}
          </h3>
          <h3 className="mt-1 line-clamp-3 text-md leading-6 text-primary flex flex-row items-center">
            <img
              src="./images/projects/location.svg"
              alt="location icon"
              className="w-3.5 ml-1 mr-2"
            />
            {data.location}
          </h3>
        </div>

        <div>
          <div className="mt-4 group relative flex flex-row justify-between items-center w-full">
            <h4 className="text-lg font-medium leading-6 text-black">
              Total shares
            </h4>
            <h4 className="text-lg font-medium leading-6 text-primary">
              {data.shares}
            </h4>
          </div>
          <div className="flex flex-row justify-between items-center mt-1">
            <div className="relative h-2.5 mt-2 rounded-full bg-secondary-light w-[80%]">
              <div
                //SOLVE ISSUE of PROGRESS BAR
                className={`absolute top-0 left-0 h-full rounded-full bg-secondary`}
                style={{ width: purchasedPercentage }}
              ></div>
            </div>
            <h5 className="font-light text-black">{purchasedPercentage}</h5>
          </div>
        </div>
        <div className="mt-6 flex flex-row justify-between items-center w-full">
          <div>
            <h4 className="text-lg font-medium text-black">Share price</h4>
            <h4 className="text-lg font-light text-primary">
              {data.sharePrice} $
            </h4>
          </div>
          <button className="bg-secondary border-2 text-primary px-[32px] py-[0px] h-11 rounded-[40px] hover:bg-secondary-light hover:border-secondary-dark transition-colors duration-500">
            <Link href={data.href}>Learn More</Link>
          </button>
        </div>
      </div>
    </article>
  );
}

export default HouseCard;

{
  /* <div className="absolute inset-0 rounded-t-[50px] ring-1 ring-inset ring-gray-900/10" /> */
}

{
  /* <div className="mt-8 flex items-center gap-x-4 text-xs">
          <time dateTime={data.datetime} className="text-gray-500">
            {data.date}
          </time>
          <a
            href={data.category.href}
            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
          >
            {data.category.title}
          </a>
        </div> */
}
