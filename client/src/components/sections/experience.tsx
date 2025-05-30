import { experienceData, skillsData } from "@/lib/data";
import { Building2, Calendar, ChevronRight } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen bg-luxury-black grain-texture py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="gold-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {experienceData.map((exp, index) => (
            <div key={index} className="bg-dark-section/50 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-xl border border-luxury-gold/20 hover:border-luxury-gold/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 sm:mb-6">
                <div className="flex items-center space-x-3 mb-3 sm:mb-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-luxury-gold/20 rounded-lg flex items-center justify-center">
                    <Building2 className="text-luxury-gold text-lg sm:text-xl" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl sm:text-2xl font-semibold text-luxury-gold">{exp.title}</h3>
                    <p className="text-sm sm:text-base text-white/90 font-medium">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-soft-gold">
                  <Calendar className="text-sm" />
                  <span className="text-xs sm:text-sm font-medium">{exp.period}</span>
                </div>
              </div>
              
              <div className="space-y-2 sm:space-y-3">
                {exp.achievements.map((achievement, achievementIndex) => (
                  <div key={achievementIndex} className="flex items-start space-x-3">
                    <ChevronRight className="text-luxury-gold text-sm mt-1 flex-shrink-0" />
                    <p className="text-sm sm:text-base text-white/80 leading-relaxed">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Skills Section */}
        <div className="bg-dark-section/30 backdrop-blur-sm rounded-2xl p-8 border border-luxury-gold/10">
          <h3 className="font-playfair text-3xl font-semibold text-luxury-gold text-center mb-12">Technical Expertise</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {skillsData.map((skillCategory, index) => (
              <div key={index} className="text-center p-6 bg-luxury-black/30 rounded-lg border border-luxury-gold/10 hover:border-luxury-gold/30 transition-all duration-300">
                <h4 className="font-playfair text-xl font-semibold text-luxury-gold mb-4">{skillCategory.category}</h4>
                <p className="text-white/80 leading-relaxed">{skillCategory.skills}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
