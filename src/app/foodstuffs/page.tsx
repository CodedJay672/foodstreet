import Products from "@/components/Products";
import { getAllProducts } from "@/lib/actions/product.actions";
import Link from "next/link";
import React from "react";

const FoodStuffs = async () => {
  const allProducts = await getAllProducts();

  return (
    <section className="w-full min-h-screen p-1">
      <div className="w-full px-4 lg:px-24 py-10 flex-center flex-col bg-raw-100 gap-5">
        <h1 className="text-raw-300 font-bold text-3xl lg:text-4xl">
          Foodstuffs Plan
        </h1>
        <p className="text-base font-normal text-center px-4 mt-1 w-full lg:w-xl">
          Plan your finances and feeding schedule with ease! Become an Abundish
          Premium Card Holder. Join Abundish Premium today and streamline your
          grocery shopping!
        </p>
        <div className="flex items-center gap-4 lg:gap-6">
          <div className="w-max h-40 rounded-xl p-4 mx-auto flex-center flex-col">
            <p className="text-xl leading-6">
              Enjoy 20% discount on all Foodstuffs purchase
            </p>
            <p className="text-xl leading-6">
              Convenient delivery of groceries when needed
            </p>
          </div>
        </div>

        <Link
          href="/FoodStuffs-subscription"
          className="text-white bg-raw-300 py-2 px-4  rounded-full"
        >
          Subscribe Now
        </Link>
      </div>

      <Products />
    </section>
  );
};

export default FoodStuffs;
