import { privateApi } from "../lib/axios";
import type { GetTasksResponse } from "./getTasks";

interface tasks {
  avaliables: GetTasksResponse[];
  done: GetTasksResponse[];
  inProgress: GetTasksResponse[];
}

interface percentages {
  avaliables: number;
  done: number;
  inProgress: number;
}

interface endAngles {
  avaliables: number;
  done: number;
  inProgress: number;
}

interface GetOverviewResponse {
  tasks: tasks;
  endAngles: endAngles;
  totalTasks: number;
  percentages: percentages;
}

const getOverview = async () => {
  const { data } = await privateApi.get<GetOverviewResponse>(
    "/dashboard/overview"
  );
  return data;
};

export default getOverview;
