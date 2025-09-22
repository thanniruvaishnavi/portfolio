import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Sparkles, Heart, Zap, Users } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-portfolio-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6 mb-16">
          <p className="text-portfolio-purple-start font-semibold uppercase tracking-wider">
            Let's Talk
          </p>
          <h2 className="text-5xl font-bold text-portfolio-foreground">
            Contact Me
          </h2>
          <p className="text-xl text-portfolio-muted max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side - What's Cooking Cards */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-portfolio-foreground mb-8">
              What's Cooking?
            </h3>

            <div className="space-y-6">
              <Card className="p-6 bg-portfolio-card border-portfolio-border hover:bg-portfolio-card-hover hover:border-portfolio-purple-start transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full portfolio-button-gradient group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-portfolio-foreground mb-2">
                      Currently Innovating
                    </h4>
                    <p className="text-portfolio-muted">
                      Building the future with creativity and tech magic!
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-portfolio-card border-portfolio-border hover:bg-portfolio-card-hover hover:border-portfolio-purple-start transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full portfolio-button-gradient group-hover:scale-110 transition-transform duration-300">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-portfolio-foreground mb-2">
                      Inspired by Change
                    </h4>
                    <p className="text-portfolio-muted">
                      Driven to solve real-world problems and make an impact.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-portfolio-card border-portfolio-border hover:bg-portfolio-card-hover hover:border-portfolio-purple-start transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full portfolio-button-gradient group-hover:scale-110 transition-transform duration-300">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-portfolio-foreground mb-2">
                      Next Big Thing
                    </h4>
                    <p className="text-portfolio-muted">
                      Exploring new horizons, challenging limits, and dreaming big.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-portfolio-card border-portfolio-border hover:bg-portfolio-card-hover hover:border-portfolio-purple-start transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full portfolio-button-gradient group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-portfolio-foreground mb-2">
                      Let's Connect
                    </h4>
                    <div className="flex space-x-4 mt-3">
                      <a 
                        href="https://github.com/vigneshwaranbalamurugan" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-portfolio-foreground hover:text-portfolio-purple-start transition-colors duration-300"
                      >
                        <Github className="h-5 w-5" />
                        <span>GitHub</span>
                      </a>
                      <a 
                        href="https://www.linkedin.com/in/vigneshwaran30/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-portfolio-foreground hover:text-portfolio-purple-start transition-colors duration-300"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span>LinkedIn</span>
                      </a>
                      <a 
                        href="mailto:vigneshsobalamurugan2005@gmail.com"
                        className="flex items-center space-x-2 text-portfolio-foreground hover:text-portfolio-purple-start transition-colors duration-300"
                      >
                        <Mail className="h-5 w-5" />
                        <span>Mail</span>
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-portfolio-foreground">
              Send Me a Message
            </h3>

            <Card className="p-8 bg-portfolio-card border-portfolio-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-portfolio-foreground">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-portfolio-background-secondary border-portfolio-border text-portfolio-foreground"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-portfolio-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-portfolio-background-secondary border-portfolio-border text-portfolio-foreground"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-portfolio-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-portfolio-background-secondary border-portfolio-border text-portfolio-foreground min-h-[120px]"
                    placeholder="Tell me about your project or just say hello!"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full portfolio-button-gradient border-0 text-white hover:text-white"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;