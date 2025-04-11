"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { recoverPassword } from "@/lib/actions/user.actions";
import { RiLoader2Line } from "react-icons/ri";
import { useRouter } from "next/navigation";

const PasswordRecoveryForm = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await recoverPassword(email);

      if (!response) {
        return toast.error("Sorry, we couldn't find your email address.");
      }

      toast.success("Password recovery link sent to your email address.");

      router.back();
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col lg:flex-row items-end gap-4"
    >
      <label htmlFor="email" className="text-sm font-light w-full">
        Email address
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 lg:p-3 border border-primary rounded-lg focus:outline-primary transition-all font-thin"
        />
      </label>
      <Button
        type="submit"
        disabled={loading}
        className="w-full lg:w-40 h-10 lg:h-12 text-light"
      >
        {loading ? (
          <RiLoader2Line size={24} className="animate-spin" />
        ) : (
          "Send reset link"
        )}
      </Button>
    </form>
  );
};

export default PasswordRecoveryForm;
