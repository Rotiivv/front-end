import { useMutation, useQueryClient } from "@tanstack/react-query";
import deleteTask from "../services/deleteTask";
import { toast } from "sonner";
import type { GetTasksResponse } from "../services/getTasks";

const useDeleteTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (taskId: string) => {
      deleteTask(taskId);
      return taskId;
    },
    onError: () => toast.error("erro ao apagar tarefa"),
    onSuccess: (taskId) => {
      queryClient.setQueryData(
        ["get-tasks"],
        (currentTasks: GetTasksResponse[]) => {
          return currentTasks.filter((task) => task.id !== taskId);
        }
      );
      toast.success("sucesso ao deletar tarefa");
    },
  });
};

export default useDeleteTask;
