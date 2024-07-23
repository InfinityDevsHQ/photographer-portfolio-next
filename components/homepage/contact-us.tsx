import ContactForm from "../forms/contact-form";

export default function ContactUs() {
  return (
    <section className="p-12 flex items-center justify-center">
      <div className="flex flex-col gap-12">
        <h2 className="font-bold text-2xl text-dark text-center">
          Send me a message
        </h2>
        <ContactForm />
      </div>
    </section>
  );
}
