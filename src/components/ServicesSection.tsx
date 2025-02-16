// components/ServicesSection.tsx

import { FaChartLine, FaChessQueen } from "react-icons/fa";
import { FaHandshakeSimple } from "react-icons/fa6";
// O usa <i className="fa-solid fa-..."></i> si prefieres Font Awesome clásico.

import { HeroBgPlant } from "./Hero/HeroBgPlant";
import ShapeWave from "./Hero/HeroBgWave";

export function ServicesSection() {
  return (
    <section
      className="
        relative z-10 py-[120px]
        bg-[rgba(11,17,58,1)] bg-opacity-[0.03]
      "
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Texto de encabezado */}
        <div className="flex flex-wrap mx-[-16px]">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[600px] text-center mb-20">
              <h2
                className="
                  text-white font-bold
                  text-3xl sm:text-4xl md:text-[45px]
                  mb-4
                "
              >
                Abrimos Novos Caminhos para o seu sucesso e reconhecimento
                global
              </h2>
              <p
                className="
                  text-[rgba(149,156,177,1)]
                  text-base md:text-lg
                  leading-relaxed md:leading-relaxed
                "
              >
                Nossa combinação de paixão e inovação coloca sua marca no topo
                do mercado digital. Transformamos suas ideias em experiências
                impactantes, que não apenas chamam a atenção, mas também criam
                conexões duradouras com seu público...
              </p>
            </div>
          </div>
        </div>

        {/* Bloques de servicios */}
        <div className="flex flex-wrap mx-[-16px] mt-16">
          {/* Card 1: Inovação e Tecnologia */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div
              className="
                relative
                rounded-lg shadow-lg p-6
                bg-[rgba(29,33,68,1)]
              "
            >
              <div className="mb-10 flex items-center justify-center">
                <div
                  className="
                    w-[70px] h-[70px]
                    flex items-center justify-center
                    rounded-md
                    bg-[rgba(74,108,247,0.1)]
                    text-[rgba(74,108,247,1)]
                  "
                >
                  <FaChartLine className="w-[40px] h-[35px]" />
                </div>
              </div>
              <h3
                className="
                  mb-3 text-xl font-semibold text-white
                  flex justify-center
                "
              >
                Inovação e Tecnologia
              </h3>
              <p
                className="
                  text-base leading-relaxed
                  text-[rgba(149,156,177,1)]
                "
              >
                Integramos as últimas inovações tecnológicas para transformar a
                maneira como sua empresa opera, proporcionando mais eficiência e
                resultados concretos. Estamos prontos para elevar o seu negócio.
              </p>

              {/* SVG decorativo */}
              <div className="absolute bottom-0 right-0 z-[1]">
                <HeroBgPlant />
              </div>
            </div>
          </div>

          {/* Card 2: Design que Encanta */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div
              className="
                relative
                rounded-lg shadow-lg p-6
                bg-[rgba(29,33,68,1)]
              "
            >
              <div className="mb-10 flex items-center justify-center">
                <div
                  className="
                    w-[70px] h-[70px]
                    flex items-center justify-center
                    rounded-md
                    bg-[rgba(74,108,247,0.1)]
                    text-[rgba(74,108,247,1)]
                  "
                >
                  <FaChessQueen className="w-[35px] h-[30px]" />
                </div>
              </div>
              <h3
                className="
                  mb-3 text-xl font-semibold text-white
                  flex justify-center
                "
              >
                Design que Encanta
              </h3>
              <p className="text-base leading-relaxed text-[rgba(149,156,177,1)]">
                Desenvolvemos experiências visuais que contam a história da sua
                marca de forma autêntica e envolvente. Cada detalhe é pensado e
                executado para conectar sua identidade à essência do seu
                projeto.
              </p>

              <div className="absolute bottom-0 right-0 z-[1]">
                <HeroBgPlant />
              </div>
            </div>
          </div>

          {/* Card 3: Parcerias de Impacto e Importância */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div
              className="
                relative
                rounded-lg shadow-lg p-6
                bg-[rgba(29,33,68,1)]
              "
            >
              <div className="mb-10 flex items-center justify-center">
                <div
                  className="
                    w-[70px] h-[70px]
                    flex items-center justify-center
                    rounded-md
                    bg-[rgba(74,108,247,0.1)]
                    text-[rgba(74,108,247,1)]
                  "
                >
                  <FaHandshakeSimple className="w-[40px] h-[30px]" />
                  {/* <FaHandshake className="text-2xl" /> */}
                </div>
              </div>
              <h3
                className="
                  mb-3 text-xl font-semibold text-white
                  flex justify-center
                "
              >
                Parcerias de Impacto e Importância
              </h3>
              <p className="text-base leading-relaxed text-[rgba(149,156,177,1)]">
                Mais do que fornecer serviços, construímos relações de
                confiança. Com várias parcerias de extrema importância, que
                superam expectativas e consolidam para ajudar a alcançar o seu
                objetivo.
              </p>

              <div className="absolute bottom-0 right-0 z-[1]">
                <HeroBgPlant />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Forma wave (shape) al final de la sección */}
      <ShapeWave />
    </section>
  );
}
