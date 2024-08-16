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
    <section className="relative !lg:h-[600px] overflow-hidden">
      <Carousel>
        <CarouselContent className="gap-0 lg:h-[600px]">
          <CarouselItem className="basis-1/3 !pl-0">
            <Image
              src={"/assets/gallery/gallery-3.png"}
              width={226}
              height={600}
              alt="Art"
              className="w-full"
            />
          </CarouselItem>
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
        </CarouselContent>
        <div className="absolute top-[50%] flex items-center justify-between w-full !px-12">
          <CarouselPrevious className="relative h-10 w-10" />
          <CarouselNext className="relative h-10 w-10" />
        </div>
      </Carousel>
      <Button
        className="sm:bg-inverted text-dark-foreground rounded-none absolute bottom-0 right-0 sm:bottom-12 sm:right-12 lg:w-[107px] lg:h-[32px]"
        asChild
        type="button"
      >
        <Link
          href={"#"}
          className="flex items-center gap-0.5 sm:gap-2 text-xs font-bold"
        >
          View All
          <ChevronRight height={16} width={16} />
        </Link>
      </Button>
      {/* <Button
      className="bg-inverted text-dark-foreground rounded-none bottom-12 right-12 md:hidden mx-auto w-1/4 my-6 block"
      asChild
    >
      <Link href={"#"} className="flex items-center gap-2.5 px-5 py-2.5">
        View All
        <ChevronRight height={16} width={16} />
      </Link>
    </Button> */}
    </section>
  );
}
