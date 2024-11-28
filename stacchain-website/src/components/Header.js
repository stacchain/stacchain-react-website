import React from "react";
import Nav from "./Nav";
import logo from "../assets/stacchain-logo.svg"; // Adjust path based on your file structure

const Header = () => {
  return (
    <header>
      {/* Gradient Background for the Logo and Navigation */}
      <div className="bg-gradient-to-b from-blue-400 to-blue-200 w-full py-14">
        <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-start">
            <img
              src={logo}
              alt="StacChain Logo"
              className="h-72 md:h-96" // Adjust size as needed
            />
            {/* <p className="text-black text-lg mt-2">geospatial economics</p> */}
          </div>

          {/* Navigation */}
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
