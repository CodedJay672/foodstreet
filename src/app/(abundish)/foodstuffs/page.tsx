import Products from "@/components/Products";
import Searchbar from "@/components/shared/Searchbar";
import { getAllProducts } from "@/lib/actions/product.actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FoodStuffs = async ({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) => {
  const { q } = await searchParams;
  const allProducts = await getAllProducts(undefined, q);

  return (
    <section className="w-full min-h-screen p-1">
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row justify-center items-center gap-1 lg:gap-24 px-2 lg:px-2 py-3 my-4 ">
        <h1 className="hidden lg:block text-lg lg:text-xl font-semibold">
          Fresh Farm Products
        </h1>
        <div className="w-full lg:flex-1 border border-raw-primary rounded-full">
          <Searchbar />
        </div>
      </div>
      <div className="w-full max-w-6xl mx-auto px-4 lg:px-24 flex-between flex-col lg:flex-row bg-raw-accent lg:gap-5">
        <div className="space-y-6 lg:space-y-3 flex-1 py-16 px-6 lg:py-24 ">
          <h2 className="text-raw-primary font-bold text-3xl lg:text-4xl">
            Fresh Farm Products, Delivered to your Doorstep
          </h2>
          <p className="text-base text-raw-primary font-normal my-3">
            We ensure to deliver your fresh farm products everyday
          </p>

          <Link
            href="/FoodStuffs-subscription"
            className="text-raw-accent-light bg-raw-primary py-2 px-4  rounded-lg"
          >
            Subscribe Now
          </Link>
        </div>
        <Image
          src="/scooter.png"
          alt="delivery"
          height={200}
          width={400}
          className="place-items-baseline lg:pt-16"
        />
      </div>

      <div className="flex-center flex-col lg:flex-row gap-7 w-full max-w-6xl mx-auto my-10">
        <div className="w-64 h-72 rouded-lg shadow-md">
          <Image
            src="/abundish-special.png"
            alt="abundish-special"
            width={300}
            height={300}
            className="object-cover mb-2"
          />

          <p className="text-base lg:text-lg font-inter font-normal text-center">
            Abundish Special
          </p>
        </div>
        <div className="w-64 h-72 rouded-lg shadow-md">
          <Image
            src="/gift-voucher.png"
            alt="abundish-special"
            width={300}
            height={300}
            className="object-cover mb-2"
          />

          <p className="text-base lg:text-lg font-inter font-normal text-center">
            Gift to that Special Someone
          </p>
        </div>
        <div className="w-64 h-72 rouded-lg shadow-md">
          <Image
            src="/premium-card.png"
            alt="abundish-special"
            width={300}
            height={300}
            className="object-cover mb-2"
          />

          <p className="text-base lg:text-lg font-inter font-normal text-center">
            Premium Package
          </p>
        </div>
      </div>

      <Products />
    </section>
  );
};

export default FoodStuffs;
