"use client";

import Image from "next/image";
import { Models } from "node-appwrite";
import React from "react";
import { Button } from "../ui/button";

const ProductCard = (product: Models.Document) => {
  return (
    <article className="w-full overflow-hidden cursor-pointer group border border-gray-300 rounded-xl flex justify-between flex-col">
      <div className="flex-center flex-1 p-10">
        <Image
          src={product.imageUrl}
          alt={product.name}
          height={80}
          width={200}
          className="group-hover:scale-105 transition-all"
        />
      </div>
      <div className="w-full px-2 lg:px-4 py-2">
        <div className="flex-between">
          <div className="space-y-1">
            <h1 className="text-lg font-bold">{product.name}</h1>
            <p className="text-sm font-medium">({product.measure})</p>
          </div>

          <p className="text-sm">N{product.initPrice}</p>
        </div>
        <p className="w-full">{product.shop?.name}</p>
        <Button variant="default" className="w-full rounded-md text-light">
          Add to cart
        </Button>
      </div>
    </article>
  );
};

export default ProductCard;
