"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useFetchProducts } from "@/features/useFetchProducts";
import { PriceFormatter } from "@/lib/price-formatter";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const carouselImage = [
  {
    id: 1,
    imageSrc:
      "https://cdn2.uzone.id//assets/uploads/UZONEINC/gadget/Asus/Asus_ROG_Zephyrus_Duo_16/ROG-Zephyrus-Duo-16-headline.jpg",
    imageAlt: "banner-asus-rog-zephyrus",
  },
  {
    id: 2,
    imageSrc:
      "https://www.alezay.com/wp-content/uploads/2022/06/SONY-XPERIA-10-IV-5G-BANNER-ALEZAY-KUWAIT.jpg",
    imageAlt: "banner-sony-xperia-10-IV",
  },
  {
    id: 3,
    imageSrc:
      "https://bumilindo.com/wp-content/uploads/2023/01/Copy-of-Bumilindo-Kategori-Banner-Kategori-Tab-A-Desktop.png",
    imageAlt: "banner-tablet-samsung-galaxy-a9",
  },
];

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
  const { data, isLoading } = useFetchProducts();

  const renderedProductCard = () => {
    return data.map((product) => {
      return (
        <a
          href={`/product/${product.id}`}
          key={product.id}
          className="border border-stone-200 rounded-xl flex flex-col justify-center"
        >
          <div className="aspect-[1/1] p-1 overflow-hidden w-full rounded-t-xl flex justify-center items-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain rounded-t-xl"
            />
          </div>
          <div className="p-4">
            <p className="mt-2 mb-2 text-lg">{product.name}</p>
            <p className="font-semibold">{PriceFormatter(product.price)}</p>
          </div>
        </a>
      );
    });
  };

  return (
    <main className="min-h-[100dvh] container mx-auto flex flex-col p-8">
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.play}
      >
        <CarouselContent>
          {carouselImage.map((item) => (
            <CarouselItem key={item.id} className="rounded-xl">
              <img
                src={item.imageSrc}
                alt={item.imageAlt}
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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-8 my-4">
            {isLoading ? <div>Loading...</div> : renderedProductCard()}
          </div>
        </div>
      </section>
    </main>
  );
}
