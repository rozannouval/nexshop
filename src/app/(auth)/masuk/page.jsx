"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { useLoginUser } from "@/features/useAuth";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [errorMsg, setErrorMsg] = useState("");

  const { mutate: isLogin, isPending } = useLoginUser();

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");

    isLogin(form, {
      onSuccess: () => router.push("/"),
      onError: (err) => {
        setErrorMsg(err?.response?.data?.message || "Login failed");
      },
    });
  };

  return (
    <main className="min-h-[35rem] md:min-h-[78dvh] flex items-center justify-center px-4 bg-white">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-sm md:max-w-2xl border-stone-200 border-2 rounded-lg">
        <div className="px-4 md:px-8 py-4 md:py-8 flex flex-col items-center md:items-start gap-4 w-full md:max-w-sm text-center md:text-start">
          <h3 className="text-stone-800 text-2xl font-bold">Masukkan akun</h3>
          <form onSubmit={handleSubmit} className="w-full text-start">
            <p className="font-medium p-1">Email:</p>
            <Input
              name="email"
              type="email"
              placeholder="Example@gmail.com"
              value={form.email}
              onChange={handleChange}
              required
            />
            <p className="font-medium p-1 mt-4">Password:</p>

            <Input
              name="password"
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
            {errorMsg && (
              <p className="text-sm text-red-500 font-medium mt-2">{errorMsg}</p>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-2 mt-4">
              <button
                type="submit"
                disabled={isPending}
                className="p-2 font-medium text-center bg-stone-800 text-white rounded-md cursor-pointer"
              >
                {isPending ? "Logging in..." : "Login"}
              </button>
              <Link
                href="/daftar"
                className="p-2 font-medium text-center underline underline-offset-2 rounded-md"
              >
                Buat Akun Baru
              </Link>
            </div>
          </form>
        </div>
        <div className="border-l-2 rounded-r-lg border-stone-200 hidden md:block">
          <Image
            src="/icon/png/logo-white.png"
            alt="logo nexshop"
            width={350}
            height={350}
            className="rounded-r-lg"
          />
        </div>
      </div>
    </main>
  );
}
