import BusinessForm from "@/components/shared/BusinessForm";
import { getCurrentUser } from "@/lib/actions/user.actions";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

const CreateBusiness = async () => {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <section className="w-full min-h-screen flex-center flex-col py-10">
      <div className="flex items-center gap-10 w-full px-6 lg:px-32">
        <div className="h-max w-full hidden lg:flex items-center justify-center">
          <Image
            src="/assets/access-account.svg"
            alt="business form"
            width={500}
            height={300}
            className="object-center"
          />
        </div>
        <div className="w-full flex-center flex-col px-6 lg:px-16">
          <h1 className="text-3xl lg:text-5xl font-bold text-raw-300">
            Create Business
          </h1>
          <p className="text-base font-medium text-center">
            Please fill out form below.
          </p>
          <BusinessForm creator={user?.$id} />
        </div>
      </div>
    </section>
  );
};

export default CreateBusiness;
