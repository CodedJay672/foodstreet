import ProductCard from "@/components/shared/ProductCard";
import { getAllProducts } from "@/lib/actions/product.actions";
import React from "react";

const FoodStuffs = async () => {
  const allProducts = await getAllProducts();

  return (
    <section className="w-full min-h-screen p-1">
      {allProducts && allProducts.total > 0 ? (
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-1 lg:gap-2">
          {allProducts?.documents.map((product) => (
            <ProductCard key={product.$id} {...product} />
          ))}
        </div>
      ) : (
        <div className="w-full max-w-screen-md flex-center">
          <p className="text-sm text-center font-gray-300">No Products yet</p>
        </div>
      )}
    </section>
  );
};

export default FoodStuffs;
