import ProductDetails from '@/components/productDetails/ProductDetails';
import { notFound } from 'next/navigation';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

interface PageParams {
  id: string;
}

const getProductById = async (id: string): Promise<Product | null> => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await response.json();
    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};

export default async function ProductPage({ params }: { params: PageParams }) {
  const productData = await getProductById(params.id);

  if (!productData) {
    notFound(); // This will trigger a 404 page in Next.js
  }

  return (
    <div>
      <ProductDetails productData={productData} />
    </div>
  );
}
