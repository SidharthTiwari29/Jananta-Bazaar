import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-6">
      <div className="container mx-auto flex justify-between">
        <div className="space-x-4">
          <Link to="/contact-us">Contact Us</Link>
          <Link to="/terms">Terms and Conditions</Link>
          <Link to="/help">Help Center</Link>
        </div>
        <div>
          <p>2025 Janata Bazaar - All rights reserved</p>
          <p>Made with <span className="text-red-500">❤️</span> in India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

