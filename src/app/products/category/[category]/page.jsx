"use client";
import { useCategoryProducts } from "@/features/useProducts";
import { useParams } from "next/navigation";
import Loading from "@/app/loading";
import CardProduct from "@/components/Cards/CardProduct";
import CardsLayout from "@/components/Cards/CardsLayout";
import LoadError from "@/components/Errors/LoadError";
import ProductNotFound from "@/components/Errors/ProductNotFound";

const CategoryProductsPage = () => {
  const { category } = useParams();

  const {
    data: categories,
    isLoading,
    isError,
  } = useCategoryProducts(category);

  if (isLoading) return <Loading />;

  if (isError) return <LoadError />;

  if (!categories || categories.length === 0) return <ProductNotFound />;

  return (
    <main className="container mx-auto p-4 md:p-8 min-h-[78dvh]">
      <h3 className="text-lg md:text-2xl font-medium">
        Kategori <span className="font-bold capitalize">{category}</span>:
      </h3>
      <CardsLayout>
        {categories.map((product) => (
          <CardProduct
            key={product.id}
            product={product}
            productHref={`/products/${product.id}`}
          />
        ))}
      </CardsLayout>
    </main>
  );
};

export default CategoryProductsPage;
