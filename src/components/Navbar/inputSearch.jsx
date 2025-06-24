"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";

const InputSearch = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && query.trim()) {
      e.preventDefault()
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="relative rounded-md mr-2">
      <Search className="absolute left-3 top-2 w-5 h-5 text-gray-400" />
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Cari barang..."
        className="pl-10 border-0 shadow-none focus:outline-0 focus-visible:ring-0 bg-stone-100 text-stone-500"
      />
    </div>
  );
};

export default InputSearch;
