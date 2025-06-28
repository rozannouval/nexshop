"use client";

import PageLayout from "@/components/Layout/PageLayout";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCreateProduct } from "@/features/products/useActionProduct";
import { useState } from "react";

const categories = ["Laptop", "Tablet", "Handphone", "Monitor"];

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

  const handleInputChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    productMutate({
      ...form,
      price: parseInt(form.price),
      stock: parseInt(form.stock),
    });
  };

  return (
    <PageLayout className="items-center justify-center">
      <div className="flex flex-col items-center w-full max-w-sm lg:max-w-md border-stone-200 border-2 rounded-lg">
        <div className="px-4 md:p-6 py-4 flex flex-col items-center gap-4 w-full text-center md:text-start">
          <h3 className="text-stone-800 text-2xl font-bold">
            Membuat Produk Baru
          </h3>
          <form onSubmit={handleSubmit} className="w-full text-start">
            <p className="p-1 font-medium">Nama Produk:</p>
            <Input
              name="name"
              type="text"
              placeholder="Masukan Nama Produk..."
              value={form.name}
              onChange={handleInputChange}
              required
            />
            <p className="p-1 mt-2 font-medium">Description:</p>

            <textarea
              name="description"
              placeholder="Masukan Deskripsi..."
              value={form.description}
              onChange={handleInputChange}
              required
              className="w-full py-2 px-3 rounded-md border-1 min-h-36 text-sm"
            />

            <p className="p-1 mt-2 font-medium">Image URL:</p>
            <Input
              name="image"
              type="text"
              placeholder="Masukan URL Gambar..."
              value={form.image}
              onChange={handleInputChange}
            />

            <p className="p-1 mt-2 font-medium">Kategori:</p>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Pilih Kategori" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Kategori Pilihan:</SelectLabel>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            <p className="p-1 mt-2 font-medium">Stok:</p>
            <Input
              name="stock"
              type="number"
              value={form.stock}
              onChange={handleInputChange}
              required
            />

            <p className="p-1 mt-2 font-medium">Harga:</p>
            <Input
              name="price"
              type="number"
              value={form.price}
              onChange={handleInputChange}
              required
            />
            <div className="flex flex-col-reverse md:flex-row gap-y-3 gap-x-2 mt-4">
              <button
                type="submit"
                disabled={isPending}
                className="p-2 font-medium text-center bg-stone-800 text-white hover:opacity-80 transition-all duration-300 rounded-md cursor-pointer w-full"
              >
                {isPending ? "Produk sedang dibuat..." : "Buat Produk"}
              </button>
              {isSuccess && <p className="text-green-600">Produk berhasil ditambahkan!</p>}
            </div>
          </form>
        </div>
      </div>
    </PageLayout>
  );
}
