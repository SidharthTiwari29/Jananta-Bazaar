// src/components/common/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../../assets/logo/janata-logo.png';
import cartIcon from '../../assets/icons/shopping-cart.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="bg-white shadow-md sticky top-0 z-50"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Janata Bazaar Logo" className="h-10" />
          <span className="text-2xl font-bold text-orange-600">Janata Bazaar</span>
        </Link>

        <button
          className="md:hidden text-orange-600 text-xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        <ul className={`md:flex gap-6 text-gray-700 font-medium items-center ${isOpen ? 'block' : 'hidden'} md:block`}>
          <li><Link to="/bidding" className="hover:text-orange-600">Bidding</Link></li>
          <li><Link to="/lottery" className="hover:text-orange-600">Lottery</Link></li>
          <li><Link to="/subscription" className="hover:text-orange-600">Subscription</Link></li>
          <li><Link to="/wallet" className="hover:text-orange-600">Wallet</Link></li>
          <li><Link to="/donate" className="hover:text-orange-600">Donate</Link></li>
          <li><Link to="/profile" className="hover:text-orange-600">Profile</Link></li>
          <li>
            <Link to="/cart">
              <img src={cartIcon} alt="Cart" className="h-6 hover:scale-110 transition" />
            </Link>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
