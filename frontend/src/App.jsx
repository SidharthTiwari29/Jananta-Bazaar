import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import LoginForm from "./components/user/LoginForm";
import SignupForm from "./components/user/SignupForm";
import UserProfile from "./components/user/UserProfile";
import SubscriptionPage from "./pages/Subscription";
import { UserProvider, UserContext } from "./context/UserContext";
import axios from "axios";

// ProtectedRoute component
const ProtectedRoute = ({ children }) => {
  const { user } = useContext(UserContext);
  return user ? children : <Navigate to="/login" replace />;
};

// Main App content (wrapped with context above)
const AppContent = () => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      if (token && !user) {
        try {
          const res = await axios.get("/api/auth/profile", {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUser({ ...res.data, token });
        } catch (err) {
          console.error("Error loading profile:", err);
        }
      }
    };
    fetchUserData();
  }, [user, setUser]);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/profile" element={<ProtectedRoute><UserProfile /></ProtectedRoute>} />
            <Route path="/subscription" element={<ProtectedRoute><SubscriptionPage /></ProtectedRoute>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

const App = () => (
  <UserProvider>
    <AppContent />
  </UserProvider>
);

export default App;
