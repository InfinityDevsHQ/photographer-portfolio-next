import Link from "next/link";
import React from "react";
import Carotsvg from "../svgs/carot-svg";
import TwitterSvg from "../svgs/logos/twitter-svg";
import FacebookSvg from "../svgs/logos/facebook-svg";
import InstaSvg from "../svgs/logos/insta-svg";
import BeSvg from "../svgs/logos/be-svg";
const socialIcons = [
  { id: 1, icon: <TwitterSvg /> },
  { id: 2, icon: <FacebookSvg /> },
  { id: 3, icon: <InstaSvg /> },
  { id: 4, icon: <BeSvg /> },
];

export default function Hero() {
  return (
    <div className="px-4 md:px-14 md:py-2.5">
      <div className="flex gap-4 md:gap-2.5">
        <div className="relative">
          <div className="flex flex-col gap-2.5 p-2.5 justify-center items-center">
            <div className="w-1 h-40 bg-white"></div>
            {socialIcons.map((icon) => (
              <Link key={icon.id} href="/">
                {icon.icon}
              </Link>
            ))}

            <div className="w-1 h-40 bg-white"></div>
          </div>
        </div>
        <div className="text-white max-w-xl  flex flex-col gap-5 justify-center">
          <h2 className="text-3xl md:text-5xl font-bold uppercase">John Doe</h2>
          <p className="md:text-xl ">
            Lorem ipsum dolor sit amet consectetur. Nibh lectus diam egestas
            etiam. Erat mauris posuere dui sed faucibus placerat euismod.
            Blandit facilisis hac leo morbi. Nibh erat hac nibh nibh faucibus
            imperdiet in scelerisque.
          </p>
          <div>
            <Link
              href="/"
              className="text-inverted flex items-center justify-center gap-2.5 w-1/2 md:w-1/4 border-2 border-inverted px-5 py-2.5 hover:bg-inverted hover:text-white transition duration-300 ease-in-out text-xs font-bold"
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
