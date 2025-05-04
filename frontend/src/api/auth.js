import axios from "axios";

const API = axios.create({ baseURL: "https://your-api-url.com/api" });

API.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const login = (credentials) => API.post("/auth/login", credentials);
export const register = (data) => API.post("/auth/register", data);
export const getProfile = async () => {
  const res = await API.get("/auth/profile");
  return res.data;
};
