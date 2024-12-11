import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx"; // Import the close icon
import PropTypes from "prop-types"; // Import PropTypes
import { MenuLinks } from "./Navbar";

const ResponsiveMenu = ({ showMenu, toggleMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white text-black px-8 pb-6 pt-16 transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      {/* Close Button */}
      <div className="absolute top-4 right-4 z-50">
        <RxCross2
          size={30}
          className="text-black cursor-pointer"
          onClick={toggleMenu} // Close menu when clicked
        />
      </div>

      {/* User Info Section */}
      <div className="card">
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} className="text-primary" />
          <div>
            <h1 className="font-bold">Hello, User</h1>
            <h1 className="text-sm text-slate-500">Premium User</h1>
          </div>
        </div>
        {/* Navigation Links */}
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {MenuLinks.map(({ name, link }) => (
              <li key={name}>
                <a
                  href={link}
                  className="mb-5 inline-block text-gray-700 hover:text-primary transition-colors"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Footer Section */}
      <div className="footer text-center text-sm text-gray-500">
        <h1>
          Made with <span className="text-red-500">❤</span> by{" "}
          <a
            href="https://github.com/pratap264"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Team Garage Advertisment
          </a>
        </h1>
      </div>
    </div>
  );
};

// Define PropTypes for the component
ResponsiveMenu.propTypes = {
  showMenu: PropTypes.bool.isRequired, // showMenu should be a boolean and is required
  toggleMenu: PropTypes.func.isRequired, // toggleMenu should be a function to close the menu
};

export default ResponsiveMenu;



