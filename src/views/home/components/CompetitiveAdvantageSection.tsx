const cards = [
  {
    id: 1,
    iconURL:
      "https://images.unsplash.com/photo-1633683914992-ded93eb8b18a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aG91c2V8fHx8fHwxNjgxOTA4NzI5&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    content:
      "Our selective approach means we offer exclusive access to real estate investment opportunities that provide unmatched potential for building long-term wealth.",
  },
];

export default function CompetitiveAdvantageSection() {
  return (
    <div className="bg-beige-light py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative flex flex-col justify-center items-center">
        <div className="text-center flex flex-col items-center">
          <div className="w-full flex justify-end  mt-[-65px]">
            <img
              src="./images/competitve_advantage/bird.svg"
              alt="location icon"
              className=" w-14 mr-[-6px] mb-[-25px]"
            />
          </div>
          <img
            src="./images/competitve_advantage/templeGate.svg"
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
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {cards.map((card) => (
            <AdvantageCard data={card} key={card.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

function AdvantageCard({ data }: { data: any }) {
  const rounded = "30px";

  return (
    <article
      key={data.id}
      className="bg-white flex flex-col items-start justify-between w-full h-auto ring-2 ring-gray-100 shadow-md shadow-gray-200"
      style={{ borderRadius: rounded }}
    >
      <div className="relative w-full">
        <img
          src={data.iconURL}
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
          <p className="mt-1 line-clamp-3 text-md leading-6 text-primary flex flex-row items-center">
            {data.content}
          </p>
        </div>
      </div>
    </article>
  );
}
