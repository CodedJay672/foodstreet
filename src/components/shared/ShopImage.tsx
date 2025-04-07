"use client";

import React, { useEffect, useState } from "react";
import FileUploader from "./FileUploader";
import Image from "next/image";
import { toast } from "sonner";
import { updateProfileImage } from "@/lib/actions/shop.actions";

const ShopImage = ({
  name,
  imageUrl,
  vendorID,
}: {
  name: string;
  imageUrl: string;
  vendorID: string;
}) => {
  const [imagePath, setImagePath] = useState(imageUrl || "");
  const [file, setFile] = useState<File[] | null>(null);

  useEffect(() => {
    const handleImageupload = async () => {
      if (!file) return;

      // set the image path to the uploaded image
      const imageUrl = URL.createObjectURL(file[0]);
      setImagePath(imageUrl);

      // upload the image to appwrite
      const res = await updateProfileImage(vendorID, file[0]);

      if (!res) {
        return toast.error("Error oploading image");
      }

      return toast.success("Image uploaded successfully.");
    };

    handleImageupload();
  }, [file]);

  return (
    <>
      {imagePath ? (
        <Image src={imagePath} alt="profile" fill />
      ) : (
        <h1 className="text-2xl lg:text-4xl font-bold text-raw-primary">
          {name[0]}
        </h1>
      )}
      <div className="size-10 rounded-full absolute bottom-0 left-0 p-1 bg-raw-primary-light z-50 overflow-hidden">
        <FileUploader onChange={setFile} />
      </div>
    </>
  );
};

export default ShopImage;
