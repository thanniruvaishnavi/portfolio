import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Code, Download, MessageCircle } from "lucide-react";
import SkillsCircle from "./SkillsCircle";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center portfolio-gradient-bg">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Greeting */}
            <div className="space-y-2">
              <p className="text-2xl text-portfolio-foreground flex items-center justify-center lg:justify-start">
                Hey there! <span className="ml-2 animate-bounce">👋</span>
              </p>
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold">
                <span className="text-portfolio-foreground">I'm </span>
                <span className="portfolio-gradient-text">Thanniru Vaishnavi</span>
              </h1>
              <h2 className="text-3xl lg:text-4xl font-semibold text-portfolio-purple-start flex items-center justify-center lg:justify-start">
                Software Developer <span className="ml-2">🔥</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-portfolio-muted max-w-2xl">
              I love learning new technologies and building solutions that make a difference. 
              Thanks for visiting my portfolio! <span className="text-yellow-400 font-semibold">Happy coding..!</span>
              <span className="ml-1">💻</span>
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="outline" 
                size="lg"
                className="bg-portfolio-button-secondary border-portfolio-border text-portfolio-foreground hover:bg-portfolio-card-hover"
                onClick={() => window.open('/Thanniru-Vaishnavi-Resume.pdf', '_blank')}
              >
                <Download className="h-5 w-5 mr-2" />
                My Resume
              </Button>
              <Button 
                size="lg"
                className="portfolio-button-gradient border-0 text-white hover:text-white"
                onClick={() => scrollToSection('contact')}
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 justify-center lg:justify-start">
              <a 
                href="https://github.com/thanniruvaishnavi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-portfolio-card border border-portfolio-border text-portfolio-foreground hover:text-portfolio-purple-start hover:border-portfolio-purple-start transition-all duration-300"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/thanniru-vaishnavi-49828428b/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-portfolio-card border border-portfolio-border text-portfolio-foreground hover:text-portfolio-purple-start hover:border-portfolio-purple-start transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:thanniruvaishnavi9849@gmail.com"
                className="p-3 rounded-full bg-portfolio-card border border-portfolio-border text-portfolio-foreground hover:text-portfolio-purple-start hover:border-portfolio-purple-start transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/thanniruvaishnavi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-portfolio-card border border-portfolio-border text-portfolio-foreground hover:text-portfolio-purple-start hover:border-portfolio-purple-start transition-all duration-300"
              >
                <Code className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right Content - Skills Circle */}
          <div className="flex justify-center lg:justify-end">
            <SkillsCircle />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;