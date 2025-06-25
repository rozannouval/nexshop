import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/axios";

// useMutation digunakan untuk method seperti POST, PUT, PATCH, DELETE
export const useLoginUser = () => {
  return useMutation({
    mutationFn: async (payload) => {
      const res = await axiosInstance.post("/auth/login", payload);
      return res.data;
    },
  });
};

export const useRegisterUser = () => {
  return useMutation({
    mutationFn: async (payload) => {
      const res = await axiosInstance.post("/auth/register", payload);
      return res.data;
    },
  });
};
