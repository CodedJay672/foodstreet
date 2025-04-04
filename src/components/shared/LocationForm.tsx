"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";

const LocationForm = () => {
  const [location, setLocation] = useState("");

  return (
    <form
      action={() => console.log(location)}
      className="w-full flex items-center bg-subtle-light rounded-full border border-gray-300 p-1 pl-3"
    >
      <input
        type="email"
        placeholder="Enter your delivery location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="text-gray-700 flex-1 border-none outline-none placeholder:text-gray-300 placeholder:text-sm"
      />
      <Button type="submit" className="px-3 py-2 text-white rounded-full">
        Order now
      </Button>
    </form>
  );
};

export default LocationForm;
