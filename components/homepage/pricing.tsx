import PricingCard from "./pricing/pricing-card";

export default function Pricing() {
  return (
    <section className="flex flex-col items-center p-12 bg-dark-foreground">
      <h2 className="text-2xl font-bold">What Can I do for you?</h2>
      <div className="p-12 flex items-center gap-12">
        <PricingCard />
        <PricingCard />
        <PricingCard />
      </div>
    </section>
  );
}
