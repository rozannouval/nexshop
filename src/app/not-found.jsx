"use client";

import { ArrowLeft, FileX } from "lucide-react";
import { useRouter } from "next/navigation";

function NotFound() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <main className="flex flex-col justify-center items-center min-h-[80dvh] p-4">
      <FileX className="size-32 md:size-48 text-stone-700" />
      <h2 className="text-center font-bold text-2xl md:text-3xl my-4 md:my-8 text-stone-700">
        Maaf, Halaman Tidak Ditemukan
      </h2>
      <button
        onClick={handleBack}
        className="bg-stone-700 text-white py-2 md:py-3 px-4 md:px-6 rounded-md hover:opacity-80 font-semibold text-lg md:text-xl cursor-pointer flex items-center justify-center gap-2"
      >
        <ArrowLeft className="-ml-2" /> Kembali
      </button>
    </main>
  );
}

export default NotFound;
