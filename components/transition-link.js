"use client";

import { useRouter } from "next/navigation";
import { animatePageOut } from "@/animation/animation";

export default function TransitionLink({ href, label }) {
  const router = useRouter();

  const handleClick = () => {
    animatePageOut(href, router);
  };

  return (
    <button onClick={handleClick} className="uppercase">
      <h1 className="hover:text-active hover:font-medium hover:animate-ping">
        {label}
      </h1>
    </button>
  );
}
