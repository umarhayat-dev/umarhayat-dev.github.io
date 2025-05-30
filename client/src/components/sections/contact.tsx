
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // EmailJS configuration - Replace these with your actual values
  const EMAILJS_SERVICE_ID = "service_tqmg1j8";
  const EMAILJS_TEMPLATE_ID = "template_065vzal";
  const EMAILJS_PUBLIC_KEY = "jqxHQfXJPDmzydHqF";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Umar Hayat", // Your name
        },
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: <Mail className="text-luxury-black" />,
      label: "Email",
      value: "umarhayat.dev@gmail.com",
      href: "mailto:umarhayat.dev@gmail.com"
    },
    {
      icon: <Phone className="text-luxury-black" />,
      label: "Phone",
      value: "+91 9630032046",
      href: "tel:+919630032046"
    },
    {
      icon: <Github className="text-luxury-black" />,
      label: "GitHub", 
      value: "github.com/umarhayat-dev",
      href: "https://github.com/umarhayat-dev"
    },
    {
      icon: <Linkedin className="text-luxury-black" />,
      label: "LinkedIn",
      value: "linkedin.com/in/umar-hayat-khan-658b43230",
      href: "https://www.linkedin.com/in/umar-hayat-khan-658b43230"
    }
  ];

  return (
    <section id="contact" className="min-h-screen bg-luxury-black grain-texture py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
            <span className="gold-gradient">Say Hello</span>
          </h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto mb-8"></div>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Interested in building something smart? I'd love to collaborate. Whether you're a founder, a CTO, or just curious — reach out. Let's automate intelligently.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="font-playfair text-3xl font-semibold text-luxury-gold mb-8">Get In Touch</h3>
            
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center">
                  {info.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-white">{info.label}</h4>
                  <a 
                    href={info.href}
                    className="text-white/80 hover:text-luxury-gold transition-colors duration-300"
                  >
                    {info.value}
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {/* Contact Form */}
          <div className="bg-dark-section p-8 rounded-lg border border-luxury-gold/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-white/90 mb-2">Name</Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="bg-white/10 border-luxury-gold/30 text-white placeholder:text-white/50 focus:border-luxury-gold focus:bg-white/15"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-white/90 mb-2">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="bg-white/10 border-luxury-gold/30 text-white placeholder:text-white/50 focus:border-luxury-gold focus:bg-white/15"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-white/90 mb-2">Message</Label>
                <Textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="bg-white/10 border-luxury-gold/30 text-white placeholder:text-white/50 focus:border-luxury-gold focus:bg-white/15 resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-luxury-gold text-luxury-black font-semibold hover:bg-soft-gold transition-colors duration-300"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
