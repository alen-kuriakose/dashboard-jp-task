"use client";
import searchIcon from "@/assets/icons/Search.svg";
import Image from "next/image";
import { useEffect, useRef } from "react";
export const Search = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "/") {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <div className="relative w-40">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search"
        className="w-full pl-8 pr-2 py-1 text-sm forn-inter font-normal text-dark dark:text-white rounded-md bg-[#1C1C1C]/5 dark:bg-white/10 focus:outline-none focus:ring-2  focus:border-transparent"
      />
      <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
        <Image src={searchIcon} className="h-5 w-5" alt={"search"} />
      </div>
      <div className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none">
        <kbd className="hidden sm:inline-block px-2 py-1 text-sm font-inter font-normal text-dark/20 dark:text-white/20  rounded-md">
          ⌘/
        </kbd>
      </div>
    </div>
  );
};
