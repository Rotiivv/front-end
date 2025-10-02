import { privateApi } from "../lib/axios";

const deleteTask = async (taskId: string) => {
  await privateApi.delete(`/tasks/${taskId}`);
};

export default deleteTask;
