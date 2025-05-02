import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import heartIcon from '../../assets/icons/made-in-india.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm">
            © 2025 Janata Bazaar. All rights reserved.
          </p>
          <p className="text-xs flex items-center mt-1">
            Made with 
            <img src={heartIcon} alt="Heart" className="h-4 mx-1" />
            in India.
          </p>
        </div>
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF className="text-white hover:text-orange-400" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="text-white hover:text-orange-400" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter className="text-white hover:text-orange-400" />
          </a>
        </div>
      </div>

      <div className="mt-6 text-xs text-center">
        <a href="/terms" className="text-orange-400 hover:underline mx-2">Terms & Conditions</a>
        <a href="/privacy" className="text-orange-400 hover:underline mx-2">Privacy Policy</a>
        <a href="/legal" className="text-orange-400 hover:underline mx-2">Legal Information</a>
        <a href="/contact" className="text-orange-400 hover:underline mx-2">Contact Us</a>
        <a href="/help" className="text-orange-400 hover:underline mx-2">Help Center</a>
      </div>
    </footer>
  );
};

export default Footer;
