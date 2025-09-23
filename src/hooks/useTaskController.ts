import { useForm } from "react-hook-form";

export interface TaskFilters {
  priority: string;
  status: string;
}

const useTaskController = () => {
  const {
    register,
    handleSubmit: handleHookFormSubmit,
    watch,
  } = useForm<TaskFilters>();

  const handleSubmit = handleHookFormSubmit((data) => {
    console.log(data);
  });
  return { register, watch, handleSubmit };
};

export default useTaskController;
