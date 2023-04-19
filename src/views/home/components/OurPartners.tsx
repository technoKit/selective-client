const cards = [
  {
    id: 1,
    imageURL: "./images/our_partners/getGround.svg",
  },
  {
    id: 2,
    imageURL: "./images/our_partners/infinity.svg",
  },
  {
    id: 3,
    imageURL: "./images/our_partners/atai.svg",
  },
];

export default function OurPartnersSection() {
  return (
    <div className="bg-beige-light py-24 sm:py-32">
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
            Our Partners
          </h2>
          <p className="mt-4 text-2xl  leading-8 text-black">
            Trusted Partners
          </p>
        </div>
        <div className="mx-auto mt-28 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {cards.map((card) => (
            <AdvantageCard data={card} key={card.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

function AdvantageCard({ data }: { data: any }) {
  return (
    <article
      key={data.id}
      className="bg-white w-full shadow-md shadow-gray-100 rounded-[30px]"
    >
      <div className="py-6 px-3 rounded-[40px]">
        <img src={data.imageURL} alt="icon" className="w-20" />
      </div>
    </article>
  );
}
