"use client";

import { LoaderCircleIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { Suspense } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useDebouncedCallback } from "use-debounce";

const Searchbar = () => {
  const param = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleChange = useDebouncedCallback((query: string) => {
    const URLParam = new URLSearchParams(param);

    if (query) {
      URLParam.set("q", query);
    } else {
      URLParam.delete("q");
    }

    replace(`${pathname}?${URLParam.toString()}`);
  }, 300);

  return (
    <div className="relative">
      <Suspense
        fallback={<LoaderCircleIcon size={14} className="animate-spin" />}
      >
        <input
          type="search"
          onChange={(e) => handleChange(e.target.value)}
          defaultValue={param.get("q") || ""}
          className="w-full h-6 lg:h-10 border-none outline-none pl-13 pr-10"
        />
        <HiMagnifyingGlass className="size-4 lg:size-6 text-raw-primary absolute top-2.5 left-3" />
      </Suspense>
    </div>
  );
};

export default Searchbar;
