import { Button } from "@/components/ui/button";
import { Code, Home, User, Briefcase, GraduationCap, Mail, Edit } from "lucide-react";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-portfolio-background/80 backdrop-blur-md border-b border-portfolio-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Code className="h-8 w-8 text-portfolio-purple-start" />
          <div className="text-xl font-bold">
            <span className="text-portfolio-foreground">TV.</span>
            <span className="text-sm text-portfolio-muted ml-2">PORTFOLIO</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-2 text-portfolio-foreground hover:text-portfolio-purple-start transition-colors duration-300"
          >
            <Home className="h-4 w-4" />
            <span>Home</span>
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="flex items-center space-x-2 text-portfolio-foreground hover:text-portfolio-purple-start transition-colors duration-300"
          >
            <User className="h-4 w-4" />
            <span>About</span>
          </button>
          <button
            onClick={() => scrollToSection('expertise')}
            className="flex items-center space-x-2 text-portfolio-foreground hover:text-portfolio-purple-start transition-colors duration-300"
          >
            <Code className="h-4 w-4" />
            <span>Expertise</span>
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="flex items-center space-x-2 text-portfolio-foreground hover:text-portfolio-purple-start transition-colors duration-300"
          >
            <Briefcase className="h-4 w-4" />
            <span>Projects</span>
          </button>
          <button
            onClick={() => scrollToSection('education')}
            className="flex items-center space-x-2 text-portfolio-foreground hover:text-portfolio-purple-start transition-colors duration-300"
          >
            <GraduationCap className="h-4 w-4" />
            <span>Education</span>
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="flex items-center space-x-2 text-portfolio-foreground hover:text-portfolio-purple-start transition-colors duration-300"
          >
            <Mail className="h-4 w-4" />
            <span>Contact</span>
          </button>
        </div>
      </div>
      </div>
    </nav>
  );
};

export default Navigation;