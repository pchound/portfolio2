import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
//import AchievementsSection from "./components/AchivementsSection";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col bg-gray-800 bg-no-repeat"

      style={{
        backgroundImage: "url('/liquid-cheese2.svg')",
      }}
    >
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        {/*<AchievementsSection />*/}
        <AboutSection />
        <ProjectsSection />
        <EmailSection />

      </div>
      <Footer />
    </main>
  );
}