import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import LoginForm from './components/user/LoginForm';
import SignupForm from './components/user/SignupForm';
import UserProfile from './components/user/UserProfile';
import SubscriptionPage from './pages/Subscription'; // New subscription page
import { UserProvider, UserContext } from './context/UserContext';
import axios from 'axios';

// ProtectedRoute Component to prevent unauthenticated access
const ProtectedRoute = ({ element, ...rest }) => {
  const { user } = useContext(UserContext); // Assuming UserContext holds authentication state

  return (
    <Route
      {...rest}
      element={user ? element : <Navigate to="/login" />}
    />
  );
};

const App = () => {
  const { user, setUser } = useContext(UserContext);

  // Fetch user data and subscription status on app load
  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        try {
          const response = await axios.get('/api/user/profile', {
            headers: { 'x-auth-token': user.token }
          });
          setUser({ ...user, profile: response.data });
        } catch (error) {
          console.error("Error fetching user profile", error);
        }
      }
    };

    fetchUserData();
  }, [user, setUser]);

  return (
    <UserProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/signup" element={<SignupForm />} />
              <Route path="/profile" element={<ProtectedRoute element={<UserProfile />} />} />
              <Route path="/subscription" element={<ProtectedRoute element={<SubscriptionPage />} />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </UserProvider>
  );
};

export default App;
