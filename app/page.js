"use client";
import { useTheme } from "next-themes";
import Clients from "../components/Clients";
import Features from "../components/Features";
import HeroSection from "../components/HeroSection";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import Testmonials from "../components/Testmonials";

export default function Home() {
  const { theme } = useTheme();
  return (
    <main
      className={`${
        theme === "dark" ? "text-slate-100" : "text-blue-950"
      } px-6 lg:px-36 mx-auto overflow-hidden"`}
    >
      <HeroSection />
      <Features />
      <Services />
      <Portfolio />
      <Testmonials />
      <Clients />
    </main>
  );
}
