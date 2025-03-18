import Image from "next/image";
import React from "react";

interface Props {
  img: string;
  name: string;
  price: string;
}

const ProductCard: React.FC<Props> = ({ img, name, price }) => {
  return (
    <article className="w-full overflow-hidden cursor-pointer group border border-gray-300 rounded-xl  flex justify-between flex-col">
      <div className="flex-center flex-1">
        <Image
          src={img}
          alt={name}
          height={80}
          width={200}
          className="group-hover:scale-105 transition-all"
        />
      </div>
      <div className="flex-between p-5">
        <div className="mt-5flex flex-col">
          <h1 className="text-base font-bold">{name}</h1>
          <p className="text-sm">N{price}</p>
        </div>
        <span className="text-[10px] lg:text-sm block text-raw-300 bg-raw-100 py-1 px-2 rounded-full">
          In stock
        </span>
      </div>
    </article>
  );
};

export default ProductCard;
