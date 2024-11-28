import React from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      {/* Gradient Background for the Logo and Navigation */}
      <div className="bg-gradient-to-b from-gray-400 to-gray-300 w-full py-14">
        <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
          {/* Logo and Tagline */}
          <div>
            <div className="font-comfortaa text-clamp">
              <span className="text-black">stac</span>
              <span className="text-white">chain</span>
            </div>
            <p
              className="text-black text-lg mt-1"
              style={{ fontSize: "clamp(0.8rem, 1.1vw, 1.7rem)" }}
            >
              Data integrity, provenance, discovery and economics for the
              geospatial community.
            </p>
          </div>

          {/* Navigation */}
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
