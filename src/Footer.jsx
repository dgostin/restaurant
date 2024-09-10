import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-100 py-8">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">The Savory Spoon</h3>
            <p className="text-gray-400">
              A place where food, flavors, and friendships come together. Join
              us for an unforgettable dining experience in the heart of
              Foodville.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="ml-6">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/menu" className="hover:text-yellow-500 transition">
                  Menu
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-yellow-500 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-yellow-500 transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/reservations"
                  className="hover:text-yellow-500 transition"
                >
                  Reservations
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Get In Touch</h3>
            <p className="text-gray-400 mb-2">
              1234 Savory Street, Foodville, USA
            </p>
            <p className="text-gray-400 mb-2">Phone: (123) 456-7890</p>
            <p className="text-gray-400">Email: contact@thesavoryspoon.com</p>

            {/* Social Media Icons */}
            <div className="mt-4 flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                className="text-gray-400 hover:text-yellow-500 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99h-2.54V12h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.1 0 2.25.2 2.25.2v2.48h-1.27c-1.26 0-1.65.78-1.65 1.58V12h2.81l-.45 2.89h-2.36v6.99C18.34 21.13 22 17 22 12z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-yellow-500 transition"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.35-1.6.59-2.46.7a4.26 4.26 0 001.88-2.36c-.82.5-1.73.87-2.7 1.07a4.26 4.26 0 00-7.23 3.88A12.1 12.1 0 013 4.79a4.27 4.27 0 001.32 5.68 4.22 4.22 0 01-1.93-.54v.05a4.27 4.27 0 003.42 4.18 4.26 4.26 0 01-1.93.07 4.27 4.27 0 003.99 2.97A8.53 8.53 0 012 19.54a12.05 12.05 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2l-.01-.56A8.77 8.77 0 0024 5.34c-.86.38-1.78.64-2.74.66 1-.6 1.75-1.56 2.15-2.7z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-400 hover:text-yellow-500 transition"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.16c3.16 0 3.55 0 4.8.07 1.18.06 1.84.25 2.26.42a4.61 4.61 0 011.68 1.1 4.61 4.61 0 011.1 1.68c.17.42.36 1.08.42 2.26.07 1.24.07 1.63.07 4.8s0 3.55-.07 4.8c-.06 1.18-.25 1.84-.42 2.26a4.61 4.61 0 01-1.1 1.68 4.61 4.61 0 01-1.68 1.1c-.42.17-1.08.36-2.26.42-1.24.07-1.63.07-4.8.07s-3.55 0-4.8-.07c-1.18-.06-1.84-.25-2.26-.42a4.61 4.61 0 01-1.68-1.1 4.61 4.61 0 01-1.1-1.68c-.17-.42-.36-1.08-.42-2.26-.07-1.24-.07-1.63-.07-4.8s0-3.55.07-4.8c.06-1.18.25-1.84.42-2.26a4.61 4.61 0 011.1-1.68 4.61 4.61 0 011.68-1.1c.42-.17 1.08-.36 2.26-.42C8.45 2.16 8.84 2.16 12 2.16m0-2.16C8.74 0 8.32 0 7.1.07 5.8.14 4.82.35 4.05.72A6.76 6.76 0 002.72 1.95c-.37.77-.58 1.75-.65 3.05C2 6.74 2 7.16 2 12s0 5.26.07 6.48c.07 1.3.28 2.28.65 3.05a6.76 6.76 0 001.33 1.33c.77.37 1.75.58 3.05.65 1.22.07 1.64.07 6.48.07s5.26 0 6.48-.07c1.3-.07 2.28-.28 3.05-.65a6.76 6.76 0 001.33-1.33c.37-.77.58-1.75.65-3.05.07-1.22.07-1.64.07-6.48s0-5.26-.07-6.48c-.07-1.3-.28-2.28-.65-3.05a6.76 6.76 0 00-1.33-1.33C18.74.35 17.76.14 16.46.07 15.26 0 14.84 0 12 0z" />
                  <path d="M12 5.84A6.16 6.16 0 1018.16 12 6.16 6.16 0 0012 5.84zm0 10.16A4 4 0 1116 12a4 4 0 01-4 4zm6.4-10.93a1.44 1.44 0 11-1.44-1.44 1.44 1.44 0 011.44 1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center text-gray-500">
          &copy; {new Date().getFullYear()} The Savory Spoon. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
