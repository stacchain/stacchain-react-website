import React from "react";
import Nav from "./Nav";
import logo from "../assets/stacchain-logo.svg";

const Header = () => {
  return (
    <header>
      {/* Gradient Background for the Logo and Navigation */}
      <div className="bg-gradient-to-b from-blue-400 to-blue-100 w-full py-14">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col sm:flex-row items-center sm:justify-between">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center sm:items-start">
            <img
              src={logo}
              alt="StacChain Logo"
              className="scale-150 h-28 sm:h-36 md:h-48 mb-4 ml-24"
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
