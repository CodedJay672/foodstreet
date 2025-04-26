"use client";

import FoodContext from "@/context/GlobalContext";
import { Models } from "node-appwrite";
import React, { useContext, useEffect, useRef } from "react";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { Button } from "./ui/button";
import Image from "next/image";
import FileUploader from "./shared/FileUploader";
import { updateUserInfo } from "@/lib/actions/user.actions";
import { toast } from "sonner";
import { FaSpinner, FaUpload } from "react-icons/fa6";

const UserProfileDetails = ({ user }: { user: Models.Document }) => {
  const { editProfile, toggleEditProfile } = useContext(FoodContext);
  const [firstName, setFirstName] = React.useState(
    user.name.split(" ")[0] || ""
  );
  const [lastName, setLastName] = React.useState(user.name.split(" ")[1] || "");
  const [email, setEmail] = React.useState(user.email || "");
  const [state, setState] = React.useState(user.state || "");
  const [deliveryArea, setDeliveryArea] = React.useState(
    user.deliveryArea || ""
  );
  const [streetAddress, setStreetAddres] = React.useState(
    user.streetAddress || ""
  );
  const [phone, setPhone] = React.useState(user.phone || "");
  const [imageUrl, setImageUrl] = React.useState(user.imageUrl || "");
  const [file, setFile] = React.useState<File[] | null>(null);
  const [isUpdating, setIsUpdating] = React.useState(false);
  const uploaderRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!file) return;

    const url = URL.createObjectURL(file?.[0]);
    setImageUrl(url);
  }, [file]);

  const updateUserDetails = async (formData: FormData) => {
    try {
      setIsUpdating(true);
      const res = await updateUserInfo(user?.$id, file?.[0]!, formData);

      if (!res) {
        return toast.error("Update failed");
      }

      toggleEditProfile();
      return toast.success("Profile updated successfully!");
    } catch (error: any) {
      throw new Error(error.message);
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <section className="w-full max-w-screen-md mx-auto mt-10 lg:mt-0">
      <div className="w-full flex-between">
        <div className="space-y-1">
          <h2 className="text-lg lg:text-xl font-semibold">
            Personal Information
          </h2>
          <p className="text-base font-thin text-gray-400">
            Your personal details
          </p>
        </div>
        <div
          className={`flex items-center gap-1 cursor-pointer p-4 lg:px-3 lg:py-1 rounded-full ${
            editProfile && "bg-gray-100 font-bold"
          }`}
          onClick={toggleEditProfile}
        >
          <HiOutlinePencilSquare
            size={20}
            className="text-base lg:text-lg text-gray-400"
          />
          <span className="hidden lg:block text-sm lg:text-lg font-thin text-gray-400">
            Edit
          </span>
        </div>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          updateUserDetails(formData);
        }}
        className="space-y-6 mt-10"
      >
        <div className="size-24 bg-primary-light rounded-full p-2 border border-gray-300 flex-center relative">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={user.name}
              fill
              className="object-contain rounded-full"
            />
          ) : (
            <span className="text-6xl text-primary font-bold">
              {user?.name?.[0]}
            </span>
          )}
          <div
            className={`size-10 p-2 rounded-full bg-light absolute bottom-0 right-0 overflow-hidden ${
              editProfile ? "block" : "hidden"
            }`}
          >
            <div
              className="w-full rounded-full flex-center"
              onClick={() => uploaderRef.current?.click()}
            >
              <FaUpload size={16} className="text-primary" />
            </div>
            <div className="hidden">
              <FileUploader onChange={setFile} ref={uploaderRef} />
            </div>
          </div>
        </div>

        <div className="flex-between flex-col lg:flex-row gap-2 lg:gap-10">
          <label
            htmlFor="firstName"
            className="space-y-4 flex flex-col w-full font-thin text-gray-500"
          >
            Firstname
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              disabled={!editProfile}
              className={`w-full h-10 rounded-lg border border-gray-300 outline-none p-6 ${
                editProfile ? "bg-gray-100" : "bg-gray-200"
              }`}
            />
          </label>

          <label
            htmlFor="lastname"
            className="space-y-4 flex flex-col w-full font-thin text-gray-500"
          >
            Lastname
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              disabled={!editProfile}
              className={`w-full h-10 rounded-lg border border-gray-300 outline-none p-6 ${
                editProfile ? "bg-gray-100" : "bg-gray-200"
              }`}
            />
          </label>
        </div>

        <label
          htmlFor="email"
          className="space-y-4 flex flex-col w-full font-thin text-gray-500"
        >
          Email Address
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={!editProfile}
            className={`w-full h-10 rounded-lg border border-gray-300 outline-none p-6 ${
              editProfile ? "bg-gray-100" : "bg-gray-200"
            }`}
          />
        </label>

        <p className="text-base font-thin text=gray-400">Delivery Address</p>

        <div className="flex-between gap-2 lg:gap-10">
          <label
            htmlFor="state"
            className="space-y-4 flex flex-col w-full font-thin text-gray-500"
          >
            State
            <input
              type="text"
              id="state"
              name="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              disabled={!editProfile}
              className={`w-full h-10 rounded-lg border border-gray-300 outline-none p-6 ${
                editProfile ? "bg-gray-100" : "bg-gray-200"
              }`}
            />
          </label>

          <label
            htmlFor="deliveryArea"
            className="space-y-4 flex flex-col w-full font-thin text-gray-500"
          >
            Delivery Address
            <input
              type="text"
              id="deliveryArea"
              name="deliveryArea"
              value={deliveryArea}
              onChange={(e) => setDeliveryArea(e.target.value)}
              disabled={!editProfile}
              className={`w-full h-10 rounded-lg border border-gray-300 outline-none p-6 ${
                editProfile ? "bg-gray-100" : "bg-gray-200"
              }`}
            />
          </label>
        </div>

        <label
          htmlFor="streetAddress"
          className="space-y-4 flex flex-col w-full font-thin text-gray-500"
        >
          Street Address
          <input
            type="text"
            id="streetAddress"
            name="streetAddress"
            value={streetAddress}
            onChange={(e) => setStreetAddres(e.target.value)}
            disabled={!editProfile}
            className={`w-full h-10 rounded-lg border border-gray-300 outline-none p-6 ${
              editProfile ? "bg-gray-100" : "bg-gray-200"
            }`}
          />
        </label>

        <label
          htmlFor="phone"
          className="space-y-4 flex flex-col w-full font-thin text-gray-500"
        >
          Phone
          <input
            type="text"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            disabled={!editProfile}
            className={`w-full h-10 rounded-lg border border-gray-300 outline-none p-6 ${
              editProfile ? "bg-gray-100" : "bg-gray-200"
            }`}
          />
        </label>

        {editProfile && (
          <div className="flex items-center place-self-start gap-3">
            <Button
              type="submit"
              disabled={isUpdating}
              className="w-full lg:w-max bg-raw-primary hover:bg-raw-primary text-light cursor-pointer flex-center gap-4"
            >
              {isUpdating && <FaSpinner size={24} className="animate-spin" />}
              Update profile
            </Button>
            <Button
              type="submit"
              onClick={toggleEditProfile}
              className="w-full lg:w-max text-light cursor-pointer flex-center gap-4"
            >
              {isUpdating && <FaSpinner size={24} className="animate-spin" />}
              Cancel
            </Button>
          </div>
        )}
      </form>
    </section>
  );
};

export default UserProfileDetails;
