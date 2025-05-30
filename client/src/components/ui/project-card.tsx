import { useState } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  technologies: string[];
  isComingSoon?: boolean;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="project-card bg-luxury-black/50 rounded-lg border border-luxury-gold/20 overflow-hidden group">
      {/* Project Image */}
      <div className="h-48 bg-gradient-to-br from-luxury-gold/20 to-soft-gold/10 relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-luxury-black/40 group-hover:bg-luxury-black/20 transition-all duration-300"></div>
        <div className="absolute top-4 right-4">
          {project.isComingSoon ? (
            <span className="px-2 py-1 text-xs bg-luxury-gold text-luxury-black rounded font-medium">
              Coming Soon
            </span>
          ) : (
            <ExternalLink className="text-luxury-gold text-xl" />
          )}
        </div>
      </div>
      
      {/* Project Content */}
      <div className="p-6">
        <h3 className="font-playfair text-xl font-semibold text-luxury-gold mb-3">
          {project.title}
        </h3>
        
        <p className="text-white/80 mb-4">
          {isExpanded && project.fullDescription ? project.fullDescription : project.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 text-xs bg-luxury-gold/20 text-luxury-gold rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-2">
          {project.fullDescription && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-luxury-gold hover:text-soft-gold transition-colors duration-300 p-0"
            >
              {isExpanded ? "Show Less" : "View Details"}
              <ArrowRight className={`ml-2 h-4 w-4 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
            </Button>
          )}
          

        </div>
      </div>
    </div>
  );
}
