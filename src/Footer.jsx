import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-gray-400 py-8 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center space-y-2">
        <div className="text-sm">
          © {new Date().getFullYear()} Kiran Kumar Kottapu — Frontend isn't just code, it's creativity.
        </div>
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-500 transition-all duration-200 group cursor-pointer"
        >
          <span className="underline group-hover:no-underline">Back to top</span>
          <FaArrowUp className="text-xs transform group-hover:-translate-y-1 transition-transform duration-200" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
