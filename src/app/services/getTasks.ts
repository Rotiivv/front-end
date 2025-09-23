import { privateApi } from "../lib/axios";

export enum TaskPriority {
  LOW = "low",
  MEDIUM = "medium",
  HIGHT = "hight",
}

export enum TaskStatus {
  NOT_STARTED = "notStarted",
  IN_PROGRESS = "inProgress",
  DONE = "done",
}

interface GetTasksResponse {
  id: string;
  title: string;
  description?: string;
  priority: TaskPriority;
  status: TaskStatus;
}

const getTasks = async () => {
  const { data } = await privateApi.get<GetTasksResponse[] | undefined>(
    "/tasks"
  );
  return data;
};

export default getTasks;
