import React from "react";
import ProductCard from "./shared/ProductCard";

const Products = () => {
  return (
    <section className="w-full p-6 my-24">
      <div className="flex-center flex-col gap-2">
        <h1 className="text-3xl lg:text-5xl font-bold text-raw-300">
          Products
        </h1>
        <p className="text-center text-base font-medium">
          Affordable fresh farm produce
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 lg:gap-4 mt-10">
        <ProductCard img="/assets/rice-bag.jpeg" name="Rice" price="90,000" />
        <ProductCard img="/assets/bag-beans.jpeg" name="beans" price="85,000" />
        <ProductCard
          img="/assets/crate-eggs.jpeg"
          name="Crate of eggs"
          price="9,000"
        />
        <ProductCard
          img="/assets/fish.jpeg"
          name="Fish (1 Kilo)"
          price="4,500"
        />
        <ProductCard
          img="/assets/fruit-mix.jpeg"
          name="Fruit mix"
          price="16,000"
        />
        <ProductCard
          img="/assets/pineapple.jpeg"
          name="Pineapple"
          price="2,500"
        />
        <ProductCard
          img="/assets/plantain.jpeg"
          name="Plantain"
          price="5,000"
        />
        <ProductCard
          img="/assets/red-oil.jpeg"
          name="Red oil"
          price="120,000"
        />
        <ProductCard
          img="/assets/sweet-potato.jpeg"
          name="Sweet potato"
          price="3,000"
        />
        <ProductCard
          img="/assets/tomato-bucket.jpeg"
          name="Tomato Bucket"
          price="5,000"
        />
        <ProductCard
          img="/assets/tubar-yam.jpeg"
          name="Yam Tuber"
          price="6,000"
        />
        <ProductCard
          img="/assets/veg-oil.jpeg"
          name="Vegetable Oil"
          price="100,000"
        />
      </div>
    </section>
  );
};

export default Products;
