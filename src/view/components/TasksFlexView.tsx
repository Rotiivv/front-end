import { useEffect } from "react";
import useGetTasks from "../../app/hooks/useGetTask";
import unauthorized from "../../app/services/unauthorized";
import mapDisplay from "../../app/utils/map";
import TaskItem from "./TaskItem";

const TasksFlexView = () => {
  const { data: tasks, isError } = useGetTasks();

  useEffect(() => {
    unauthorized(isError);
  }, [isError]);

  return (
    <div className="bg-white rounded-lg shadow-sm p-3.5 flex flex-col space-y-7">
      <span className="font-base text-xs">Tarefas (7)</span>

      <div className="flex flex-col gap-3">
        {tasks?.map((task) => (
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
  );
};

export default TasksFlexView;
