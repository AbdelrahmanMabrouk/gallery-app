import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

interface Iprop {
  product: Product;
}

export default function ProductCard({ product }: Iprop) {
  return (
    <div className="group relative block overflow-hidden rounded-lg shadow-lg bg-white w-full mx-auto">
      <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
        <span className="sr-only">Wishlist</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </button>

      <Image
        width={200}
        height={200}
        src={product.image}
        alt={product.title}
        className="h-64 w-full object-cover rounded-t-lg transition duration-500 group-hover:scale-105"
      />

      <div className="p-4 sm:p-6">
        <p className="text-gray-700 text-lg font-semibold">${product.price}</p>

        <h3 className="mt-2 text-lg font-medium text-gray-900 line-clamp-1">
          {product.title}
        </h3>

        <p className="mt-3 text-sm text-gray-700 line-clamp-3">
          {product.description}
        </p>

        <Link href={`/product/${product.id}`} className="mt-4 block w-full rounded bg-gray-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-700">
          Show Details
        </Link>
      </div>
    </div>
  );
}
