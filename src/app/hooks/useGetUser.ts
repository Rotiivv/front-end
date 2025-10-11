import { useQuery } from "@tanstack/react-query";
import getUser from "../services/getUser";

const useGetUser = () => {
  return useQuery({
    queryKey: ["get-user"],
    queryFn: async () => {
      return getUser();
    },
    retry: 0,
    retryOnMount: false,
  });
};

export default useGetUser;
