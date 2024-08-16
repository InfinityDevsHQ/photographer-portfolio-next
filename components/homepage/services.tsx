import { Camera, ImageIcon, Mic, Video } from "lucide-react";
import ServiceCard from "./services/service-card";

export default function Services() {
  return (
    <section className="text-dark px-4 py-12 md:p-12 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-2.5">What Can I do for you?</h2>
      <div className="p-4 sm:p-8 md:p-12 flex flex-col lg:flex-row gap-12">
        <ServiceCard
          icon={<Camera width={40} height={40} />}
          heading="Photo Shooting"
          description="placerat euismod. Blandit facilisis hac leo morbi. "
        />
        <ServiceCard
          icon={<Video width={45} height={40} />}
          heading="Video Shooting"
          description="placerat euismod. Blandit facilisis hac leo morbi. "
        />
        <ServiceCard
          icon={<ImageIcon width={40} height={40} />}
          heading="Retouch"
          description="placerat euismod. Blandit facilisis hac leo morbi. "
        />
        <ServiceCard
          icon={<Mic width={40} height={40} />}
          heading="Sound Recording"
          description="placerat euismod. Blandit facilisis hac leo morbi. "
        />
      </div>
    </section>
  );
}
