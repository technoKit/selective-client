const cards = [
  {
    id: 1,
    iconURL: "./images/contact_us/location.svg",
    firstContent: "5075 Main Road, D- Block,",
    secondContent: "2nd Floor, New York",
    backgroundColor: "#E1E4E8",
  },
  {
    id: 2,
    iconURL: "./images/contact_us/phone.svg",
    firstContent: "+012 (345) 689 37",
    backgroundColor: "#E1E4E8",
  },
  {
    id: 3,
    iconURL: "./images/contact_us/mail.svg",
    firstContent: "supportinfo@gmail.com",
    secondContent: "www.funden.com",
    backgroundColor: "#E1E4E8",
  },
];

export default function InformationSection() {
  return (
    <div className="bg-secondary-light py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative flex flex-col justify-center items-center">
        <div className="text-center flex flex-col items-center">
          {/* <div className="w-full flex justify-end  mt-[-65px]">
            <img
              src="./images/competitive_advantage/bird.svg"
              alt="location icon"
              className=" w-14 mr-[-6px] mb-[-25px]"
            />
          </div> */}
          <img
            src="./images/competitive_advantage/templeGate.svg"
            alt="location icon"
            className=" absolute w-14 left-0 top-14"
          />
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary sm:text-4xl ">
            Contact Us
          </h2>
          <p className="mt-4 text-2xl leading-8 text-black">
            Ready to get more information
          </p>
        </div>
        <div className="mx-auto mt-14 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {cards.map((card) => (
            <InformationCard
              data={card}
              key={card.id}
              topMargin={card.id % 2 == 0 ? "30px" : ""}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function InformationCard({
  data,
  topMargin,
}: {
  data: any;
  topMargin: string;
}) {
  const rounded = "30px";

  return (
    <article
      key={data.id}
      className="bg-white flex flex-col items-center justify-center w-full h-fit min-h-[100px] shadow-md shadow-gray-100 relative"
      style={{ borderRadius: rounded, marginTop: topMargin }}
    >
      <div
        className="absolute top-[-23px] p-3 rounded-[50%]"
        style={{ backgroundColor: data.backgroundColor }}
      >
        <img src={data.iconURL} alt="icon" className="w-5 h-5" />
      </div>
      <div className="w-full mt-10 px-10 pb-5 line-clamp-3 text-md flex flex-col items-center justify-center text-primary text-center">
        <p className="">{data.firstContent}</p>
        <p className="">{data?.secondContent}</p>
      </div>
    </article>
  );
}
