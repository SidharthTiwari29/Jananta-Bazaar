import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';  // For page redirection
import axios from '../../utils/api';  // Axios instance to communicate with the backend
import { AuthContext } from '../../context/AuthContext';  // Authentication context

const LogoutButton = () => {
  const { setUser } = useContext(AuthContext);  // Access the AuthContext to update user state
  const history = useHistory();  // React Router's history hook for redirection

  const handleLogout = async () => {
    try {
      // Call the backend to log out (clear the JWT token from the server-side, if necessary)
      await axios.post('/api/auth/logout', {}, { withCredentials: true });

      // Clear the user state in context and redirect to login page or home
      setUser(null);  // Clear user data in context
      history.push('/login');  // Redirect to login page (or home page)
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <button className="logout-button" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;
