"use client";

import React from "react";
import { Copy } from "lucide-react";
import { toast } from "sonner";

const CopyToClipboard = ({ text }: { text: string }) => {
  //copy to clicpboard
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);

      toast.success("Copied to clipboard");
    } catch (error) {
      throw error;
    }
  };

  return <Copy size={16} className="text-gray-400" onClick={handleCopy} />;
};

export default CopyToClipboard;
