import React from "react";

const About = () => {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="container mx-auto">
        {/* About Us Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
          <p className="text-gray-600 mt-4 text-lg">
            Discover our story and what drives us to create the best dining
            experience.
          </p>
        </div>

        {/* Mission Section */}
        <div className="flex flex-col md:flex-row items-center mb-24">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="/restaurant.jpg"
              alt="Restaurant Interior"
              className="rounded-lg shadow-lg"
              loading="lazy"
              decoding="asynchronous"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600">
              At <strong>The Savory Spoon</strong>, our mission is simple: to
              provide a dining experience that celebrates fresh, local
              ingredients while delivering exceptional flavors in a warm and
              welcoming atmosphere. We strive to create dishes that not only
              taste delicious but also bring people together for memorable
              moments.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-24">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Meet the Team
          </h2>
          <p className="text-gray-600 mb-8">
            Our talented team of chefs and staff are passionate about creating
            culinary experiences that delight your senses.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img
                src="/chef-emma-davis.jpg"
                alt="Chef 1"
                className="w-32 h-32 rounded-full mx-auto mb-4"
                loading="lazy"
                decoding="asynchronous"
              />
              <h3 className="text-xl font-bold text-gray-800">
                Chef Emma Davis
              </h3>
              <p className="text-gray-600">Head Chef</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img
                src="/chef-michael-lee.jpg"
                alt="Chef 2"
                className="w-32 h-32 rounded-full mx-auto mb-4"
                loading="lazy"
                decoding="asynchronous"
              />
              <h3 className="text-xl font-bold text-gray-800">
                Chef Michael Lee
              </h3>
              <p className="text-gray-600">Sous Chef</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img
                src="sarah-thompson.jpg"
                alt="Manager"
                className="w-32 h-32 rounded-full mx-auto mb-4"
                loading="lazy"
                decoding="asynchronous"
              />
              <h3 className="text-xl font-bold text-gray-800">
                Sarah Thompson
              </h3>
              <p className="text-gray-600">Restaurant Manager</p>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Our Philosophy
          </h2>
          <p className="text-gray-600 text-lg mx-auto max-w-3xl">
            We believe that great food starts with great ingredients. That's why
            we work with local farmers and suppliers to bring you the freshest,
            highest-quality ingredients. Every dish is crafted with care and
            passion, ensuring that every bite is a celebration of flavor and
            creativity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
