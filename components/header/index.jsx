"use client";

import Link from "next/link";
import { AnimatedText } from "../animated-text";

export const Header = () => {
  return (
    <div className="w-full h-[5dvh] flex justify-between items-center border border-white border-b-black">
      <h4 className="hidden md:block text-[min(12vw, 1.25em)]">
      <AnimatedText text={"©️ PORTFOLIO"} />
      </h4>
      <div className="flex justify-between items-center w-full md:w-1/4">
        <Link href={"/"} className="uppercase">
          <h1 className="hover:text-active hover:font-medium hover:animate-ping">Index</h1>
        </Link>
        <Link href={"/projects"} className="uppercase">
        <h1 className="hover:text-active hover:font-medium hover:animate-ping">Work</h1>
        </Link>
        <Link href={"/contact"} className="uppercase">
        <h1 className="hover:text-active hover:font-medium hover:animate-ping">Contact</h1>
        </Link>
      </div>
    </div>
  );
};
