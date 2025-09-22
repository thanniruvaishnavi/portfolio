import { Card } from "@/components/ui/card";

const ExpertiseSection = () => {
  const skills = [
    {
      title: "React.js",
      description: "Frontend and User-Interface Development.",
      icon: "⚛️"
    },
    {
      title: "Next.js", 
      description: "Frontend Development.",
      icon: "▲"
    },
    {
      title: "Node.js & Express.js",
      description: "Backend API Development.",
      icon: "🟢"
    },
    {
      title: "AWS",
      description: "DevOps, Cloud Hosting, and Deployment.",
      icon: "☁️"
    },
    {
      title: "MongoDB",
      description: "Backend API Database Management.",
      icon: "🍃"
    },
    {
      title: "GitHub",
      description: "Version Control, CI/CD, and Code Collaboration.",
      icon: "📝"
    },
    {
      title: "Spring Boot",
      description: "Java-based Backend Development.",
      icon: "🌱"
    },
    {
      title: "Docker & Kubernetes",
      description: "Containerization and orchestration for scalable application deployment.",
      icon: "🐳"
    }
  ];

  return (
    <section id="expertise" className="py-20 bg-portfolio-background-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-5xl font-bold text-portfolio-foreground">
            Expertise
          </h2>
          <p className="text-xl text-portfolio-muted max-w-2xl mx-auto">
            Turning Ideas into Impact with These Skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={index}
              className="p-6 bg-portfolio-card border-portfolio-border hover:bg-portfolio-card-hover hover:border-portfolio-purple-start transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                
                <h3 className="text-xl font-bold portfolio-gradient-text">
                  {skill.title}
                </h3>
                
                <p className="text-portfolio-muted">
                  {skill.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;