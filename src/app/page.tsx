import Link from "next/link";

export default function Home() {
  return (
   <>
   
   <div className="flex flex-col justify-center items-center h-screen gap-2">
          <h1>Welcome to Product Gallary</h1>
   <Link href={`/product`} className=" text-center w-60 rounded bg-gray-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-700">
          Show All Product
        </Link>
   </div>
   
   </>
  );
}
