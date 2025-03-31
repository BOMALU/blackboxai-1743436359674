import React, { useState } from 'react';
import { FaBars, FaTimes, FaUserCircle, FaBell } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-opacity-90 backdrop-blur-sm py-2 shadow-xl' : 'bg-opacity-100 py-4'} bg-gradient-to-r from-indigo-600 to-purple-600 text-white`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="relative group">
              <img 
                src="https://images.pexels.com/photos/15997779/pexels-photo-15997779/free-photo-of-hostel-building.jpeg" 
                alt="Hostel Logo" 
                className="h-12 w-12 rounded-full object-cover border-2 border-white shadow-md transform group-hover:scale-110 transition-transform"
              />
              <span className="absolute -bottom-1 -right-1 bg-yellow-400 text-xs font-bold text-gray-900 px-2 py-1 rounded-full shadow-md">
                PRO
              </span>
            </div>
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-white">
              Hostel Management
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              <li>
                <a href="/" className="flex items-center px-3 py-2 font-medium hover:text-yellow-300 transition-colors group">
                  <span className="mr-2 group-hover:scale-110 transition-transform">Home</span>
                </a>
              </li>
              <li>
                <a href="/register" className="flex items-center px-3 py-2 font-medium hover:text-yellow-300 transition-colors group">
                  <span className="mr-2 group-hover:scale-110 transition-transform">Register</span>
                </a>
              </li>
              <li>
                <a href="/rooms" className="flex items-center px-3 py-2 font-medium hover:text-yellow-300 transition-colors group">
                  <span className="mr-2 group-hover:scale-110 transition-transform">Rooms</span>
                </a>
              </li>
              <li>
                <a href="/fees" className="flex items-center px-3 py-2 font-medium hover:text-yellow-300 transition-colors group">
                  <span className="mr-2 group-hover:scale-110 transition-transform">Fees</span>
                </a>
              </li>
              <li>
                <a href="/admin" className="flex items-center px-3 py-2 font-medium hover:text-yellow-300 transition-colors group">
                  <span className="mr-2 group-hover:scale-110 transition-transform">Admin</span>
                </a>
              </li>
            </ul>
            
            <div className="flex items-center space-x-4 ml-6">
              <button className="relative p-2 rounded-full hover:bg-white hover:bg-opacity-10 transition-colors">
                <FaBell className="text-xl" />
                <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full"></span>
              </button>
              <button className="flex items-center space-x-2 bg-white bg-opacity-10 hover:bg-opacity-20 px-4 py-2 rounded-full transition-colors">
                <FaUserCircle className="text-xl" />
                <span className="font-medium">Login</span>
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-full hover:bg-white hover:bg-opacity-10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col space-y-3">
              <li>
                <a href="/" className="block px-4 py-3 font-medium hover:bg-white hover:bg-opacity-10 rounded-lg transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/register" className="block px-4 py-3 font-medium hover:bg-white hover:bg-opacity-10 rounded-lg transition-colors">
                  Register
                </a>
              </li>
              <li>
                <a href="/rooms" className="block px-4 py-3 font-medium hover:bg-white hover:bg-opacity-10 rounded-lg transition-colors">
                  Rooms
                </a>
              </li>
              <li>
                <a href="/fees" className="block px-4 py-3 font-medium hover:bg-white hover:bg-opacity-10 rounded-lg transition-colors">
                  Fees
                </a>
              </li>
              <li>
                <a href="/admin" className="block px-4 py-3 font-medium hover:bg-white hover:bg-opacity-10 rounded-lg transition-colors">
                  Admin
                </a>
              </li>
            </ul>
            
            <div className="mt-4 pt-4 border-t border-white border-opacity-20">
              <button className="w-full flex items-center justify-center space-x-2 bg-white bg-opacity-10 hover:bg-opacity-20 px-4 py-3 rounded-lg transition-colors">
                <FaUserCircle className="text-xl" />
                <span className="font-medium">Login</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;