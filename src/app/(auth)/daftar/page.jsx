"use client";

import PageLayout from "@/components/Layout/PageLayout";
import { Input } from "@/components/ui/input";
import { useRegisterUser } from "@/features/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  const { mutate: register, isPending } = useRegisterUser();

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");
    register(form, {
      onSuccess: () => router.push("/masuk"),
      onError: (err) => {
        setErrorMsg(
          err?.message?.data?.message ||
            "Akun gagal dibuat, mungkin email sudah terdaftar"
        );
      },
    });
  };

  return (
    <PageLayout className="items-center justify-center">
      <div className="flex flex-col items-center w-full max-w-sm lg:max-w-md border-stone-200 border-2 rounded-lg">
        <div className="px-4 md:p-6 py-4 flex flex-col items-center gap-4 w-full text-center md:text-start">
          <h3 className="text-stone-800 text-2xl font-bold">
            Membuat akun baru
          </h3>
          <form onSubmit={handleSubmit} className="w-full text-start">
            <p className="p-1 font-medium">Nama:</p>
            <Input
              name="name"
              type="text"
              placeholder="Masukan Nama..."
              value={form.name}
              onChange={handleChange}
              required
            />
            <p className="p-1 mt-2 font-medium">Email:</p>

            <Input
              name="email"
              type="email"
              placeholder="Masukan Email..."
              value={form.email}
              onChange={handleChange}
              required
            />
            <p className="p-1 mt-2 font-medium">Password:</p>

            <Input
              name="password"
              type="password"
              placeholder="Masukan Password..."
              value={form.password}
              onChange={handleChange}
              required
            />
            {errorMsg && (
              <p className="text-sm text-red-500 font-medium">{errorMsg}</p>
            )}
            <div className="flex flex-col-reverse md:flex-row gap-y-3 gap-x-2 mt-4">
              <Link
                href="/masuk"
                className="p-2 font-medium text-center underline-offset-2 underline rounded-md w-full "
              >
                Sudah Punya Akun?
              </Link>
              <button
                type="submit"
                disabled={isPending}
                className="p-2 font-medium text-center bg-stone-800 text-white hover:opacity-80 transition-all duration-300 rounded-md cursor-pointer w-full"
              >
                {isPending ? "Akun sedang dibuat..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </PageLayout>
  );
}

export default RegisterPage;
