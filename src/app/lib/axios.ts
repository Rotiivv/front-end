import axios from "axios";
import token from "../utils/auth";

export const publicApi = axios.create({
  baseURL: "http://localhost:3000",
});

export const privateApi = axios.create({
  baseURL: "http://localhost:3000",
});

privateApi.interceptors.request.use((config) => {
  const tokeen = token.get();

  if (tokeen) config.headers.Authorization = `Bearer ${tokeen}`;

  return config;
});
