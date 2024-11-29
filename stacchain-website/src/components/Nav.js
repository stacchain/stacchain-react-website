import React from "react";

const Nav = ({ className }) => {
  return (
    <nav className={`relative z-10 ${className}`}>
      <div className="flex flex-row md:flex-col items-center space-x-6 md:space-x-0 md:space-y-4">
        {[
          { href: "#home", icon: "fas fa-home", label: "Home" },
          { href: "#about", icon: "fas fa-info-circle", label: "About" },
          {
            href: "https://github.com/stacchain",
            icon: "fab fa-github",
            label: "GitHub",
            external: true,
          },
          {
            href: "https://www.linkedin.com/company/stacchain",
            icon: "fab fa-linkedin",
            label: "LinkedIn",
            external: true,
          },
          { href: "#contact", icon: "fas fa-envelope", label: "Contact" },
        ].map(({ href, icon, label, external }, idx) => (
          <a
            key={idx}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="flex flex-col items-center text-white hover:text-green-400 transition-colors duration-300"
          >
            <i className={`${icon} text-2xl`}></i>
            <span className="mt-1 text-sm hidden md:block">{label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
