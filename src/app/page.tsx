"use client";
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { HeroSection, Navbar, ServicesSection, TestimonialsCTASection } from "@/components";
import { ToolsSection } from "@/components/ToolsSection";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ToolsSection />
      <TestimonialsCTASection />
      <Footer />
    </>
  );
}
