import React from "react";

const menuData = {
  appetizers: [
    {
      name: "Bruschetta",
      description:
        "Grilled bread topped with fresh tomatoes, basil, garlic, and olive oil.",
      price: "$8.99",
      image: "/bruschetta.jpg",
    },
    {
      name: "Stuffed Mushrooms",
      description:
        "Mushroom caps stuffed with a savory blend of cheeses and herbs.",
      price: "$10.99",
      image: "/stuffed-mushrooms.jpg",
    },
    {
      name: "Fried Calamari",
      description:
        "Crispy fried calamari served with marinara sauce and lemon wedges.",
      price: "$12.99",
      image: "/calamari.jpg",
    },
  ],
  mains: [
    {
      name: "Grilled Ribeye Steak",
      description:
        "12 oz. ribeye, cooked to perfection with garlic butter and rosemary.",
      price: "$28.99",
      image: "/ribeye.jpg",
    },
    {
      name: "Lobster Ravioli",
      description:
        "Handmade pasta filled with lobster, served in a creamy tomato sauce.",
      price: "$22.99",
      image: "/lobster-ravioli.jpg",
    },
    {
      name: "Pan-Seared Sea Bass",
      description:
        "A perfectly seared sea bass fillet served with a lemon caper sauce.",
      price: "$26.99",
      image: "/sea-bass.jpg",
    },
  ],
  desserts: [
    {
      name: "Chocolate Lava Cake",
      description:
        "Rich chocolate cake with a molten chocolate center, served with vanilla ice cream.",
      price: "$9.99",
      image: "/chocolate-lava-cake.jpg",
    },
    {
      name: "Tiramisu",
      description:
        "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.",
      price: "$7.99",
      image: "/tiramisu.jpg",
    },
    {
      name: "Cheesecake",
      description:
        "Creamy New York-style cheesecake with a graham cracker crust and berry compote.",
      price: "$8.99",
      image: "/cheesecake.jpg",
    },
  ],
};

const MenuSection = ({ title, items }) => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {item.name}
              </h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <p className="text-yellow-500 text-lg font-semibold">
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Menu = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Our Menu
        </h1>
        <MenuSection title="Appetizers" items={menuData.appetizers} />
        <MenuSection title="Main Courses" items={menuData.mains} />
        <MenuSection title="Desserts" items={menuData.desserts} />
      </div>
    </section>
  );
};

export default Menu;
