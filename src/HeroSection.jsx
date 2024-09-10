import React from "react";

const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('/restaurant.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>{" "}
      {/* Dark overlay */}
      <div className="relative flex flex-col items-center h-full text-white text-center px-4 pt-24">
        <img
          className="rounded-lg w-40 h-40 mb-5"
          src="/logo.jpg"
          alt="The Savory Spoon"
        />
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Welcome to The Savory Spoon
        </h1>
        <p className="text-xl md:text-2xl mb-6">
          Indulge in Flavors, Celebrate the Experience
        </p>
        <a
          href="/menu"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
        >
          View Our Menu
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
