import Image from "next/image";
import React from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

interface Iprop {
  productData: Product;
}

export default function ProductDetails({ productData }: Iprop) {
  console.log(productData);

  const fallbackImage = "/path/to/fallback-image.jpg"; 
  
  const imageSrc = productData.image && productData.image.startsWith("http") ? productData.image : fallbackImage;

  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
            <div>
              <div className="max-w-lg md:max-w-none">
                <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                  {productData.title}
                </h2>
                <p className="mt-4 text-gray-900 font-medium">{productData.category}</p>

                <p className="mt-4 text-gray-700">{productData.description}</p>
                <div className="flex justify-end">
                  <p className="text-gray-700 text-lg font-semibold">${productData.price}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <Image
                src={imageSrc}
                alt={productData.title}
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
