import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import heartIcon from '../../assets/images/made-in-india.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-8">
        {/* Left */}
        <div>
          <h3 className="text-xl font-bold text-orange-400 mb-2">Janata Bazaar</h3>
          <p className="text-sm text-gray-400">
            Your daily grocery destination. Bid smart, buy smart.
          </p>
          <div className="flex items-center gap-2 mt-3 text-xs text-gray-400">
            <span>Made with</span>
            <img src={heartIcon} alt="Made in India" className="h-4" />
            <span>in India</span>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col space-y-2 text-sm text-gray-300">
          <a href="/terms" className="hover:text-orange-400 transition">Terms & Conditions</a>
          <a href="/privacy" className="hover:text-orange-400 transition">Privacy Policy</a>
          <a href="/legal" className="hover:text-orange-400 transition">Legal</a>
          <a href="/contact" className="hover:text-orange-400 transition">Contact</a>
          <a href="/help" className="hover:text-orange-400 transition">Help Center</a>
        </div>

        {/* Social */}
        <div className="flex flex-col items-start md:items-end">
          <h4 className="text-sm font-semibold text-gray-200 mb-2">Follow us</h4>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-white hover:text-orange-400 transition text-lg" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white hover:text-orange-400 transition text-lg" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-white hover:text-orange-400 transition text-lg" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center text-xs text-gray-500 pt-6">
        © 2025 Janata Bazaar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
