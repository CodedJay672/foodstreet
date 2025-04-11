import Image from "next/image";
import Link from "next/link";
import React from "react";

const ShopView = ({
  id,
  name,
  location,
  occupation,
  imgUrl,
}: {
  id: string;
  name: string;
  occupation: string;
  location: string;
  imgUrl: string;
}) => {
  return (
    <article className="w-full borde border-raw-primary rounded-lg shadow-md overflow-hidden">
      <div className="w-full h-32 bg-raw-primary-light relative place-content-center">
        {imgUrl ? (
          <Image src={imgUrl} alt={name} fill className="object-contain" />
        ) : (
          <h1 className="text-4xl font-bold text-center text-raw-primary">
            {name[0].toUpperCase()}
          </h1>
        )}
      </div>
      <div className="p-2">
        <div className="flex-between">
          <h1 className="text-base font-semibold">{name}</h1>
          <p className="text-sm font-thin text-gray-400">{location}</p>
        </div>
        <p className="text-sm font-thin">{occupation}</p>
        <Link
          href={`my-shop/${id}`}
          className="flex-center p-1 text-light text-sm bg-raw-primary rounded-full mt-4"
        >
          visit
        </Link>
      </div>
    </article>
  );
};

export default ShopView;
