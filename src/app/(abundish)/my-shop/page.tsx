import Searchbar from "@/components/shared/Searchbar";
import ShopView from "@/components/shared/ShopView";
import ShowShopMenu from "@/components/shared/ShowShopMenu";
import { getShops } from "@/lib/actions/shop.actions";
import { getCurrentUser, getLoggedInUser } from "@/lib/actions/user.actions";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const MyShop = async ({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) => {
  const user = await getLoggedInUser();
  const currentUser = await getCurrentUser();
  const { q } = await searchParams;

  if (!user || !user.emailVerification) {
    redirect("/sign-in");
  }

  const businesses = await getShops(q);

  return (
    <section className="m-full min-h-screen pb-10">
      <div className="w-full max-w-6xl mx-auto">
        <div className="w-full flex-between gap-6 p-6 bg-white rounded-xl relative">
          <h1 className="hidden lg:block text-lg font-bold">Search shops</h1>
          <div className="flex-1 border border-raw-primary rounded-full">
            <Searchbar />
          </div>
          <ShowShopMenu id={currentUser?.$id} />
          <div className="hidden lg:flex gap-2">
            <Link
              href={`/my-shop/${currentUser?.$id}`}
              className="text-raw-primary border border-raw-primary px-6 py-2 rounded-full"
            >
              My Shop
            </Link>
            <Link
              href="/create-business"
              className="text-light bg-raw-primary px-6 py-2 rounded-full"
            >
              Create
            </Link>
          </div>
        </div>

        <div className="w-full p-6 space-y-6">
          <div className="w-full">
            <h1 className="text-base lg:text-lg font-medium text-raw-primary">
              Top Sellers
            </h1>
            <div className="w-full h-40 flex-center">
              <p className="text-base text-raw-primary-light">No shops yet</p>
            </div>
          </div>

          <div className="w-full">
            <h1 className="text-base lg:text-lg font-semibold mb-4 text-raw-primary">
              All Shops
            </h1>
            <div className="w-full grid grid-cols-2 lg:grid-cols-5">
              {businesses.total ? (
                businesses?.documents.map((shop) => (
                  <ShopView
                    key={shop.$id}
                    id={shop.$id}
                    name={shop.name}
                    location={shop.location}
                    occupation={shop.occupation}
                    imgUrl={shop.imgUrl}
                  />
                ))
              ) : (
                <p className="col-span-2 lg:col-span-5 text-sm text-raw-primary/60 font-thin text-center">
                  No result for {q}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyShop;
