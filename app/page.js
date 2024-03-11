import Clients from "./components/Clients";
import Features from "./components/Features";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Testmonials from "./components/Testmonials";

export default function Home() {
  return (
    <div className="px-6 lg:px-24 mx-auto ">
      <Header />
      <HeroSection />
      <Features />
      <Services />
      <Portfolio />
      <Testmonials />
      <Clients />
    </div>
  );
}
