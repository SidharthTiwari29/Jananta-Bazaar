import React from 'react';
import { Link } from 'react-router-dom';
import familyCartoon from '../../assets/images/family-cartoon.png';
import cartIcon from '../../assets/icons/shopping-cart.svg';
import logo from '../../assets/logo/janata-logo.png';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-orange-50 to-green-50 py-12 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">
      {/* Left content */}
      <div className="max-w-xl mb-10 md:mb-0 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
          <img src={logo} alt="Janata Bazaar Logo" className="w-12 h-12" />
          <h1 className="text-4xl font-extrabold text-orange-600">Janata Bazaar</h1>
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          India's Most Bargained Shopping Experience!
        </h2>
        <p className="text-md text-gray-600 mb-6">
          Bid. Save. Laugh. Repeat! Shop groceries at YOUR price. Join bidding battles, win lottery rewards, and earn golden coins!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start">
          <Link to="/shop" className="bg-orange-500 text-white px-6 py-3 rounded-xl shadow hover:bg-orange-600 transition">
            Start Bidding
          </Link>
          <Link to="/how-it-works" className="text-orange-600 underline hover:text-orange-800 text-sm">
            Learn how it works
          </Link>
        </div>
      </div>

      {/* Right image */}
      <div className="relative">
        <img src={familyCartoon} alt="Happy Family" className="w-full max-w-md drop-shadow-lg" />
        <img src={cartIcon} alt="Shopping Cart" className="absolute bottom-0 right-0 w-14 h-14 animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
