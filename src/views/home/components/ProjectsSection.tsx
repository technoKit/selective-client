import HouseCard from "../../../components/HouseCard";

//https://source.unsplash.com/featured/?house
const Cards = [
  {
    id: 1,
    title: "Giza flat",
    href: "#",
    location: "Giza",
    imageUrl:
      "https://images.unsplash.com/photo-1633683914992-ded93eb8b18a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aG91c2V8fHx8fHwxNjgxOTA4NzI5&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    shares: 250,
    sharesPurchased: 187,
    sharePrice: 200,
  },
  {
    id: 2,
    title: "Giza flat",
    href: "#",
    location: "Giza",
    imageUrl:
      "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aG91c2V8fHx8fHwxNjgxOTA4NzY2&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    shares: 300,
    sharesPurchased: 42,
    sharePrice: 150,
  },
  {
    id: 3,
    title: "Giza flat",
    href: "#",
    location: "Giza",
    imageUrl:
      "https://images.unsplash.com/photo-1518733057094-95b53143d2a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aG91c2V8fHx8fHwxNjgxOTA4ODUz&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    shares: 450,
    sharesPurchased: 175,
    sharePrice: 100,
  },
  // More posts...
];

export default function Example() {
  return (
    <div className="bg-beige-light py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Popular Projects
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Explore our projects
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {Cards.map((card) => (
            <HouseCard data={card} key={card.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
