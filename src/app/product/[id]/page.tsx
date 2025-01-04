import ProductDetails from '@/components/productDetails/ProductDetails';
import React from 'react';

interface ProductData {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

interface PageParams {
  id: string;
}

const getProductById = async (id: string): Promise<ProductData | null> => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await response.json();
    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};

// Define the page component with typed props
export default async function Page({ params }: { params: PageParams }) {
  const productData = await getProductById(params.id);

  if (!productData) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <ProductDetails productData={productData} />
    </div>
  );
}
