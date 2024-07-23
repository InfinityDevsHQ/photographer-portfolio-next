import { Button } from "@/components/ui/button";
import { Check, ChevronRight } from "lucide-react";

export default function PricingCard() {
  const offers = ["OFFER 1", "OFFER 2", "OFFER 3"];
  return (
    <article className="p-12 bg-inverted-light flex flex-col gap-5 text-dark">
      <h4 className="text-lg font-bold">Minimum</h4>
      <p className="text-inverted-dark font-bold text-2xl">$200</p>
      <p className="text-xs xl:text-base text-dark-slate">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
        quaerat illum cum? Unde perspiciatis accusantium eos ratione atque
        tempore modi reprehenderit quas ex. Unde, eaque dolorem enim corrupti
        hic alias.
      </p>
      <ol className="flex flex-col gap-5">
        {offers.map((offer, index) => (
          <li key={index} className="flex items-center gap-2.5">
            <div className="p-1.5 bg-inverted flex items-center justify-center text-dark-foreground">
              <Check />
            </div>
            <span className="text-dark-slate font-medium text-sm">{offer}</span>
          </li>
        ))}
      </ol>
      <Button className="uppercase rounded-none bg-inverted hover:bg-inverted/80">
        <span>Buy now</span>
        <ChevronRight />
      </Button>
    </article>
  );
}
