"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  HeroSection,
  Navbar,
  ServicesSection,
  TestimonialsCTASection,
} from "@/components";
import { ToolsSection } from "@/components/ToolsSection";
import Footer from "@/components/Footer";
import { Loading } from "@/components/Loading";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Loading />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ToolsSection />
      <TestimonialsCTASection />
      <Footer />
    </>
  );
}
