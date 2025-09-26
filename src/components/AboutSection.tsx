import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import profileImage from "@/assets/profile-photo.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-portfolio-background via-portfolio-card to-portfolio-background relative overflow-hidden">
      {/* Clean minimal background */}
      
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Neon glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-portfolio-purple-start to-portfolio-purple-end opacity-20 blur-xl scale-110"></div>
              <div className="w-80 h-80 rounded-2xl overflow-hidden border-4 border-dashed border-portfolio-purple-start relative shadow-2xl shadow-portfolio-purple-start/20">
                <img 
                  src={profileImage} 
                  alt="Thanniru Vaishnavi" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 portfolio-button-gradient rounded-full flex items-center justify-center shadow-lg shadow-portfolio-purple-start/40">
                <span className="text-2xl">💻</span>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-portfolio-foreground">
                About Me
              </h2>
              <p className="text-lg text-portfolio-muted leading-relaxed">
                Hi! I'm Thanniru Vaishnavi, a passionate Software Developer with a strong foundation in modern web technologies. 
                I love creating efficient, scalable solutions and am always eager to learn new technologies and tackle challenging problems. 
                My journey in software development has been driven by curiosity and a desire to build meaningful applications that make a difference.
              </p>
            </div>

            {/* Key Points - Bulleted List with Checkmarks */}
            <div className="space-y-4">
              <ul className="space-y-4">
                <li className="flex items-center space-x-4 group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full portfolio-button-gradient flex items-center justify-center shadow-lg shadow-portfolio-purple-start/30 group-hover:scale-110 transition-transform duration-300">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-portfolio-foreground font-medium text-lg group-hover:text-portfolio-purple-start transition-colors duration-300">
                    Passionate Full-Stack Developer
                  </span>
                </li>
                
                <li className="flex items-center space-x-4 group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full portfolio-button-gradient flex items-center justify-center shadow-lg shadow-portfolio-purple-start/30 group-hover:scale-110 transition-transform duration-300">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-portfolio-foreground font-medium text-lg group-hover:text-portfolio-purple-start transition-colors duration-300">
                    Problem-solver with a love for innovation
                  </span>
                </li>
                
                <li className="flex items-center space-x-4 group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full portfolio-button-gradient flex items-center justify-center shadow-lg shadow-portfolio-purple-start/30 group-hover:scale-110 transition-transform duration-300">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-portfolio-foreground font-medium text-lg group-hover:text-portfolio-purple-start transition-colors duration-300">
                    Building scalable & efficient applications
                  </span>
                </li>
                
                <li className="flex items-center space-x-4 group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full portfolio-button-gradient flex items-center justify-center shadow-lg shadow-portfolio-purple-start/30 group-hover:scale-110 transition-transform duration-300">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-portfolio-foreground font-medium text-lg group-hover:text-portfolio-purple-start transition-colors duration-300">
                    Focused on leveraging Cloud technologies for modern, reliable solutions
                  </span>
                </li>
                
                <li className="flex items-center space-x-4 group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full portfolio-button-gradient flex items-center justify-center shadow-lg shadow-portfolio-purple-start/30 group-hover:scale-110 transition-transform duration-300">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-portfolio-foreground font-medium text-lg group-hover:text-portfolio-purple-start transition-colors duration-300">
                    Always learning and adapting
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;