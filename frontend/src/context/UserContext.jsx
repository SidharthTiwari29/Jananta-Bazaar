import React, { createContext, useState, useEffect } from 'react';
import { getCurrentUser } from '../api/authApi';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      const data = await getCurrentUser();
      setUser(data.user);
    } catch (error) {
      console.error('Failed to fetch user profile:', error.message);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  // Login function to set user
  const login = (userData) => {
    setUser(userData);
  };

  // Logout function to clear user
  const logout = () => {
    setUser(null);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loading, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
