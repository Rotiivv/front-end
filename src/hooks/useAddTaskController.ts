import { useForm } from "react-hook-form";
import taskSchema from "../app/schemas/task.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import useAddTask from "../app/hooks/useAddTask";

const useAddTaskController = () => {
  const { register, handleSubmit: hookFormHandleSubmit } = useForm({
    resolver: zodResolver(taskSchema),
  });

  const { mutate, isPending } = useAddTask();

  const handleSubmit = hookFormHandleSubmit((data) => {
    mutate(data);
  });

  return { register, handleSubmit, isPending };
};

export default useAddTaskController;
