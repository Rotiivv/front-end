import api from "../lib/axios";

export interface SignupBody {
  name: string;
  email: string;
  password: string;
}

interface SignupResponse {
  accessToken: string;
}

const signup = async (body: SignupBody) => {
  // para ter acesso ao data, desestruturado do axios, precisa-se usar uma func async, pois o metodo retorna uma promisse.
  const { data } = await api.post<SignupResponse>("/auth/signup", body);

  return data;
};

export default signup;
