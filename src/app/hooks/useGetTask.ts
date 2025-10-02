import { useQuery } from "@tanstack/react-query";
import getTasks from "../services/getTasks";

const useGetTasks = (params: URLSearchParams | undefined) => {
  return useQuery({
    queryKey: ["get-tasks"],
    queryFn: async () => {
      return getTasks(params);
    },
    retry: 0,
    retryOnMount: false,
  });
};

export default useGetTasks;
