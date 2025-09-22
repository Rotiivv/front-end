import axios from "axios";

export const publicApi = axios.create({
  baseURL: "http://localhost:3000",
});

export const privateApi = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3OWZmZTcyMi1jZjAzLTRkNWItYWNhMy05ZDA2NTdhMjJmYWEiLCJpYXQiOjE3NTg1MDQ0MjEsImV4cCI6MTc1ODUwNjIyMX0.YkzpRISDF-lSP9nIPlrkRcJg2XL06SSAtqWiG_kNMTQ",
  },
});
