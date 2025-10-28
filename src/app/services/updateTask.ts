import { privateApi } from "../lib/axios";

export interface UpdateTask {
  id: string;
  title: string;
  description?: string;
  status: string;
  priority: string;
}

const status = (status: string) => {
  if (status === "done") return "DONE";
  if (status === "inProgress") return "IN_PROGRESS";
  if (status === "notStarted") return "NOT_STARTED";
  return "NOT_STARTED";
};

const priority = (priority: string) => {
  if (priority === "low") return "LOW";
  if (priority === "medium") return "MEDIUM";
  if (priority === "hight") return "HIGHT";
  return "LOW";
};

const updateTask = async (body: UpdateTask) => {
  const { data } = await privateApi.put(`/tasks/${body.id}`, {
    ...body,
    status: status(body.status),
    priority: priority(body.priority),
  });
  return data;
};

export default updateTask;
