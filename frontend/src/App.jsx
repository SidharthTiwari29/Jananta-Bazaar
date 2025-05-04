import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import LoginForm from './components/user/LoginForm';
import SignupForm from './components/user/SignupForm';
import UserProfile from './components/user/UserProfile';
import SubscriptionPage from './pages/Subscription';
import { UserProvider, UserContext } from './context/UserContext';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = React.useContext(UserContext);

  if (loading) return <div className="text-center p-8">Loading...</div>;
  return user ? children : <Navigate to="/login" replace />;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/profile" element={
        <ProtectedRoute>
          <UserProfile />
        </ProtectedRoute>
      } />
      <Route path="/subscription" element={
        <ProtectedRoute>
          <SubscriptionPage />
        </ProtectedRoute>
      } />
    </Routes>
  );
};

const App = () => {
  return (
    <UserProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </UserProvider>
  );
};

export default App;
