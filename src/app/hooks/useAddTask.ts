import { useMutation } from "@tanstack/react-query";
import addTask, { type AddTaskBody } from "../services/addTask";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const useAddTask = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (body: AddTaskBody) => {
      return addTask(body);
    },
    onSuccess: () => {
      toast.success("Tarefa Adicionada");
      navigate("/tasks");
    },
    onError: () => toast.error("Erro ao adicionar tarefa"),
  });
};

export default useAddTask;
