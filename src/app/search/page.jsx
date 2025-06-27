"use client";

import CardProduct from "@/components/Cards/CardProduct";
import { useSearchProducts } from "@/features/useProducts";
import { useRouter, useSearchParams } from "next/navigation";
import Loading from "../loading";
import NotFound from "../not-found";
import { SearchX } from "lucide-react";
import CardsLayout from "@/components/Cards/CardsLayout";

function SearchPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const q = searchParams.get("q") || "";
  const { data: products, isLoading, isError } = useSearchProducts(q);

  if (!q) return <NotFound />;

  if (isLoading) return <Loading />;

  if (isError) {
    return (
      <div className="min-h-[80dvh] container mx-auto p-4 md:p-8 flex flex-col items-center justify-center font-bold text-xl">
        Gagal mengambil data
      </div>
    );
  }

  if (!products || products.length === 0) {
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
          onClick={router.back}
          className="py-2 px-4 bg-stone-800 text-white font-medium rounded-md cursor-pointer"
        >
          Kembali
        </button>
      </main>
    );
  }

  return (
    <main className="container mx-auto p-4 md:p-8 min-h-[80dvh] ">
      <h3 className="text-2xl font-medium ">Hasil dari pencarian anda:</h3>
      <CardsLayout>
        {products?.map((product) => (
          <CardProduct
            key={product.id}
            product={product}
            productHref={`/products/${product.id}`}
          />
        ))}
      </CardsLayout>
    </main>
  );
}

export default SearchPage;
