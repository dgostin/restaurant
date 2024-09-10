import React from "react";

const Contact = () => {
  return (
    <section className="bg-gray-50 py-12 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto max-w-[1200px]">
        {/* Contact Us Title */}
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
          <p className="text-gray-600 mt-4 text-lg">
            We’d love to hear from you! Fill out the form below or reach us
            through the contact details provided.
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="flex flex-col md:flex-row md:space-x-40">
          <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg mb-20 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  rows="5"
                  placeholder="Write your message here..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 text-white font-bold py-2 px-4 rounded-md shadow-md hover:bg-yellow-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="md:w-1/2 text-gray-800">
            <h2 className="text-3xl font-bold mb-6 bg-slate-200 p-4">
              Contact Information
            </h2>
            <div className="space-y-6">
              <div className="pl-4">
                <h3 className="text-xl font-bold">Address</h3>
                <p>1234 Savory Street, Foodville, USA</p>
              </div>
              <div className="pl-4">
                <h3 className="text-xl font-bold">Phone</h3>
                <p>(123) 456-7890</p>
              </div>
              <div className="pl-4">
                <h3 className="text-xl font-bold">Email</h3>
                <p>contact@thesavoryspoon.com</p>
              </div>
              <div className="pl-4">
                <h3 className="text-xl font-bold">Opening Hours</h3>
                <p>Monday - Friday: 9:00 AM - 9:00 PM</p>
                <p>Saturday - Sunday: 10:00 AM - 10:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
