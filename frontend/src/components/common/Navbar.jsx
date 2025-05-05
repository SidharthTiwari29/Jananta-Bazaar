import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../../assets/logo/janata-logo.png';
import cartIcon from '../../assets/icons/shopping-cart.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef();

  // Close menu when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <motion.nav
      className="bg-white shadow-md sticky top-0 z-50"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Janata Bazaar Logo" className="h-10" />
          <span className="text-2xl font-bold text-orange-600">Janata Bazaar</span>
        </Link>

        {/* Hamburger */}
        <button
          className="md:hidden text-orange-600 text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Nav Links */}
        <ul
          ref={menuRef}
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent md:flex gap-6 items-center font-medium text-gray-700 px-6 py-4 md:p-0 transition-all duration-300 ease-in-out ${
            isOpen ? 'block shadow-lg' : 'hidden md:block'
          }`}
        >
          {[
            ['Bidding', '/bidding'],
            ['Lottery', '/lottery'],
            ['Subscription', '/subscription'],
            ['Wallet', '/wallet'],
            ['Donate', '/donate'],
            ['Profile', '/profile'],
          ].map(([label, path]) => (
            <li key={path}>
              <Link
                to={path}
                className={`hover:text-orange-600 ${
                  location.pathname === path ? 'text-orange-600 font-semibold' : ''
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/cart" aria-label="Cart">
              <img src={cartIcon} alt="Cart" className="h-6 hover:scale-110 transition" />
            </Link>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
