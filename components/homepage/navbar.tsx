"use client";

import Link from "next/link";
import React, { useState } from "react";
import NavLogo from "../svgs/nav-logo";
import Menusvg from "../svgs/logos/menu-svg";
import XIconsvg from "../svgs/logos/x-svg";

const NavLinks = ["+92 123 456 1234", "Gallery"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="text-white p-4 max-w-7xl mx-auto ">
      <div className="mx-auto flex justify-between  items-center">
        {/* logo  */}
        <div className="text-2xl font-bold">
          <NavLogo />
        </div>
        {/* Desktop */}
        <nav>
          <ul className="hidden md:flex gap-8">
            {NavLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href="#"
                  className="hover:text-gray-300 flex items-center justify-center gap-3 font-semibold text-xs uppercase"
                >
                  <span>{link}</span>
                  {/* <DiamondSvg /> */}
                </Link>
              </li>
            ))}
            <li>
              <button
                className="mt-5 md:mt-0"
                type="button"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <XIconsvg className="size-5" />
                ) : (
                  <Menusvg className="size-5" />
                )}
              </button>
            </li>
          </ul>
          <button
            className="mt-5 md:mt-0 md:hidden"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <XIconsvg className="size-5" />
            ) : (
              <Menusvg className="size-5" />
            )}
          </button>
        </nav>
      </div>
      {/* Mobile Nav */}
      <div className={`w-full py-8   ${isOpen ? "absolute" : "hidden"}`}>
        <ul className="flex flex-col pl-8 gap-4 justify-center">
          {["Home", "About", "Contact"].map((link, index) => (
            <li key={index}>
              <Link
                href="#"
                className="relative pb-1.5  text-sm font-medium uppercase hover:text-inverted transition duration-300 ease-in-out"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
