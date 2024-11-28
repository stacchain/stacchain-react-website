import React from "react";

const Nav = ({ className }) => {
  return (
    <nav
      className={`flex flex-row sm:flex-col items-center sm:items-start space-x-4 sm:space-x-0 sm:space-y-4 ${className}`}
    >
      <a
        href="#home"
        className="flex items-center text-clampIcon text-white hover:text-gray-300"
      >
        <i className="fas fa-home mr-3"></i>
        <span className="hidden sm:inline">Home</span>
      </a>
      <a
        href="#about"
        className="flex items-center text-clampIcon text-white hover:text-gray-300"
      >
        <i className="fas fa-info-circle mr-3"></i>
        <span className="hidden sm:inline">About</span>
      </a>
      <a
        href="https://github.com/stacchain"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-clampIcon text-white hover:text-gray-300"
      >
        <i className="fab fa-github mr-3"></i>
        <span className="hidden sm:inline">GitHub</span>
      </a>
      <a
        href="https://www.linkedin.com/company/stacchain"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-clampIcon text-white hover:text-gray-300"
      >
        <i className="fab fa-linkedin mr-3"></i>
        <span className="hidden sm:inline">LinkedIn</span>
      </a>
      <a
        href="#contact"
        className="flex items-center text-clampIcon text-white hover:text-gray-300"
      >
        <i className="fas fa-envelope mr-3"></i>
        <span className="hidden sm:inline">Contact</span>
      </a>
    </nav>
  );
};

export default Nav;
