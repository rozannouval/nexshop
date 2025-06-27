"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import InputSearch from "./inputSearch";
import { useState } from "react";

const Navbar = () => {
  const menuLink = [
    {
      linkTitle: "Beranda",
      linkHref: "/",
    },
    {
      linkTitle: "Rilis Terbaru",
      linkHref: "/rilis-terbaru",
    },
    {
      linkTitle: "Produk Terbaik",
      linkHref: "/produk-terbaik",
    },
    {
      linkTitle: "Pembayaran",
      linkHref: "/pembayaran",
    },
  ];

  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <nav className="md:sticky top-0 left-0 z-[99] w-full p-4 bg-white font-medium">
      <div className="container mx-auto flex justify-between items-center">
        <div className="block xl:hidden mr-2">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="cursor-pointer flex items-center gap-2">
                <Menu /> Menu
              </button>
            </SheetTrigger>
            <SheetContent className="z-[999] p-4" side="left">
              <SheetTitle>NEXSHOP</SheetTitle>
              <div>
                <p className="text-stone-500">Menu</p>
                <div className="flex flex-col mt-2">
                  {menuLink.map((menu, index) => (
                    <Link
                      key={index}
                      href={menu.linkHref}
                      onClick={handleClose}
                      className="text-lg font-medium hover:bg-stone-100 p-2"
                    >
                      {menu.linkTitle}
                    </Link>
                  ))}
                </div>
              </div>

              <SheetFooter className="md:hidden">
                <Link
                  href={"/masuk"}
                  onClick={handleClose}
                  className="bg-stone-800 text-white p-2 text-center font-bold text-lg rounded-md hover:opacity-80 transition-all"
                >
                  Masuk
                </Link>
                <Link
                  href={"/daftar"}
                  onClick={handleClose}
                  className="p-2 text-center font-bold text-lg rounded-md hover:bg-stone-100 transition-all"
                >
                  Tidak Punya Akun?
                </Link>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden xl:flex items-center gap-x-1">
          <Link href="/" className="mr-8">
            NEXSHOP
          </Link>
          {menuLink.map((menu, index) => (
            <Link
              key={index}
              href={menu.linkHref}
              className="py-1 px-3 hover:bg-stone-100 rounded-md transition-all"
            >
              {menu.linkTitle}
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2">
          <InputSearch />
          <div className="hidden md:flex items-center gap-2">
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
