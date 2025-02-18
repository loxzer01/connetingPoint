"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { HeroBgShadow } from "./Hero/HeroBgShadow";
import { useI18n } from "@/lib/useTranslations";

export function TestimonialsCTASection() {
  const { t } = useI18n();

  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  // Se asume que t("testimonialsCTASection.testimonials") retorna un array de strings.
  const testimonials = t("testimonialsCTASection.testimonials") as any;

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
            <div
              className="mx-auto mb-[100px] max-w-[600px] text-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h2
                className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-[45px]"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {t("testimonialsCTASection.header.title")}
              </h2>
              <p
                className="text-[rgba(149,156,177,1)] text-base md:text-lg leading-relaxed md:leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                {t("testimonialsCTASection.header.description")}
              </p>
            </div>
          </div>
        </div>

        {/* Testimonios */}
        <div className="flex flex-wrap mx-[-16px]">
          {testimonials.map((testimonial: string, index: number) => (
            <div
              key={index}
              className="w-full px-4 md:w-1/2 lg:w-1/3 mb-10"
              data-aos="fade-up"
              data-aos-delay={`${(index + 1) * 100}`}
            >
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
                  {testimonial}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sección CTA final */}
      <div className="pt-[120px] bg-[rgba(0,0,0,0.10)] w-full py-20">
        <div
          className="mx-auto mb-8 max-w-[655px] text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2
            className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-[45px]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {t("testimonialsCTASection.cta.title")}
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed md:leading-relaxed text-[rgba(149,156,177,1)] max-w-[600px] mx-auto"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {t("testimonialsCTASection.cta.description")}
          </p>
        </div>
        <div
          className="flex items-center justify-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Link
            href="/contact"
            className="text-base font-semibold text-white bg-[rgba(74,108,247,1)] py-4 px-8 hover:bg-opacity-80 mx-2 rounded-md transition duration-300 ease-in-out"
          >
            {t("testimonialsCTASection.cta.button")}
          </Link>
        </div>
      </div>
    </section>
  );
}
