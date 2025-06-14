import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent fixed top-0 left-0 right-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-4 py-4">

        {/* Logo */}
        <div className="text-2xl sm:text-xl lg:text-3xl font-bold text-white tracking-widest hover:text-blue-400 transition duration-300">
          KK <span className="text-blue-400">|</span> Frontend Dev
        </div>


        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 lg:space-x-10 text-white md:text-md sm:text-sm font-bold">
          <a href="#home" className="hover:text-blue-300 transition duration-300">Home</a>
          <a href="#about" className="hover:text-blue-300 transition duration-300">About</a>
          <a href="#projects" className="hover:text-blue-300 transition duration-300">Projects</a>
          <a href="#skills" className="hover:text-blue-300 transition duration-300">Skills</a>
          <a href="#contact" className="hover:text-blue-300 transition duration-300">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-xl text-white focus:outline-none cursor-pointer"
          >
            {isOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden backdrop-blur-sm text-white px-4 pt-2 pb-4 space-y-2 shadow-md text-base text-sm">
          <a href="#home" className="block py-2 hover:text-blue-300 transition duration-300" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" className="block py-2 hover:text-blue-300 transition duration-300" onClick={() => setIsOpen(false)}>About</a>
          <a href="#projects" className="block py-2 hover:text-blue-300 transition duration-300" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#skills" className="block py-2 hover:text-blue-300 transition duration-300" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#contact" className="block py-2 hover:text-blue-300 transition duration-300" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
};


export default Navbar;
