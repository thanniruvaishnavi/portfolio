import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const projects = [
    {
      title: "Video2Words",
      description: "A web application that enables content creators to automatically transcribe and translate their videos, promoting accessibility and global reach.",
      image: "https://res.cloudinary.com/dgp5vht7s/image/upload/v1745484515/Video2Words_jklt3m.png",
      technologies: ["Next.js", "Node.js", "Express", "AWS", "Docker", "Tailwind CSS"],
      category: "Full-stack",
      githubUrl: "https://github.com/vigneshwaranbalamurugan/Video-2-Words"
    },
    {
      title: "Vishwas (SIH)",
      description: "A contract based farming platform to ensure transparent agreements, fair pricing, and secure, timely payments for farmers.",
      image: "https://res.cloudinary.com/dgp5vht7s/image/upload/v1745486393/Vishwas_iwzlff.png",
      technologies: ["React", "Node.js", "Express", "MongoDB", "RazorPay", "CSS"],
      category: "Full-stack",
      githubUrl: "https://github.com/vigneshwaranbalamurugan/VISHWAS"
    },
    {
      title: "KubeMERN",
      description: "A simple Todo application built using the MERN stack, deployed on a Kubernetes-based microservices architecture for scalability and containerized orchestration.",
      image: "https://res.cloudinary.com/dgp5vht7s/image/upload/v1745906999/kubes_yn413s.png",
      technologies: ["Kubernetes", "Docker", "GitHub", "React", "Node.js", "Express", "MongoDB"],
      category: "Devops",
      githubUrl: "https://github.com/vigneshwaranbalamurugan/MERN_Kubernetes"
    },
    {
      title: "HospEquipManage",
      description: "The Integrated Hospital Equipment Management Module is designed to manage the preventive maintenance of hospital machines and equipment.",
      image: "https://res.cloudinary.com/dgp5vht7s/image/upload/v1745488572/Eonco_qsohzf.png",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      category: "Full-stack",
      githubUrl: "https://github.com/vigneshwaranbalamurugan/Hospital_Equipment_Health_Tracker"
    },
    {
      title: "VistaBook",
      description: "A smart guest house booking system for KEC with 360° video tours and VR support for a fully immersive experience before booking.",
      image: "https://res.cloudinary.com/dgp5vht7s/image/upload/v1745488915/VishtaBook_supdwt.png",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Three.js"],
      category: "Full-stack",
      githubUrl: "https://github.com/vigneshwaranbalamurugan/Kec_Guesthouse_Booking"
    },
    {
      title: "GeoSnap",
      description: "A full-stack web application that enables photographers to share and explore images based on geographic location. Users can discover images shared by other users or from specific locations.",
      image: "https://res.cloudinary.com/dgp5vht7s/image/upload/v1745489255/GeoSnap_k8hx3j.png",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Docker"],
      category: "Full-stack",
      githubUrl: "https://github.com/vigneshwaranbalamurugan/GeoSnap"
    }
  ];

  const filters = ["All", "Full-stack", "Cloud", "Devops", "AI", "Cyber Security", "Others"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getTechIcon = (tech: string) => {
    const iconMap: { [key: string]: string } = {
      "Next.js": "▲",
      "React": "⚛️",
      "Node.js": "🟢",
      "Express": "🚀",
      "MongoDB": "🍃",
      "AWS": "☁️",
      "Docker": "🐳",
      "Kubernetes": "⚙️",
      "Tailwind CSS": "🎨",
      "Three.js": "🎮",
      "GitHub": "📝",
      "CSS": "🎨",
      "RazorPay": "💳"
    };
    return iconMap[tech] || "⚡";
  };

  return (
    <section id="projects" className="py-20 bg-portfolio-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6 mb-16">
          <p className="text-portfolio-purple-start font-semibold uppercase tracking-wider">
            PORTFOLIO SHOWCASE
          </p>
          <h2 className="text-5xl font-bold text-portfolio-foreground">
            Featured Projects
          </h2>
          <p className="text-xl text-portfolio-muted max-w-3xl mx-auto">
            A collection of my recent work across various technologies and domains. 
            Each project represents unique challenges and solutions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className={activeFilter === filter 
                ? "portfolio-button-gradient border-0 text-white" 
                : "bg-portfolio-card border-portfolio-border text-portfolio-foreground hover:bg-portfolio-card-hover"
              }
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index}
              className="overflow-hidden bg-portfolio-card border-portfolio-border hover:border-portfolio-purple-start transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-portfolio-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button 
                    size="sm"
                    className="portfolio-button-gradient border-0 text-white"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Project
                    </a>
                  </Button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-portfolio-foreground group-hover:text-portfolio-purple-start transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-portfolio-muted text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-portfolio-foreground">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <div 
                        key={techIndex}
                        className="flex items-center space-x-1 bg-portfolio-background-secondary px-2 py-1 rounded-md"
                      >
                        <span className="text-sm">{getTechIcon(tech)}</span>
                        <span className="text-xs text-portfolio-foreground">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* GitHub Link */}
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full bg-portfolio-background-secondary border-portfolio-border text-portfolio-foreground hover:bg-portfolio-card-hover"
                  asChild
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Source Code
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;