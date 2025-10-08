import { useEffect } from "react";
import unauthorized from "../../app/services/unauthorized";
import mapDisplay from "../../app/utils/map";
import TaskItem from "./TaskItem";
import type { GetTasksResponse } from "../../app/services/getTasks";
import type {
  QueryObserverResult,
  RefetchOptions,
} from "@tanstack/react-query";

interface TasksFlexViewProps {
  params?: URLSearchParams;
  searched?: string;
  tasks: GetTasksResponse[] | undefined;
  isError: boolean;
  refetch: (
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult<GetTasksResponse[] | undefined, Error>>;
}

const TasksFlexView = ({
  params,
  searched,
  tasks,
  refetch,
  isError,
}: TasksFlexViewProps) => {
  const tasksOnDisplay = searched
    ? tasks?.filter((tasks) =>
        tasks.title.toLowerCase().includes(searched?.toLowerCase())
      )
    : tasks;

  useEffect(() => {
    refetch();
  }, [params, refetch]);

  useEffect(() => {
    unauthorized(isError);
  }, [isError]);

  return (
    <div className="bg-white rounded-lg shadow-sm p-3.5 flex flex-col space-y-7">
      <span className="font-base text-xs">
        Tarefas ({tasksOnDisplay?.length})
      </span>

      <div className="flex flex-col gap-3">
        {tasksOnDisplay?.length === 0 && (
          <p className="text-gray-700 text-xs text-center mt-[-8px]">
            Não há tarefa com esse nome.
          </p>
        )}

        {tasksOnDisplay?.map((task) => (
          <TaskItem
            key={task?.id}
            id={task?.id}
            title={task?.title}
            priority={mapDisplay.priority(task?.priority)}
            status={mapDisplay.status(task.status)}
          />
        ))}
      </div>
    </div>
  );
};

export default TasksFlexView;
