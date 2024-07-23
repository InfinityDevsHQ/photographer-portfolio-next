import Link from "next/link";
import React from "react";
import Carotsvg from "../svgs/carot-svg";
import TwitterSvg from "../svgs/logos/twitter-svg";
import FacebookSvg from "../svgs/logos/facebook-svg";
import InstaSvg from "../svgs/logos/insta-svg";
import BeSvg from "../svgs/logos/be-svg";

export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex gap-4 md:gap-10 mt-6">
        <div className=" relative">
          <div className="w-1 h-40 bg-white mb-3 ml-2"></div>
          <div className="flex flex-col gap-3">
            <Link href="/">
              <TwitterSvg />
            </Link>
            <Link href="/">
              <FacebookSvg />
            </Link>
            <Link href="/">
              <InstaSvg />
            </Link>
            <Link href="/">
              <BeSvg />
            </Link>
          </div>

          <div className="w-1 h-40 bg-white mt-3 ml-2"></div>
        </div>
        <div className=" md:space-y-6 text-white max-w-xl pt-28">
          <h2 className="text-3xl md:text-5xl font-bold">John Doe</h2>
          <p className=" md:text-xl my-2 md:my-4">
            Lorem ipsum dolor sit amet consectetur. Nibh lectus diam egestas
            etiam. Erat mauris posuere dui sed faucibus placerat euismod.
            Blandit facilisis hac leo morbi. Nibh erat hac nibh nibh faucibus
            imperdiet in scelerisque.
          </p>
          <div className="mt-4 md:mt-8">
            <Link
              href="/"
              className="text-inverted flex items-center justify-center gap-2 w-1/2 md:w-1/4 border-2 border-inverted px-6 py-2 hover:bg-inverted hover:text-white transition duration-300 ease-in-out  "
            >
              Hire Me
              <Carotsvg className="size-3 group-hover:fill-white group-hover:stroke-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
