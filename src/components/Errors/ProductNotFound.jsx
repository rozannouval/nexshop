"use client";

import { SearchX } from "lucide-react";
import { useRouter } from "next/navigation";

const ProductNotFound = () => {
  const router = useRouter();
  return (
    <main className="container mx-auto p-4 md:p-8 min-h-[80dvh] flex flex-col justify-center items-center gap-4 text-center">
      <SearchX className="size-32 md:size-40" />
      <h4 className="font-medium text-2xl md:text-3xl">
        Produk tidak ditemukan!
      </h4>
      <p className="font-medium text-lg md:text-xl text-stone-500">
        Mohon maaf, produk yang anda cari tidak tersedia pada database kami
      </p>
      <button
        onClick={() => router.back()}
        className="py-2 px-4 bg-stone-800 text-white font-medium rounded-md cursor-pointer hover:opacity-80 transition-all"
      >
        Kembali
      </button>
    </main>
  );
};

export default ProductNotFound;
