import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, MessageCircleIcon } from "lucide-react";
import { Link } from "react-router-dom";
import bannerImage from "@/assets/contact-banner.jpg";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Our Office",
      details: ["Transport Nagar, Patna, Bihar, India", "Pin: 800023"]
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Call Us",
      details: ["+91-9153897202"]
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email Us",
      details: ["contact@newtechconsultancy.org"]
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Office Hours",
      details: ["Mon - Sat: 9:00 AM - 7:00 PM"]
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch With Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your educational journey? Contact us for free consultation and expert guidance on course selection and admission process.
          </p>
        </div>

         <div className="mt-20">
          <div className="bg-cover bg-center h-64 rounded-lg shadow-elegant mb-12" style={{ backgroundImage: `url(${bannerImage})` }}>
            <div className="flex items-center justify-center h-full bg-black/50">
              <h2 className="text-3xl font-bold text-white">Contact Us</h2>
            </div>
          </div>
          
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
                  <Card key={index} className="shadow-elegant">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-muted-foreground text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))} 
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "Do you guarantee admission?",
                answer: "Yes, we provide 100% admission guarantee. If we cannot secure your admission, we refund your fees."
              },
              {
                question: "What documents are required?",
                answer: "Required documents vary by course but typically include mark sheets, certificates, ID proof, and photographs."
              },
              {
                question: "How long does the admission process take?",
                answer: "The process usually takes 2-4 weeks depending on the course and college requirements."
              },
              {
                question: "Do you provide post-admission support?",
                answer: "Yes, we continue to support students even after admission with any college-related queries."
              }
            ].map((faq, index) => (
              <Card key={index} className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {faq.answer}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-muted/30 rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Our expert counselors are waiting to help you achieve your educational goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="https://wa.me/919153897202" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="default">
              <Phone className="mr-2 h-5 w-5" />
              Get Free Consultation
            </Button>
            </Link>
            <Link to="/offerings">
            <Button size="lg" variant="outline">
              <Mail className="mr-2 h-5 w-5" />
              Browse Courses
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;