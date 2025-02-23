"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";

import { headerData } from "@/constants";

import { Nav } from "./nav";
import { NavMobile } from "./nav-mobile";
import { Socials } from "./socials";

import { TiThMenuOutline } from "react-icons/ti";
import { cn } from "@/lib/utils";

export function Header() {
  const { logo } = headerData;

  const [isActive, setIsActive] = useState(false);
  const [navMobile, setNavMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    });
  }, []);

  return (
    <header
      className={cn(
        isActive ? "h-25 lg:h-27.5 shadow-lg" : " h-30 lg:h-37.5",
        "fixed bg-white left-0 right-0 z-10 max-w-480 w-full mx-auto transition-all duration-300"
      )}
    >
      <div className="flex justify-between items-center h-full pl-12.5 pr-15">
        <Link href="/">
          <Image width={188} height={90} src={logo} alt="Logo" />
        </Link>
        <div className="hidden xl:flex">
          <Nav />
        </div>
        <div
          onClick={() => setNavMobile((prev) => !prev)}
          className="xl:hidden absolute right-[5%] bg-dark text-white p-2 rounded-md cursor-pointer"
        >
          <TiThMenuOutline className="text-3xl" />
        </div>
        <div
          className={cn(
            navMobile ? "max-h-full" : "max-h-0",
            isActive ? "top-25 lg:top-27.5" : "top-30 lg:top-37.5",
            "fixed bg-white w-full h-full lef-0 right-0 -z-10 transition-all duration-300"
          )}
        >
          <NavMobile onClick={() => setNavMobile((prev) => !prev)} />
        </div>
        <div className="hidden xl:flex">
          <Socials />
        </div>
      </div>
    </header>
  );
}
