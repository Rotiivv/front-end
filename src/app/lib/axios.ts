import axios from "axios";
import token from "../utils/auth";

export const publicApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const privateApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

privateApi.interceptors.request.use((config) => {
  const tokeen = token.get();

  if (tokeen) config.headers.Authorization = `Bearer ${tokeen}`;

  return config;
});
