"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useI18n } from "@/lib/useTranslations";

type Tool = {
  name: string;
  image: string;
};

type ToolGroup = {
  key: string; // clave para traducción: ej. "backend", "frontend", etc.
  tools: Tool[];
};

export function ToolsSection() {
  const { t } = useI18n();

  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  // Definición de los grupos a partir de las traducciones.
  // Se asume que las claves en el objeto de traducciones siguen esta estructura:
  // toolsSection.groups.backend.title, toolsSection.groups.backend.tools es un array
  // con cada herramienta: { name: "Laravel", image: "/images/tools/laravel.png" }.
  const groups: ToolGroup[] = [
    {
      key: "backend",
      tools: [
        { name: "Laravel", image: "/images/tools/laravel.png" },
        { name: "MySQL", image: "/images/tools/mysql.png" },
      ],
    },
    {
      key: "frontend",
      tools: [
        { name: "Bootstrap", image: "/images/tools/bootstrap.png" },
        { name: "Tailwind CSS", image: "/images/tools/tailwindcss.png" },
        { name: "React", image: "/images/tools/react.png" },
      ],
    },
    {
      key: "mobile",
      tools: [
        { name: "React Native", image: "/images/tools/react.png" },
        { name: "Kotlin", image: "/images/tools/kotlin.png" },
      ],
    },
    {
      key: "design",
      tools: [
        { name: "Figma", image: "/images/tools/figma.png" },
        { name: "Adobe", image: "/images/tools/adobe.png" },
      ],
    },
    {
      key: "hosting",
      tools: [{ name: "PTisp", image: "/images/tools/ptisp.png" }],
    },
  ];

  return (
    <section className="relative py-20 bg-[rgba(9,14,52,1)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div
          className="mb-20 text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl" data-aos="fade-up" data-aos-delay="200">
            {t("toolsSection.header.title")}
          </h2>
          <p className="text-lg text-[rgba(149,156,177,1)]" data-aos="fade-up" data-aos-delay="300">
            {t("toolsSection.header.description")}
          </p>
        </div>

        {/* Grilla de herramientas */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {groups.map((group, index) => (
            <div
              key={group.key}
              className="text-center"
              data-aos="fade-up"
              data-aos-delay={`${(index + 1) * 100}`}
            >
              <h3 className="mb-6 flex justify-center text-xl font-semibold text-white">
                {t(`toolsSection.groups.${group.key}.title`)}
              </h3>
              <div className="flex items-center justify-center space-x-4">
                {group.tools.map((tool) => (
                  <div key={tool.name}>
                    <Image
                      width={48}
                      height={30}
                      src={tool.image}
                      alt={tool.name}
                      className="mx-auto h-full w-12"
                    />
                    <p className="mt-2 text-base text-[rgba(149,156,177,1)]">
                      {tool.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Mensaje final */}
          <div
            className="flex items-center justify-center text-center"
            data-aos="fade-up"
            data-aos-delay={`${(groups.length + 1) * 100}`}
          >
            <h3 className="text-xl font-semibold text-white">
              {t("toolsSection.groups.finalMessage")}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
