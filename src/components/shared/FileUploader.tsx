"use client";

import Image from "next/image";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { MdFileUpload } from "react-icons/md";

const FileUploader = ({ onChange }: { onChange: (file: File[]) => void }) => {
  const [filePath, setFilePath] = useState("");

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const imageUrl = URL.createObjectURL(acceptedFiles[0]);

    setFilePath(imageUrl);
    onChange(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpg", ".png"],
    },
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {filePath ? (
        <div className="relative p-3 rounded-md border border-gray-300 w-full flex-center flex-col gap-2 cursor-pointer">
          <Image src={filePath} alt="imgUrl" width={210} height={82} />
          <p className="text-sm text-gray-400 text-center">
            click to choose another image
          </p>
        </div>
      ) : (
        <div className="w-full h-24 border border-gray-300 rounded-lg flex-center flex-col gap-1 cursor-pointer">
          <MdFileUpload size={40} className="text-gray-400" />
          <div className="w-max flex-center flex-col">
            <p className="text-sm text-gray-400 text-center">
              upload product image here.
            </p>
            <p className="text-sm text-center text-gray-300">
              .PNG, .JPG, .JPEG
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
