import mapDisplay from "../../app/utils/map";
import TaskItem from "./TaskItem";
import type { GetTasksResponse } from "../../app/services/getTasks";

interface TasksFlexViewProps {
  searched?: string;
  tasks: GetTasksResponse[] | undefined;
}

const TasksFlexView = ({ searched, tasks }: TasksFlexViewProps) => {
  const tasksOnDisplay = searched
    ? tasks?.filter((tasks) =>
        tasks.title.toLowerCase().includes(searched?.toLowerCase())
      )
    : tasks;

  return (
    <div className="bg-white rounded-lg shadow-sm p-3.5 flex flex-col space-y-7">
      <span className="font-base text-xs">
        Tarefas ({tasksOnDisplay?.length})
      </span>

      <div className="flex flex-col gap-3">
        {tasks?.length === 0 && (
          <p className="text-gray-700 text-xs text-center mt-[-8px]">
            Não há tarefas.
          </p>
        )}

        {tasks?.length !== 0 && searched?.length !== 0 && (
          <p className="text-gray-700 text-xs mt-[-8px] text-center">
            Não há tarefas com esse nome.
          </p>
        )}

        {tasksOnDisplay?.map((task) => {
          return (
            <TaskItem
              key={task?.id}
              id={task?.id}
              title={task?.title}
              description={task?.description}
              priority={mapDisplay.priority(task?.priority)}
              status={mapDisplay.status(task.status)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TasksFlexView;
