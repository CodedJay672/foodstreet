import Link from "next/link";
import React from "react";
import RestaurantCard from "./shared/RestaurantCard";

const Restaurants = () => {
  return (
    <section className="wrapper flex-center flex-col px-6 lg:px-0">
      <h1 className="text-3xl lg:text-4xl font-bold text-center px-4">
        Find Your Favorite Restaurants on FoodStreets
      </h1>
      <div className="w-full flex-between flex-col lg:flex-row space-y-10 lg:space-y-0 my-10">
        <RestaurantCard img="/kfc.png" name="KFC" link="#" />
        <RestaurantCard img="/dominos.png" name="Dominos" link="#" />
        <RestaurantCard
          img="/chicken-rep.png"
          name="Chicken Republic"
          link="#"
        />
        <RestaurantCard img="/mr-biggs.png" name="Mr Biggs" link="#" />
      </div>
      <Link
        href="#"
        className="w-full max-w-md bg-accent py-1 lg:py-2 lg:px-6 text-base rounded-full text-center"
      >
        Find Stores near you
      </Link>
    </section>
  );
};

export default Restaurants;
