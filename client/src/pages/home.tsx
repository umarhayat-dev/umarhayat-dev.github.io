import Navigation from "@/components/layout/navigation";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Projects from "@/components/sections/projects";
import FutureProjects from "@/components/sections/future-projects";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-luxury-black text-white">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <FutureProjects />
      <Contact />
    </div>
  );
}