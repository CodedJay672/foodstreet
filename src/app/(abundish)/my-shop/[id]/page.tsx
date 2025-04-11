import AboutSection from "@/components/shared/AboutSection";
import ProductCard from "@/components/shared/ProductCard";
import ShopBanner from "@/components/shared/ShopBanner";
import ShopImage from "@/components/shared/ShopImage";
import { getShopsById } from "@/lib/actions/shop.actions";
import { getCurrentUser } from "@/lib/actions/user.actions";
import { Models } from "node-appwrite";
import React from "react";
import { MdLocationPin, MdMailOutline, MdPhone } from "react-icons/md";

const MyShop = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const user = await getCurrentUser();

  const myBusiness = await getShopsById(id);

  return (
    <section className="w-full max-w-4xl mx-auto bg-white min-h-screen">
      <div className="w-full h-32 lg:h-44 bg-gray-200 relative">
        <ShopBanner
          userId={user?.$id}
          id={myBusiness?.documents[0].$id}
          bannerUrl={myBusiness.documents?.[0].bannerUrl}
        />
      </div>

      <div className="flex justify-center flex-col lg:flex-row lg:justify-start items-center gap-10 px-6 lg:px-10 relative w-full">
        <div className="space-y-2 flex-center flex-col lg:flex-row -mt-10 lg:-mt-20">
          <ShopImage
            vendorID={myBusiness?.documents[0].$id}
            name={myBusiness?.documents[0].name}
            imageUrl={myBusiness?.documents[0].imageUrl}
            userId={user?.$id}
          />
        </div>
        <div className="w-full lg:py-6 ">
          <h1 className="text-xl lg:text-2xl font-bold text-center lg:text-left">
            {myBusiness?.documents[0].name}
          </h1>
          <div className="flex items-center justify-center lg:justify-start gap-2">
            <p className="text-base font-thin flex-center">
              <MdLocationPin size={20} className="text-gray-400" />
              {myBusiness?.documents[0].location} |
            </p>
            <p className="text-base font-thin flex-center">
              {myBusiness?.documents[0].occupation} |
            </p>
            <p className="text-base font-thin flex-center">
              {myBusiness?.documents[0]["work-address"]}
            </p>
          </div>
          <div className="flex items-center justify-center lg:justify-start">
            <p className="text-base font-thin flex-center gap-1">
              <MdMailOutline size={20} className="text-gray-400" />
              {myBusiness?.documents[0].email}
            </p>
          </div>
          <div className="flex items-center gap-2 justify-center lg:justify-start">
            <p className="text-base font-thin flex-center gap-1">
              <MdPhone size={20} className="text-gray-400" />
              {myBusiness?.documents[0].phone}
            </p>
          </div>
          <div className="flex items-center gap-2 justify-center lg:justify-start">
            <p className="text-sm font-thin text-gray-400 flex-center gap-1">
              AgentId: {myBusiness?.documents[0].agent?.refCode}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full my-10 p-6">
        <h1 className="text-lg font-bold text-raw-primary">About</h1>
        <AboutSection text={myBusiness.documents?.[0].description} />
      </div>

      <div className="mt-4 lg:mt-10 p-6 lg:p-10 flex flex-col gap-4 min-h-60px w-full">
        <h2 className="text-lg font-bold text-raw-primary">All Products</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-1 lg:gap-2">
          {myBusiness.documents?.[0].products &&
          myBusiness.documents?.[0].products?.length > 0 ? (
            myBusiness.documents?.[0].products?.map(
              (product: Models.Document) => (
                <ProductCard key={product.$id} {...product} />
              )
            )
          ) : (
            <div className="col-span-4 flex-center flex-col p-4">
              <p className="text-sm text-gray-300 text-center">
                No products yet!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MyShop;
