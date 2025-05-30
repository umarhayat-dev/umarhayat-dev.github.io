import { projectsData } from "@/lib/data";
import ProjectCard from "@/components/ui/project-card";

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-dark-section grain-texture py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
            <span className="gold-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
