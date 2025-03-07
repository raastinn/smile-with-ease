import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <nav className="flex items-center justify-between px-4 md:px-16 py-8 w-full">
      <p
        className={`flex items-center text-center px-4 text-white text-lg font-semibold text-xs md:text-sm h-10 rounded-xl text-sm bg-green-800 transition-colors duration-300 ease-in-out`}>
        smilewithease®
      </p>

      <div
        className={`hidden md:flex items-center text-center h-10 text-gray-600 text-sm md:px-4 rounded-xl bg-gray-100 transition-colors duration-300 ease-in-out space-x-1`}>
        <span>
            photography portfolio created by
        </span>
        <span className="font-semibold"><Link href="https://rastin.dev/" target="_blank">rastin</Link></span>
      </div>

      <div className={`flex md:hidden items-center text-center h-10 text-gray-600 text-xs space-x-1`}>
        <span>
            portfolio created by
        </span>
        <span className="font-semibold"><Link href="https://rastin.dev/" target="_blank">rastin</Link></span>
      </div>
    </nav>
  );
}
