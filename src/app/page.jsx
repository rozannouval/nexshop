"use client";

import CardProduct from "@/components/CardProduct";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useFetchBanners } from "@/features/useFetchBanners";
import { useFetchProducts } from "@/features/useProducts";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import Loading from "./loading";

const categoryOption = [
  {
    name: "Laptop",
    href: "/laptop",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/008/534/666/small/laptop-computer-mockup-cutout-file-png.png",
  },
  {
    name: "Tablet",
    href: "/tablet",
    image:
      "https://images.vexels.com/media/users/3/149479/isolated/preview/ca8b29b4c9eb4b79c0247e168683d470-tablet-inclined.png",
  },
  {
    name: "Handphone",
    href: "/handphone",
    image:
      "https://static.vecteezy.com/system/resources/previews/039/137/323/non_2x/detailed-isometric-style-photo-of-smartphone-without-background-template-for-mockup-png.png",
  },
  {
    name: "Monitor",
    href: "/monitor",
    image: "/icon/png/monitor.png",
  },
];

export default function Home() {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));
  const { data: productData, isLoading: productLoading } = useFetchProducts();
  const { data: bannersData, isLoading: bannerLoading } = useFetchBanners();

  if (bannerLoading) return <Loading />;

  return (
    <main className="min-h-[100dvh] container mx-auto flex flex-col p-4 md:p-8">
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.play}
      >
        <CarouselContent>
          {bannersData.map((banner) => (
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
              <a
                key={index}
                href={category.href}
                className="flex flex-col items-center justify-center hover:bg-stone-50 ring-1 ring-stone-200 rounded-sm md:rounded-xl p-2 md:p-4 transition-all"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="size-6 md:size-12 mb-2"
                />
                <p className="text-xs md:text-lg md:font-medium">
                  {category.name}
                </p>
              </a>
            ))}
          </div>
        </div>
        {/* CATEGORY END */}

        <div className="my-8">
          <h3 className="text-xl font-bold">Rekomendasi Produk</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-4 xl:gap-8 my-4">
            {productLoading ? (
              <div>Loading...</div>
            ) : (
              <CardProduct productData={productData} />
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
