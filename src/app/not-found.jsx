"use client";

import PageLayout from "@/components/Layout/PageLayout";
import { ArrowLeft, FileX } from "lucide-react";
import { useRouter } from "next/navigation";

function NotFound() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <PageLayout className="justify-center items-center gap-3 text-center">
      <FileX className="size-32 md:size-40 text-stone-700" />
      <h2 className="text-center font-bold text-xl md:text-3xl text-stone-700">
        Maaf, Halaman Tidak Ditemukan
      </h2>
      <p className="font-medium text-sm md:text-lg text-stone-500">
        Kami tidak dapat menemukan halaman yang anda tuju, mungkin halaman <br className="hidden md:block" />
        tersebut sudah terhapus atau memang tidak ada
      </p>
      <button
        onClick={handleBack}
        className="bg-stone-700 text-white py-2 px-4 rounded-md hover:opacity-80 font-semibold text-sm md:text-lg cursor-pointer flex items-center justify-center gap-1"
      >
        <ArrowLeft className="-ml-1 size-4 md:size-5" /> Kembali
      </button>
    </PageLayout>
  );
}

export default NotFound;
