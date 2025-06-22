import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useFetchProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const productsResponse = await axiosInstance.get(`/products`);
      return productsResponse.data;
    },
  });
};
