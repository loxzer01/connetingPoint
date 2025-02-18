import HeroBgCircles from "@/components/Home/Hero/HeroBgCircles";
import { ContactSection } from "./SectionForm";

export function ContactIndex() {
  return (
    <>
      <div className="relative z-10 flex h-[400px]  w-full items-end overflow-hidden bg-[rgba(9,14,52,1)]">
        <div
          className="absolute z-[-1] -top-72 right-0 md:top-0 aos-init"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          {/* <HeroBgCircles /> */}
          <HeroBgCircles className="" />
        </div>

        <div className="container p-10 sm:px-6 lg:px-4 max-w-xl space-y-2 aos-init"
        data-aos="fade-up"
        data-aos-delay="200">
          <h2 className="text-3xl font-bold text-zinc-200">Contacte-nos!</h2>
          <p className="text-lg text-zinc-400 font-medium">
            Tem alguma questão? Entre em contacto connosco.
          </p>
        </div>
      </div>
      <div>
        <ContactSection />
      </div>
    </>
  );
}
