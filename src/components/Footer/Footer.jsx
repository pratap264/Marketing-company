import {
  FaInstagram,
  FaLinkedin,
  FaHome,
  FaBriefcase,
  FaPhone,
  FaUserTie,
  FaUser, // Added FaUser for Creators
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo/logo_for_dark.png"; // Import your logo here

const FooterLinks = [
  { title: "About", link: "/#about", icon: <FaHome /> },
  { title: "Services", link: "/services", icon: <FaBriefcase /> },
  { title: "Creators", link: "/creators", icon: <FaUser /> }, // Moved Creators after Services
  { title: "Contact", link: "/contact", icon: <FaPhone /> },
  { title: "Career", link: "/career", icon: <FaUserTie /> },
];

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-dark text-white font-lato">
      <section className="container py-10 relative">
        {/* Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 items-center">
          {/* Company Section */}
          <div className="flex flex-col items-center md:items-start mb-8">
            <img
              src={logo} // Logo
              alt="Logo"
              className="w-48 mb-4"
            />
            <p className="text-lg font-semibold text-gray-400 mb-4 uppercase hover:text-primary text-center md:text-left">
              IMPACTFUL DESIGN THAT <br /> DEFINES YOUR PRESENCE
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-6 mt-6 justify-center md:justify-start text-white">
              <a
                href="https://www.instagram.com/garageadvertisements"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-3xl hover:text-primary duration-300 text-white" />
              </a>
              <a
                href="https://www.linkedin.com/company/garageadvertisements/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-3xl hover:text-primary duration-300 text-white" />
              </a>
            </div>
          </div>

          {/* Links Section - Move to right */}
          <div className="flex flex-col items-center md:items-end space-y-6 md:space-y-0 md:ml-auto">
            <ul className="flex flex-col sm:flex-row gap-6 md:gap-16 justify-center sm:justify-end">
              {FooterLinks.map((link) => (
                <li
                  key={link.title}
                  className="flex flex-col items-center text-gray-400 hover:text-primary transition duration-300"
                >
                  <a href={link.link} className="flex flex-col items-center">
                    <span className="text-white text-3xl mb-2">{link.icon}</span> {/* Set icon to white */}
                    <span className="text-lg font-medium">{link.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center py-6 border-t border-gray-600 mt-6">
          <p className="text-sm text-gray-400">
            Copyright © 2025 Garage Advertisements. All Rights Reserved.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
