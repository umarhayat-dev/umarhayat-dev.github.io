import { futureProjectsData } from "@/lib/data";
import ProjectCard from "@/components/ui/project-card";
import { Sparkles } from "lucide-react";

export default function FutureProjects() {
  return (
    <section id="future-projects" className="min-h-screen bg-dark-section grain-texture py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Sparkles className="text-luxury-gold text-2xl" />
            <h2 className="font-playfair text-5xl md:text-6xl font-bold">
              <span className="gold-gradient">Future Vision</span>
            </h2>
            <Sparkles className="text-luxury-gold text-2xl" />
          </div>
          <div className="w-24 h-1 bg-luxury-gold mx-auto mb-8"></div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Innovation never stops. Here's what's coming next in my journey to revolutionize 
            how we interact with technology and automate the future.
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="max-w-md">
            {futureProjectsData.map((project, index) => (
              <div key={index} className="relative">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}