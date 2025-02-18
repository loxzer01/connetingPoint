import { footer } from "./translations/Footer";
import { Home } from "./translations/Home";
import { servicesSection } from "./translations/servicesSection";
import { testimonialsCTASection } from "./translations/testimonialsCTASection";
import { toolsSection } from "./translations/ToolsSection";

export const translations = {
  pt: {
    nav: {
      home: "Home",
      about: "Sobre Nós",
      service: "Serviços",
      blog: "Blog",
      contact: "Contato",
      services: {
        software: "Desenvolvimento de software",
        networks: "Redes e infraestruturas",
        design: "Design Gráfico",
      },
    },
    home: { ...Home.pt },
    servicesSection: { ...servicesSection.pt },
    toolsSection: { ...toolsSection.pt },
    testimonialsCTASection: { ...testimonialsCTASection.en },
    footer: { ...footer.pt },

  },
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      service: "Services",
      blog: "Blog",
      contact: "Contact",
      services: {
        software: "Software Development",
        networks: "Networks & Infrastructure",
        design: "Graphic Design",
      },
    },
    home: { ...Home.en },
    servicesSection: { ...servicesSection.en },
    toolsSection: { ...toolsSection.en },
    testimonialsCTASection: { ...testimonialsCTASection.en },
    footer: { ...footer.en },
  },
};

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations.en;
