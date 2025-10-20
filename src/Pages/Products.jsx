import { useMemo, useState } from "react";
import { useLoaderData } from "react-router";
import ProductCards from "../Components/ProductCard";

const Products = () => {
  const products = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("trending");

  // Sort and filter products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.companyName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort based on selected option
    switch (sortBy) {
      case "rating":
        return filtered.sort((a, b) => b.ratingAvg - a.ratingAvg);
      case "downloads":
        return filtered.sort((a, b) => b.downloads - a.downloads);
      case "name":
        return filtered.sort((a, b) => a.title.localeCompare(b.title));
      case "trending":
      default:
        return filtered.sort((a, b) => b.reviews - a.reviews);
    }
  }, [products, searchTerm, sortBy]);

  const sortOptions = [
    { value: "trending", label: "Sort By Trending" },
    { value: "rating", label: "Sort By Rating" },
    { value: "downloads", label: "Sort By Downloads" },
    { value: "name", label: "Sort By Name" }
  ];

  const currentSortLabel = sortOptions.find(option => option.value === sortBy)?.label || "Sort By Trending";

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">All Our Applications</h1>
        <p className="text-gray-600">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-semibold text-gray-900">
          ({filteredAndSortedProducts.length}) Apps Found
        </h2>
        
        <div className="flex items-center space-x-4">
          <input 
            type="text" 
            placeholder="Search Apps" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input input-bordered input-md w-64" 
          />
          
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-outline btn-md">
              {currentSortLabel}
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              {sortOptions.map((option) => (
                <li key={option.value}>
                  <a 
                    onClick={() => setSortBy(option.value)}
                    className={sortBy === option.value ? "active" : ""}
                  >
                    {option.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAndSortedProducts.length > 0 ? (
          filteredAndSortedProducts.map((product) => (
            <ProductCards key={product.id} product={product} />
          ))
        ) : (
          <div className="col-span-full text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-xl text-gray-500 mb-2">No apps found</p>
            <p className="text-gray-400">Try searching with different keywords</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;