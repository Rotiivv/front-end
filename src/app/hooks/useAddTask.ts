import { useMutation, useQueryClient } from "@tanstack/react-query";
import addTask, { type AddTaskBody } from "../services/addTask";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import type { GetTasksResponse } from "../services/getTasks";

const useAddTask = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (body: AddTaskBody) => {
      return addTask(body);
    },
    onSuccess: (body) => {
      toast.success("Tarefa Adicionada");
      navigate("/tasks");
      queryClient.setQueryData(
        ["get-tasks"],
        (currentTasks: GetTasksResponse[]) => {
          return [...currentTasks, body];
        }
      );
    },
    onError: () => toast.error("Erro ao adicionar tarefa"),
  });
};

export default useAddTask;
