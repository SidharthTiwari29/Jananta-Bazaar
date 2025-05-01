import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-primary p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold">Janata Bazaar</Link>
        <div className="space-x-4">
          <Link to="/bidding" className="text-white">Bidding</Link>
          <Link to="/lottery" className="text-white">Lottery</Link>
          <Link to="/wishlist" className="text-white">Wishlist</Link>
          <Link to="/login" className="text-white">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

