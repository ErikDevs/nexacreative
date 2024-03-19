import Clients from "./components/Clients";
import Features from "./components/Features";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Testmonials from "./components/Testmonials";

export default function Home() {
  return (
    <main className="px-6 lg:px-24 mx-auto">
      <HeroSection />
      <Features />
      <Services />
      <Portfolio />
      <Testmonials />
      <Clients />
    </main>
  );
}
