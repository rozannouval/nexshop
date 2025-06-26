import { PriceFormatter } from "@/lib/price-formatter";

const CardProduct = ({ productData }) => {
  return productData?.map((product) => {
    return (
      <a
        href={`/products/${product.id}`}
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
          <p className="mt-2 mb-2 text-lg line-clamp-2">{product.name}</p>
          <p className="font-semibold">{PriceFormatter(product.price)}</p>
        </div>
      </a>
    );
  });
};

export default CardProduct;
