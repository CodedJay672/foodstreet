import React from "react";
import ProductCard from "./shared/ProductCard";
import { getAllProducts } from "@/lib/actions/product.actions";

const Products = async () => {
  const allProducts = await getAllProducts();

  return (
    <section className="w-full p-1 my-24">
      <div className="flex-center flex-col gap-2">
        <h1 className="text-2xl lg:text-4xl font-bold text-raw-300">
          Products
        </h1>
        <p className="text-center text-base font-medium">
          Affordable fresh farm produce
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 lg:gap-4 mt-10">
        {allProducts && allProducts?.total > 0 ? (
          allProducts?.documents.map((product) => (
            <ProductCard key={product.$id} {...product} />
          ))
        ) : (
          <div className="col-span-4 flex-center">
            <p className="text-sm text-gray-400">No products yet.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
