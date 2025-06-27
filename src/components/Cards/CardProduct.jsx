import { PriceFormatter } from "@/lib/price-formatter";
import Link from "next/link";

const CardProduct = ({ product, productHref }) => {
  return (
    <Link
      href={productHref}
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
        <p className="mt-2 mb-2 text-lg line-clamp-2">{product.name}</p>
        <p className="font-semibold">{PriceFormatter(product.price)}</p>
      </div>
    </Link>
  );
};

export default CardProduct;
