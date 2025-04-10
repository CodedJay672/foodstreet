"use client";

import React, { useState } from "react";
import { Models } from "node-appwrite";
import { Button } from "@/components/ui/button";
import { MdLocationPin, MdMailOutline, MdPhone } from "react-icons/md";

import { cn } from "@/lib/utils";
import ProductCard from "./shared/ProductCard";
import ShopImage from "./shared/ShopImage";
import ShopBanner from "./shared/ShopBanner";

const MyShopinfo = ({ shopInfo }: { shopInfo: Models.Document[] }) => {
  const [vendor] = shopInfo;
  const [seeMore, setSeeMore] = useState(false);

  const handleSeeMe = () => {
    setSeeMore((prev) => !prev);
  };

  return (
    <div className="w-full max-w-6xl mx-auto bg-white min-h-screen">
      <div className="w-full h-32 lg:h-44 bg-gray-200 relative">
        <ShopBanner id={vendor.$id} bannerUrl={vendor.bannerUrl} />
      </div>

      <div className="flex justify-center flex-col lg:flex-row lg:justify-start items-center gap-10 px-6 lg:px-10 relative w-full">
        <div className="space-y-2 flex-center flex-col lg:flex-row -mt-10 lg:-mt-20">
          <ShopImage
            vendorID={vendor.$id}
            name={vendor.name}
            imageUrl={vendor.imageUrl}
          />
        </div>
        <div className="w-full lg:py-6 ">
          <h1 className="text-xl lg:text-2xl font-bold text-center lg:text-left">
            {vendor.name}
          </h1>
          <div className="flex items-center justify-center lg:justify-start gap-2">
            <p className="text-base font-thin flex-center">
              <MdLocationPin size={20} className="text-gray-400" />
              {vendor.location} |
            </p>
            <p className="text-base font-thin flex-center">
              {vendor.occupation} |
            </p>
            <p className="text-base font-thin flex-center">
              {vendor["work-address"]}
            </p>
          </div>
          <div className="flex items-center justify-center lg:justify-start">
            <p className="text-base font-thin flex-center gap-1">
              <MdMailOutline size={20} className="text-gray-400" />
              {vendor.email}
            </p>
          </div>
          <div className="flex items-center gap-2 justify-center lg:justify-start">
            <p className="text-base font-thin flex-center gap-1">
              <MdPhone size={20} className="text-gray-400" />
              {vendor.phone}
            </p>
          </div>
          <div className="flex items-center gap-2 justify-center lg:justify-start">
            <p className="text-base font-thin flex-center gap-1">
              Agent: {vendor.referrer.name}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 lg:mt-10 border-t border-gray-300 p-6 lg:p-10">
        <h2 className="text-xl lg:text-2xl font-semibold">About</h2>
        <div
          className={cn(`mt-4 h-24 overflow-hidden transition-[height]`, {
            "h-auto": seeMore,
          })}
        >
          {vendor.description.split("\n").map((item: string, idx: number) => (
            <p
              key={idx}
              className="text-base text-pretty font-light text-gay-400"
            >
              {item}
            </p>
          ))}
        </div>
        <div className="w-full flex-center mt-2">
          <Button
            variant="outline"
            onClick={handleSeeMe}
            className="border-0 text-raw-300 cursor-pointer"
          >
            see {seeMore ? "less" : "more"}
          </Button>
        </div>
      </div>

      <div className="mt-4 lg:mt-10 p-6 lg:p-10 flex flex-col gap-4 min-h-60px w-full">
        <h2 className="text-xl lg:text-2xl font-semibold">All Products</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-1 lg:gap-2">
          {vendor.products && vendor.products?.length > 0 ? (
            vendor.products?.map((product: Models.Document) => (
              <ProductCard key={product.$id} {...product} />
            ))
          ) : (
            <div className="col-span-4 flex-center flex-col p-4">
              <p className="text-sm text-gray-300 text-center">
                No products yet!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyShopinfo;
