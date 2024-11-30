import React, { useState } from "react";
import {
  FaHome,
  FaInfoCircle,
  FaConciergeBell,
  FaEnvelope,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home", icon: <FaHome /> },
    { name: "About", href: "#about", icon: <FaInfoCircle /> },
    {
      name: "Smart Contracts",
      href: "#smart-contracts",
      icon: <FaConciergeBell />,
    },
    {
      name: "Contact",
      href: "mailto:jonathan.d.healy@gmail.com",
      icon: <FaEnvelope />,
    },
  ];

  return (
    <nav className="bg-gradient-to-b from-green-400 to-green-400 text-gray-800 shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-4xl font-bold font-comfortaa">
              <span>stac</span>
              <span className="text-white">chain</span>
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-800 hover:bg-green-500 hover:text-white transition-colors duration-300"
              >
                <span className="mr-2 text-lg">{link.icon}</span>
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-white hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-300"
              aria-expanded={isOpen}
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
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-green-500 hover:text-white transition-colors duration-300"
              >
                <span className="mr-2 text-lg">{link.icon}</span>
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
