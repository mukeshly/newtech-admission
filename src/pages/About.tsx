import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GraduationCap, Target, Users, Award, CheckCircle, ArrowRight, Heart, Shield, Star } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Student-Centric Approach",
      description: "Every decision we make prioritizes student success and satisfaction"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Trust & Transparency",
      description: "Complete transparency in our processes with guaranteed admission success"
    },
    {
      icon: <Star className="h-8 w-8 text-primary" />,
      title: "Excellence in Service",
      description: "Committed to providing the highest quality educational consultancy services"
    }
  ];

  const achievements = [
    { number: "500+", label: "Students Placed" },
    { number: "50+", label: "Partner Colleges" },
    { number: "100%", label: "Success Rate" },
    { number: "5+", label: "Years Experience" }
  ];

  const team = [
    {
      name: "Educational Counselors",
      description: "Expert counselors with deep knowledge of admission processes and career guidance"
    },
    {
      name: "Documentation Specialists", 
      description: "Professional team handling all paperwork and application processes efficiently"
    },
    {
      name: "College Relations Team",
      description: "Strong network with colleges and universities ensuring direct admission pathways"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About New Tech Admission Consultancy</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted partner in educational success since 2023, dedicated to guiding students towards their dream careers through expert consultation and guaranteed admission services.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="shadow-elegant">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <Target className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                To democratize quality education by providing accessible, reliable, and comprehensive admission consultancy services. We strive to bridge the gap between students' aspirations and educational opportunities, ensuring every student gets the chance to pursue their dream career regardless of their background.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="shadow-elegant">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <GraduationCap className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                To become Bihar's leading educational consultancy, recognized for our integrity, expertise, and commitment to student success. We envision a future where every student has access to quality education and can achieve their career goals through our guidance and support.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Company Story */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
          <div className="bg-muted/30 rounded-lg p-8 md:p-12">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <p className="text-lg leading-relaxed">
                New Tech Admission Consultancy was founded in 2023, with a simple yet powerful vision: to make quality education accessible to every student in Bihar. Starting from humble beginnings, we recognized the challenges students face in navigating the complex admission processes and securing seats in reputable institutions.
              </p>
              <p className="text-lg leading-relaxed">
                Over the years, we have built strong relationships with colleges and universities across Bihar and India, enabling us to provide direct admission pathways for our students. Our success is measured not just in numbers, but in the dreams we help fulfill and the careers we help launch.
              </p>
              <p className="text-lg leading-relaxed">
                Today, we stand as a trusted name in educational consultancy, with hundreds of successful placements and a 100% success rate in securing admissions for our students.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="shadow-elegant text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16 bg-primary text-primary-foreground rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-12">Our Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{achievement.number}</div>
                <div className="text-lg opacity-90">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Expert Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="shadow-elegant">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <Users className="h-6 w-6 text-primary" />
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {member.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Students Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Personalized career counseling and course selection guidance",
              "Direct tie-ups with 50+ colleges and universities",
              "100% admission guarantee with transparent fee structure",
              "Complete documentation and application support",
              "Post-admission support and ongoing student assistance",
              "Expert knowledge of admission processes and requirements",
              "Strong track record with 500+ successful placements",
              "Affordable services accessible to all economic backgrounds"
            ].map((reason, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-base">{reason}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="mb-16 bg-muted/30 rounded-lg p-8 md:p-12">
          <div className="text-center">
            <Award className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Recognition & Trust</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our commitment to excellence has earned us recognition from educational institutions and trust from hundreds of students and their families. We continue to set benchmarks in educational consultancy services across Bihar.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-primary rounded-lg p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Join Our Success Story</h2>
          <p className="text-xl mb-8 opacity-90">
            Become part of our growing family of successful students and achieve your educational dreams
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary">
                Get Free Consultation
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
      </div>
    </div>
  );
};

export default About;