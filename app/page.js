import AboutSection from "@/components/AboutSection";
import ExperienceContainer from "@/components/ExperienceContainer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/ProjectSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#04152d] px-8">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ExperienceContainer />
    <ProjectSection />
    </main>
  );
}
