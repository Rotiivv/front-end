import axios from "axios";
import token from "../utils/auth";

export const publicApi = axios.create({
  baseURL: "http://localhost:3000",
});

export const privateApi = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Authorization: `Bearer ${token.get()}`,
  },
});
