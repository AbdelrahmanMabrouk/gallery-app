"use client";

import ProductCard from "@/components/productCard/ProductCard";
import React, { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";

export default function Product() {
  const [allProducts, setAllProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetch("https://fakestoreapi.com/products");
        const products = await data.json();
        setAllProducts(products);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = allProducts.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center pb-8">Our Products</h2>

      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search by product name"
          className="p-2 w-full sm:w-2/3 md:w-1/2 border border-gray-300 rounded-lg"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Show products or loading indicator */}
      {loading ? (
        <div className="flex justify-center items-center h-60">
        <MoonLoader color="#374151" />
      </div>
      ) : filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <p className="text-gray-600">No products found</p>
        </div>
      )}
    </div>
  );
}
