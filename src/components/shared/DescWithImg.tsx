import Image from "next/image";
import React from "react";

interface Props {
  img: string;
  heading: string;
  desc: string;
  order?: boolean;
}

const DescWithImg: React.FC<Props> = ({ img, heading, desc, order }) => {
  return (
    <>
      <div className="w-full max-w-screen-md mx-auto flex-center flex-col lg:flex-row my-10">
        <div
          className={`w-full lg:w-1/2 flex justify-center items-center ${
            order ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <Image src={img} alt={heading} width={400} height={260} />
        </div>
        <div
          className={`w-full lg:w-1/2 p-6 ${
            order ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <h1 className="capitalize text-3xl text-center text-raw-300 lg:text-4xl font-bold text-pretty p-6">
            {heading}
          </h1>
          <p className="text-base lg:text-lg font-medium text-pretty bg-raw-100 p-6">
            {desc}
          </p>
        </div>
      </div>

      <button className="bg-raw-300 text-base text-raw-100 py-2 px-5 rounded-full">
        Get started
      </button>
    </>
  );
};

export default DescWithImg;
