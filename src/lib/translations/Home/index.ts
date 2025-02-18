import { footer } from "./Footer";
import { Home } from "./Home";
import { servicesSection } from "./servicesSection";
import { testimonialsCTASection } from "./testimonialsCTASection";
import { toolsSection } from "./ToolsSection";

export const globalHome = {
  pt: {
    home: { ...Home.pt },
    servicesSection: { ...servicesSection.pt },
    toolsSection: { ...toolsSection.pt },
    testimonialsCTASection: { ...testimonialsCTASection.en },
    footer: { ...footer.pt },
  },
  en: {
    home: { ...Home.en },
    servicesSection: { ...servicesSection.en },
    toolsSection: { ...toolsSection.en },
    testimonialsCTASection: { ...testimonialsCTASection.en },
    footer: { ...footer.en },
  },
};
