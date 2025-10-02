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

export interface GetTasksResponse {
  id: string;
  title: string;
  description?: string;
  priority: TaskPriority;
  status: TaskStatus;
}

const getTasks = async (params?: URLSearchParams) => {
  console.log(`/tasks${`?${params?.toString()}`}`);
  const { data } = await privateApi.get<GetTasksResponse[] | undefined>(
    `/tasks${`?${params?.toString()}`}`
  );
  return data;
};

export default getTasks;
