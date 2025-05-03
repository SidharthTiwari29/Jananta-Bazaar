import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

import Home from './pages/Home';
import DealsPage from './pages/DealsPage';
import LotteryPage from './features/lottery/lottery';
import BiddingPage from './features/bidding/BiddingPage';
import CoinsPage from './features/coins/coins';
import SubscriptionPage from './features/subscription/Subscription';
import ShoppingCart from './components/user/ShoppingCart';
import Wishlist from './components/user/Wishlist';
import LoginForm from './components/user/LoginForm';
import UserProfile from './components/user/UserProfile';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bidding" element={<BiddingPage />} />
            <Route path="/deals" element={<DealsPage />} />
            <Route path="/lottery" element={<LotteryPage />} />
            <Route path="/coins" element={<CoinsPage />} />
            <Route path="/subscription" element={<SubscriptionPage />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/profile" element={<UserProfile />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
