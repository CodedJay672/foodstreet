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
    <section className="w-full p-24">
      <div className="w-full max-w-screen-md flex justify-between mx-auto">
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
          <Link href="#">About us</Link>
          <Link href="#">Features</Link>
          <Link href="#">News</Link>
          <Link href="#">Menu</Link>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-base font-bold">Company</h1>
          <Link href="#">Why FoodStreet</Link>
          <Link href="#">Partner with us</Link>
          <Link href="#">FAQ</Link>
          <Link href="#">Blog</Link>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-base font-bold">Support</h1>
          <Link href="#">Account</Link>
          <Link href="#">Support center</Link>
          <Link href="#">Feedback</Link>
          <Link href="#">Contact us</Link>
          <Link href="#">Accessibility</Link>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-base font-bold">Get in Touch</h1>
          <p className="text-base w-32">
            Question or Feedback? We'd love to hear from you
          </p>
          <Link
            href="mailto:abc@gmail.com"
            className="border border-highlight-300 rounded-md flex-center text-sm gap-3"
          >
            Email
            <IoMail size={10} className="fill-highlight-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
