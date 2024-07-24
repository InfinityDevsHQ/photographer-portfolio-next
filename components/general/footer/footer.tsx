import { Button } from "@/components/ui/button";
import LogoSvg from "../../svgs/logo-svg";
import SocialMedia from "./social-media";

export default function Footer() {
  return (
    <footer className="py-5 px-12 bg-dark text-dark-foreground flex flex-col lg:flex-row gap-4 items-center justify-between">
      <LogoSvg />
      <SocialMedia />
      <Button className="uppercase bg-transparent border-2 border-inverted text-inverted py-4 px-8 font-bold text-lg">
        Hire me
      </Button>
    </footer>
  );
}
