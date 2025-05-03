import { Link } from 'react-router-dom';
import cartIcon from '../../assets/icons/shopping-cart.svg';
import logo from '../../assets/logo/janata-logo.png';

const Navbar = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Janata Bazaar" className="h-10 w-auto mr-2" />
          <span className="text-2xl font-bold text-orange-600">Janata Bazaar</span>
        </Link>
        <nav className="flex items-center space-x-6">
          <Link to="/bidding" className="text-gray-700 hover:text-orange-500 font-medium">Bidding</Link>
          <Link to="/deals" className="text-gray-700 hover:text-orange-500 font-medium">Deals</Link>
          <Link to="/lottery" className="text-gray-700 hover:text-orange-500 font-medium">Lottery</Link>
          <Link to="/coins" className="text-gray-700 hover:text-orange-500 font-medium">Coins</Link>
          <Link to="/subscription" className="text-gray-700 hover:text-orange-500 font-medium">Subscription</Link>
          <Link to="/wishlist" className="text-gray-700 hover:text-orange-500 font-medium">Wishlist</Link>
          <Link to="/profile" className="text-gray-700 hover:text-orange-500 font-medium">My Profile</Link>
          <Link to="/cart" className="relative">
            <img src={cartIcon} alt="Cart" className="h-6 w-6" />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
