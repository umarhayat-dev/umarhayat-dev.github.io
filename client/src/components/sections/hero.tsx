import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Instagram, Mail, Linkedin } from "lucide-react";
import forestBg from "@assets/depositphotos_507051000-stock-photo-mangrove-green-forest-rainy-season.jpg";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = "I am Umar Hayat";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative luxury-gradient grain-texture flex items-center justify-center pt-24">
      {/* Subtle Forest Background */}
      <div className="absolute inset-0">
        <img 
          src={forestBg} 
          alt="Forest background" 
          className="w-full h-full object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-luxury-black/90"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/80 via-luxury-black/60 to-luxury-black/80"></div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-luxury-gold/10 via-transparent to-soft-gold/5" />
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-6 sm:mb-8 animate-fade-in">
          <h1 className="font-playfair text-4xl sm:text-6xl md:text-8xl font-bold mb-4">
            <span className="gold-gradient">Hello World</span>
          </h1>
          <div className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-2 font-light min-h-[2rem] sm:min-h-[3rem] flex items-center justify-center">
            <span className="border-r-2 border-luxury-gold pr-1 animate-pulse">
              {typedText}
            </span>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-soft-gold font-light tracking-wide px-2">
            Python Developer | AI Systems Architect | Workflow Automation Specialist
          </p>
        </div>
        
        <div className="mb-8 sm:mb-12 animate-slide-up">
          <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto px-2">
            I design and deploy AI-powered systems that streamline operations, eliminate bottlenecks, 
            and scale with your team — whether you're a lean startup or an enterprise managing millions of data points.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12">
          <Button 
            onClick={() => scrollToSection('contact')}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-luxury-gold text-luxury-black font-semibold hover:bg-soft-gold transition-all duration-300 text-sm sm:text-base"
          >
            Get In Touch
          </Button>
          <Button 
            variant="outline"
            onClick={() => scrollToSection('projects')}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black transition-all duration-300 text-sm sm:text-base"
          >
            View My Work
          </Button>
        </div>
        
        <div className="flex justify-center space-x-4 sm:space-x-6 mb-12 sm:mb-16">
          <a href="https://github.com/umarhayat-dev" target="_blank" rel="noopener noreferrer" className="text-xl sm:text-2xl text-white/60 hover:text-luxury-gold transition-colors duration-300 p-2">
            <Github />
          </a>
          <a href="https://www.instagram.com/h_a_y_a_t_20021/" target="_blank" rel="noopener noreferrer" className="text-xl sm:text-2xl text-white/60 hover:text-luxury-gold transition-colors duration-300 p-2">
            <Instagram />
          </a>
          <a href="https://www.linkedin.com/in/umar-hayat-khan-658b43230" target="_blank" rel="noopener noreferrer" className="text-xl sm:text-2xl text-white/60 hover:text-luxury-gold transition-colors duration-300 p-2">
            <Linkedin />
          </a>
          <a 
            href="mailto:umarhayat.dev@gmail.com?subject=Hello%20from%20your%20portfolio" 
            className="text-xl sm:text-2xl text-white/60 hover:text-luxury-gold transition-colors duration-300 p-2"
          >
            <Mail />
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 scroll-indicator">
        <div className="w-6 h-10 border-2 border-luxury-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-luxury-gold rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
