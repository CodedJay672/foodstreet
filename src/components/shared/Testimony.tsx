import React from "react";
import { FaQuoteLeft } from "react-icons/fa6";

const Testimony = ({
  name,
  position,
  testimony,
}: {
  name: string;
  position: string;
  testimony: string;
}) => {
  return (
    <article className="flex-center flex-col gap-4 flex-shrink-0 w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] mx-4 p-2">
      <FaQuoteLeft size={60} className="text-primary" />
      <p className="text-xl font-medium italic text-center">{testimony}</p>
      <div className="space-y-0.5 flex-center flex-col">
        <h3 className="text-lg font-semibold font-inter">{name}</h3>
        <p className="text-sm font-normal text-gray-600">{position}</p>
      </div>
    </article>
  );
};

export default Testimony;
