import { TaskPriority, TaskStatus } from "../../app/services/getTasks";
import TaskItem from "./TaskItem";

interface TasksFlexViewProps {
  tasks:
    | {
        id: string;
        title: string;
        description?: string;
        priority: TaskPriority;
        status: TaskStatus;
      }[]
    | undefined;
}

const TasksFlexView = ({ tasks }: TasksFlexViewProps) => {
  const getValueStatusDisplay = (status: string) => {
    if (status === "DONE") return TaskStatus.DONE;
    if (status === "IN_PROGRESS") return TaskStatus.IN_PROGRESS;
    if (status === "NOT_STARTED") return TaskStatus.NOT_STARTED;
    return TaskStatus.NOT_STARTED;
  };

  const getValuePriorityDisplay = (priority: string) => {
    if (priority === "LOW") return TaskPriority.LOW;
    if (priority === "MEDIUM") return TaskPriority.MEDIUM;
    if (priority === "HIGHT") return TaskPriority.HIGHT;
    return TaskPriority.LOW;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-3.5 flex flex-col space-y-7">
      <span className="font-base text-xs">Tarefas (7)</span>

      <div className="flex flex-col gap-3">
        {tasks?.map((task) => (
          <TaskItem
            key={task.id}
            id={task.id}
            title={task.title}
            priority={getValuePriorityDisplay(task.priority)}
            status={getValueStatusDisplay(task.status)}
          />
        ))}
      </div>
    </div>
  );
};

export default TasksFlexView;
