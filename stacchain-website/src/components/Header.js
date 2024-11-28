import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-400">
      {/* Left: Logo with Tagline */}
      <div className="flex flex-col text-left">
        {/* Logo */}
        <div className="text-clamp font-comfortaa">
          <span className="text-black">stac</span>
          <span className="text-white">chain</span>
        </div>
        {/* Tagline */}
        <p className="text-sm text-black mt-1">geospatial economics</p>
      </div>

      {/* Right: Navigation (Stacked Vertically with Icons) */}
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
          href="#contact"
          className="flex items-center text-white hover:text-gray-300"
        >
          <i className="fas fa-envelope mr-2"></i> Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
