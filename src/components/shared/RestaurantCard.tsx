import Image from "next/image";
import Link from "next/link";
import React from "react";

const RestaurantCard = ({
  img,
  link,
  name,
}: {
  img: string;
  link: string;
  name: string;
}) => {
  return (
    <div className="p-2 flex-center flex-col">
      <Image src={img} alt={name} width={147} height={447} />
      <Link
        href={link}
        className="w-40 bg-primary text-light text-sm py-2 px-6 rounded-lg mt-6 text-center"
      >
        {name}
      </Link>
    </div>
  );
};

export default RestaurantCard;
