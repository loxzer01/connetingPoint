import { custom404 } from "./translations/404";
import { GlobalAbout } from "./translations/About";
import { ContactGlobal } from "./translations/Contact";
import { globalHome } from "./translations/Home";

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
    ...globalHome.pt,
    custom404: { ...custom404.pt },
    about: { ...GlobalAbout.pt }, 
    contact: { ...ContactGlobal.pt },
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
    ...globalHome.en,
    custom404: { ...custom404.en },
    about: { ...GlobalAbout.en },
    contact: { ...ContactGlobal.pt },
  },
};

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations.en;
