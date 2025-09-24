import { Card } from "@/components/ui/card";
import profileImage from "@/assets/profile-photo.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-portfolio-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden border-4 border-portfolio-border">
                <img 
                  src={profileImage} 
                  alt="Thanniru Vaishnavi" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 portfolio-button-gradient rounded-full flex items-center justify-center">
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

            {/* Key Points */}
            <div className="space-y-4">
              <Card className="p-4 bg-portfolio-card border-portfolio-border hover:bg-portfolio-card-hover transition-colors duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full portfolio-button-gradient"></div>
                  <span className="text-portfolio-foreground font-medium">Passionate Full-Stack Developer</span>
                </div>
              </Card>
              
              <Card className="p-4 bg-portfolio-card border-portfolio-border hover:bg-portfolio-card-hover transition-colors duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full portfolio-button-gradient"></div>
                  <span className="text-portfolio-foreground font-medium">Problem-solver with a love for innovation</span>
                </div>
              </Card>
              
              <Card className="p-4 bg-portfolio-card border-portfolio-border hover:bg-portfolio-card-hover transition-colors duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full portfolio-button-gradient"></div>
                  <span className="text-portfolio-foreground font-medium">Building scalable & efficient applications</span>
                </div>
              </Card>
              
              <Card className="p-4 bg-portfolio-card border-portfolio-border hover:bg-portfolio-card-hover transition-colors duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full portfolio-button-gradient"></div>
                  <span className="text-portfolio-foreground font-medium">Focused on leveraging Cloud technologies for modern, reliable solutions</span>
                </div>
              </Card>
              
              <Card className="p-4 bg-portfolio-card border-portfolio-border hover:bg-portfolio-card-hover transition-colors duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full portfolio-button-gradient"></div>
                  <span className="text-portfolio-foreground font-medium">Always learning and adapting</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;