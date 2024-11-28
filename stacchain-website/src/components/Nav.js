import React from "react";

const Nav = () => {
  return (
    <nav className="flex flex-col space-y-2">
      <a
        href="#home"
        className="flex items-center text-white hover:text-gray-300"
      >
        <i className="fas fa-home mr-2"></i> Home
      </a>
      <a
        href="#about"
        className="flex items-center text-white hover:text-gray-300"
      >
        <i className="fas fa-info-circle mr-2"></i> About
      </a>
      <a
        href="https://github.com/stacchain"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-white hover:text-gray-300"
      >
        <i className="fab fa-github mr-2"></i> GitHub
      </a>
      <a
        href="https://www.linkedin.com/company/stacchain"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-white hover:text-gray-300"
      >
        <i className="fab fa-linkedin mr-2"></i> Linkedin
      </a>
      <a
        href="#contact"
        className="flex items-center text-white hover:text-gray-300"
      >
        <i className="fas fa-envelope mr-2"></i> Contact
      </a>
    </nav>
  );
};

export default Nav;
