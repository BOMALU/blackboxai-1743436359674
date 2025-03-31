import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="https://images.pexels.com/photos/15997779/pexels-photo-15997779/free-photo-of-hostel-building.jpeg" 
                alt="Hostel Logo" 
                className="h-10 w-10 rounded-full border-2 border-white"
              />
              <h3 className="text-xl font-bold">Hostel Management</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Premium accommodation with modern amenities for students and professionals.
            </p>
            <div className="flex space-x-4 pt-2">
              <button className="text-gray-300 hover:text-white transition-colors">
                <FaFacebook className="text-xl" />
              </button>
              <button className="text-gray-300 hover:text-white transition-colors">
                <FaTwitter className="text-xl" />
              </button>
              <button className="text-gray-300 hover:text-white transition-colors">
                <FaInstagram className="text-xl" />
              </button>
              <button className="text-gray-300 hover:text-white transition-colors">
                <FaLinkedin className="text-xl" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-white border-opacity-20 pb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors text-sm">Home</a></li>
              <li><a href="/register" className="text-gray-300 hover:text-white transition-colors text-sm">Registration</a></li>
              <li><a href="/rooms" className="text-gray-300 hover:text-white transition-colors text-sm">Room Allocation</a></li>
              <li><a href="/fees" className="text-gray-300 hover:text-white transition-colors text-sm">Fee Payment</a></li>
              <li><a href="/admin" className="text-gray-300 hover:text-white transition-colors text-sm">Admin Portal</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-white border-opacity-20 pb-2">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-gray-300 mt-1" />
                <span className="text-gray-300 text-sm">123 University Ave, Campus Town</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-gray-300" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-gray-300" />
                <span className="text-gray-300 text-sm">info@hostelmanagement.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-white border-opacity-20 pb-2">Newsletter</h4>
            <p className="text-gray-300 text-sm mb-3">
              Subscribe to get updates on new facilities and offers.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-3 py-2 text-sm text-gray-800 rounded-l focus:outline-none w-full"
              />
              <button 
                type="submit" 
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium px-4 py-2 rounded-r transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-white border-opacity-20 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} Hostel Management System. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button className="text-gray-300 hover:text-white text-sm transition-colors px-2 py-1">Privacy Policy</button>
            <button className="text-gray-300 hover:text-white text-sm transition-colors px-2 py-1">Terms of Service</button>
            <button className="text-gray-300 hover:text-white text-sm transition-colors px-2 py-1">Sitemap</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;