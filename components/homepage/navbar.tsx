"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavLogo from "../svgs/nav-logo";
import Menusvg from "../svgs/logos/menu-svg";
import XIconsvg from "../svgs/logos/x-svg";
import { PhoneIcon } from "lucide-react";

const NavLinks = ["+92 123 456 1234", "Gallery"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="text-white mx-auto w-full">
      <div
        className={`w-full mx-auto  pr-12 lg:pr-12 p-4 md:p-4 md:py-5 md:px-12  ${
          isScrolling
            ? "fixed top-0 z-50 shadow-lg  bg-inverted/90"
            : " p-4 md:block md:pr-0"
        } ${isOpen ? "h-dvh md:h-auto bg-inverted/90" : ""}`}
      >
        <div className="mx-auto flex justify-between items-center">
          {/* logo  */}
          <div className="text-2xl font-bold">
            <NavLogo />
          </div>
          {/* Desktop */}
          <nav>
            <ul className="hidden md:flex items-center gap-2.5">
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-300 flex items-center justify-center gap-2 font-bold text-xs uppercase p-2.5"
                >
                  <PhoneIcon className="size-4" />
                  <span>+92 123 456 1234</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-300 flex items-center justify-center gap-2 font-bold text-xs uppercase p-2.5"
                >
                  <span>Gallery</span>
                </Link>
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
        <div
          className={`w-full py-8 h-dvh pt-12 md:hidden mx-auto ${
            isOpen ? "absolute" : "hidden"
          }`}
        >
          <ul className="flex flex-col pl-8 gap-12 justify-center">
            {["Home", "About", "Contact"].map((link, index) => (
              <li key={index}>
                <Link
                  href="#"
                  className="relative pb-1.5 text-sm font-medium uppercase hover:text-inverted transition duration-300 ease-in-out"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
