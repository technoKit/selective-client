const items = [
  {
    id: 1,
    title: "Building your real estate wealth is an art form.",
    text: "Done by the most experienced experts in the field of real estate.",
    imageUrl: "./images/welcome/image 3.svg",
  },
  {
    id: 2,
    title: "We're picky about the opportunities",
    text: "We bring to our intelligent investors, ensuring that every investment is a masterpiece..",
    imageUrl: "./images/welcome/image 4.svg",
  },
  {
    id: 3,
    title: "You can make selective investments",
    text: "With our platform, and paint a beautiful future for yourself in the world of real estate.",
    imageUrl: "./images/welcome/image 5.svg",
  },
];

export default function Example() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 my-10">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
          Who are we?
        </h2>
        <p className="mt-2 text-2xl leading-8 text-gray-600">
          Welcome to Selective Capital Where
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 relative">
        {items.map((item) => (
          <article
            key={item.id}
            className="flex flex-col items-start justify-between relative z-10"
          >
            <div className="relative w-full z-10">
              <div className="z-10 bg-white w-full rounded-3xl aspect-[5/4] object-cover sm:aspect-[5/1]  lg:aspect-[5/3] shadow-lg overflow-hidden">
                <div className=" w-full h-full flex">
                  <div className="h-full w-28  ">
                    <img
                      className="block h-11 w-auto ml-auto mt-8"
                      src={item.imageUrl}
                      alt="Your Company"
                    />
                  </div>
                  <div className="h-full w-full px-3">
                    <div className="text-lg mt-7 font-bold mb-4">
                      {item.title}
                    </div>
                    <div>{item.text}</div>
                  </div>
                  <div className="h-full w-24 relative">
                    <img
                      className="block h-20 w-auto mt-auto ml-auto absolute bottom-0 right-0"
                      src="./images/welcome/Group 5.svg"
                      alt="Your Company"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
          </article>
        ))}

        <div className="absolute top-[-70px] left-[200px] z-0">
          <img
            className="block w-[100px] z-0"
            src="./images/welcome/Group 6.svg"
            alt="Your Company"
          />
        </div>
        <div className="absolute top-[-100px] right-[-30px] z-0">
          <img
            className="block w-[100px] z-0"
            src="./images/welcome/Group 4.svg"
            alt="Your Company"
          />
        </div>
      </div>
    </div>
  );
}
