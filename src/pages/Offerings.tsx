import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { GraduationCap, Clock, Users, Star, ArrowRight } from "lucide-react";

const Offerings = () => {
  const courseCategories = [
    {
      category: "Undergraduate Programs",
      icon: <GraduationCap className="h-6 w-6" />,
      courses: [
        {
          name: "Bachelor of Computer Applications (BCA)",
          duration: "3 Years",
          description: "Comprehensive computer science program covering programming, software development, and IT fundamentals.",
          features: ["Programming Languages", "Database Management", "Web Development", "Software Engineering"],
          popular: true
        },
        {
          name: "Bachelor of Business Administration (BBA)",
          duration: "3 Years", 
          description: "Business management program covering finance, marketing, operations, and strategic management.",
          features: ["Business Strategy", "Financial Management", "Marketing", "Operations Management"],
          popular: true
        },
        {
          name: "Bachelor of Technology (B.Tech)",
          duration: "4 Years",
          description: "Engineering degree in various specializations including CSE, ECE, Mechanical, and Civil.",
          features: ["Multiple Branches", "Industry Exposure", "Lab Work", "Project-Based Learning"],
          popular: false
        },
        {
          name: "Bachelor of Education (B.Ed)",
          duration: "2 Years",
          description: "Teaching certification program for aspiring educators and school teachers.",
          features: ["Teaching Methods", "Educational Psychology", "Curriculum Design", "Practical Training"],
          popular: false
        }
      ]
    },
    {
      category: "Postgraduate Programs",
      icon: <Star className="h-6 w-6" />,
      courses: [
        {
          name: "Master of Computer Applications (MCA)",
          duration: "2 Years",
          description: "Advanced computer science program with focus on software development and system design.",
          features: ["Advanced Programming", "System Analysis", "Project Management", "Research Methods"],
          popular: true
        },
        {
          name: "Master of Business Administration (MBA)",
          duration: "2 Years",
          description: "Advanced business management program with specializations in various domains.",
          features: ["Leadership Skills", "Strategic Planning", "Financial Analysis", "Global Business"],
          popular: true
        },
        {
          name: "Doctor of Philosophy (PhD)",
          duration: "3-5 Years",
          description: "Research-based doctoral program in various fields of study.",
          features: ["Original Research", "Academic Writing", "Conference Presentations", "Teaching Experience"],
          popular: false
        }
      ]
    },
    {
      category: "Professional & Diploma Courses",
      icon: <Users className="h-6 w-6" />,
      courses: [
        {
          name: "Law Programs (LLB)",
          duration: "3-5 Years",
          description: "Legal education program covering constitutional law, criminal law, and civil procedures.",
          features: ["Legal Research", "Court Procedures", "Constitutional Law", "Practical Training"],
          popular: false
        },
        {
          name: "Diploma in Education (D.Ed)",
          duration: "2 Years",
          description: "Diploma program for primary and elementary school teaching certification.",
          features: ["Child Psychology", "Teaching Methods", "Classroom Management", "Assessment Techniques"],
          popular: false
        },
        {
          name: "Various Diploma Programs",
          duration: "1-3 Years",
          description: "Technical and professional diploma courses in engineering, management, and vocational fields.",
          features: ["Industry-Relevant", "Practical Skills", "Quick Employment", "Certification"],
          popular: false
        }
      ]
    },
    {
      category: "School Education",
      icon: <Clock className="h-6 w-6" />,
      courses: [
        {
          name: "10th Grade Admission",
          duration: "1 Year",
          description: "Secondary school admission in CBSE, ICSE, and State Board affiliated schools.",
          features: ["Board Selection", "School Choice", "Documentation", "Fee Assistance"],
          popular: false
        },
        {
          name: "12th Grade Admission",
          duration: "2 Years",
          description: "Higher secondary admission with stream selection (Science, Commerce, Arts).",
          features: ["Stream Guidance", "College Preparation", "Career Counseling", "Board Exam Prep"],
          popular: false
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Course Offerings</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive admission services for all educational levels - from school to doctoral programs. 
            We help you secure admission in top institutions across Bihar and India.
          </p>
        </div>

        {/* Course Categories */}
        <div className="space-y-16">
          {courseCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  {category.icon}
                </div>
                <h2 className="text-3xl font-bold">{category.category}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.courses.map((course, courseIndex) => (
                  <Card key={courseIndex} className="shadow-elegant hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2 flex items-center gap-2">
                            {course.name}
                            {course.popular && (
                              <Badge variant="secondary" className="bg-accent text-accent-foreground">
                                Popular
                              </Badge>
                            )}
                          </CardTitle>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span>Duration: {course.duration}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="text-base">
                        {course.description}
                      </CardDescription>
                      
                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {course.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <Link to="https://wa.me/919153897202" target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="w-full">
                            Get Admission Info
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Admission Process */}
        <div className="mt-20 bg-muted/30 rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-8">Our Admission Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Consultation", description: "Free career counseling and course selection guidance" },
              { step: "2", title: "Documentation", description: "Complete assistance with application forms and documents" },
              { step: "3", title: "Application", description: "Submit applications to selected colleges and universities" },
              { step: "4", title: "Admission", description: "Secure your seat and complete the enrollment process" }
            ].map((process, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                  {process.step}
                </div>
                <h3 className="font-semibold text-lg">{process.title}</h3>
                <p className="text-sm text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-primary rounded-lg p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Admission?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get expert guidance and guarantee your seat in top institutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="https://wa.me/919153897202" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary">
                Contact Us Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="text-foreground">
                Learn About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offerings;