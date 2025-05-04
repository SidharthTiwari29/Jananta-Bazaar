import React from 'react';
import LoginForm from '../components/user/LoginForm';

const Login = () => (
  <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className="bg-white p-6 shadow rounded w-full max-w-sm">
      <h1 className="text-xl font-bold text-center mb-4">Login to Janata Bazaar</h1>
      <LoginForm />
    </div>
  </div>
);

export default Login;

