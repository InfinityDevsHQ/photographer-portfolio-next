import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

export default function CarouselGallery() {
  return (
    <section>
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
      </Carousel>
    </section>
  );
}
