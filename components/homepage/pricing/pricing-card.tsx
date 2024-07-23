import { Button } from "@/components/ui/button";
import { Check, ChevronRight } from "lucide-react";
type PricingCardProps = {
  offerName: string;
  price: number;
  description: string;
  offers: string[];
};
export default function PricingCard({
  offerName,
  price,
  description,
  offers,
}: PricingCardProps) {
  return (
    <article className="p-12 bg-inverted-light flex flex-col gap-5 text-dark w-96">
      <h4 className="text-lg font-bold">{offerName}</h4>
      <p className="text-inverted-dark font-bold text-2xl">${price}</p>
      <p className="text-xs xl:text-base text-dark-slate">{description}</p>
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
