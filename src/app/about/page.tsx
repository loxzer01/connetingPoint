"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useI18n } from "@/lib/useTranslations";

// Importamos algunos íconos de React Icons (Fa)
import {
  FaBullseye,
  FaEye,
  FaGem,
  FaInfoCircle,
  FaCogs,
  FaLink,
  FaHeadset,
  FaSyncAlt,
} from "react-icons/fa";
import HeroBgCircles from "@/components/Home/Hero/HeroBgCircles";
import { HeroBgPlant } from "@/components/Home/Hero/HeroBgPlant";
import HeroBgWave from "@/components/Home/Hero/HeroBgWave";
import { HeroBgShadow } from "@/components/Home/Hero/HeroBgShadow";

// Componente para la sección Hero (introducción About Us)
export function AboutHeroSection() {
  const { t } = useI18n();

  return (
    <section className="relative z-10 pt-[150px] sm:pt-[250px] lg:pt-[250px] py-20 bg-[#090e34]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full px-4" data-aos="fade">
            <div className="max-w-[600px] mb-12">
              <h1 className="font-bold text-white text-2xl sm:text-3xl mb-5">
                {t("about.aboutHero.title")}
              </h1>
              <p className="font-medium text-base text-zinc-400 leading-relaxed">
                {t("about.aboutHero.description")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute z-[-1] -top-72 right-0 md:top-0"
        // data-aos="fade-down"
        // data-aos-delay="200"
      >
        <HeroBgCircles />
      </div>
    </section>
  );
}

// Componente para la sección Mission/Vision/Values
function MvvSection() {
  const { t } = useI18n();
  const mvv: {
    mission: { title: string; description: string };
    vision: { title: string; description: string };
    values: { title: string; intro: string; items: string[] };
  } = t(
    "about.missionVisionValues",
    // @ts-ignore
    { returnObjects: true }
  ) as any;

  return (
    <section className="relative z-10 py-[120px] ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título global para esta subsección (puedes ajustarlo o omitirlo si ya lo incluyes en otra parte) */}
        <div
          className="text-center mb-16 max-w-xl m-auto p-3"
          data-aos="fade-up"
        >
          <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-[45px] mb-4">
            {t("about.digitalExperience.title")}
          </h2>
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
            {t("about.digitalExperience.description")}
          </p>
        </div>

        <div className="flex flex-wrap -mx-4">
          {/* Missão */}
          <div className="w-full md:w-1/3 px-4 mb-8" data-aos="fade-up">
            <div className="relative bg-[#1d2144] rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-center mb-10">
                <div className="w-16 h-16 flex items-center justify-center rounded-md bg-[#242f56] text-primary">
                  <FaBullseye size={40} color="#60a5fa" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white text-center mb-3">
                {mvv.mission.title}
              </h3>
              <p className="text-zinc-400 text-base leading-relaxed">
                {mvv.mission.description}
              </p>
              <div className="absolute bottom-0 right-0">
                <HeroBgPlant />
              </div>
            </div>
          </div>
          {/* Visão */}
          <div
            className="w-full md:w-1/3 px-4 mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="relative bg-[#1d2144] rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-center mb-10">
                <div className="w-16 h-16 flex bg-[#242f56] items-center justify-center rounded-md  text-primary">
                  <FaEye size={40} color="#60a5fa" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white text-center mb-3">
                {mvv.vision.title}
              </h3>
              <p className="text-zinc-400 text-base leading-relaxed ">
                {mvv.vision.description}
              </p>
              <div className="absolute bottom-0 right-0">
                <HeroBgPlant />
              </div>
            </div>
          </div>
          {/* Valores */}
          <div
            className="w-full md:w-1/3 px-4 mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="relative bg-[#1d2144] rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-center mb-10">
                <div className="w-16 h-16 bg-[#242f56] flex items-center justify-center rounded-md text-primary">
                  <FaGem size={40} color="#60a5fa" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-zinc-50 text-center mb-3">
                {mvv.values.title}
              </h3>
              <p className="text-zinc-400 text-base leading-relaxed mb-5">
                {mvv.values.intro}
              </p>
              <ul className="space-y-5">
                {mvv.values.items.map((item, index) => (
                  <li key={index} className="flex items-center justify-center">
                    {/* Usamos un ícono de check para cada ítem */}
                    <span className="bg-[#222956]  text-[#4883ca] p-2  flex items-center justify-center rounded-full mr-4">
                      {/* Usamos un ícono de check, por ejemplo FaCheck */}
                      <svg
                        width="8"
                        height="6"
                        viewBox="0 0 8 6"
                        className="fill-[#4883ca]"
                      >
                        <path d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523 -0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175 -0.062913 7.60585 -0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z"></path>
                      </svg>
                    </span>
                    <span className="text-base font-medium text-zinc-400">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="absolute bottom-0 right-0">
                <HeroBgPlant />
              </div>
            </div>
          </div>
        </div>
        <HeroBgWave />
      </div>
    </section>
  );
}

// Componente para la sección Dados que impulsionam os negócios
function DataDrivenSection() {
  const { t } = useI18n();
  const dataSec: {
    title: string;
    description: string;
    cards: Array<{ title: string; description: string }>;
    // @ts-ignore
  } = t("about.dataDriven", { returnObjects: true }) as any;

  // Asignamos un ícono distinto a cada tarjeta
  const icons = [
    <FaInfoCircle size={40} className="text-[#4a6cf7]" />,
    <FaCogs size={40} className="text-[#4a6cf7]" />,
    <FaLink size={40} className="text-[#4a6cf7]" />,
    <FaHeadset size={40} className="text-[#4a6cf7]" />,
    <FaSyncAlt size={40} className="text-[#4a6cf7]" />,
  ];

  return (
    <section className="relative  pt-[120px] pb-[50px]">
      <div className="absolute right-0 top-0">
        <HeroBgShadow transform="matrix(-1,0,0,-1,0,0)" />
      </div>
      <div className="container mx-auto px-4 sm:px-3 lg:px-6">
        {/* Encabezado de la sección */}
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 md:px-2" data-aos="fade-up">
            <div className="mx-auto max-w-[600px] text-center mb-[100px]">
              <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-[45px] mb-4">
                {dataSec.title}
              </h2>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                {dataSec.description}
              </p>
            </div>
          </div>
        </div>
        {/* Tarjetas */}
        <div className="flex flex-wrap gap-4 ">
          {dataSec.cards.map((card, index) => (
            <div
              key={index}
              className="w-full md:max-w-[350px] "
              data-aos="fade-up"
              data-aos-delay={`${(index + 1) * 100}`}
            >
              <div className="relative  rounded-lg p-6">
                <div className="flex mb-6">
                  <div className="w-16 h-16 flex items-center justify-center rounded-md  bg-[#121a4d] ">
                    {icons[index] || null}
                  </div>
                </div>
                <h3 className=" text-lg md:text-2xl font-bold text-zinc-100  mb-3">
                  {card.title}
                </h3>
                <p className="text-zinc-400 text-xsm md:text-md  leading-relaxed ">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Fondo decorativo: Puedes reutilizar el componente HeroBgWave o similar */}
      {/* Ejemplo: <HeroBgWave /> */}
    </section>
  );
}

// Componente principal de la página About Us (excluyendo Navbar y Footer)
export default function AboutUsPage() {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  return (
    <main className="bg-[#0b1139]">
      <AboutHeroSection />
      <MvvSection />
      <DataDrivenSection />
    </main>
  );
}
