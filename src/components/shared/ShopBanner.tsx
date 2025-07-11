"use client";

import React, { useEffect, useRef, useState } from "react";
import FileUploader from "./FileUploader";
import Image from "next/image";
import { toast } from "sonner";
import { updateBannerImage } from "@/lib/actions/shop.actions";
import { FaUpload } from "react-icons/fa6";

const ShopBanner = ({
  userId,
  bannerUrl,
  id,
  creatorId,
}: {
  creatorId: string;
  userId: string | undefined;
  bannerUrl: string;
  id: string;
}) => {
  const [bannerPath, setBannerUrl] = useState(bannerUrl || "");
  const [file, setFile] = useState<File[] | null>(null);
  const uploadRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handleImageupload = async () => {
      if (!file) return;

      // set the image path to the uploaded image
      const imageUrl = URL.createObjectURL(file[0]);
      setBannerUrl(imageUrl);

      // upload the image to appwrite
      const res = await updateBannerImage(id, file[0]);

      if (!res) {
        return toast.error("Error oploading image");
      }

      return toast.success("Image uploaded successfully.");
    };

    handleImageupload();
  }, [file, id]);

  const uploadFiles = () => {
    if (!uploadRef.current) return;

    uploadRef.current.click();
  };

  return (
    <>
      {bannerPath ? (
        <Image src={bannerPath} alt="profile" fill className="object-cover" />
      ) : (
        userId === creatorId && (
          <>
            <div
              className="size-10 rounded-full absolute top-5 right-5 p-1 bg-raw-primary-light flex-center"
              onClick={uploadFiles}
            >
              <FaUpload size={16} className="text-raw-primary" />
            </div>
            <div className="hidden">
              <FileUploader onChange={setFile} ref={uploadRef} />
            </div>
          </>
        )
      )}
    </>
  );
};

export default ShopBanner;
