import React, { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Tools", href: "#tech" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="w-full z-50">
      <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-white font-bold text-lg">
          Rishi Malla
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-gray-300 hover:text-green-400 transition-colors duration-300
                         after:content-[''] after:absolute after:left-0 after:-bottom-1
                         after:h-[2px] after:w-0 after:bg-green-400
                         after:transition-all after:duration-300
                         hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-6 pb-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-gray-300 hover:text-green-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
