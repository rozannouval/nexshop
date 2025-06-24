import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useFetchBanners = () => {
  return useQuery({
    queryKey: ["banner"],
    queryFn: async () => {
      const response = await axiosInstance.get("/banners");
      return response.data;
    },
  });
};
