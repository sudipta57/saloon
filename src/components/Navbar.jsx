import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-10 bg-white ">
      {/* Navbar Container */}
      <div className="max-w-[1300px] mx-auto py-4 flex justify-between items-center px-6 shadow-md">
        {/* Left: Logo */}
        <div>
          <img src="/logo.png" alt="Happy Hour Logo" className="h-12" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-[poppins]">
          {[
            { name: "Home", path: "/" },
            { name: "Our Services", path: "/our-service" },
            { name: "About Us", path: "/about-us" },
            { name: "Contact Us", path: "/contact-us" },
          ].map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `relative text-lg font-[500] transition-colors duration-300 ${
                  isActive
                    ? "text-[#CB6F42] font-[600] after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[3px] after:bg-[#CB6F42] after:transition-all after:duration-300"
                    : "text-[#070707]"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Right: Book Appointment Button (Only on Desktop) */}
        <div className="hidden md:block">
          <Link
            to="/book-appointment"
            className="bg-[#CB6F42] px-5 py-2 flex items-center gap-2 rounded-lg transition-all duration-300 hover:bg-[#633B27] focus:outline-none font-[500] font-[poppins] text-white"
          >
            Book Appointment <img src="/book_ap.png" alt="Book" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-[#CB6F42]"
          onClick={toggleMenu}
        >
          <FiMenu />
        </button>
      </div>

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[50%] bg-white shadow-lg transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-3xl text-[#CB6F42]"
          onClick={closeMenu}
        >
          <FiX />
        </button>

        {/* Menu Items */}
        <div className="flex flex-col mt-16 space-y-6 px-6 font-[poppins]">
          {[
            { name: "Home", path: "/" },
            { name: "Our Services", path: "/our-service" },
            { name: "About Us", path: "/about-us" },
            { name: "Contact Us", path: "/contact-us" },
          ].map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `relative text-lg font-[500] transition-colors duration-300 ${
                  isActive
                    ? "text-[#CB6F42] font-[600] after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[3px] after:bg-[#CB6F42] after:transition-all after:duration-300"
                    : "text-[#070707]"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <Link
            to="/book-appointment"
            onClick={closeMenu}
            className="w-full sm:w-auto bg-[#CB6F42] text-white text-sm sm:text-base md:text-lg px-6 py-3 text-center rounded-lg hover:bg-[#633B27] transition-all duration-300"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
