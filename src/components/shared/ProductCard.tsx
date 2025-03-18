import Image from "next/image";
import React from "react";

interface Props {
  img: string;
  name: string;
  price: string;
}

const ProductCard: React.FC<Props> = ({ img, name, price }) => {
  return (
    <article className="w-full overflow-hidden cursor-pointer hover:bg-raw-100 transition-all border border-gray-300 rounded-xl  flex-between flex-col">
      <div className="flex-center flex-1">
        <Image src={img} alt={name} height={80} width={200} />
      </div>
      <div className="p-6 flex justify-between">
        <div className="">
          <h1 className="text-base font-bold">{name}</h1>
          <p className="text-sm">N{price}</p>
        </div>
        <div className="flex-center rounded-full">
          <span className="text-xs bg-raw-100  text-raw-300  py-1 px-3 block">
            In stock
          </span>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
