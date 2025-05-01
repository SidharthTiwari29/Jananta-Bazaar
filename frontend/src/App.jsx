import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import HelpCenter from './pages/HelpCenter';
import BiddingPage from './pages/BiddingPage';
import Cart from './pages/Cart';
import Lottery from './pages/Lottery';
import Donation from './pages/Donation';
import Subscription from './pages/Subscription';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 mt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bidding" element={<BiddingPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/lottery" element={<Lottery />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
