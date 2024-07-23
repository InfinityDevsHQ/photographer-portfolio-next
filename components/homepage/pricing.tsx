import PricingCard from "./pricing/pricing-card";

export default function Pricing() {
  return (
    <section className="flex flex-col items-center p-12 bg-dark-foreground">
      <h2 className="text-2xl font-bold">What Can I do for you?</h2>
      <div className="p-12 flex flex-col flex-wrap justify-center lg:flex-row gap-12">
        <PricingCard
          offerName="Minimum"
          price={200}
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates temporibus, animi eligendi culpa laudantium error  earum vitae! Eos error esse nisi."
          offers={["2 Hours Shoot", "50 Photos", "3 Revisions", "Free REtouch"]}
        />
        <PricingCard
          offerName="Standard"
          price={500}
          description="Lorem, ipsum dolor sit excepturi similique commodi labore consequuntur. Officia, earum vitae! Eos error esse nisi."
          offers={["2 Hours Shoot", "50 Photos", "3 Revisions", "Free REtouch"]}
        />
        <PricingCard
          offerName="Premium"
          price={500}
          description="Lorem, ipsum dolor sit excepturi similique commodi labore consequuntur. Officia, earum vitae! Eos error esse nisi."
          offers={["2 Hours Shoot", "50 Photos", "3 Revisions", "Free REtouch"]}
        />
      </div>
    </section>
  );
}
