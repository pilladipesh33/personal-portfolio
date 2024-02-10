"use client";

import { animatePageIn } from "@/animation/animation";
import { useEffect } from "react";

export default function Template({ children }) {
  useEffect(() => {
    animatePageIn();
  }, []);
  return (
    <main>
      <div
        id="transition-element"
        className={
          "w-[100vw] h-[100vh] z-100 fixed top-0 left-0 text-black text-[5em] flex justify-center items-center"
        }
      >
        PORTFOLIO
      </div>
      {children}
    </main>
  );
}
