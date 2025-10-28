import { useMutation, useQueryClient } from "@tanstack/react-query";
import updateTask, { type UpdateTask } from "../services/updateTask";
import type { GetTasksResponse } from "../services/getTasks";

const useUpdateTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: UpdateTask) => {
      return updateTask(body);
    },
    onSuccess: (body: UpdateTask) => {
      queryClient.setQueryData(
        ["get-tasks"],
        (currentTasks: GetTasksResponse[]) => {
          return currentTasks.map((currentTask) => {
            if (body.id === currentTask.id) {
              return { ...currentTask, status: body.status };
            }

            return currentTask;
          });
        }
      );
    },
  });
};

export default useUpdateTask;
