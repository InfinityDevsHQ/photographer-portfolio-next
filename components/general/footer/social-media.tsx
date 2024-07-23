import BeSvg from "@/components/svgs/logos/be-svg";
import FacebookSvg from "@/components/svgs/logos/facebook-svg";
import InstaSvg from "@/components/svgs/logos/insta-svg";
import TwitterSvg from "@/components/svgs/logos/twitter-svg";
import { Phone } from "lucide-react";
import Link from "next/link";

export default function SocialMedia() {
  return (
    <div className="flex flex-col items-center">
      <div className="p-2.5 flex items-center gap-2.5">
        <Link href={"#"}>
          <TwitterSvg />
          <span className="sr-only">Twitter Account</span>
        </Link>
        <Link href={"#"}>
          <InstaSvg />
          <span className="sr-only">Instagram Account</span>
        </Link>
        <Link href={"#"}>
          <BeSvg />
          <span className="sr-only">Be Account</span>
        </Link>
        <Link href={"#"}>
          <FacebookSvg />
          <span className="sr-only">Facebook Account</span>
        </Link>
      </div>
      <div className="p-2.5">
        <Link
          href={"#"}
          className="flex items-center gap-1.5 text-sm font-bold"
        >
          <Phone />
          <span>+92 123 456 1234</span>
        </Link>
      </div>
    </div>
  );
}
