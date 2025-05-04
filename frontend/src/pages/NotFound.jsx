import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="text-center py-20">
    <h1 className="text-4xl font-bold">404</h1>
    <p className="text-lg mt-2">Oops! Page not found.</p>
    <Link to="/" className="text-blue-600 mt-4 inline-block">Go back to Home</Link>
  </div>
);

export default NotFound;

