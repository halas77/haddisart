"use client";
import { SiWebmoney } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { nav_links } from "@/constants";
import { HiBars3 } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";

const Navbar = () => {
  const pathname = usePathname();
  const [nav, setNav] = useState(false);
  const navHandle = () => {
    setNav(!nav);
  };

  return (
    <>
      <header className="top-0 left-0 w-full fixed z-[9999] py-5 md:px-8 px-4 bg-white border-b">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="xl:pl-10">
              <Link href={"/"} className="text-xl font-semibold text-slate-950">
                <SiWebmoney size={40}  className="text-indigo-700"/>
              </Link>
            </div>

            {/* Navigation Menu  */}

            <div className="hidden lg:block">
              <ul className="flex space-x-14 font-sans">
                {nav_links.map((item, index) => (
                  <li key={item.key}>
                    <Link
                      href={item.href}
                      className={
                        pathname === item.href
                          ? "text-slate-700  font-bold uppercase"
                          : "text-slate-700 hover:text-indigo-500 hover:font-semibold ease-in-out duration-300 font-sans uppercase"
                      }
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="font-sans text-sm flex gap-2">
              <Link href={"/sign-in"} className="hidden lg:flex gap-4">
                <button className=" border py-4 px-10 border-indigo-700 text-indigo-700 rounded-md font-bold text-md hover:text-indigo-500">
                  Sign in
                </button>
              </Link>
              <Link href={"/sign-up"} className="hidden lg:flex gap-4">
                <button className=" border py-4 px-10 bg-indigo-700 text-white rounded-md font-bold text-md hover:bg-indigo-500">
                  Sign up
                </button>
              </Link>
              <button className="block lg:hidden" onClick={navHandle}>
                {!nav ? (
                  <HiBars3 size={35} className="text-black" />
                ) : (
                  <LiaTimesSolid size={35} className="text-black" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}

      <div
        className={
          nav
            ? "z-[9999] fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-950 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <div className="flex items-center justify-center py-3">
          <Link href={"/"}>
            <Image
              src={"/"}
              width={200}
              height={200}
              alt="Image"
            />
          </Link>
        </div>

        <ul className="p-4">
          {nav_links.map((link) => (
            <li key={link.key} className="p-4 border-b border-gray-900">
              <a href={link.href} className="uppercase text-white">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;