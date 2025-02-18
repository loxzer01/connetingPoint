"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaChartLine, FaChessQueen } from "react-icons/fa";
import { FaHandshakeSimple } from "react-icons/fa6";
import { HeroBgPlant } from "./Hero/HeroBgPlant";
import ShapeWave from "./Hero/HeroBgWave";
import { useI18n } from "@/lib/useTranslations";

export function ServicesSection() {
  const { t } = useI18n();

  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  return (
    <section
      className="relative z-10 py-[120px] bg-[rgba(11,17,58,1)] bg-opacity-[0.03]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Texto de encabezado */}
        <div className="flex flex-wrap mx-[-16px]">
          <div className="w-full px-4">
            <div
              className="mx-auto max-w-[600px] text-center mb-20"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h2
                className="text-white font-bold text-3xl sm:text-4xl md:text-[45px] mb-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {t("servicesSection.header.title")}
              </h2>
              <p
                className="text-[rgba(149,156,177,1)] text-base md:text-lg leading-relaxed md:leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                {t("servicesSection.header.description")}
              </p>
            </div>
          </div>
        </div>

        {/* Bloques de servicios */}
        <div className="flex flex-wrap mx-[-16px] mt-16">
          {/* Card 1: Inovação e Tecnologia */}
          <div
            className="w-full md:w-1/3 px-4 mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="relative rounded-lg shadow-lg p-6 bg-[rgba(29,33,68,1)]">
              <div className="mb-10 flex items-center justify-center">
                <div className="w-[70px] h-[70px] flex items-center justify-center rounded-md bg-[rgba(74,108,247,0.1)] text-[rgba(74,108,247,1)]">
                  <FaChartLine className="w-[40px] h-[35px]" />
                </div>
              </div>
              <h3
                className="mb-3 text-xl font-semibold text-white flex justify-center"
                data-aos="fade-up"
                data-aos-delay="250"
              >
                {t("servicesSection.card1.title")}
              </h3>
              <p
                className="text-base leading-relaxed text-[rgba(149,156,177,1)]"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                {t("servicesSection.card1.description")}
              </p>
              {/* SVG decorativo */}
              <div className="absolute bottom-0 right-0 z-[1]">
                <HeroBgPlant />
              </div>
            </div>
          </div>

          {/* Card 2: Design que Encanta */}
          <div
            className="w-full md:w-1/3 px-4 mb-8"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="relative rounded-lg shadow-lg p-6 bg-[rgba(29,33,68,1)]">
              <div className="mb-10 flex items-center justify-center">
                <div className="w-[70px] h-[70px] flex items-center justify-center rounded-md bg-[rgba(74,108,247,0.1)] text-[rgba(74,108,247,1)]">
                  <FaChessQueen className="w-[35px] h-[30px]" />
                </div>
              </div>
              <h3
                className="mb-3 text-xl font-semibold text-white flex justify-center"
                data-aos="fade-up"
                data-aos-delay="350"
              >
                {t("servicesSection.card2.title")}
              </h3>
              <p
                className="text-base leading-relaxed text-[rgba(149,156,177,1)]"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                {t("servicesSection.card2.description")}
              </p>
              <div className="absolute bottom-0 right-0 z-[1]">
                <HeroBgPlant />
              </div>
            </div>
          </div>

          {/* Card 3: Parcerias de Impacto e Importância */}
          <div
            className="w-full md:w-1/3 px-4 mb-8"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="relative rounded-lg shadow-lg p-6 bg-[rgba(29,33,68,1)]">
              <div className="mb-10 flex items-center justify-center">
                <div className="w-[70px] h-[70px] flex items-center justify-center rounded-md bg-[rgba(74,108,247,0.1)] text-[rgba(74,108,247,1)]">
                  <FaHandshakeSimple className="w-[40px] h-[30px]" />
                </div>
              </div>
              <h3
                className="mb-3 text-xl font-semibold text-white flex justify-center"
                data-aos="fade-up"
                data-aos-delay="450"
              >
                {t("servicesSection.card3.title")}
              </h3>
              <p
                className="text-base leading-relaxed text-[rgba(149,156,177,1)]"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                {t("servicesSection.card3.description")}
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
