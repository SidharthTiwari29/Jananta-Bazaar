// src/components/common/Footer.jsx
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import heartIcon from '../../assets/images/made-in-india.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-4 py-6 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <p className="text-sm">© 2025 Janata Bazaar. All rights reserved.</p>
          <p className="text-xs flex justify-center md:justify-start items-center mt-1">
            Made with
            <img src={heartIcon} alt="Made in India" className="h-4 mx-1" />
            in India.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF className="text-white hover:text-orange-400 transition duration-300" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="text-white hover:text-orange-400 transition duration-300" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter className="text-white hover:text-orange-400 transition duration-300" />
          </a>
        </div>
      </div>

      {/* Footer Links */}
      <div className="mt-6 text-xs text-center space-x-3">
        <a href="/terms" className="text-orange-400 hover:underline">Terms & Conditions</a>
        <a href="/privacy" className="text-orange-400 hover:underline">Privacy Policy</a>
        <a href="/legal" className="text-orange-400 hover:underline">Legal</a>
        <a href="/contact" className="text-orange-400 hover:underline">Contact</a>
        <a href="/help" className="text-orange-400 hover:underline">Help Center</a>
      </div>
    </footer>
  );
};

export default Footer;
