import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Github, Linkedin, Mail, Sparkles, Heart, Zap, Users, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().trim().min(2, { message: "Name must be at least 2 characters." }).max(50, { message: "Name must be less than 50 characters." }),
  email: z.string().trim().email({ message: "Please enter a valid email address." }),
  message: z.string().trim().min(10, { message: "Message must be at least 10 characters." }).max(500, { message: "Message must be less than 500 characters." })
});

const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // For now, just show success message
      // Real email functionality would require backend integration
      console.log("Form submitted:", values);
      setIsSubmitted(true);
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive"
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-portfolio-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6 mb-16">
          <p className="text-portfolio-purple-start font-semibold uppercase tracking-wider">
            Let's Talk
          </p>
          <h2 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-pulse drop-shadow-2xl">
            CONTACT ME
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
                        href="https://github.com/thanniruvaishnavi" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-portfolio-foreground hover:text-portfolio-purple-start transition-colors duration-300"
                      >
                        <Github className="h-5 w-5" />
                        <span>GitHub</span>
                      </a>
                      <a 
                        href="https://www.linkedin.com/in/thanniru-vaishnavi-49828428b/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-portfolio-foreground hover:text-portfolio-purple-start transition-colors duration-300"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span>LinkedIn</span>
                      </a>
                      <a 
                        href="mailto:thanniruvaishnavi9849@gmail.com"
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

            <Card className="p-8 bg-portfolio-card border-portfolio-border hover:border-portfolio-purple-start/50 transition-all duration-300">
              {isSubmitted ? (
                <div className="text-center space-y-4 py-12">
                  <div className="w-16 h-16 rounded-full portfolio-button-gradient flex items-center justify-center mx-auto shadow-lg shadow-portfolio-purple-start/30">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-portfolio-foreground">Thank you!</h4>
                  <p className="text-portfolio-muted">Your message has been sent successfully. I'll get back to you soon!</p>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-portfolio-foreground">
                            Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your name"
                              className="bg-portfolio-background-secondary border-portfolio-border text-portfolio-foreground focus:border-portfolio-purple-start focus:ring-portfolio-purple-start/20"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-portfolio-foreground">
                            Email
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="your.email@example.com"
                              className="bg-portfolio-background-secondary border-portfolio-border text-portfolio-foreground focus:border-portfolio-purple-start focus:ring-portfolio-purple-start/20"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-portfolio-foreground">
                            Message
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell me about your project or just say hello!"
                              className="bg-portfolio-background-secondary border-portfolio-border text-portfolio-foreground min-h-[120px] focus:border-portfolio-purple-start focus:ring-portfolio-purple-start/20"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit"
                      disabled={form.formState.isSubmitting}
                      className="w-full portfolio-button-gradient border-0 text-white hover:text-white hover:opacity-90 transition-opacity duration-300"
                      size="lg"
                    >
                      {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              )}
            </Card>
            
            <div className="text-center text-sm text-portfolio-muted">
              <p>For actual email delivery, connect to Supabase backend integration.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;