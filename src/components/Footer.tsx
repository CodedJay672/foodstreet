import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <section className="w-full pt-24 px-10 ">
      <div className="w-full max-w-screen-md flex justify-between flex-col lg:flex-row mx-auto space-y-10 lg:space-y-0">
        <div className="w-51 flex flex-col gap-6">
          <Image
            src="/assets/Logo.png"
            alt="footer logo"
            width={96}
            height={28}
          />
          <p className="text-xs font-bold">
            Our job is to always fill your tummy with delicious delicacies plus,
            swift and free delivery.
          </p>

          <div className="flex-between w-full pr-5">
            <FaFacebook
              size={16}
              className="text-highlight-300 cursor-pointer"
            />
            <FaTwitter
              size={16}
              className="text-highlight-300 cursor-pointer"
            />
            <FaInstagram
              size={16}
              className="text-highlight-300 cursor-pointer"
            />
            <FaLinkedin
              size={16}
              className="text-highlight-300 cursor-pointer"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-base font-bold">About</h1>
          <Link href="#" className="text-sm">
            About us
          </Link>
          <Link href="#" className="text-sm">
            Features
          </Link>
          <Link href="#" className="text-sm">
            News
          </Link>
          <Link href="#" className="text-sm">
            Menu
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-base font-bold">Company</h1>
          <Link href="#" className="text-sm">
            Why FoodStreet
          </Link>
          <Link href="#" className="text-sm">
            Partner with us
          </Link>
          <Link href="#" className="text-sm">
            FAQ
          </Link>
          <Link href="#" className="text-sm">
            Blog
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-base font-bold">Support</h1>
          <Link href="#" className="text-sm">
            Account
          </Link>
          <Link href="#" className="text-sm">
            Support center
          </Link>
          <Link href="#" className="text-sm">
            Feedback
          </Link>
          <Link href="#" className="text-sm">
            Contact us
          </Link>
          <Link href="#" className="text-sm">
            Accessibility
          </Link>
        </div>
        <div className="flex flex-col gap-4 mb-10">
          <h1 className="text-base font-bold">Get in Touch</h1>
          <p className="text-sm w-44 lg:w-32">
            Question or Feedback? We'd love to hear from you
          </p>
          <Link
            href="mailto:abc@gmail.com"
            className="w-max px-4 py-1 border border-highlight-300 rounded-md flex-center text-sm gap-3"
          >
            Email
            <IoMail size={10} className="fill-highlight-300" />
          </Link>
        </div>
      </div>
      <div className="w-full border-t border-gray-300 flex-center p-5 mt-10 mb-24 lg:mb-0">
        <span className="text-gray-600 text-xs">
          Created by Wakocoding, since {new Date().getFullYear()}. All rights
          reserved
        </span>
      </div>
    </section>
  );
};

export default Footer;
