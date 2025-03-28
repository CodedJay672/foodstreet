import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Models } from "node-appwrite";
import React from "react";

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
      <Link
        href={`/my-shop/${product.$id}`}
        className="w-max text-2xl font-bold text-raw-300 px-2 lg:px-4 py-1"
      >
        {/* <h1 className="text-lg">{product.shop.name}</h1> */}
      </Link>
      <div className="w-full px-2 lg:px-4 py-2">
        <div className="flex items-center gap-1">
          <h1 className="text-lg font-bold">{product.name}</h1>
          <p className="text-sm font-medium">({product.measure})</p>
        </div>

        <div className="mt-1 flex-between">
          <div className="flex items-center gap-2">
            <p className="text-sm line-through text-gray-400">
              N{product.initPrice}
            </p>
            <p className="text-base font-semibold">N{product.discPrice}</p>
          </div>
          <span
            className={cn(
              `text-[10px] lg:text-sm block text-raw-300 bg-raw-100 py-1 px-2 rounded-full`,
              {
                "bg-rose-100 text-red-500": product.status === "outOfStock",
              }
            )}
          >
            {product.status}
          </span>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
