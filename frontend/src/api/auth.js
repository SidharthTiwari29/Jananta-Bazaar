import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "https://your-api-url.com/api",
  withCredentials: true, // If you're using httpOnly cookies
});

// Inject token from localStorage (if not using httpOnly cookies)
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth endpoints
export const login = (credentials) => API.post("/auth/login", credentials);
export const register = (data) => API.post("/auth/register", data);
export const getProfile = () => API.get("/auth/profile");
