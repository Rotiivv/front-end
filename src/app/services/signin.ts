import { publicApi } from "../lib/axios";

export interface SigninBody {
  email: string;
  password: string;
}

interface SigninResponse {
  accessToken: string;
}

const signin = async (body: SigninBody) => {
  const { data } = await publicApi.post<SigninResponse>("/auth/signin", body);

  return data;
};

export default signin;
