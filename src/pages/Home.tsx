import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { GraduationCap, Users, Award, BookOpen, ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const Home = () => {
  const services = [
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: "Undergraduate Programs",
      description: "BCA, BBA, B.Tech, B.Ed, and more undergraduate courses",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Postgraduate Programs", 
      description: "MCA, MBA, PhD, and advanced degree programs",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Professional Courses",
      description: "Law, Diploma, D.Ed, and professional certifications",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "School Admissions",
      description: "10th and 12th grade admissions in top institutions",
    },
  ];

  const features = [
    "Expert counseling and guidance",
    "100% admission guarantee",
    "Affordable fee structure",
    "Direct college tie-ups",
    "Documentation support",
    "24/7 student support",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div>
              <p>Since 2023</p>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Your Gateway to
                <span className="text-accent"> Educational Success</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Get guaranteed admission in top colleges and universities across India. Expert guidance for all courses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/offerings">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                    View All Courses
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Right side - Image */}
            <div className="order-first lg:order-last">
              <img 
                src={heroImage} 
                alt="Educational success and college admissions" 
                className="w-full h-auto rounded-lg shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive admission services for all types of educational programs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose New Tech Admission Consultancy?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                With years of experience and strong industry connections, we ensure your admission success with personalized guidance and support.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/about">
                  <Button variant="default" size="lg">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-card rounded-lg p-8 shadow-elegant">
              <h3 className="text-2xl font-bold mb-6 text-center">Popular Courses</h3>
              <div className="space-y-4">
                {[
                  "Bachelor of Computer Applications (BCA)",
                  "Bachelor of Business Administration (BBA)", 
                  "Master of Computer Applications (MCA)",
                  "Master of Business Administration (MBA)",
                  "Bachelor of Technology (B.Tech)",
                  "Bachelor of Education (B.Ed)",
                  "Doctor of Philosophy (PhD)",
                  "LLB Law Programs"
                ].map((course, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-muted/50 rounded-md">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <span className="font-medium">{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Educational Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today for free consultation and take the first step towards your dream career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="https://wa.me/919153897202" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary">
                Contact Us Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/offerings">
              <Button size="lg" variant="outline" className="text-foreground">
                Browse Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;