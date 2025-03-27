import Image from "next/image";
import { Models } from "node-appwrite";
import React from "react";

const ProductCard = (product: Models.Document) => {
  return (
    <article className="w-full overflow-hidden cursor-pointer group border border-gray-300 rounded-xl flex justify-between flex-col">
      <div className="flex-center flex-1">
        {product.imageUrl ? (
          <Image
            src={product.imageUrl}
            alt={product.name}
            height={80}
            width={200}
            className="group-hover:scale-105 transition-all"
          />
        ) : (
          <></>
        )}
      </div>
      <div className="flex-between p-5">
        <div className="mt-5flex flex-col">
          <h1 className="text-base font-bold">{product.name}</h1>
          <p className="text-sm">N{product.discPrice}</p>
        </div>
        <span className="text-[10px] lg:text-sm block text-raw-300 bg-raw-100 py-1 px-2 rounded-full">
          {product.status}
        </span>
      </div>
    </article>
  );
};

export default ProductCard;
