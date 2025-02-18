"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroBgCircles from "./Hero/HeroBgCircles";
import HeroBgLines from "./Hero/HeroBgLines";
import { useI18n } from "@/lib/useTranslations";

export function HeroSection() {
  const { t } = useI18n();

  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  return (
    <section className="relative z-10 flex h-screen w-full items-center justify-center overflow-hidden bg-[rgba(9,14,52,1)]">
      {/* Fondos con SVGs */}

      <div
        className="absolute z-[-1] -top-72 right-0 md:top-0"
        data-aos="fade-down"
        data-aos-delay="200"
      >
        {/* <HeroBgCircles /> */}
        <HeroBgCircles className="" />
      </div>
      <HeroBgLines />

      {/* Contenido con animaciones y traducción */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
        <h1
          className="mb-5 text-2xl font-bold text-white sm:text-4xl md:text-5xl leading-tight"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {t("home.hero.title")}
        </h1>
        <p
          className="mb-12 text-md font-medium text-white opacity-90 md:text-xl"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {t("home.hero.description")}
        </p>
      </div>
    </section>
  );
}
