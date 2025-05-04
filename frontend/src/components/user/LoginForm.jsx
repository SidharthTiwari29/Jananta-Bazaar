// src/components/user/LoginForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useUser();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    try {
      // Replace this with actual API call to backend
      const response = await fakeLoginApi(email, password);

      if (response.success) {
        login(response.user, response.token);
        navigate('/profile'); // Redirect to profile/dashboard
      } else {
        setError('Invalid credentials. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Try again later.');
    }
  };

  // Simulated API response for demonstration
  const fakeLoginApi = async (email, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email === 'user@example.com' && password === 'password') {
          resolve({
            success: true,
            user: {
              name: 'Demo User',
              email,
              isSubscribed: true,
              coins: 250,
            },
            token: 'demo-jwt-token',
          });
        } else {
          resolve({ success: false });
        }
      }, 1000);
    });
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-orange-600">Login to Janata Bazaar</h2>

      {error && <div className="text-red-600 text-sm mb-2">{error}</div>}

      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition"
        >
          Login
        </button>
      </form>

      <p className="mt-4 text-sm text-center text-gray-600">
        Don’t have an account? <a href="/register" className="text-orange-500 hover:underline">Sign Up</a>
      </p>
    </div>
  );
};

export default LoginForm;
