// const data = {
//   id: 1,
//   title: "Giza flat",
//   href: "#",
//   location: "Giza",
//   imageUrl:
//     "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
//   shares: 300,
//   sharesPurchased: 42,
//   sharePrice: 100,
// };

function HouseCard({ data }: { data: any }) {
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
          <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href={data.href}>
              {/* <span className="absolute inset-0" /> */}
              {data.title}
            </a>
          </h3>
          <h3 className="mt-1 line-clamp-3 text-md leading-6 text-gray-600 flex flex-row items-center">
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
            <h4 className="text-lg font-medium leading-6 text-gray-900">
              Total shares
            </h4>
            <h4 className="text-lg font-medium leading-6 text-gray-900">
              {data.shares}
            </h4>
          </div>
          <div className="flex flex-row justify-between items-center mt-1">
            <div className="relative h-2.5 mt-2 rounded-full bg-beige-normal w-[80%]">
              <div
                //SOLVE ISSUE of PROGRESS BAR
                className={`absolute top-0 left-0 h-full rounded-full bg-beige-dark`}
                style={{ width: purchasedPercentage }}
              ></div>
            </div>
            <h5 className="font-light">{purchasedPercentage}</h5>
          </div>
        </div>
        <div className="mt-6 flex flex-row justify-between items-center w-full">
          <div>
            <h4 className="text-lg font-medium text-gray-900">Share price</h4>
            <h4 className="text-lg font-light text-gray-900">
              {data.sharePrice} $
            </h4>
          </div>
          <button className="bg-beige-dark px-[32px] py-[0px] h-11 rounded-[40px]">
            Learn More
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
