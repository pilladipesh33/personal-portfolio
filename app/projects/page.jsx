"use client";

import { projectList, zodiak_italics } from "@/lib/constant";
import { ArrowUpRight } from "lucide-react";
import {
  Bebas_Neue,
  Bodoni_Moda,
  Brygada_1918,
  Dancing_Script,
  Merienda,
} from "next/font/google";
import Link from "next/link";

const inter = Bebas_Neue({ subsets: ["latin"], weight: "400" });
const dancing = Brygada_1918({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

const ProjectsPage = () => {
  return (
    <div className="h-[90vh] w-full">
      {projectList.map((items, index) => (
        <Link key={index} href={`${items.link}`} target="_blank">
          <div className="md:border-2 md:border-white md:border-b-black md:flex md:justify-between hover:bg-active hover:text-white cursor-pointer hover:ease-in hover:delay-75 ">
            <div className="flex items-end">
              <h1
                className="md:text-[5em] md:font-semibold md:uppercase"
                style={inter.style}
              >
                {items.title}
              </h1>
              <p className="md:text-[2em]" style={dancing.style}>
                . {items.about}
              </p>
            </div>
            <div>
              <ArrowUpRight className="h-6 w-6 text-[#000]" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectsPage;
