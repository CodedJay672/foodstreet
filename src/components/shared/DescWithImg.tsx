import Image from "next/image";
import React from "react";

interface Props {
  heading: string;
  desc: string;
}

const DescWithImg: React.FC<Props> = ({ heading, desc }) => {
  return (
    <>
      <div className="w-full max-w-screen-md mx-auto flex-center flex-col my-10">
        <h1 className="capitalize text-3xl text-center text-raw-300 lg:text-4xl font-bold text-pretty p-6">
          {heading}
        </h1>
        <p className="text-base text-center lg:text-lg font-medium text-pretty bg-raw-100 p-6">
          {desc}
        </p>

        <button className="bg-raw-300 text-base text-raw-100 py-2 px-5 rounded-full">
          Get started
        </button>
      </div>
    </>
  );
};

export default DescWithImg;
