"use client";

import React, { RefObject, useEffect, useState } from "react";
import FileUploader from "./FileUploader";
import Image from "next/image";
import { toast } from "sonner";
import { updateProfileImage } from "@/lib/actions/shop.actions";
import { Button } from "../ui/button";

const ShopImage = ({
  name,
  imageUrl,
  vendorID,
  userId,
}: {
  name: string;
  imageUrl: string;
  vendorID: string;
  userId: string | undefined;
}) => {
  const [imagePath, setImagePath] = useState(imageUrl || "");
  const [file, setFile] = useState<File[] | null>(null);
  const uploadRef = React.useRef<HTMLInputElement | null>(null);

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
    <div className="w-full flex-between flex-col gap-2">
      <div className="size-28 lg:size-40 rounded-full flex-center flex-shrink-0 border-2 border-white bg-raw-primary-light backdrop-blur-3xl overflow-hidden">
        {imagePath ? (
          <Image src={imagePath} alt="profile" fill />
        ) : (
          <h1 className="text-2xl lg:text-4xl font-bold text-raw-primary">
            {name[0]}
          </h1>
        )}
      </div>
      {vendorID === userId && (
        <>
          <Button
            type="button"
            variant="outline"
            onClick={() => uploadRef.current?.click()}
            className="w-full border-raw-primary lg:border-none hover:bg-light cursor-pointer text-sm"
          >
            Change Image
          </Button>

          <div className="hidden">
            <FileUploader onChange={setFile} ref={uploadRef} />
          </div>
        </>
      )}
    </div>
  );
};

export default ShopImage;
