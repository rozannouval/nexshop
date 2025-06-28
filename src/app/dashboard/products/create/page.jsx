"use client";

import { useCreateProduct } from "@/features/products/useActionProduct";
import { useState } from "react";

const categories = ["laptop", "tablet", "handphone", "monitor"];

export default function CreateProductPage() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: 0,
    image: "",
    stock: 0,
    category: categories[0],
  });

  const { mutate: productMutate, isPending, isSuccess } = useCreateProduct();

  const handleSubmit = (e) => {
    e.preventDefault();

    productMutate({
      ...form,
      price: parseInt(form.price),
      stock: parseInt(form.stock),
    });
  };

  return (
    <main>
      <h2>Halman tambah Produk</h2>
    </main>
  );
}
