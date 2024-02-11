"use client";

import { AnimatedText } from "@/components/animated-text";
import { projectList } from "@/lib/constant";
import { ArrowUpRight } from "lucide-react";
import { Inter, Bebas_Neue } from "next/font/google";

const inter = Bebas_Neue({ subsets: ["latin"], weight: "400" });

const ProjectsPage = () => {
  return (
    <div className="h-[90vh] w-full">
      {projectList.map((items, index) => (
        <div
          key={index}
          className="md:border-2 md:border-white md:border-b-black md:flex md:justify-between hover:bg-active hover:text-white cursor-pointer hover:ease-in hover:delay-75 "
        >
          <div className="flex items-end">
            <h1
              className="md:text-[5em] md:font-semibold md:uppercase"
              style={inter.style}
            >
              {items.title}
            </h1>
            <p className="md:text-[2em] md:uppercase">. {items.about}</p>
          </div>
          <div>
            <ArrowUpRight className="h-6 w-6 text-[#000]" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsPage;
