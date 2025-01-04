import ProductDetails from '@/components/productDetails/ProductDetails';
import React from 'react'


const getProductById = async (id)=>{
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    // console.log(response);
    
    const product = response.json()
    return product
  } catch (error) {
    console.log(error);
  }

}



export default async function page({params}) {

  const productData = await getProductById(params.id)
    await console.log(productData);
    
  return (
    <div><ProductDetails productData={productData}/></div>
  )
}
