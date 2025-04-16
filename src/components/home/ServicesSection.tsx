
import React from "react";
import { Search, Mail, BarChart2, Share2, Globe, Code } from "lucide-react";
import ServiceCard from "../ui/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      icon: <Search size={24} />,
      title: "Search Engine Optimization",
      description: "Boost your website's visibility on search engines and drive organic traffic with our data-driven SEO strategies.",
      link: "/services/seo",
    },
    {
      icon: <Mail size={24} />,
      title: "Email Marketing",
      description: "Create engaging email campaigns that convert leads into customers with personalized content.",
      link: "/services/email-marketing",
    },
    {
      icon: <BarChart2 size={24} />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies tailored to your business goals and target audience.",
      link: "/services/digital-marketing",
    },
    {
      icon: <Share2 size={24} />,
      title: "Social Media Marketing",
      description: "Build brand awareness and engage with your audience across various social media platforms.",
      link: "/services/smm",
    },
    {
      icon: <Globe size={24} />,
      title: "Website Development",
      description: "Custom website development solutions that are responsive, fast, and user-friendly.",
      link: "/services/web-development",
    },
    {
      icon: <Code size={24} />,
      title: "Web Applications",
      description: "Powerful web applications that solve complex business problems and enhance productivity.",
      link: "/services/web-development",
    },
  ];

  return (
    <section className="section bg-growstats-light">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-2 mb-4 text-growstats-purple">Our Services</h2>
          <p className="subheading text-gray-700">
            We offer comprehensive digital solutions to help your business grow and succeed in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-growstats-red hover:bg-growstats-red/90 text-white font-medium">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
