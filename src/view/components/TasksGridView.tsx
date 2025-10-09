import { type GetTasksResponse } from "../../app/services/getTasks";
import mapDisplay from "../../app/utils/map";
import { CheckBoxIcon, DangerIcon, PlayIcon } from "../../assets/icons";
import TaskItem from "./TaskItem";
import { useEffect } from "react";
import unauthorized from "../../app/services/unauthorized";

interface TaskGridViewProps {
  tasks: GetTasksResponse[] | undefined;
  searched?: string;
  isError: boolean;
}

const TasksGridView = ({ tasks, searched, isError }: TaskGridViewProps) => {
  const tasksOnDisplay = searched
    ? tasks?.filter((tasks) =>
        tasks.title.toLowerCase().includes(searched?.toLowerCase())
      )
    : tasks;

  const notStartedTasks = tasksOnDisplay?.filter(
    (task) => mapDisplay.status(task.status) === "notStarted"
  );
  const inProgressTasks = tasksOnDisplay?.filter(
    (task) => mapDisplay.status(task.status) === "inProgress"
  );
  const doneTasks = tasksOnDisplay?.filter(
    (task) => mapDisplay.status(task.status) === "done"
  );

  useEffect(() => {
    unauthorized(isError);
  }, [isError]);

  return (
    <div className="flex flex-col gap-5">
      <div className="bg-white rounded-lg p-3.5 shadow-sm space-y-6">
        <div className="flex gap-1 items-center">
          <DangerIcon className="h-3.5" />
          <span className="text-[13px]">
            Não Iniciadas ({notStartedTasks?.length})
          </span>
        </div>

        <div className="flex flex-col gap-3">
          {notStartedTasks?.length === 0 && (
            <p className="text-gray-700 text-xs text-center mt-[-8px]">
              Não há tarefas com esse nome.
            </p>
          )}

          {notStartedTasks?.map((task) => (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              priority={mapDisplay.priority(task.priority)}
              status={mapDisplay.status(task.status)}
            />
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg p-3.5 shadow-sm space-y-6">
        <div className="flex gap-1 items-center">
          <PlayIcon className="h-3.5 text-[#ffbc37]" />
          <span className="text-[13px]">
            {" "}
            Em Progresso ({inProgressTasks?.length})
          </span>
        </div>

        <div className="flex flex-col gap-3">
          {inProgressTasks?.length === 0 && (
            <p className="text-gray-700 text-xs text-center mt-[-8px]">
              Não há tarefas com esse nome.
            </p>
          )}

          {inProgressTasks?.map((task) => (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              priority={mapDisplay.priority(task.priority)}
              status={mapDisplay.status(task.status)}
            />
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg p-3.5 shadow-sm space-y-6">
        <div className="flex gap-1 items-center">
          <CheckBoxIcon className="h-3.5 text-[#00ADB5]" />
          <span className="text-[13px]">Concluídas ({doneTasks?.length})</span>
        </div>

        <div className="flex flex-col gap-3">
          {doneTasks?.length === 0 && (
            <p className="text-gray-700 text-xs text-center mt-[-8px]">
              Não há tarefas com esse nome.
            </p>
          )}

          {doneTasks?.map((task) => (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              priority={mapDisplay.priority(task.priority)}
              status={mapDisplay.status(task.status)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TasksGridView;
