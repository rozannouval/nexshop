"use client";

import Loading from "@/app/loading";
import LoadError from "@/components/Errors/LoadError";
import PageLayout from "@/components/Layout/PageLayout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useFetchProductById } from "@/features/products/useProducts";
import Link from "next/link";
import { useParams } from "next/navigation";

function ProductPage() {
  const { id } = useParams();
  const { data: product, isLoading, isError } = useFetchProductById(id);

  if (isLoading) return <Loading />;
  if (isError) return <LoadError />;

  return (
    <PageLayout>
      <Breadcrumb className="font-medium mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Beranda</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link
                href={`/products/category/${product.category}`}
                className="capitalize"
              >
                {product.category}
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="truncate w-36">
              {product.name}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-col lg:flex-row gap-y-2 gap-x-16">
        <img
          src={product.image || "/image-not-available.png"}
          alt={product.name}
          className="w-96 h-96 hidden lg:block object-cover"
        />
        <div className="w-full lg:hidden flex justify-center">
          <img src={product.image} alt={product.name} className="w-96 h-96 object-cover" />
        </div>
        <div className="md:py-8 md:px-4 flex flex-col gap-4">
          <h2 className="font-medium text-lg md:text-2xl">{product.name}</h2>
          <p className="text-sm md:text-lg text-justify whitespace-pre-line">{product.description}</p>
        </div>
      </div>
    </PageLayout>
  );
}

export default ProductPage;
