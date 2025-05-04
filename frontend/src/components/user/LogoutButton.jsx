import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';  // Updated for React Router v6+
import axios from '../../api/axios';  // Corrected path
import { AuthContext } from '../../context/AuthContext';

const LogoutButton = () => {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();  // useNavigate replaces useHistory in React Router v6+

  const handleLogout = async () => {
    try {
      await axios.post('/api/auth/logout', {}, { withCredentials: true });
      setUser(null);
      navigate('/login');  // Redirect after logout
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
