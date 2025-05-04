
import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000/api',
  withCredentials: true, // to send cookies like JWT httpOnly
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: Add request/response interceptors here if needed

export default API;
