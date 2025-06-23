import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useSearchProduct = (q) => {
  return useQuery({
    queryKey: ["search", q],
    queryFn: async () => {
      if (!q || q.trim() === "") return [];
      const res = await axiosInstance.get(`/products/search?q=${q}`);
      return res.data;
    },
    enabled: !!q
  });
};