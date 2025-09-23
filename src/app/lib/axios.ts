import axios from "axios";

export const publicApi = axios.create({
  baseURL: "http://localhost:3000",
});

export const privateApi = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3OWZmZTcyMi1jZjAzLTRkNWItYWNhMy05ZDA2NTdhMjJmYWEiLCJpYXQiOjE3NTg2MzI0MDgsImV4cCI6MTc1ODYzNDIwOH0.yD8Nnjn8rwLfJwu7t5TUHRVCNlFJGD8GEWUFGAH0k1Y",
  },
});
