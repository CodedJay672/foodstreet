import Image from "next/image";
import React from "react";

const IconCard = ({ icon, text }: { icon: string; text: string }) => {
  return (
    <div className="w-32 h-42 flex-center flex-col bg-subtle-light px-1 py-4 rounded-lg gap-2">
      <div className="bg-light rounded-full flex-center p-4">
        <Image
          src={icon}
          alt="order"
          width={40}
          height={40}
          className="object-contain"
        />
      </div>
      <h1 className="text-sm font-medium text-center">{text}</h1>
    </div>
  );
};

export default IconCard;
