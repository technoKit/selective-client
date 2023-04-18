const post = {
  id: 1,
  title: "Giza flat",
  href: "#",
  location: "Giza",
  imageUrl:
    "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
  shares: 300,
  sharePrice: 100,
  date: "Mar 16, 2020",
  datetime: "2020-03-16",
  category: { title: "Marketing", href: "#" },
  author: {
    name: "Michael Foster",
    role: "Co-Founder / CTO",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
};

function HouseCard() {
  return (
    <article
      key={post.id}
      className="bg-white flex flex-col items-start justify-between rounded-[50px] w-96 h-auto shadow-md shadow-beige-normal"
    >
      <div className="relative w-full">
        <img
          src={post.imageUrl}
          alt=""
          className="aspect-[16/9] w-full rounded-t-[50px] bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
        />
      </div>
      <div className="w-full py-7 px-9">
        <div className="group relative">
          <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href={post.href}>
              {/* <span className="absolute inset-0" /> */}
              {post.title}
            </a>
          </h3>
          <h3 className="mt-1 line-clamp-3 text-sm leading-6 text-gray-600">
            {post.location}
          </h3>
        </div>

        <div>
          <div className="mt-4 group relative flex flex-row justify-between align-center w-full">
            <h4 className="text-lg font-medium leading-6 text-gray-900">
              Total shares
            </h4>
            <h4 className="text-lg font-medium leading-6 text-gray-900">
              {post.shares}
            </h4>
          </div>
          <div class="relative h-2.5 mt-2 rounded-full bg-beige-normal">
            <div class="absolute top-0 left-0 h-full rounded-full bg-beige-dark w-[30%]"></div>
          </div>
        </div>
        <div className="mt-6 group relative flex flex-row justify-between align-center w-full">
          <div className="group">
            <h4 className="text-lg font-medium text-gray-900">Share price</h4>
            <h4 className="text-lg font-light text-gray-900">
              {post.sharePrice} $
            </h4>
          </div>
          <button className="bg-beige-dark px-[35px] py-[0px] h-12 rounded-[40px]">
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
          <time dateTime={post.datetime} className="text-gray-500">
            {post.date}
          </time>
          <a
            href={post.category.href}
            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
          >
            {post.category.title}
          </a>
        </div> */
}
