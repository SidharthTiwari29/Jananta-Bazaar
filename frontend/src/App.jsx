import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';

import Home from './pages/Home';
import BiddingPage from './features/bidding/BiddingPage';
import Lottery from './features/lottery/Lottery';
import Subscription from './features/subscription/Subscription';
import Wallet from './features/wallet/Wallet';
import DonationPayments from './components/payments/DonationPayments';
import UserProfile from './components/user/UserProfile';
import ShoppingCart from './components/user/ShoppingCart';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bidding" element={<BiddingPage />} />
          <Route path="/lottery" element={<Lottery />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/donate" element={<DonationPayments />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
