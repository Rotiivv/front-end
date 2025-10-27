import { tv } from "tailwind-variants";
import TaskPriorityItem from "./TaskPriorityItem";
import {
  CheckIcon,
  DetailsIcon,
  SpinIcon,
  TrashIcon,
} from "../../assets/icons";
import { useEffect, useState } from "react";
import {
  TaskPriority,
  TaskStatus,
  type GetTasksResponse,
} from "../../app/services/getTasks";
import useDeleteTask from "../../app/hooks/useDeleteTask";
import { useQueryClient } from "@tanstack/react-query";

interface TaskItemProps {
  id: string;
  title: string;
  status: TaskStatus;
  priority: TaskPriority;
}

const taskItemStyle = tv({
  base: "w-full transition-all rounded-lg hover:shadow-xs p-3 flex border",
  variants: {
    mode: {
      notStarted: "border-[#E5E7EB] hover:border-[#D1D5DB] transition-all",
      inProgress: "border-[#ffd580] bg-[#fdc047]/10",
      done: "border-[#7cd0d4] bg-[#00ADB5]/10",
    },
  },
});

const taskStatusItemStyle = tv({
  base: " h-4 w-4.5 rounded-full mt-0.75 transition-all flex items-center justify-center",
  variants: {
    mode: {
      notStarted: "border border-[#E5E7EB] hover:border-[#c3c7cd] ",
      inProgress: "bg-[#ffbc37] border-none",
      done: "bg-[#00ADB5] border-none",
    },
  },
});

const TaskItem = ({ title, status, priority, id }: TaskItemProps) => {
  const queryClient = useQueryClient();
  const [statusState, setStatusState] = useState(status);

  const { mutate: deleteTask, isPending } = useDeleteTask();

  const handleTaskClick = () => {
    if (statusState === "notStarted") {
      setStatusState(TaskStatus.IN_PROGRESS);
    }
    if (statusState === "inProgress") {
      setStatusState(TaskStatus.DONE);
    }
    if (statusState === "done") {
      setStatusState(TaskStatus.NOT_STARTED);
    }
  };

  const handleTrashClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    deleteTask(id);
  };

  const handleDetailsClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
  };

  useEffect(() => {
    setTimeout(() => {
      queryClient.setQueryData(
        ["get-tasks"],
        (currentTasks: GetTasksResponse[]) => {
          currentTasks.map((currentTask) => {
            if (currentTask?.id === id) {
              currentTask.status = statusState;
            }
          });
        }
      );
    }, 500);
  }, [statusState, queryClient, id]);

  return (
    <div className={taskItemStyle({ mode: statusState })}>
      <label
        htmlFor={id}
        className="w-full h-full flex items-start gap-2.5 group select-none cursor-pointer"
        onClick={handleTaskClick}
      >
        <span className={taskStatusItemStyle({ mode: statusState })}>
          {(statusState === "inProgress" && (
            <SpinIcon className="text-white animate-spin h-3 w-3" />
          )) ||
            (statusState === "done" && (
              <CheckIcon className="text-white h-3 w-3" />
            ))}
        </span>
        <div className="flex flex-col gap-2 w-full">
          <div className="text-xs font-medium flex justify-between w-full">
            <span className="max-w-[25ch] break-words">{title}</span>

            <div className="opacity-0 flex group-hover:opacity-100 w-fit transition-all">
              <button
                disabled={isPending}
                onClick={(e) => handleTrashClick(e)}
                className="hover:bg-[#FEF2F2] group/thrash flex items-center justify-center rounded-md h-6 w-6 disabled:cursor-not-allowed disabled:bg-[#FEF2F2]"
              >
                <TrashIcon className="h-3 text-[#a7a7a7] group-hover/thrash:text-[#FB313B] transition-all" />
              </button>

              <button
                onClick={handleDetailsClick}
                className="hover:bg-[#f5f5f5] group/details flex items-center justify-center rounded-md h-6 w-6"
              >
                <DetailsIcon className="h-3.5 text-[#a7a7a7] group-hover/details:text-[#c7c7c7]" />
              </button>
            </div>
          </div>
          <TaskPriorityItem priority={priority} />
        </div>
      </label>
    </div>
  );
};

export default TaskItem;
