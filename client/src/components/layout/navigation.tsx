import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const sections = ['home', 'about', 'experience', 'projects', 'future-projects', 'contact'];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Main Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-luxury-black/90 backdrop-blur-md border-b border-luxury-gold/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="font-playfair font-bold text-xl text-luxury-gold">
              Umar Hayat
            </div>
            
            <div className="hidden md:flex space-x-8">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-white hover:text-luxury-gold transition-colors duration-300 capitalize ${
                    activeSection === section ? 'text-luxury-gold' : ''
                  }`}
                >
                  {section === 'future-projects' ? 'Future' : section}
                </button>
              ))}
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-luxury-gold hover:text-soft-gold"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-luxury-black/95 backdrop-blur-md border-b border-luxury-gold/20">
            <div className="px-6 py-4 space-y-4">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block text-white hover:text-luxury-gold transition-colors duration-300 capitalize ${
                    activeSection === section ? 'text-luxury-gold' : ''
                  }`}
                >
                  {section === 'future-projects' ? 'Future' : section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>


    </>
  );
}
