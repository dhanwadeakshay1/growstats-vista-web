
import React from "react";
import { Search, Mail, BarChart2, Share2, Globe, Code } from "lucide-react";
import ServiceCard from "../ui/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const services = [
    {
      icon: <Search size={24} />,
      title: "Search Engine Optimization",
      description: "Boost your website's visibility on search engines and drive organic traffic with our data-driven SEO strategies.",
      link: "/services/seo",
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: <Mail size={24} />,
      title: "Email Marketing",
      description: "Create engaging email campaigns that convert leads into customers with personalized content.",
      link: "/services/email-marketing",
      color: "bg-purple-50 text-purple-600",
    },
    {
      icon: <BarChart2 size={24} />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies tailored to your business goals and target audience.",
      link: "/services/digital-marketing",
      color: "bg-green-50 text-green-600",
    },
    {
      icon: <Share2 size={24} />,
      title: "Social Media Marketing",
      description: "Build brand awareness and engage with your audience across various social media platforms.",
      link: "/services/smm",
      color: "bg-orange-50 text-orange-600",
    },
    {
      icon: <Globe size={24} />,
      title: "Website Development",
      description: "Custom website development solutions that are responsive, fast, and user-friendly.",
      link: "/services/web-development",
      color: "bg-rose-50 text-rose-600",
    },
    {
      icon: <Code size={24} />,
      title: "Web Applications",
      description: "Powerful web applications that solve complex business problems and enhance productivity.",
      link: "/services/web-applications",
      color: "bg-indigo-50 text-indigo-600",
    },
  ];

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="section relative bg-gradient-to-b from-growstats-light to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-growstats-red/5 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-growstats-blue/5 blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block px-4 py-1 mb-4 bg-growstats-red/10 rounded-full text-growstats-red text-sm font-medium">
            What We Offer
          </div>
          <h2 className="heading-2 mb-5 text-growstats-purple bg-clip-text text-transparent bg-gradient-to-r from-growstats-purple to-growstats-red">
            Our Services
          </h2>
          <p className="subheading text-gray-700">
            We offer comprehensive digital solutions to help your business grow and succeed in the digital landscape.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
                iconColor={service.color}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-center mt-16"
        >
          <Button 
            asChild 
            size="lg" 
            className="bg-growstats-red hover:bg-growstats-red/90 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <Link to="/services">View All Services</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
