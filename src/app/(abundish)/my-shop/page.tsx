import MyShopinfo from "@/components/MyShopinfo";
import { getShops } from "@/lib/actions/shop.actions";
import { getCurrentUser, getLoggedInUser } from "@/lib/actions/user.actions";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const MyShop = async () => {
  const user = await getLoggedInUser();
  const currentUser = await getCurrentUser();

  if (!user || !user.emailVerification) {
    redirect("/sign-in");
  }

  const businesses = await getShops(currentUser?.$id);

  return (
    <section className="m-full min-h-screen pb-10">
      {businesses?.documents && businesses.total ? (
        <MyShopinfo shopInfo={businesses.documents} />
      ) : (
        <div className="w-full min-h-screen flex-center">
          <div className="w-full max-w-screen-md flex-center flex-col p-6 bg-white rounded-xl">
            <h1 className="text-center">
              You have {businesses.total} active shops
            </h1>
            <Link
              href="/create-business"
              className="text-white bg-raw-300 px-16 py-2 rounded-full"
            >
              Create business
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

export default MyShop;
