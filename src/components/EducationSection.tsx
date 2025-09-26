import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      year: "2022 - 2026",
      degree: "Bachelor of Engineering",
      field: "Computer Science & Engineering (CGPA: 8.32)",
      institution: "Kongu Engineering College",
      description: "Currently pursuing a degree with a focus on software development and cloud computing.",
      subjects: ["Web Development", "Database Management", "Data Structures", "Computer Networks", "Cloud Computing"],
      isOngoing: true
    },
    {
      year: "2020 - 2022",
      degree: "Higher Secondary Education",
      field: "Biology Stream ( Percentage:93.16% )",
      institution: "Saraswathi Matriculation Higher Secondary School",
      description: "Focused on Biology, Physics, Chemistry, and Mathematics.",
      subjects: ["Biology", "Mathematics", "Physics", "Chemistry"],
      isOngoing: false
    },
    {
      year: "2019 - 2020",
      degree: "Secondary School Education",
      field: "Percentage: 98%",
      institution: "Saraswathi Matriculation Higher Secondary School",
      description: "Focused on Physics, Chemistry, and Mathematics.",
      subjects: ["Chemistry", "Mathematics", "Physics"],
      isOngoing: false
    }
  ];

  return (
    <section id="education" className="py-20 bg-portfolio-background-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-pulse drop-shadow-2xl">
            EDUCATION
          </h2>
          <p className="text-xl text-portfolio-muted max-w-2xl mx-auto">
            My academic background that shaped my career.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-portfolio-border"></div>
            
            {/* Education Items */}
            <div className="space-y-12">
              {education.map((edu, index) => (
                <div key={index} className="relative flex items-start space-x-8">
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full portfolio-button-gradient">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>

                  {/* Content Card */}
                  <Card className="flex-1 p-6 bg-portfolio-card border-portfolio-border hover:bg-portfolio-card-hover hover:border-portfolio-purple-start transition-all duration-300">
                    {/* Year Badge */}
                    <div className="flex items-center space-x-2 mb-4">
                      <Calendar className="h-4 w-4 text-portfolio-purple-start" />
                      <span className="text-portfolio-purple-start font-semibold">
                        {edu.year}
                      </span>
                      {edu.isOngoing && (
                        <span className="px-2 py-1 text-xs bg-portfolio-purple-start text-white rounded-full">
                          Current
                        </span>
                      )}
                    </div>

                    {/* Degree Title */}
                    <h3 className="text-2xl font-bold text-portfolio-foreground mb-2">
                      {edu.degree}
                    </h3>

                    {/* Field */}
                    <p className="text-lg font-semibold portfolio-gradient-text mb-2">
                      {edu.field}
                    </p>

                    {/* Institution */}
                    <p className="text-portfolio-muted font-medium mb-4">
                      {edu.institution}
                    </p>

                    {/* Description */}
                    <p className="text-portfolio-muted mb-6">
                      {edu.description}
                    </p>

                    {/* Subjects */}
                    <div className="flex flex-wrap gap-2">
                      {edu.subjects.map((subject, subIndex) => (
                        <span 
                          key={subIndex}
                          className="px-3 py-1 text-sm bg-portfolio-background-secondary text-portfolio-foreground rounded-full border border-portfolio-border"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;