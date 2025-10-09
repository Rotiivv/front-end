import { useForm } from "react-hook-form";
import type { SetURLSearchParams } from "react-router-dom";

export interface TaskFilters {
  priority: string;
  status: string;
}

const useTaskController = (setSearchedParams: SetURLSearchParams) => {
  const { register, handleSubmit: handleHookFormSubmit } =
    useForm<TaskFilters>();

  const handleSubmit = handleHookFormSubmit((data) => {
    const params = new URLSearchParams();

    if (data.priority) params.set("priority", data.priority);

    if (data.status) params.set("status", data.status);

    setSearchedParams(params);
  });
  return { register, handleSubmit };
};

export default useTaskController;
