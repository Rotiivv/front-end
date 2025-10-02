import { TaskPriority, TaskStatus } from "../services/getTasks";

const status = (status: string) => {
  if (status === "DONE") return TaskStatus.DONE;
  if (status === "IN_PROGRESS") return TaskStatus.IN_PROGRESS;
  if (status === "NOT_STARTED") return TaskStatus.NOT_STARTED;
  return TaskStatus.NOT_STARTED;
};

const priority = (priority: string) => {
  if (priority === "LOW") return TaskPriority.LOW;
  if (priority === "MEDIUM") return TaskPriority.MEDIUM;
  if (priority === "HIGHT") return TaskPriority.HIGHT;
  return TaskPriority.LOW;
};
const mapDisplay = {
  status,
  priority,
};

export default mapDisplay;
