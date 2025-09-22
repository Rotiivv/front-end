import { privateApi } from "../lib/axios";

export interface AddTaskBody {
  title: string;
  description?: string;
  status?: string;
  priority?: string;
}

interface AddTaskResponse {
  title: string;
  description?: string;
  status?: string;
  priority?: string;
}

const addTask = async (body: AddTaskBody) => {
  const { data } = await privateApi.post<AddTaskResponse>("/tasks", body);

  return data;
};

export default addTask;
