import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutSection from "./components/About";
import Contact from "./components/Contact";
import TimeLine from "./components/TimeLine";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
//import { GoogleAnalytics } from '@next/third-parties/google'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col mx-auto px-12 py-4">
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <Experiences></Experiences>
      <HorizontalRule></HorizontalRule>
      <Footer></Footer>
     
    </main>
  );
}



function HorizontalRule() {
  return (
    <hr className="w-1/2 h-0.5 mx-auto my-10 border z-10 border-t-transparent border-b-transparent border-l-transparent border-r-transparent text-white"></hr>
  );
}
