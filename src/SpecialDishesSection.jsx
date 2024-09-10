import React from "react";

const dishes = [
  {
    name: "Grilled Salmon",
    description:
      "A perfectly grilled salmon fillet served with a lemon butter sauce and roasted vegetables.",
    price: "$24.99",
    image: "/salmon.jpg",
  },
  {
    name: "Truffle Pasta",
    description:
      "Creamy truffle pasta topped with freshly shaved parmesan and black truffles.",
    price: "$18.99",
    image: "/pasta.jpg",
  },
  {
    name: "Classic Cheeseburger",
    description:
      "A juicy beef patty, cheddar cheese, lettuce, tomato, and our signature sauce on a toasted brioche bun.",
    price: "$15.99",
    image: "/burger.jpg",
  },
];

const SpecialDishesSection = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Favorites</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {dish.name}
                </h3>
                <p className="text-gray-600 mb-4">{dish.description}</p>
                <p className="text-yellow-500 text-lg font-semibold">
                  {dish.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialDishesSection;
