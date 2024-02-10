"use client";

import { AnimatedText } from "../animated-text";
import TransitionLink from "../transition-link";

export const Header = () => {
  return (
    <div className="w-full h-[5dvh] flex justify-between items-center border border-white border-b-black">
      <h1 className="hidden md:block text-[min(12vw, 1.25em)]">
        <AnimatedText text={"©️ PORTFOLIO"} />
      </h1>
      <div className="flex justify-between items-center w-full md:w-1/4">
        <TransitionLink href="/" label="Index" />
        <TransitionLink href={"/projects"} label={"Work"} />
        <TransitionLink href="/contact" label={"Contact"} />
      </div>
    </div>
  );
};
