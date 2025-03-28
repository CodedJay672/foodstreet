import MyShopinfo from "@/components/MyShopinfo";
import { getShops } from "@/lib/actions/shop.actions";
import { getCurrentUser, getLoggedInUser } from "@/lib/actions/user.actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MyShop = async () => {
  const user = await getLoggedInUser();
  const currentUser = await getCurrentUser();

  if (!user || !user.emailVerification) {
    return (
      <section className="w-full min-h-screen flex-center flex-col">
        <div className="w-full max-w-screen-md p-6 flex-center flex-col gap-10">
          <Image
            src="/assets/notify.svg"
            alt="notice"
            width={260}
            height={200}
          />
          <h1 className="text-raw-300 font-medium text-xl lg:text-2xl text-center text-pretty p-6">
            Only registered and verified users can create a shop
          </h1>

          <Link
            href="/sign-up"
            className="bg-raw-300 text-white px-16 py-1 rounded-full"
          >
            Create acount
          </Link>
        </div>
      </section>
    );
  }

  const businesses = await getShops(currentUser?.documents?.[0].$id);

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
