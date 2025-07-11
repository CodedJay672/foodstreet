import ProductForm from "@/components/ProductForm";
import { getCurrentUser } from "@/lib/data/user.data";
import { redirect } from "next/navigation";
import React from "react";

const Sell = async () => {
  const user = await getCurrentUser();

  if (!user || !user?.shops.length) redirect("/create-business");

  return (
    <section className="w-full min-h-screen px-6 lg:px-10 py-10 lg:py-16">
      <h1 className="text-xl lg:text-3xl text-raw-primary font-bold text-center">
        Enter product details
      </h1>
      <p className="text-base font-normal text-center">
        Ensure to provide enough information
      </p>

      <div className="w-full max-w-screen-md flex-center mx-auto mt-6 lg:mt-10 p-1 lg:p-10">
        <ProductForm shop={user?.shops?.[0].$id} />
      </div>
    </section>
  );
};

export default Sell;
