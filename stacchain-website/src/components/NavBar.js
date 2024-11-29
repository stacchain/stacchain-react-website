import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-b from-green-400 to-green-300 text-black">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-4xl font-bold">
              <span className="font-comfortaa">stac</span>
              <span className="text-white font-comfortaa">chain</span>
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-4">
            <a
              href="#home"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
            >
              Home
            </a>
            <a
              href="#about"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
            >
              About
            </a>
            <a
              href="#services"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
            >
              Services
            </a>
            <a
              href="#contact"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon for mobile */}
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
