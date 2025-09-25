import { Github, Linkedin, Mail, MapPin, Globe } from "lucide-react";

const FooterSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-portfolio-background border-t border-portfolio-border">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Column 1: Portfolio Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">
              Thanniru Vaishnavi's Portfolio
              <div className="w-16 h-0.5 bg-gradient-to-r from-portfolio-purple-start to-portfolio-purple-end mt-2"></div>
            </h3>
            <p className="text-portfolio-text-secondary leading-relaxed">
              Thank you for visiting my personal portfolio website. Connect with me over socials.
            </p>
            <p className="text-white font-medium">
              Keep Rising 🚀
            </p>
            <p className="text-portfolio-text-secondary flex items-start gap-2">
              <Globe className="h-5 w-5 mt-0.5 text-portfolio-purple-start" />
              Exploring new technologies, innovating, and delivering results.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">
              Quick Links
              <div className="w-16 h-0.5 bg-gradient-to-r from-portfolio-purple-start to-portfolio-purple-end mt-2"></div>
            </h3>
            <nav className="space-y-3">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About', id: 'about' },
                { name: 'Expertise', id: 'expertise' },
                { name: 'Projects', id: 'projects' },
                { name: 'Education', id: 'education' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-portfolio-text-secondary hover:text-white hover:translate-x-2 transition-all duration-300 text-left"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-portfolio-purple-start rounded-full"></span>
                    {link.name}
                  </span>
                </button>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">
              Contact Info
              <div className="w-16 h-0.5 bg-gradient-to-r from-portfolio-purple-start to-portfolio-purple-end mt-2"></div>
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-portfolio-text-secondary">
                <Mail className="h-5 w-5 text-portfolio-purple-start" />
                <a 
                  href="mailto:thanniruvaishnavi9849@gmail.com"
                  className="hover:text-white transition-colors duration-300"
                >
                  thanniruvaishnavi9849@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3 text-portfolio-text-secondary">
                <MapPin className="h-5 w-5 text-portfolio-purple-start mt-0.5" />
                <span>Hyderabad, Telangana, India – 500068</span>
              </div>
              
              {/* Social Media Icons */}
              <div className="flex items-center gap-4 pt-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-portfolio-card hover:bg-portfolio-card-hover transition-all duration-300 hover:scale-110"
                >
                  <Github className="h-5 w-5 text-portfolio-text-secondary hover:text-white" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-portfolio-card hover:bg-portfolio-card-hover transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="h-5 w-5 text-portfolio-text-secondary hover:text-white" />
                </a>
                <a
                  href="mailto:thanniruvaishnavi9849@gmail.com"
                  className="p-2 rounded-lg bg-portfolio-card hover:bg-portfolio-card-hover transition-all duration-300 hover:scale-110"
                >
                  <Mail className="h-5 w-5 text-portfolio-text-secondary hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-portfolio-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-portfolio-text-secondary">
            <p>© 2025 | All rights reserved</p>
            <p>
              Designed & Developed with <span className="text-red-400">❤️</span> by{" "}
              <span className="text-white font-medium">Thanniru Vaishnavi</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;