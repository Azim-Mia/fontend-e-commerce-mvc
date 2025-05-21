import SearchBar from '@/components/SearchBar';
import SearchInput from "@/components/SearchInput";

// Example static data
const items = [
  { id: 1, title: "Next.js Guide" },
  { id: 2, title: "React Fundamentals" },
  { id: 3, title: "Search Page Tutorial" },
  { id: 4, title: "Deploying with Vercel" },
];

export default function SearchPage({ searchParams }) {
  const query = (searchParams.q || "").toLowerCase();
  const results = items.filter((item) =>
    item.title.toLowerCase().includes(query)
  );

  return (
    <div className="max-w-xl mx-auto px-4 py-6">
      <SearchBar />
      <h1 className="text-2xl font-semibold mb-4">Search</h1>
      <SearchInput />
      <div className="mt-4 space-y-3">
        {results.length ? (
          results.map((item) => (
            <div key={item.id} className="bg-gray-100 p-4 rounded shadow">
              {item.title}
            </div>
          ))
        ) : (
          <p className="text-gray-500">No results found.</p>
        )}
      </div>
    </div>
  );
}
