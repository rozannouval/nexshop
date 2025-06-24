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

export const useFetchProductById = (id) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const productsResponse = await axiosInstance.get(`/products/${id}`);
      return productsResponse.data;
    },
  });
};

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