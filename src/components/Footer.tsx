import { getCurrentUser } from "@/lib/data/user.data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMail } from "react-icons/io5";

const Footer = async () => {
  const user = await getCurrentUser();

  return (
    <section className="w-full bg-black pt-24">
      <div className="w-full max-w-screen-md flex justify-between flex-col lg:flex-row mx-auto space-y-10 lg:space-y-0 text-white px-6">
        <div className="w-51 flex py-4 gap-6">
          <Link href="#">
            <Image
              src="/GooglePlay.png"
              alt="google download"
              width={100}
              height={50}
            />
          </Link>
          <Link href="#">
            <Image
              src="/AppStore.png"
              alt="google download"
              width={100}
              height={50}
            />
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-base font-bold">About</h1>
          <Link href="#" className="text-sm text-gray-300">
            About us
          </Link>
          <Link href="#" className="text-sm text-gray-300">
            Features
          </Link>
          <Link href="#" className="text-sm text-gray-300">
            News
          </Link>
          <Link href="#" className="text-sm text-gray-300">
            Menu
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-base font-bold">Company</h1>
          <Link href="#" className="text-sm text-gray-300">
            Why FoodStreet
          </Link>
          <Link href="#" className="text-sm text-gray-300">
            Partner with us
          </Link>
          <Link href="#" className="text-sm text-gray-300">
            FAQ
          </Link>
          <Link href="#" className="text-sm text-gray-300">
            Blog
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-base font-bold">Support</h1>
          <Link
            href={user ? `/user/${user.$id}` : "/sign-in"}
            className="text-sm text-gray-300"
          >
            Account
          </Link>
          <Link href="#" className="text-sm text-gray-300">
            Support center
          </Link>
          <Link href="/learn-more" className="text-sm text-gray-300">
            Become an agent
          </Link>
          <Link href="/create-business" className="text-sm text-gray-300">
            Become a vendor
          </Link>
          <Link href="#" className="text-sm text-gray-300">
            Contact us
          </Link>
        </div>

        <div className="flex flex-col gap-4 mb-10">
          <h1 className="text-base font-bold">Get in Touch</h1>
          <p className="text-sm w-44 lg:w-32 text-gray-300">
            Question or Feedback? We'd love to hear from you
          </p>
          <Link
            href="mailto:abc@gmail.com"
            className="w-max px-4 py-1 border border-primary-light rounded-md flex-center text-sm text-gray-300 gap-3"
          >
            Email
            <IoMail size={10} className="fill-highlight-300" />
          </Link>
        </div>
      </div>

      <div className="w-full border-t border-gray-300 flex-center p-5 mt-24 mb-10 lg:mb-0">
        <span className="text-gray-300 text-xs text-center">
          Created by Wakocoding &copy; {new Date().getFullYear()}. All rights
          reserved
        </span>
      </div>
    </section>
  );
};

export default Footer;
