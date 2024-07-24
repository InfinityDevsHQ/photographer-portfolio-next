import Image from "next/image";
import PlaySvg from "../svgs/icons/play-svg";

export default function Video() {
  return (
    <section className="relative">
      <Image
        src={"/assets/video-thumbnail.png"}
        width={1280}
        height={600}
        alt="Video Thumbnail"
        className="w-full h-full"
      />
      <button
        type="button"
        className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] p-2.5 rounded-full bg-white/20 z-50 w-20 h-20 flex items-center justify-center"
      >
        <span className="sr-only">Video Play/Pause Button</span>
        <PlaySvg />
      </button>
    </section>
  );
}
