const cards = [
  {
    id: 1,
    iconURL: "./images/competitive_advantage/hand.svg",
    content:
      "Our selective approach means we offer exclusive access to real estate investment opportunities that provide unmatched potential for building long-term wealth.",
    backgroundColor: "#E1E4E8",
  },
  {
    id: 2,
    iconURL: "./images/competitive_advantage/checkMark.svg",
    content:
      "Our platform utilizes cutting-edge security measures and efficient investment processes, ensuring that investors can confidently invest in real estate opportunities from anywhere in the world with ease and security.",
    backgroundColor: "#FFECC7",
  },
  {
    id: 3,
    iconURL: "./images/competitive_advantage/chart.svg",
    content:
      "Our platform operates with full transparency and compliance, ensuring that investors can confidently invest in international real estate opportunities without worrying about legal or regulatory hurdles.",
    backgroundColor: "#E1E4E8",
  },
];

export default function CompetitiveAdvantageSection() {
  return (
    <div className="bg-secondary-light py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative flex flex-col justify-center items-center">
        <div className="text-center flex flex-col items-center">
          <div className="w-full flex justify-end  mt-[-65px]">
            <img
              src="./images/competitive_advantage/bird.svg"
              alt="location icon"
              className=" w-14 mr-[-6px] mb-[-25px]"
            />
          </div>
          <img
            src="./images/competitive_advantage/templeGate.svg"
            alt="location icon"
            className=" absolute w-14 left-0 top-14"
          />
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary sm:text-4xl ">
            Competitive Advantage
          </h2>
          <p className="mt-4 text-2xl  leading-8 text-black">
            Why invest with us!
          </p>
          <p className="mt-0 text-2xl  leading-8 text-black">
            Reasons to trust Selective Capital
          </p>
        </div>
        <div className="mx-auto mt-28 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {cards.map((card) => (
            <AdvantageCard
              data={card}
              key={card.id}
              topMargin={card.id % 2 == 0 ? "50px" : ""}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function AdvantageCard({ data, topMargin }: { data: any; topMargin: string }) {
  const rounded = "30px";

  return (
    <article
      key={data.id}
      className="bg-white flex flex-col items-center justify-top w-full h-fit min-h-[285px] shadow-md shadow-gray-100"
      style={{ borderRadius: rounded, marginTop: topMargin }}
    >
      <div
        className="mt-[-62px] py-6 px-3 rounded-[40px]"
        style={{ backgroundColor: data.backgroundColor }}
      >
        <img
          src={data.iconURL}
          alt="icon"
          className="w-20"
          style={{
            borderTopLeftRadius: rounded,
            borderTopRightRadius: rounded,
          }}
        />
      </div>
      <div className="w-full mt-4 px-9 pb-7">
        <p className="mt-1 line-clamp-3 text-md text-primary flex flex-col items-start  text-primary text-center">
          {data.content}
        </p>
      </div>
    </article>
  );
}
