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
    // overflow-x-hidden
    <div className="bg-beige-light py-20 sm:pb-24 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative flex flex-row justify-between items-center">
        <div className="flex flex-col items-start justify-center">
          {/* <div className="w-full flex justify-end  mt-[-65px]">
            <img
              src="./images/our_partners/waves.svg"
              alt="location icon"
              className=" w-14 mr-[-6px] mb-[-25px]"
            />
          </div> */}
          <img
            src="./images/our_partners/pyramids.svg"
            alt="location icon"
            className="w-16 mb-[-27px] mt-[-30px] ml-[-33px]"
          />
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary sm:text-4xl ">
            Our Partners
          </h2>
          <p className="mt-4 text-2xl  leading-8 text-black">
            Trusted Partners
          </p>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 z-10">
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
          src="./images/our_partners/waves.svg"
          alt="location icon"
          className="w-24 absolute z-0 right-[-45px] top-[-40px]"
        />
        {/* mt-[-110px] ml-[-200px] mr-[-70px] z-0 */}
      </div>
    </div>
  );
}
