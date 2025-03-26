import { runInCleanSnapshot } from "next/dist/server/app-render/clean-async-snapshot-instance";
import Image from "next/image";
import { Models } from "node-appwrite";
import React from "react";
import { MdLocationPin, MdMailOutline, MdPhone } from "react-icons/md";

const MyShopinfo = ({ shopInfo }: { shopInfo: Models.Document[] }) => {
  const [vendor] = shopInfo;

  return (
    <div className="w-full max-w-screen-md ml-0 lg:ml-64 bg-white min-h-screen">
      <div className="w-full h-60 lg:44 bg-gray-200 relative">
        {vendor.bannerUrl && (
          <Image src={vendor.bannerUrl} alt={vendor.name} fill />
        )}
      </div>
      <div className="flex items-center gap-10 px-10 relative">
        <div className="w-40 h-40 rounded-full overflow-hidden flex-center border-2 border-white bg-gray-300 absolute -top-20 left-40 lg:left-10">
          <Image src={vendor.imageUrl} alt="profile" fill />
        </div>
        <div className="w-full pt-24 lg:py-6 px-4 lg:px-44 ">
          <h1 className="text-2xl lg:text-4xl font-bold text-center lg:text-left">
            {vendor.name}
          </h1>
          <div className="flex items-center justify-center lg:justify-start gap-2">
            <p className="text-base text-gray-400 flex-center">
              <MdLocationPin size={20} className="text-gray-400" />
              {vendor.location} |
            </p>
            <p className="text-base text-gray-400 flex-center">
              {vendor.occupation} |
            </p>
            <p className="text-base text-gray-400 flex-center">
              {vendor["work-address"]}
            </p>
          </div>
          <div className="flex items-center justify-center lg:justify-start">
            <p className="text-base text-gray-400 flex-center gap-1">
              <MdMailOutline size={20} className="text-gray-400" />
              {vendor.email}
            </p>
          </div>
          <div className="flex items-center gap-2 justify-center lg:justify-start">
            <p className="text-base text-gray-400 flex-center gap-1">
              <MdPhone size={20} className="text-gray-400" />
              {vendor.phone}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6 lg:mt-10 border-t border-gray-300 p-6 lg:p-10">
        <h2 className="text-xl lg:text-2xl font-semibold">About</h2>
        <div className="mt-4">
          {vendor.description.split("\n").map((item: string, idx: number) => (
            <p
              key={idx}
              className="text-base text-pretty font-light text-gay-400"
            >
              {item}
            </p>
          ))}
        </div>
      </div>

      <div className="mt-6 lg:mt-10 p-6 lg:p-10 flex flex-col gap-4 min-h-60px w-full">
        <h2 className="text-base font-semibold">All Products</h2>
        <div className="flex-center">
          {vendor.products && vendor.products?.length > 0 ? (
            <></>
          ) : (
            // <ProductGallery {...vendor.products} />
            <p className="text-sm text-gray-300 text-center">
              No products yet!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyShopinfo;
