import React, { useState } from "react";

const Reservations = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: 1,
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here, such as sending data to an API
    console.log("Reservation Details:", formData);
    alert("Reservation submitted successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      guests: 1,
      date: "",
      time: "",
      message: "",
    });
  };

  return (
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="container mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Reservations</h1>
          <p className="text-gray-600 mt-4 text-lg">
            Reserve your table for peace of mind.
          </p>
        </div>

        {/* Reservation Form */}
        <div className="bg-stone-700 text-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6">Make a Reservation</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-200"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  placeholder="Your Name"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-200"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  placeholder="Your Email"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-200"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  placeholder="Your Phone Number"
                  required
                />
              </div>

              {/* Guests */}
              <div>
                <label
                  htmlFor="guests"
                  className="block text-sm font-medium text-gray-200"
                >
                  Number of Guests
                </label>
                <input
                  type="number"
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  min="1"
                  max="20"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  required
                />
              </div>
            </div>

            {/* Date */}
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-200"
              >
                Reservation Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="mt-1 block md:w-96 border border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>

            {/* Time */}
            <div>
              <label
                htmlFor="time"
                className="block text-sm font-medium text-gray-200"
              >
                Reservation Time
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="mt-1 block md:w-96 border border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>

            {/* Additional Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-200"
              >
                Special Requests
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 mb-4 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                rows="5"
                placeholder="Add any special requests (optional)"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-60 bg-yellow-500 text-white font-bold py-2 px-4 rounded-md shadow-md hover:bg-yellow-600 transition"
            >
              Submit Reservation
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Reservations;
