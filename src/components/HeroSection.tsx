// components/HeroSection.tsx
import HeroBgCircles from "./Hero/HeroBgCircles";
import HeroBgLines from "./Hero/HeroBgLines";

export function HeroSection() {
  return (
    <section
      className="
        relative z-10 flex h-screen w-full
        items-center justify-center
        overflow-hidden
        bg-[rgba(9,14,52,1)]  /* Equivale a .bg-body-black */
      "
    >
      {/* Fondo con SVGs */}
      <HeroBgCircles />
      <HeroBgLines />

      {/* Contenido */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
        <h1
          className="
            mb-5 text-2xl font-bold text-white
            sm:text-4xl md:text-5xl
            leading-tight
          "
          data-aos="fade"
        >
          O novo padrão em Digital Design &amp; Development Studio
        </h1>
        <p
          className="
            mb-12 text-md font-medium text-white opacity-90
            md:text-xl
          "
          data-aos="fade"
        >
          Tudo para o seu negócio! Desde desenvolvimento web até ao lançamento e
          evolução, com foco em Escalabilidade, Automação e Experiência do
          Utilizador.
        </p>
      </div>
    </section>
  );
}
