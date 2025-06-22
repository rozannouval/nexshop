import Link from "next/link";
import React from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

const Navbar = () => {
  const menuLink = [
    {
      id: 1,
      linkTitle: "Beranda",
      linkHref: "/",
    },
    {
      id: 2,
      linkTitle: "Rilis Terbaru",
      linkHref: "/rilis-terbaru",
    },
    {
      id: 3,
      linkTitle: "Produk Terbaik",
      linkHref: "/produk-terbaik",
    },
    {
      id: 4,
      linkTitle: "Pembayaran",
      linkHref: "/pembayaran",
    },
  ];
  return (
    <nav className="sticky top-0 left-0 z-[999] w-full p-4 bg-white font-medium">
      <div className="container mx-auto flex justify-between items-center">
        <div className="hidden md:flex items-center gap-x-1">
          <Link href="/" className="mr-8">
            NEXSHOP
          </Link>
          {menuLink.map((item) => (
            <Link
              key={item.id}
              href={item.linkHref}
              className="py-1 px-3 hover:bg-stone-100 rounded-md transition-all"
            >
              {item.linkTitle}
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="relative rounded-md mr-2">
            <Search className="absolute left-3 top-2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Cari sesuatu..."
              className="pl-10 border-0 shadow-none focus:outline-0 focus-visible:ring-0 bg-stone-100 text-stone-500"
            />
          </div>
          <div className="flex items-center ">
            <Link
              href="/masuk"
              className="bg-stone-800 text-white px-3 py-1 rounded-md hover:opacity-80 transition-all"
            >
              Masuk
            </Link>
            <Link
              href="/daftar"
              className="py-1 px-3 hover:bg-stone-100 rounded-md transition-all"
            >
              Tidak Punya Akun?
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
