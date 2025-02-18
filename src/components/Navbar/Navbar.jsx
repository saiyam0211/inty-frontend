import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = ({ isResidentialPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Dynamic classes based on page
  const linkClasses = isResidentialPage
    ? "cursor-pointer text-white hover:text-[#006452]"
    : "cursor-pointer hover:text-[#006452]";

  const buttonClasses = isResidentialPage
    ? "hidden md:block w-[160px] h-[40px] text-[#006452] bg-white rounded-md text-center leading-[40px] hover:bg-gray-100 transition"
    : "hidden md:block w-[160px] h-[40px] text-white bg-[#006452] rounded-md text-center leading-[40px] hover:bg-[#006452] transition";

  const mobileIconClasses = isResidentialPage
    ? "cursor-pointer text-white"
    : "cursor-pointer";

  return (
    <nav className="flex justify-between items-center w-[89%] m-auto py-4">
      {/* Logo */}
      <div>
        <img src="images/logo.png" className="w-[110px]" alt="Logo" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 text-lg font-medium">
        <a href="/">
          <li className={linkClasses}>Home</li>
        </a>
        <li className={linkClasses}>About</li>
        <li className={linkClasses}>Service</li>
        <li className={linkClasses}>Contact</li>
      </ul>

      {/* Book Now Button */}
      <a href="login" className={buttonClasses}>
        Signin
      </a>

      {/* Mobile Menu Button */}
      <div className="md:hidden z-50">
        {isOpen ? (
          <X
            size={30}
            onClick={() => setIsOpen(false)}
            className={mobileIconClasses}
          />
        ) : (
          <Menu
            size={30}
            onClick={() => setIsOpen(true)}
            className={mobileIconClasses}
          />
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full z-50 h-full ${
          isResidentialPage ? "bg-[#006452]" : "bg-white"
        } flex flex-col items-center justify-center gap-6 text-lg font-medium transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <X
          size={30}
          onClick={() => setIsOpen(false)}
          className={`absolute top-5 right-5 ${mobileIconClasses}`}
        />
        <a
          href="/"
          className={
            isResidentialPage
              ? "text-white hover:text-gray-200"
              : "hover:text-[#006452]"
          }
          onClick={() => setIsOpen(false)}
        >
          Home
        </a>
        <a
          href="#"
          className={
            isResidentialPage
              ? "text-white hover:text-gray-200"
              : "hover:text-[#006452]"
          }
          onClick={() => setIsOpen(false)}
        >
          About
        </a>
        <a
          href="#"
          className={
            isResidentialPage
              ? "text-white hover:text-gray-200"
              : "hover:text-[#006452]"
          }
          onClick={() => setIsOpen(false)}
        >
          Service
        </a>
        <a
          href="#"
          className={
            isResidentialPage
              ? "text-white hover:text-gray-200"
              : "hover:text-[#006452]"
          }
          onClick={() => setIsOpen(false)}
        >
          Contact
        </a>
        <a
          href="login"
          className={
            isResidentialPage
              ? "w-[160px] h-[40px] text-[#006452] bg-white rounded-md text-center leading-[40px] hover:bg-gray-100 transition"
              : "w-[160px] h-[40px] text-white bg-[#006452] rounded-md text-center leading-[40px] hover:bg-[#006452] transition"
          }
          onClick={() => setIsOpen(false)}
        >
          Signin
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
