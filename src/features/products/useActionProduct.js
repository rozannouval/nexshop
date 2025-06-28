import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const useCreateProduct = () => {
  return useMutation({
    mutationKey: ["product"],
    mutationFn: async (payload) => {
      const res = await axiosInstance.post(`/products`, payload);
      return res.data;
    },
  });
};

