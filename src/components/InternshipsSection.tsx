import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const InternshipsSection = () => {
  const internships = [
    {
      id: 1,
      company: "Tech Solutions Inc.",
      role: "Software Development Intern",
      duration: "June 2023 - August 2023",
      description: "Developed responsive web applications using React and TypeScript. Collaborated with senior developers on client projects and improved application performance by 25%.",
      certificateUrl: "#"
    },
    {
      id: 2,
      company: "DataCorp Analytics",
      role: "Data Science Intern",
      duration: "January 2023 - May 2023",
      description: "Analyzed large datasets using Python and machine learning algorithms. Created data visualizations and reports that influenced key business decisions.",
      certificateUrl: "#"
    },
    {
      id: 3,
      company: "Cloud Systems Ltd.",
      role: "DevOps Intern",
      duration: "September 2022 - December 2022",
      description: "Assisted in cloud infrastructure management and CI/CD pipeline optimization. Gained hands-on experience with AWS services and Docker containerization.",
      certificateUrl: "#"
    },
    {
      id: 4,
      company: "Mobile Apps Studio",
      role: "Frontend Developer Intern",
      duration: "June 2022 - August 2022",
      description: "Built cross-platform mobile applications using React Native. Implemented responsive UI components and integrated RESTful APIs for seamless user experience.",
      certificateUrl: "#"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Internships
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Professional experiences and learning opportunities that shaped my career journey
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        {internships.map((internship) => (
          <Card 
            key={internship.id} 
            className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 aspect-square flex flex-col"
          >
            <CardHeader className="text-center pb-3 flex-shrink-0">
              <div className="text-3xl mb-2">💼</div>
              <CardTitle className="text-lg font-semibold leading-tight">
                {internship.company}
              </CardTitle>
            </CardHeader>
            
            <CardContent className="flex flex-col flex-grow justify-between pt-0">
              <div className="space-y-3 flex-grow">
                <div>
                  <h4 className="font-medium text-primary text-sm">
                    {internship.role}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {internship.duration}
                  </p>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">
                  {internship.description}
                </p>
              </div>
              
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-4 w-full group-hover:border-primary group-hover:text-primary transition-colors"
                onClick={() => window.open(internship.certificateUrl, '_blank')}
              >
                <ExternalLink className="w-3 h-3 mr-2" />
                View Certificate
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default InternshipsSection;