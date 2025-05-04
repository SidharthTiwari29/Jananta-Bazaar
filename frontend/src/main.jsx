import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'; // Corrected path to the CSS file
import App from './App';

// Create a root element to mount your React application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component into the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
