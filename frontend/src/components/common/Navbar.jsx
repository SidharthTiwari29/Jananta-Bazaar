import { Link } from 'react-router-dom';
import logo from '../../assets/logo/janata-logo.png';
import cartIcon from '../../assets/icons/shopping-cart.svg';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Janata Bazaar Logo" className="h-10 w-auto" />
          <h1 className="text-2xl font-bold text-orange-600">Janata Bazaar</h1>
        </div>
        <div className="flex items-center space-x-6">
          <Link to="/cart">
            <img src={cartIcon} alt="Cart" className="h-6 w-6" />
          </Link>
          <div className="flex space-x-3 text-gray-500">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-pink-500" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="hover:text-blue-600" />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="hover:text-blue-400" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
