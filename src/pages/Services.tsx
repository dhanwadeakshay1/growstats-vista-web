import React from "react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Mail, BarChart2, Share2, Globe, Code, Braces, Database, Smartphone, LineChart, Users, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ContactCTA from "@/components/home/ContactCTA";

interface ServiceItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  link: string;
}

const ServiceItem = ({
  icon,
  title,
  description,
  benefits,
  link,
}: ServiceItemProps) => (
  <Card className="card-shadow h-full bg-white">
    <CardHeader>
      <div className="h-14 w-14 rounded-lg bg-growstats-red/10 flex items-center justify-center text-growstats-red mb-4">
        {icon}
      </div>
      <CardTitle className="text-2xl font-display text-growstats-purple">{title}</CardTitle>
      <CardDescription className="text-base mt-2 text-gray-600">{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <h4 className="font-semibold mb-2 text-growstats-blue">Key Benefits:</h4>
      <ul className="space-y-1 mb-6">
        {benefits.map((benefit, i) => (
          <li key={i} className="flex items-start space-x-2">
            <div className="h-5 w-5 rounded-full bg-growstats-green/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-growstats-green" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-700">{benefit}</span>
          </li>
        ))}
      </ul>
      <Button asChild variant="outline" className="w-full border-growstats-blue text-growstats-blue hover:bg-growstats-blue/10">
        <Link to={link}>Learn More</Link>
      </Button>
    </CardContent>
  </Card>
);

const Services = () => {
  const services = [
    {
      icon: <BarChart2 size={28} />,
      title: "Digital Marketing",
      description:
        "Comprehensive digital marketing strategies to help your business reach its target audience and achieve measurable results.",
      benefits: [
        "Increased online visibility",
        "More qualified leads",
        "Higher conversion rates",
        "Enhanced brand recognition",
      ],
      link: "/services/digital-marketing",
    },
    {
      icon: <Mail size={28} />,
      title: "Email Marketing",
      description:
        "Targeted email campaigns designed to nurture leads, build customer relationships, and drive conversions.",
      benefits: [
        "Personalized messaging",
        "Automated email sequences",
        "Performance tracking",
        "Increased customer retention",
      ],
      link: "/services/email-marketing",
    },
    {
      icon: <Search size={28} />,
      title: "SEO Optimization",
      description:
        "Data-driven SEO strategies that improve your website's ranking on search engines and increase organic traffic.",
      benefits: [
        "Higher search engine rankings",
        "Increased organic traffic",
        "Technical SEO improvements",
        "Comprehensive keyword strategy",
      ],
      link: "/services/seo",
    },
    {
      icon: <Share2 size={28} />,
      title: "Social Media Marketing",
      description:
        "Engaging social media campaigns that build brand awareness, foster community, and drive customer engagement.",
      benefits: [
        "Increased brand awareness",
        "Higher engagement rates",
        "Community building",
        "Content marketing integration",
      ],
      link: "/services/smm",
    },
    {
      icon: <Globe size={28} />,
      title: "Website Development",
      description:
        "Custom website design and development services that create stunning, functional, and user-friendly websites.",
      benefits: [
        "Responsive design",
        "SEO-friendly architecture",
        "Fast loading times",
        "Intuitive user experience",
      ],
      link: "/services/web-development",
    },
    {
      icon: <Braces size={28} />,
      title: "Web Applications",
      description:
        "Custom web application development services that solve complex business problems and streamline processes.",
      benefits: [
        "Tailored to your needs",
        "Robust security measures",
        "Intuitive user interface",
        "Scalable infrastructure",
      ],
      link: "/services/web-development",
    },
    {
      icon: <LineChart size={28} />,
      title: "Analytics & Reporting",
      description:
        "Comprehensive analytics and reporting services that provide actionable insights for data-driven decision making.",
      benefits: [
        "Custom dashboards",
        "Regular performance reports",
        "Data-driven insights",
        "ROI measurement",
      ],
      link: "/services/digital-marketing",
    },
    {
      icon: <Headphones size={28} />,
      title: "Dedicated Support",
      description:
        "Ongoing support and maintenance services to ensure your digital assets continue to perform at their best.",
      benefits: [
        "24/7 technical support",
        "Regular performance audits",
        "Continuous optimization",
        "Training and resources",
      ],
      link: "/contact",
    },
  ];

  return (
    <Layout>
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive digital marketing and web development solutions tailored to your business needs"
        bgClass="bg-gradient-to-r from-growstats-red to-growstats-purple"
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-3 mb-4 text-growstats-purple">Tailored Solutions for Your Business Growth</h2>
            <p className="body-text text-gray-700">
              At GrowStats Media, we offer a comprehensive range of digital services designed to help your business thrive in the digital landscape. Whether you're looking to increase your online visibility, generate more leads, or create a stunning website, we have the expertise to help you achieve your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ServiceItem key={i} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-growstats-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-6 text-growstats-purple">Our Approach</h2>
              <p className="body-text mb-6 text-gray-700">
                We believe in a transparent, collaborative approach to every project. Our team works closely with you to understand your unique business needs and develop tailored strategies that deliver results.
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="h-8 w-8 rounded-full bg-growstats-red/10 flex items-center justify-center text-growstats-red">
                      1
                    </div>
                    <h3 className="font-semibold text-growstats-purple">Discovery & Analysis</h3>
                  </div>
                  <p className="pl-11 text-gray-600">Understanding your business objectives, target audience, and current digital presence.</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="h-8 w-8 rounded-full bg-growstats-red/10 flex items-center justify-center text-growstats-red">
                      2
                    </div>
                    <h3 className="font-semibold text-growstats-purple">Strategy Development</h3>
                  </div>
                  <p className="pl-11 text-gray-600">Creating a customized plan to achieve your specific goals and objectives.</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="h-8 w-8 rounded-full bg-growstats-red/10 flex items-center justify-center text-growstats-red">
                      3
                    </div>
                    <h3 className="font-semibold text-growstats-purple">Implementation</h3>
                  </div>
                  <p className="pl-11 text-gray-600">Executing the strategy with precision, creativity, and attention to detail.</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="h-8 w-8 rounded-full bg-growstats-red/10 flex items-center justify-center text-growstats-red">
                      4
                    </div>
                    <h3 className="font-semibold text-growstats-purple">Monitoring & Optimization</h3>
                  </div>
                  <p className="pl-11 text-gray-600">Continuously analyzing performance and making data-driven adjustments for optimal results.</p>
                </div>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Our Approach"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </Layout>
  );
};

export default Services;
