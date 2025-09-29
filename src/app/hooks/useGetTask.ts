import { useQuery } from "@tanstack/react-query";
import getTasks from "../services/getTasks";

const useGetTasks = () => {
  return useQuery({
    queryKey: ["get-tasks"],
    queryFn: async () => {
      return getTasks();
    },
    retry: 0,
    retryOnMount: false,
  });
};

export default useGetTasks;
