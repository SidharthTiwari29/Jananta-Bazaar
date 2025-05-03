import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/janata-logo.png';
import cartIcon from '../../assets/icons/shopping-cart.svg';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Janata Bazaar Logo" className="h-10" />
          <span className="text-2xl font-bold text-orange-600">Janata Bazaar</span>
        </Link>
        
        <ul className="flex gap-6 text-gray-700 font-medium items-center">
          <li><Link to="/bidding">Bidding</Link></li>
          <li><Link to="/lottery">Lottery</Link></li>
          <li><Link to="/subscription">Subscription</Link></li>
          <li><Link to="/wallet">Wallet</Link></li>
          <li><Link to="/donate">Donate</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/cart">
            <img src={cartIcon} alt="Cart" className="h-6" />
          </Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
