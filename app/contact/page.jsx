"use client";

import Link from "next/link";

const ContactPage = () => {
  return (
    <div className="py-12">
      <div>
        <ul className="uppercase text-[64px] leading-[0.8em] font-light md:text-[74px]">
          <div className="group flex">
            <p className="group-hover:block hover:text-active">Email</p>
            <p className="hidden group-hover:block md:text-[32px] lowercase ml-5">
              pilladipesh.pd@gmail.com
            </p>
          </div>
          <div className="group flex">
            <p className="group-hover:block hover:text-active">phone</p>
            <p className="hidden group-hover:block md:text-[32px] lowercase ml-5">
              +91 7993097870
            </p>
          </div>
          <Link href={"htttps://x.com/dip3sh_?s=21"} target="_blank" className="group flex">
            <p className="group-hover:block hover:text-active">X</p>
            <p className="hidden group-hover:block md:text-[32px] lowercase ml-5">
              @dip3sh_
            </p>
          </Link>
          <Link href={"https://www.linkedin.com/in/pilladipesh/"} target="_blank" className="group flex">
            <p className="group-hover:block hover:text-active">linkedin</p>
            <p className="hidden group-hover:block md:text-[32px] lowercase ml-5">
              pdipesh259
            </p>
          </Link>
          <Link href={"https://github.com/pilladipesh33"} target="_blank" className="group flex">
            <p className="group-hover:block hover:text-active">github</p>
            <p className="hidden group-hover:block md:text-[32px] lowercase ml-5">
              pilladipesh33
            </p>
          </Link>
          <Link href={"https://codepen.io/pilladipesh33"} target="_blank" className="group flex">
            <p className="group-hover:block hover:text-active">codepen</p>
            <p className="hidden group-hover:block md:text-[32px] lowercase ml-5">
              pilladipesh
            </p>
          </Link>
        </ul>
      </div>
        <h4 className="text-[27vw] md:text-[23vw] tracking-tighter flex justify-end items-end ">Contact</h4>
    </div>
  )
};

export default ContactPage;
