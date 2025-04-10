"use client";

import React from "react";
import { Copy } from "lucide-react";

const CopyToClipboard = ({ text }: { text: string }) => {
  return <Copy size={16} />;
};

export default CopyToClipboard;
