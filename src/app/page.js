import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutSection from "./components/About";
import Contact from "./components/Contact";
import TimeLine from "./components/TimeLine";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-blueGray-900 mx-auto px-12 py-4">
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <Projects></Projects>
      <Footer></Footer>
    </main>
  );
}
