"use client";
import Clients from "../components/Clients";
import Features from "../components/Features";
import HeroSection from "../components/HeroSection";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import Testmonials from "../components/Testmonials";

export default function Home() {
  return (
    <main className={`text-darkBlue flex justify-center w-screen flex-col mx-auto overflow-hidden"`}>
      <HeroSection />
      <Features />
      <Services />
      <Portfolio />
      <Testmonials />
      <Clients />
    </main>
  );
}
