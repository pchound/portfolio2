import Image from "next/image";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col bg-gray-800">
        <h1 className="text-white">Portfolio Website</h1>
        <HeroSection />
       </main>
  )
}
