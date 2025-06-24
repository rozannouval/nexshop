"use client";

import Loading from "@/app/loading";
import { useFetchProductById } from "@/features/useProducts";

const ProductDetailClient = ({ productId }) => {
  const {
    data: product,
    isLoading,
    isError,
  } = useFetchProductById(productId);
  if (isLoading) return <Loading />;
  return (
    <main className="p-4 md:p-8">
      <div key={product.id} className="">
        <img src={product.image} alt={product.name} />
      </div>
    </main>
  );
};

export default ProductDetailClient;
