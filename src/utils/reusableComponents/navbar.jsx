import { useState } from 'react';
import '../../styles/topnav.css';
import logo from '../../assets/images/cmunu.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg text-gray-800 py-4 px-6 flex justify-between items-center">
      {/* Logo on the left */}
      <div className="flex-shrink-0">
        <img src={logo} alt="Logo" className="h-8" />
      </div>

      {/* Nav items on the right */}
      <div className="hidden md:flex space-x-4 items-center">
        <a href="#" className="nav-link inline-block relative">
          Home
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 transition-transform origin-bottom"></span>
        </a>
        <a href="#" className="nav-link inline-block relative">
          Service
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 transition-transform origin-bottom"></span>
        </a>
        <a href="#" className="nav-link inline-block relative">
          Project
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 transition-transform origin-bottom"></span>
        </a>
        <a href="#" className="nav-link inline-block relative">
          Contact Us
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 transition-transform origin-bottom"></span>
        </a>
      </div>

      {/* Hamburger menu for mobile (positioned on the right) */}
      <div className="md:hidden">
        <button
          type="button"
          className="text-gray-800 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className={`w-6 h-6 ${isOpen ? 'transition-transform duration-500 ease-in-out transform rotate-180' : 'transition-transform duration-500 ease-in-out'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute bg-white top-16 right-0 shadow-lg">
          <div className="flex flex-col items-center p-4">
            <a href="#" className="nav-link">
              Home
            </a>
            <a href="#" className="nav-link">
              Service
            </a>
            <a href="#" className="nav-link">
              Project
            </a>
            <a href="#" className="nav-link">
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
