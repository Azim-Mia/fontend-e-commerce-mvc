"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function SearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState("");

  useEffect(() => {
    const query = searchParams.get("q") || "";
    setSearch(query);
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const encoded = encodeURIComponent(search);
    router.push(`/search?q=${encoded}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 p-4">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
        className="border px-3 py-2 rounded w-full"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Search
      </button>
    </form>
  );
}
