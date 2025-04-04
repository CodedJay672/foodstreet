"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  return (
    <form
      action={() => console.log(email)}
      className="w-full lg:w-1/2 p-1 rounded-full bg-light flex-center"
    >
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email address"
        className="w-full h-10 placeholder:text-gray-500 placeholder:text-sm border-none outline-none p-3"
      />
      <Button
        type="submit"
        className="px-3 lg:px-10 text-light rounded-full py-1"
      >
        Send
      </Button>
    </form>
  );
};

export default SubscribeForm;
