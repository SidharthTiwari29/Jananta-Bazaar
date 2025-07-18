import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Bidding from "../pages/Bidding";
import Payment from "../pages/Payment";
import Lottery from "../pages/Lottery";
import ContactUs from "../pages/ContactUs";
import TermsAndConditions from "../pages/TermsAndConditions";
import NotFound from "../pages/NotFound";
import Wishlist from "../pages/Wishlist";
import HelpCenter from "../pages/HelpCenter";
import Login from "../pages/Login";
import UserProfile from "../pages/UserProfile";
import SubscriptionPage from "../pages/Subscription";
import { UserContext } from "../context/UserContext";

function AppRoutes() {
  const { user } = useContext(UserContext);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bidding" element={<Bidding />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/lottery" element={<Lottery />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/terms" element={<TermsAndConditions />} />
      <Route path="/help" element={<HelpCenter />} />
      <Route
        path="/login"
        element={!user ? <Login /> : <Navigate to="/profile" replace />}
      />
      <Route
        path="/profile"
        element={user ? <UserProfile /> : <Navigate to="/login" replace />}
      />
      <Route
        path="/subscription"
        element={user ? <SubscriptionPage /> : <Navigate to="/login" replace />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
