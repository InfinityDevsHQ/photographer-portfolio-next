import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Button } from "../ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function CarouselGallery() {
  return (
    <section className="relative">
      <Carousel>
        <CarouselContent className="gap-0">
          <CarouselItem className="basis-1/3 pl-0">
            <Image
              src={"/assets/gallery/gallery-1.png"}
              width={226}
              height={600}
              alt="Art"
              className="w-full"
            />
          </CarouselItem>
          <CarouselItem className="basis-1/3 !pl-0">
            <Image
              src={"/assets/gallery/gallery-2.png"}
              width={226}
              height={600}
              alt="Art"
              className="w-full"
            />
          </CarouselItem>
          <CarouselItem className="basis-1/3 !pl-0">
            <Image
              src={"/assets/gallery/gallery-3.png"}
              width={226}
              height={600}
              alt="Art"
              className="w-full"
            />
          </CarouselItem>
        </CarouselContent>
        <div className="absolute top-[50%] flex items-center justify-between w-full !px-12">
          <CarouselPrevious className="relative !bg-white !opacity-20 h-10 w-10 p-2.5" />
          <CarouselNext className="relative h-10 w-10" />
        </div>
      </Carousel>
      <Button
        className="bg-inverted rounded-none absolute bottom-12 right-12"
        asChild
      >
        <Link href={"#"} className="flex items-center gap-2.5">
          View ALll
          <ChevronRight height={12} width={12} />
        </Link>
      </Button>
    </section>
  );
}
