"use client";

import CardProduct from "@/components/Cards/CardProduct";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useFetchBanners } from "@/features/useFetchBanners";
import { useFetchProducts } from "@/features/products/useProducts";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import Loading from "./loading";
import Link from "next/link";
import CardsLayout from "@/components/Cards/CardsLayout";
import LoadError from "../components/Errors/LoadError";
import PageLayout from "@/components/Layout/PageLayout";

const categoryOption = [
  {
    name: "Laptop",
    slug: "laptop",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/008/534/666/small/laptop-computer-mockup-cutout-file-png.png",
  },
  {
    name: "Tablet",
    slug: "tablet",
    image:
      "https://images.vexels.com/media/users/3/149479/isolated/preview/ca8b29b4c9eb4b79c0247e168683d470-tablet-inclined.png",
  },
  {
    name: "Handphone",
    slug: "handphone",
    image:
      "https://static.vecteezy.com/system/resources/previews/039/137/323/non_2x/detailed-isometric-style-photo-of-smartphone-without-background-template-for-mockup-png.png",
  },
  {
    name: "Monitor",
    slug: "monitor",
    image: "/icon/png/monitor.png",
  },
];

export default function Home() {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  const {
    data: products,
    isLoading: productLoading,
    isError: productError,
  } = useFetchProducts();
  const {
    data: banners,
    isLoading: bannerLoading,
    isError: bannerError,
  } = useFetchBanners();

  const isPageLoading = bannerLoading || productLoading;

  if (isPageLoading) return <Loading />;

  if (productError || bannerError) return <LoadError />;

  return (
    <PageLayout>
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.play}
      >
        <CarouselContent>
          {banners?.map((banner) => (
            <CarouselItem key={banner.id} className="rounded-xl">
              <img
                src={banner.image}
                alt={banner.alt}
                className="w-full h-48 md:h-96 object-cover rounded-xl"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="cursor-pointer" />
        <CarouselPrevious className="cursor-pointer" />
      </Carousel>

      <section className="">
        {/* CATEGORY START */}
        <div className="my-8">
          <h3 className="text-xl font-bold">Kategori Pilihan</h3>
          <div className="grid grid-cols-4 my-4 gap-x-4 md:gap-x-12">
            {categoryOption.map((category, index) => (
              <Link
                key={index}
                href={`/products/category/${category.slug}`}
                className="flex flex-col items-center justify-center hover:bg-stone-100 ring-1 ring-stone-200 rounded-sm md:rounded-xl p-2 md:p-4 transition-all"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="size-6 md:size-12 mb-2"
                />
                <p className="text-xs md:text-lg md:font-medium">
                  {category.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
        {/* CATEGORY END */}

        <div className="my-8">
          <h3 className="text-xl font-bold">Rekomendasi Produk</h3>
          <CardsLayout>
            {products?.map((product) => (
              <CardProduct
                key={product.id}
                product={product}
                productHref={`/products/${product.id}`}
              />
            ))}
          </CardsLayout>
        </div>
      </section>
    </PageLayout>
  );
}
