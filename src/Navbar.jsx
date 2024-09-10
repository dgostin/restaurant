import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-orange-50 px-10 py-4 border-b-[1px] border-blue-950">
      <div className="container mx-auto flex justify-center items-center">
        {/* Logo */}
        {/* <div className="text-lg font-bold">
          <Link to="/">My App</Link>
        </div> */}

        {/* Nav Links for Desktop */}
        <div className="hidden md:flex space-x-16 text-gray-700 font-bold">
          <Link to="/" className="hover:text-gray-500">
            Home
          </Link>
          <Link to="/menu" className="hover:text-gray-500">
            Menu
          </Link>
          <Link to="/about" className="hover:text-gray-500">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-gray-500">
            Contact Us
          </Link>
          <Link to="/reservations" className="hover:text-gray-500">
            Reservations
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-gray-800 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex-col text-center">
            <Link to="/" className="block text-gray-500">
              Home
            </Link>

            <Link to="/menu" className="block text-gray-500">
              Menu
            </Link>

            <Link to="/about" className="block text-gray-500">
              About Us
            </Link>

            <Link to="/contact" className="block text-gray-500">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
