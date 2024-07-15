import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#04152d] px-32">
    <Navbar />
    <HeroSection />
    </main>
  );
}
