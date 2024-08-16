import Image from "next/image";
import DegreeSvg from "../svgs/icons/degree-svg";
import SuitcaseSvg from "../svgs/icons/suitcase-svg";

export default function About() {
  return (
    <section className="px-4 py-12 md:p-12 bg-dark-blue flex flex-col lg:flex-row items-center justify-center">
      <div className="flex items-center">
        <Image
          src={"/assets/personal.png"}
          alt="Person"
          height={400}
          width={400}
          className="md:h-[400px] md:w-[400px]"
        />
      </div>
      <div className="p-4 sm:p-8 md:p-12 flex flex-col gap-5 flex-1">
        <h6 className="text-2xl text-dark font-extrabold">Pricing</h6>
        <p className="text-dark-slate font-medium">
          Lorem ipsum dolor sit amet consectetur. In leo nunc tincidunt
          tristique elementum. In id urna porttitor vulputate mattis morbi
          laoreet. Nam viverra tristique viverra libero donec viverra ut.
          Lacinia placerat faucibus gravida in.
        </p>
        <div className="flex gap-2.5 items-start">
          <DegreeSvg />
          <div className="flex flex-col flex-1">
            <h6 className="font-medium text-dark text-lg leading-5">
              Graduate From College of Arts
            </h6>
            <p className="text-dark-slate text-sm">
              Lorem ipsum dolor sit amet consectetur. In leo nunc tincidunt
              tristique elementum. In id urna porttitor vulputate mattis morbi
              laoreet. Nam viverra tristique viverra libero donec viverra ut.
              Lacinia placerat faucibus gravida in.
            </p>
          </div>
        </div>
        <div className="flex gap-2.5 items-start">
          <SuitcaseSvg />
          <div className="flex flex-col flex-1">
            <h6 className="font-medium text-dark text-lg leading-5">
              Graduate From College of Arts
            </h6>
            <p className="text-dark-slate text-sm">
              Lorem ipsum dolor sit amet consectetur. In leo nunc tincidunt
              tristique elementum. In id urna porttitor vulputate mattis morbi
              laoreet. Nam viverra tristique viverra libero donec viverra ut.
              Lacinia placerat faucibus gravida in.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
