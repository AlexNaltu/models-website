"use client";

import * as React from "react";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { RiContactsLine } from "react-icons/ri";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { FaQuestion } from "react-icons/fa";
import Image from "next/image";

export default function Navbar() {
  return (
    <ul className="fixed bottom-0 flex w-full justify-evenly sm:top-0 sm:flex-col sm:justify-between sm:w-fit py-2 sm:pt-10 gap-10 px-3 bg-primary custom-shadow">
      <li className="hidden sm:block">
        <Image
          src={"/logo.png"}
          alt="/"
          width={50}
          height={50}
          className=" border-b-[0.5px] pb-5 mb-10 "
        />
      </li>
      <div className="flex sm:flex-col gap-10 py-2 sm:py-0 sm:mb-10">
        <li>
          <Link href="#" className="menu-link">
            <AiOutlineHome className="icon" size={50} />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link href="#" className="menu-link">
            <RiContactsLine className="icon" size={50} />
            <span>Contact</span>
          </Link>
        </li>
        <li>
          <Link href="#" className="menu-link">
            <HiOutlineSquare3Stack3D className="icon" size={50} />
            <span>Models</span>
          </Link>
        </li>
        <li>
          <Link href="#" className="menu-link">
            <FaQuestion className="icon" size={50} />
            <span>About Me</span>
          </Link>
        </li>
      </div>
    </ul>
  );
}
