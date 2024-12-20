import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-800 text-white">
  
      <div className="flex items-center">
        <img src="/Tete.png" alt="Logo" className="w-10 h-10 mr-3" />
        <span className="text-lg font-bold text-yellow-400">DELTRAX</span>
      </div>

     
      <button
        onClick={toggleMenu}
        className="lg:hidden text-xl focus:outline-none "
        aria-label="Toggle Menu"
      >
        ☰
      </button>

   
      <ul className="hidden lg:flex space-x-8">
        <li>
          <a href="/about" className="hover:text-yellow-400">
            About
          </a>
        </li>
        <li>
          <a href="/faqs" className="hover:text-yellow-400">
            FAQs
          </a>
        </li>
        <li>
          <a href="/blog" className="hover:text-yellow-400">
            Blog
          </a>
        </li>
        <li>
          <a href="/contact" className="hover:text-yellow-400">
            Contact
          </a>
        </li>
      </ul>

      
      <div className="hidden lg:flex space-x-4">
        <a
          href="/Signup"
          className="px-4 py-2 bg-yellow-400 text-gray-800 rounded-full hover:bg-yellow-500"
        >
          Get Started
        </a>
        <a
          href="/Signin"
          className="px-4 py-2 border border-white rounded-full hover:bg-white hover:text-gray-800"
        >
          Login
        </a>
      </div>

    
      {isMenuOpen && (
        <ul className="lg:hidden absolute top-16 left-0 right-0 bg-gray-800 text-center space-y-4 py-4 shadow-lg z-50">
          <li>
            <a href="/about" className="hover:text-yellow-400">
              About
            </a>
          </li>
          <li>
            <a href="/faqs" className="hover:text-yellow-400">
              FAQs
            </a>
          </li>
          <li>
            <a href="/blog" className="hover:text-yellow-400">
              Blog
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-yellow-400">
              Contact
            </a>
          </li>
          <div className="space-y-4">
            <a
              href="/Signup"
              className="block px-4 py-2 bg-yellow-400 text-gray-800 rounded-full hover:bg-yellow-500"
            >
              Get Started
            </a>
            <a
              href="/Signin"
              className="block px-4 py-2 border border-white rounded-full hover:bg-white hover:text-gray-800"
            >
              Login
            </a>
          </div>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
