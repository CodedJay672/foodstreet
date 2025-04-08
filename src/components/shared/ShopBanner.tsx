"use client";

import React, { useEffect, useState } from "react";
import FileUploader from "./FileUploader";
import Image from "next/image";
import { toast } from "sonner";
import { updateBannerImage } from "@/lib/actions/shop.actions";

const ShopBanner = ({ bannerUrl, id }: { bannerUrl: string; id: string }) => {
  const [bannerPath, setBannerUrl] = useState(bannerUrl || "");
  const [file, setFile] = useState<File[] | null>(null);

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
  }, [file]);

  return (
    <>
      {bannerPath && (
        <Image src={bannerPath} alt="profile" fill className="object-cover" />
      )}
      <div className="size-10 rounded-full absolute top-5 right-5 p-1 bg-raw-primary-light overflow-hidden">
        <FileUploader onChange={setFile} />
      </div>
    </>
  );
};

export default ShopBanner;
