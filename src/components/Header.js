import React from "react";
import Nav from "./NavSide";
import logo from "../assets/stacchain-logo.svg";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <Navbar />
      {/* Gradient Background for the Logo and Navigation */}
      <div
        id="home"
        className="bg-gradient-to-b from-gray-400 to-gray-300 w-full py-24 overflow-x-hidden"
      >
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col sm:flex-row items-center sm:justify-between">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center sm:items-start">
            <img
              src={logo}
              alt="StacChain Logo"
              className="scale-150 sm:scale-150 h-28 sm:h-36 md:h-48 mb-4 ml-0 sm:ml-24 mt-12 max-w-full mx-auto sm:mx-0"
            />
          </div>

          {/* Navigation */}
          <Nav className="mt-4 sm:mt-0" />
        </div>
      </div>
    </header>
  );
};

export default Header;
