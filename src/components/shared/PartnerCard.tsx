import Image from "next/image";
import Link from "next/link";
import React from "react";

const PartnerCard = ({
  img,
  name,
  title,
  detail,
}: {
  img: string;
  name: string;
  title: string;
  detail: string;
}) => {
  return (
    <div className="w-72 flex-center flex-col">
      <div className="w-50 h-50 rounded-full relative">
        <Image src={img} alt={name} fill />
      </div>
      <div className="p-4 flex-1 flex items-center flex-col gap-1">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm lg:text-base font-normal text-center">{detail}</p>
      </div>
      <Link href="#" className="bg-primary text-light py-2 px-16 rounded-md">
        Register
      </Link>
    </div>
  );
};

export default PartnerCard;
