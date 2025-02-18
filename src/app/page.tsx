"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  HeroSection,
  Navbar,
  ServicesSection,
  TestimonialsCTASection,
} from "@/components/Home";
import { ToolsSection } from "@/components/Home/ToolsSection";
import Footer from "@/components/Home/Footer";
import { Loading } from "@/components/Home/Loading";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Loading />
      <HeroSection />
      <ServicesSection />
      <ToolsSection />
      <TestimonialsCTASection />
    </>
  );
}
