import { useQuery } from "@tanstack/react-query";
import getTasks from "../services/getTasks";

const useGetTasks = () => {
  return useQuery({
    queryKey: ["get-tasks"],
    queryFn: async () => {
      return getTasks();
    },
  });
};

export default useGetTasks;
