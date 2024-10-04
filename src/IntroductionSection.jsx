import React from "react";
import { Link } from "react-router-dom";

const IntroductionSection = () => {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          {/* Image Section */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="/restaurant-table.jpg"
              alt="Restaurant Interior"
              className="rounded-lg shadow-lg"
              loading="lazy"
              decoding="asynchronous"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              At <strong>The Savory Spoon</strong>, we believe that every meal
              should be an unforgettable experience. From locally sourced
              ingredients to unique culinary techniques, our passion is creating
              dishes that excite your senses and bring people together.
            </p>
            <p className="text-gray-600 mb-4">
              Whether you're here for a special occasion or a casual meal, our
              commitment to excellence shines through in every bite. Come and
              savor the finest flavors in an ambiance designed to make you feel
              at home.
            </p>

            <Link
              to="/reservations"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Make a Reservation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
