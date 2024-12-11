import React, { useState, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import DarkLogo from "../../assets/logo/logo_for_light.png"; // Always use DarkLogo

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  // Track the scroll position to change navbar appearance when scrolling
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black bg-opacity-70 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between md:space-y-2">
        {/* Logo */}
        <div className="flex items-center gap-6">
          <div className="logo cursor-pointer">
            <img src={DarkLogo} alt="Logo" className="h-12 md:h-14" />
          </div>
        </div>

        {/* Right Section: Desktop Menu */}
        <div className="flex items-center gap-8 font-buntu font-bold">
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-black text-xl font-semibold hover:text-primary transition-colors ${
                  isActive ? "text-primary" : ""
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `text-black text-xl font-semibold hover:text-primary transition-colors ${
                  isActive ? "text-primary" : ""
                }`
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/creators"
              className={({ isActive }) =>
                `text-black text-xl font-semibold hover:text-primary transition-colors ${
                  isActive ? "text-primary" : ""
                }`
              }
            >
              Creators
            </NavLink>
            <NavLink
              to="/career"
              className={({ isActive }) =>
                `text-black text-xl font-semibold hover:text-primary transition-colors ${
                  isActive ? "text-primary" : ""
                }`
              }
            >
              Career
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-black text-xl font-semibold hover:text-primary transition-colors ${
                  isActive ? "text-primary" : ""
                }`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden text-black">
            {showMenu ? (
              <RxCross2
                size={30}
                className="absolute top-4 right-4 cursor-pointer"
                onClick={toggleMenu}
              />
            ) : (
              <HiMenuAlt3
                size={30}
                className="cursor-pointer"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-2/3 bg-black bg-opacity-90 text-white transition-transform transform ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col space-y-8 mt-16 px-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-xl font-semibold ${isActive ? "text-primary" : ""}`
              }
              onClick={() => setShowMenu(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `text-xl font-semibold ${isActive ? "text-primary" : ""}`
              }
              onClick={() => setShowMenu(false)}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/creators"
              className={({ isActive }) =>
                `text-xl font-semibold ${isActive ? "text-primary" : ""}`
              }
              onClick={() => setShowMenu(false)}
            >
              Creators
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/career"
              className={({ isActive }) =>
                `text-xl font-semibold ${isActive ? "text-primary" : ""}`
              }
              onClick={() => setShowMenu(false)}
            >
              Career
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-xl font-semibold ${isActive ? "text-primary" : ""}`
              }
              onClick={() => setShowMenu(false)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

