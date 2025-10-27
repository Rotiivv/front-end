import { useQuery } from "@tanstack/react-query";
import getOverview from "../services/getOverview";

const useGetOverview = () => {
  return useQuery({
    queryKey: ["get-overview"],
    queryFn: async () => {
      return getOverview();
    },
  });
};

export default useGetOverview;
