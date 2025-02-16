// components/TestimonialsCTASection.tsx

// import { HeroBgShadowLeft } from "./Hero/HeroBgShadowLeft";
import { HeroBgShadow } from "./Hero/HeroBgShadow";
import Link from "next/link";

export  function TestimonialsCTASection() {
  return (
    <section className="relative z-10 pt-[120px] bg-[rgba(11,17,58,1)]">
      {/* Sombras en el background */}
      <div className="absolute right-0 bottom-0 z-[-1]">
        <HeroBgShadow />
      </div>
      <div className="absolute left-0 bottom-0 z-[-1]">
        <HeroBgShadow transform="" />
      </div>

      <div className="container mx-auto px-4 pb-20 sm:px-6 lg:px-8">
        {/* Encabezado de Testimonios */}
        <div className="flex flex-wrap mx-[-16px]">
          <div className="w-full px-4">
            <div className="mx-auto mb-[100px] max-w-[600px] text-center">
              <h2
                className="
                  mb-4 text-3xl font-bold text-white
                  sm:text-4xl md:text-[45px]
                "
              >
                Explore o que os nossos clientes têm a dizer sobre nós.
              </h2>
              <p
                className="
                  text-[rgba(149,156,177,1)]
                  text-base md:text-lg
                  leading-relaxed md:leading-relaxed
                "
              >
                Veja o que os nossos clientes dizem sobre nós. Estamos prontos
                para ajudar a transformar o seu negócio:
              </p>
            </div>
          </div>
        </div>

        {/* Testimonios */}
        <div className="flex flex-wrap mx-[-16px]">
          {/* Card 1 */}
          <div className="w-full px-4 md:w-1/2 lg:w-1/3 mb-10">
            <div className="bg-[#1D2144] rounded-md p-8 shadow">
              {/* Estrellas */}
              <div className="mb-5 flex items-center">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="mr-1 block text-yellow-600">
                    <svg
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      className="fill-current"
                    >
                      <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
                    </svg>
                  </span>
                ))}
              </div>
              <p className="pb-8 text-base leading-relaxed text-zinc-100">
                Muito colaborativos e prestativos, trabalham com um desempenho
                fenomenal. Estou muito satisfeito com a qualidade do vosso
                trabalho.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full px-4 md:w-1/2 lg:w-1/3 mb-10">
            <div className="bg-[#1D2144] rounded-md p-8 shadow">
              <div className="mb-5 flex items-center">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="mr-1 block text-yellow-600">
                    <svg
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      className="fill-current"
                    >
                      <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
                    </svg>
                  </span>
                ))}
              </div>
              <p className="pb-8 text-base leading-relaxed text-zinc-100">
                “O website desenvolvido pela vossa empresa está simplesmente
                incrível! Estou certo de que isso vós trará um enorme sucesso!”
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full px-4 md:w-1/2 lg:w-1/3 mb-10">
            <div className="bg-[#1D2144] rounded-md p-8 shadow">
              <div className="mb-5 flex items-center">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="mr-1 block text-yellow-600">
                    <svg
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      className="fill-current"
                    >
                      <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
                    </svg>
                  </span>
                ))}
              </div>
              <p className="pb-8 text-base leading-relaxed text-zinc-100">
                “Extremamente profissionais, colaborativos e sempre prontos a
                encontrar soluções.”
              </p>
            </div>
          </div>
        </div>

      </div>
        {/* Sección CTA final */}
        <div className="pt-[120px] bg-[rgba(0,0,0,0.10)] w-full py-20">
          <div className="mx-auto mb-8 max-w-[655px] text-center">
            <h2
              className="
                mb-4 text-3xl font-bold text-white
                sm:text-4xl md:text-[45px]
              "
            >
              Queremos ouvir as suas ideias
            </h2>
            <p
              className="
                text-base md:text-lg
                leading-relaxed md:leading-relaxed
                text-[rgba(149,156,177,1)]
                max-w-[600px] mx-auto
              "
            >
              Procuras a melhor solução para o teu negócio?
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Link
              href="/contact"
              className="
                text-base font-semibold text-white
                bg-[rgba(74,108,247,1)]
                py-4 px-8
                hover:bg-opacity-80
                mx-2
                rounded-md
                transition
                duration-300
                ease-in-out
              "
            >
              Fale Connosco!
            </Link>
          </div>
        </div>
    </section>
  );
}
