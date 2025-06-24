import ProductDetailClient from "./ProductDetailClient";

async function ProductPage({ params }) {
  const { id } = params;
  return <ProductDetailClient productId={id} />;
}

export default ProductPage;
