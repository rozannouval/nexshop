"use client";

import CardProduct from "@/components/CardProduct";
import { useSearchProduct } from "@/features/useProducts";
import { useSearchParams } from "next/navigation";

function SearchPage() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") || "";
  const { data, isLoading, isError } = useSearchProduct(q);

  if (isError)
    return (
      <div className="min-h-[80dvh] container mx-auto p-4 md:p-8 flex flex-col items-center justify-center font-bold text-xl">
        Gagal mengambil data
      </div>
    );

  return (
    <main className="container mx-auto p-4 md:p-8 min-h-[80dvh] ">
      <h3 className="text-2xl font-medium ">
        Hasil dari pencarian <span className="font-bold">{q}</span>...
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-4 xl:gap-8 my-4">
        {isLoading ? <div>Loading...</div> : <CardProduct productData={data} />}
      </div>
    </main>
  );
}

export default SearchPage;
