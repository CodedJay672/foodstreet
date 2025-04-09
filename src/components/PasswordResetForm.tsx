"use client";

import { setNewPassword } from "@/lib/actions/user.actions";
import React, { useState } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const PasswordResetForm = ({
  userId,
  secret,
}: {
  userId: string;
  secret: string;
}) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      if (password !== confirmPassword) {
        setError("Passwords do not match.");
        return false;
      }

      const response = await setNewPassword(userId, secret, password);

      if (!response) {
        return toast.error("Password update failed.");
      }

      return toast.success("Password updated successfully.");
    } catch (error: any) {
      if (error.message) {
        setError(error.message);
        return toast.error(error.message);
      } else {
        setError("An error occurred. Please try again.");
        return toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex-center flex-col gap-4">
      <label htmlFor="password" className="text-base font-medium w-full">
        Enter new password
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          min={8}
          minLength={8}
          className="w-full p-2 border border-gray-300 rounded-lg font-thin"
        />
      </label>

      <label htmlFor="confirmPassword" className="text-base font-medium w-full">
        Enter new password
        <input
          type="password"
          name="confirmPassword"
          id="password"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            if (password !== e.target.value) {
              setError("Passwords do not match.");
            } else {
              setError("");
            }
          }}
          className={`w-full p-2 border border-gray-300 rounded-lg font-thin transition-all ${
            error
              ? "outline-primary bg-primary-light"
              : "outline-raw-primary bg-raw-primary-light"
          }`}
        />
      </label>

      <Button
        type="submit"
        disabled={loading}
        className="w-full text-light rounded-lg"
      >
        {loading ? "Loading..." : "Reset Password"}
      </Button>
    </form>
  );
};

export default PasswordResetForm;
