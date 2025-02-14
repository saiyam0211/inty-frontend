import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Import icons from lucide-react

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center w-[89%] m-auto py-4">
      {/* Logo */}
      <div>
        <img src="images/logo.png" className="w-[110px]" alt="Logo" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 text-lg font-medium">
        <li className="cursor-pointer hover:text-[#006452]">Home</li>
        <li className="cursor-pointer hover:text-[#006452]">About</li>
        <li className="cursor-pointer hover:text-[#006452]">Service</li>
        <li className="cursor-pointer hover:text-[#006452]">Contact</li>
      </ul>

      {/* Book Now Button */}
      <a
        href="#"
        className="hidden md:block w-[160px] h-[40px] text-white bg-[#006452] rounded-md text-center leading-[40px] hover:bg-green-800 transition"
      >
        Book Now
      </a>

      {/* Mobile Menu Button */}
      <div className="md:hidden z-50">
        {isOpen ? (
          <X size={30} onClick={() => setIsOpen(false)} className="cursor-pointer" />
        ) : (
          <Menu size={30} onClick={() => setIsOpen(true)} className="cursor-pointer" />
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center gap-6 text-lg font-medium transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <X size={30} onClick={() => setIsOpen(false)} className="absolute top-5 right-5 cursor-pointer" />
        <a href="#" className="hover:text-[#006452]" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#" className="hover:text-[#006452]" onClick={() => setIsOpen(false)}>About</a>
        <a href="#" className="hover:text-[#006452]" onClick={() => setIsOpen(false)}>Service</a>
        <a href="#" className="hover:text-[#006452]" onClick={() => setIsOpen(false)}>Contact</a>
        <a
          href="#"
          className="w-[160px] h-[40px] text-white bg-[#006452] rounded-md text-center leading-[40px] hover:bg-green-800 transition"
          onClick={() => setIsOpen(false)}
        >
          Book Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
