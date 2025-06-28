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
import { toast } from "sonner";

const categories = ["laptop", "tablet", "handphone", "monitor"]; // enum lowercase

export default function CreateProductPage() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    stock: "",
    category: categories[0],
  });

  const { mutate: createProduct, isPending } = useCreateProduct();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (value) => {
    setForm((prev) => ({ ...prev, category: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.description ||
      !form.price ||
      !form.stock ||
      !form.category
    ) {
      toast.error("Semua field wajib diisi");
      return;
    }

    createProduct(
      {
        ...form,
        price: parseInt(form.price),
        stock: parseInt(form.stock),
      },
      {
        onSuccess: () => {
          toast.success("Produk berhasil ditambahkan!");

          setForm({
            name: "",
            description: "",
            price: "",
            image: "",
            stock: "",
            category: categories[0],
          });
        },
        onError: (err) => {
          toast.error(
            "Gagal membuat produk: " + err?.response?.data?.error ||
              "Unknown error"
          );
        },
      }
    );
  };

  return (
    <PageLayout className="items-center justify-center">
      <div className="flex flex-col items-center w-full max-w-md border border-stone-200 rounded-xl bg-white shadow-sm">
        <div className="p-6 w-full">
          <h3 className="text-stone-800 text-2xl font-bold text-center mb-6">
            Tambah Produk Baru
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Nama Produk
              </label>
              <Input
                name="name"
                type="text"
                placeholder="Masukkan nama produk..."
                value={form.name}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Deskripsi
              </label>
              <textarea
                name="description"
                placeholder="Masukkan deskripsi produk..."
                value={form.description}
                onChange={handleInputChange}
                className="w-full min-h-28 p-2 border rounded-md text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                URL Gambar
              </label>
              <Input
                name="image"
                type="text"
                placeholder="https://example.com/image.jpg"
                value={form.image}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Kategori</label>
              <Select
                value={form.category}
                onValueChange={handleCategoryChange}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Pilih kategori" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Kategori</SelectLabel>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Stok</label>
                <Input
                  name="stock"
                  type="number"
                  value={form.stock}
                  onChange={handleInputChange}
                  min={0}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Harga</label>
                <Input
                  name="price"
                  type="number"
                  value={form.price}
                  onChange={handleInputChange}
                  min={0}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="w-full py-2 rounded-md bg-stone-800 text-white font-semibold hover:opacity-90 transition-all"
            >
              {isPending ? "Menyimpan..." : "Simpan Produk"}
            </button>
          </form>
        </div>
      </div>
    </PageLayout>
  );
}
