// frontend/src/context/UserContext.jsx
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
      console.error('Not logged in or failed to fetch profile');
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};
