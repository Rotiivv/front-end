import { privateApi } from "../lib/axios";

interface GetUserResponse {
  name: string;
  email: string;
}

const getUser = async () => {
  const { data } = await privateApi.get<GetUserResponse>("/users/me");
  return data;
};

export default getUser;
