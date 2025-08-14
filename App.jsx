import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import Header from "./components/header";
import HeroSection from "./components/HeroSection";
import CustomCursor from "./components/CustomCursor";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ProgressBar from "./components/ProgressBar";

export default function App() {

  useEffect(() => { 
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)

    // Refresh ScrollTrigger when the page is fully Loaded
    ScrollTrigger.refresh()

    // Clean up ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill ())
    }
  }, [])
  return (
    <>
      <Header />
      <HeroSection />
      <CustomCursor />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
      <ProgressBar />
    </>
    
  )
}