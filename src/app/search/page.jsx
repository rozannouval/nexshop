"use client";

import CardProduct from "@/components/Cards/CardProduct";
import { useSearchProducts } from "@/features/products/useProducts";
import { useSearchParams } from "next/navigation";
import Loading from "../loading";
import NotFound from "../not-found";
import CardsLayout from "@/components/Cards/CardsLayout";
import LoadError from "@/components/Errors/LoadError";
import ProductNotFound from "@/components/Errors/ProductNotFound";
import PageLayout from "@/components/Layout/PageLayout";

function SearchPage() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") || "";
  const { data: products, isLoading, isError } = useSearchProducts(q);

  if (!q) return <NotFound />;

  if (isLoading) return <Loading />;

  if (isError) return <LoadError />;

  if (!products || products.length === 0) return <ProductNotFound />;

  return (
    <PageLayout>
      <h3 className="text-xl md:text-2xl font-medium">
        Hasil dari pencarian anda:
      </h3>
      <CardsLayout>
        {products?.map((product) => (
          <CardProduct
            key={product.id}
            product={product}
            productHref={`/products/${product.id}`}
          />
        ))}
      </CardsLayout>
    </PageLayout>
  );
}

export default SearchPage;
