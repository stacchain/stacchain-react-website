import React from "react";
import Nav from "./Nav";

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
      <Nav />
    </header>
  );
};

export default Header;
