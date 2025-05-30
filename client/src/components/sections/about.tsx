import { Brain, ServerCog, Database, Rocket } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Brain className="text-3xl" />,
      title: "AI Systems",
      description: "Advanced LLM integration and multi-modal AI solutions"
    },
    {
      icon: <ServerCog className="text-3xl" />,
      title: "Automation",
      description: "Workflow optimization and process automation"
    },
    {
      icon: <Database className="text-3xl" />,
      title: "Backend",
      description: "Scalable APIs and database architecture"
    },
    {
      icon: <Rocket className="text-3xl" />,
      title: "Innovation",
      description: "Cutting-edge solutions for complex problems"
    }
  ];

  return (
    <section id="about" className="min-h-screen bg-dark-section grain-texture py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="gold-gradient">About</span>
          </h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg text-white/90 leading-relaxed">
              I'm a self-taught AI systems engineer with a background in multi-modal data training and enterprise automation. 
              Over the past two years, I've led the design, deployment, and optimization of AI-integrated workflows — 
              leveraging LLMs, vector databases, RESTful APIs, and event-driven architectures.
            </p>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed">
              I began in the world of LLM training, fine-tuning large-scale models using structured data pipelines 
              across text, audio, and video modalities. From there, I transitioned into building production-ready 
              automation systems that integrate tools like OpenAI, LangChain, FastAPI, and PostgreSQL.
            </p>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed">
              My work is focused on creating intelligent, resilient systems that reduce cognitive load, 
              automate repetitive logic, and allow teams to operate at scale.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-luxury-black/50 p-4 sm:p-6 rounded-lg border border-luxury-gold/20 hover:border-luxury-gold/40 transition-all duration-300"
              >
                <div className="text-luxury-gold mb-3 sm:mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-playfair text-lg sm:text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm sm:text-base text-white/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
